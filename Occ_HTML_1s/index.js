mapboxgl.accessToken = 'pk.eyJ1IjoiMTJwYXJrbCIsImEiOiJjaXllemhvYmEwMHF3MzVrNTA5djg0NnJsIn0.5pHqYmljwlmbl9_w-KDGxg';

var map = new mapboxgl.Map({
  container: 'map',
  style: 'mapbox://styles/mapbox/dark-v9',
  center: [114.0579, 22.5431],
  zoom: 13
});

var colorList = [
  [1, '#F8DE5F'],
  [2, '#FAD35B'],
  [3, '#FBC759'],
  [4, '#FBBC58'],
  [5, '#FAB158'],
  [6, '#F8A659'],
  [7, '#F59C5B'],
  [8, '#F0925D'],
  [9, '#EA8960'],
  [10, '#E48062']
];

function seconds2HMS(input_second) {
    var sec_num = parseInt(input_second, 10);
    var hours   = Math.floor(sec_num / 3600);
    var minutes = Math.floor((sec_num - (hours * 3600)) / 60);
    var seconds = sec_num - (hours * 3600) - (minutes * 60);

    if (hours   < 10) {hours   = "0"+hours;}
    if (minutes < 10) {minutes = "0"+minutes;}
    if (seconds < 10) {seconds = "0"+seconds;}
    return hours+':'+minutes+':'+seconds;
}

map.on('load', function () {
  map.addLayer({
    'id': 'Occ01_Shenzhen_102020132',
    'type': 'circle',
    'source': {
      type: 'vector',
      url: 'mapbox://12parkl.dqcphg2q'
    },
    'source-layer': 'Shenzhen_occ01_10202013-18o4sb',
    'paint': {
      'circle-color': {
        property: 'occ_count',
        type: 'interval',
        stops: colorList
      },

      "circle-radius": {
        "property": 'occ_count',
        "stops": [
          [1, 5],
          [2, 10],
          [3, 15],
          [4, 20],
          [5, 25],
          [6, 30],
          [7, 45],
          [8, 50],
          [9, 55],
          [10, 60],
        ]
      },
      'circle-opacity': 0.9
    }
  });

  // Starting filter for the graph:
  map.setFilter('Occ01_Shenzhen_10202013', ['==', 'time', "12:00:00"]);

  // Filter for every minute:
  document.getElementById('slider').addEventListener('input', function(e) {
    var val = parseFloat(e.target.value);
    var cHMS = seconds2HMS(val)

    map.setFilter('Occ01_Shenzhen_10202013', ['==', 'time', cHMS]);
    document.getElementById('active-time').innerText = cHMS;
  });

  map.on('click', function(e) {
    var features = map.queryRenderedFeatures(e.point, { layers: ['Occ01_Shenzhen_10202013'] });

    if (!features.length) {
      return;
    }

    var feature = features[0];
    var popup = new mapboxgl.Popup()
    .setLngLat(feature.geometry.coordinates)
    .setHTML('<div id="popup" class="popup" style="z-index: 10;"> <h1> Detail: </h1>' +
    '<ul class="list-group">' +
    '<li class="list-group-item"> Time: ' + feature.properties['time'] + " </li>" +
    '<li class="list-group-item"> Occurrence Count: ' + feature.properties['occ_count'] + " </li>" + '</ul> </div>')
    .addTo(map);
  });

  map.on('mousemove', function(e) {
    var features = map.queryRenderedFeatures(e.point, { layers: ['Occ01_Shenzhen_10202013'] });
    map.getCanvas().style.cursor = (features.length) ? 'pointer' : '';
  });

});
