mapboxgl.accessToken = 'pk.eyJ1IjoiMTJwYXJrbCIsImEiOiJjaXllemhvYmEwMHF3MzVrNTA5djg0NnJsIn0.5pHqYmljwlmbl9_w-KDGxg';

var map = new mapboxgl.Map({
  container: 'map',
  style: 'mapbox://styles/mapbox/dark-v9',
  center: [114.0579, 22.5431],
  zoom: 11
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
    'id': 'pedestrian_volume',
    'type': 'circle',
    'source': {
      type: 'vector',
      url: 'mapbox://12parkl.0gz7kxx2'
    },
    'source-layer': 'occ-5jtbpq',
    'paint': {
      //Add data-driven styles for circle-color
      'circle-color': {
        property: 'occ',
        type: 'interval',
        stops: colorList
      },

      "circle-radius": {
        "property": 'occ',
        "stops": [
          [0, 3],
          [5, 15],
          [10, 20],
          [6000, 100],
        ]
      },
      'circle-opacity': 0.8
    }
  });

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
    map.setFilter('time', ['==', 'time', half_hour]);
    document.getElementById('active-hour').innerText = half_hour;
  });

});
