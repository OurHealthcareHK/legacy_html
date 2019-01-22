require.config({
    shim: {
        'leaflet-mapbox-gl': ['leaflet', 'mapbox-gl']
    },
    paths: {
        'leaflet': '//unpkg.com/leaflet@1.3.4/dist/leaflet',
        'leaflet-mapbox-gl': '//cdn.klokantech.com/mapbox-gl-leaflet/latest/leaflet-mapbox-gl',
        'mapbox-gl': '//cdn.klokantech.com/mapbox-gl-js/v0.43.0/mapbox-gl'
    }
});
