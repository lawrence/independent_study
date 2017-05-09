
function getVariables() {
}

mapboxgl.accessToken = 'pk.eyJ1IjoiMTJwYXJrbCIsImEiOiJjaXllemhvYmEwMHF3MzVrNTA5djg0NnJsIn0.5pHqYmljwlmbl9_w-KDGxg';

//var atok = document.getElementById("a_token").value; //getForm.a_token;
//console.log(atok);
//

var str,
element = document.getElementById("a_token");
if (element != null) {
    str = element.value;
    console.log(str);
}
else {
    console.log("NOT HERE");
}


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

map.on('load', function () {
  map.addLayer({
    'id': 'Shenzhen_MapID',
    'type': 'circle',
    'source': {
      type: 'vector',
      url: map_url
    },
    'source-layer': s_layer,
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
  map.setFilter('Shenzhen_MapID', ['==', 'time', "12:00:00"]);

  // Filter for every minute:
  document.getElementById('slider').addEventListener('input', function(e) {
    var val = parseFloat(e.target.value);
    var cHMS = seconds2HMS(val)

    map.setFilter('Shenzhen_MapID', ['==', 'time', cHMS]);
    document.getElementById('active-time').innerText = cHMS;
  });

  map.on('click', function(e) {
    var features = map.queryRenderedFeatures(e.point, { layers: ['Shenzhen_MapID'] });

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
    var features = map.queryRenderedFeatures(e.point, { layers: ['Shenzhen_MapID'] });
    map.getCanvas().style.cursor = (features.length) ? 'pointer' : '';
  });

});
