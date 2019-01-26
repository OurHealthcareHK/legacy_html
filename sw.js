---
---

const version = '{{site.time | date: '%Y%m%d%H%M%S'}}';
const prefix = "ourhealthcarehk::";
const staticCacheName = prefix+version;

const filesToCache = [
  "/",
  {% for page in site.html_pages %}
    '{{ page.url }}',
  {% endfor %}
  {% for post in site.posts %}
    '{{ post.url }}',
  {% endfor %}
  {% for file in site.static_files %}
    '{{ file.path }}',
  {% endfor %}
];


self.addEventListener("install", function(e){
  self.skipWaiting();
  e.waitUntil(
    caches.open(staticCacheName).then(function(cache){
      console.log("Installing new worker "+staticCacheName);
      return cache.addAll(filesToCache);
    })
  )
});

var notif_db;

self.addEventListener("activate", function(e){
  console.log("Activating worker "+staticCacheName);
  e.waitUntil(
    caches.keys().then(function(cacheNames){
      return Promise.all(
        cacheNames.filter(function(cacheName){
          return cacheName.startsWith(prefix)
            && cacheName != staticCacheName;
        }).map(function(cacheName){
          console.log("Deleting cache "+cacheName);
          return caches.delete(cacheName);
        })
      )
    })
  );
  var request = self.indexedDB.open('NOTIF_DB', 1);
  request.onsuccess = function(event) {
      console.log('[onsuccess]', request.result);
      notif_db = event.target.result; // === request.result
  };
  request.onerror = function(event) {
      console.log('[onerror]', request.error);
  };
  request.onupgradeneeded = function(event) {
    var notif_db = event.target.result;
    var store = notif_db.createObjectStore('ONESIGNAL', {keyPath: 'id'});
    store.createIndex('notif_id_unqiue', 'id', {unique: true});
  };
});

var offline = false;

function toggleOfflineBar(offline){  
  clients.matchAll().then(function (clients) {
      clients.forEach(function (client) {
          client.postMessage({
              type: 'OFFLINE',
              offline: offline
          });
      });
  });
}

function onlineFirst(e, cacheResponse){  
      return caches.open(staticCacheName).then(function(cache) {
        return fetch(e.request).then(function(response){
          cache.put(e.request.url, response.clone());
          if (offline){
            offline = false;
            toggleOfflineBar(offline);
          }
          return response;
        }).catch(function(error) {
          // assume offline
          if (!offline){            
            offline = true;
            toggleOfflineBar(offline);
          }
          if (cacheResponse){
            return cacheResponse;
          }
        });
      });
}

function cacheFirst(e, cacheResponse){  
  if (cacheResponse)
    return cacheResponse;
  else
    return caches.open(staticCacheName).then(function(cache) {
      return fetch(e.request).then(function(response){
        cache.put(e.request.url, response.clone());
        return response;
      });
    });
}

self.addEventListener("fetch", function(e){
  e.respondWith(
    caches.match(e.request).then(function(cacheResponse) {
      console.log("fetching "+e.request);
      if (filesToCache.indexOf(e.request.url) > -1)
        return cacheFirst(e, cacheResponse);
      else
        return onlineFirst(e, cacheResponse);
     })
   )
});

self.addEventListener('push', function(pushEvent) {
  console.log(pushEvent.data.json());
  // create transaction from database
  var transaction = notif_db.transaction('ONESIGNAL', 'readwrite');
  transaction.onsuccess = function(event) {
      console.log('[Transaction] READY!');
  };
  // get store from transaction
  // returns IDBObjectStore instance
  var notifStore = transaction.objectStore('ONESIGNAL');
  // put notif data in productsStore
  var db_op_req = notifStore.add(pushEvent.data); // IDBRequest
});
