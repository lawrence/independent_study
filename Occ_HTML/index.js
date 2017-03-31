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
    //Load the vector tile source from our Mapbox Pedestrian traffic example
    'source': {
      type: 'vector',
      url: 'mapbox://12parkl.1mrihg70' //Your Mapbox tileset Map ID
    },
    'source-layer': 'UserTrip_1NF_occ-db511b', //name of tileset
    'paint': {
      //Add data-driven styles for circle-color
      'circle-color': {
        property: 'occ',
        type: 'interval',
        stops: colorList
      },

      //Add data-driven styles for circle radius
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

filter: ['==', 'time', "13-10-20 21:00:00"]

/*
  document.getElementById('slider').addEventListener('input', function(e) {
    // get the current hour as an integer
    var hour = parseInt(e.target.value);
    // map.setFilter(layer-name, filter)
    map.setFilter('collisions', ['==', 'time', hour]);

    // converting 0-23 hour to AMPM format
    var ampm = hour >= 12 ? 'PM' : 'AM';
    var hour12 = hour % 12 ? hour % 12 : 12;
    // update text in the UI
    document.getElementById('active-hour').innerText = hour12 + ampm;
  });
*/

});
