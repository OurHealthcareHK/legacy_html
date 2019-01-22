---
layout: page
title: 健康資訊搜尋器
desc: 為你搜尋醫管局、衛生署、各大醫院及醫學院提供的資料。不定時更新。
level: 第一級
img: pic01.jpg
tags: [健康資訊]
---

<script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/corejs-typeahead/1.2.1/typeahead.bundle.js"></script>
<div class="page-header">
  <h1 class="page-title">
    健康資訊搜尋器
  </h1>
  <div class="page-subtitle">本資料庫現存有 {{ site.data.INFOSHEETCOUNT }} 份資料。</div>
  <div class="page-options d-flex">
    <div class="input-icon ml-2">
      <span class="input-icon-addon">
        <i class="fe fe-search"></i>
      </span>
      <input class="typeahead search form-control w-10" placeholder="搜尋資料...">
    </div>
  </div>
</div>

<div class="result_count"></div>
<div class="row row-cards result_link">
</div>

<script>
    function base64toImg(base64){
        return "<img src=>";
    }
    function updateChart(response) {
	if (!response.rows){
     	 $('div.result_count').empty();
         $('div.result_count').text("We have found no results.");
	  return;
	}
      console.log(response.rows);
      $('div.result_link').empty();
      $('div.result_count').empty();
      $('div.result_count').text("We have found " + response.rows.length + " results.");
      for (var i=0; i<response.rows.length; i++){
        $('div.result_link').append(	
	  '<div class="col-sm-6 col-lg-4">'+
	  '  <div class="card p-3">'+
	  '    <a href="'+response.rows[i][0]+'" class="mb-3">'+
	  '	<img src="data:image/png;base64,'+response.rows[i][1].replace(/["']/g, '')+'" alt="'+response.rows[i][2]+'" class="rounded">'+
	  '    </a>'+
	  '    <div class="d-flex align-items-center px-2">'+
	  '     <div class="avatar avatar-md mr-3" style="background-image: url(demo/faces/male/41.jpg)"></div>'+
	  '	<div>'+
	  '	  <div>'+response.rows[i][2]+'</div>'+
	  '	  <small class="d-block text-muted">'+response.rows[i][0]+'</small>'+
	  '	</div>'+
	  '    </div>'+
	  '  </div>'+
	  '</div>'                          
        );
      }
    }
$(document).ready(function() { //wait for document ready
  var timer;
  var delay = 600; // 0.6 seconds delay after last input

  $('.search').bind('input', function() {
    window.clearTimeout(timer);
    timer = window.setTimeout(function(){
      var query = $('.search').val();
      $.ajax({
        url: "https://script.google.com/macros/s/AKfycbzr0R-IGH3xbXPcIs81BF1q_oe_6SQ34t7F1GpZxsXMykTlXA/exec?q=" + query,

        // The name of the callback parameter, as specified by the YQL service
        jsonpCallback: 'callback',

        // Tell jQuery we're expecting JSONP
        dataType: "jsonp",

        // Work with the response
        success: updateChart
      });
      $('div.result_count').text("Loading...");
    }, delay);
  })
}); // END READY 

var nameArray = [].concat({{ site.data.INFOSHEETNAMES | jsonify }});
var names = new Bloodhound({
  datumTokenizer: Bloodhound.tokenizers.whitespace,
  queryTokenizer: Bloodhound.tokenizers.whitespace,
  local: nameArray
});

$('#bloodhound .typeahead').typeahead({
  hint: true,
  highlight: true,
  minLength: 1
},
{
  name: 'names',
  source: names
});
</script>
