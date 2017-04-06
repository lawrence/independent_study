mapboxgl.accessToken = 'pk.eyJ1IjoiMTJwYXJrbCIsImEiOiJjaXllemhvYmEwMHF3MzVrNTA5djg0NnJsIn0.5pHqYmljwlmbl9_w-KDGxg';

var map = new mapboxgl.Map({
  container: 'map',
  style: 'mapbox://styles/mapbox/outdoors-v9',
  center: [114.0579, 22.5431],
  zoom: 13
});

var colorList = [
  [10, '#F8DE5F'],
  [50, '#FAD35B'],
  [100, '#FBC759'],
  [500, '#FBBC58'],
  [1000, '#FAB158'],
  [2000, '#F8A659'],
  [3000, '#F59C5B'],
  [4000, '#F0925D'],
  [5000, '#EA8960'],
  [6000, '#E48062']
];

map.on('load', function () {
  map.addLayer({
    'id': 'Occ30_Shenzhen_10202013',
    'type': 'circle',
    'source': {
      type: 'vector',
      url: 'mapbox://12parkl.2zi3ttrl'
    },
    'source-layer': 'Shenzhen_occ30_10202013-2bf61a',
    'paint': {
      'circle-color': {
        property: 'occ_count',
        type: 'interval',
        stops: colorList
      },

      "circle-radius": {
        "property": 'occ_count',
        "stops": [
          [0, 3],
          [5, 15],
          [10, 20],
          [6000, 100],
        ]
      },
      'circle-opacity': 0.9
    }
  });

  // Starting filter for the graph:
  map.setFilter('Occ30_Shenzhen_10202013', ['==', 'time', "12:00"]);

  // Filter for every 30 minutes:
  document.getElementById('slider').addEventListener('input', function(e) {
    var val = parseFloat(e.target.value);
    if (val % 1 != 0){
      val = parseInt(val);
      if (val < 10){
        half_hour = "0"+val+":30";
      }
      else {
        half_hour = val+":30";
      }
    }

    else {
      if (val < 10){
        half_hour = "0"+val+":00";
      }
      else {
        half_hour = val+":00";
      }
    }
    map.setFilter('Occ30_Shenzhen_10202013', ['==', 'time', half_hour]);
    document.getElementById('active-hour').innerText = half_hour;
  });

  map.on('click', function(e) {
    var features = map.queryRenderedFeatures(e.point, { layers: ['Occ30_Shenzhen_10202013'] });

    if (!features.length) {
      return;
    }

    var feature = features[0];
    var popup = new mapboxgl.Popup()
    .setLngLat(feature.geometry.coordinates)
    .setHTML('<div id="popup" class="popup" style="z-index: 10;"> <h1> Detail: </h1>' +
    '<ul class="list-group">' +
    '<li class="list-group-item"> Date: ' + feature.properties['date'] + " </li>" +
    '<li class="list-group-item"> Time: ' + feature.properties['time'] + " </li>" +
    '<li class="list-group-item"> Occurrence Count: ' + feature.properties['occ_count'] + " </li>" + '</ul> </div>')
    .addTo(map);
  });

  map.on('mousemove', function(e) {
    var features = map.queryRenderedFeatures(e.point, { layers: ['Occ30_Shenzhen_10202013'] });
    map.getCanvas().style.cursor = (features.length) ? 'pointer' : '';
  });



});
