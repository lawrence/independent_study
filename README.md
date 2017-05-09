# independent_study
Just some code samples I used during my independent study at Rutgers University.

## mapbR
Under construction at the moment.

This is a tool to quickly input some given parameters from MapBox and then print out the map in HTML very quickly. This is the 'generalization' of ease tool for the Occ_HTML tool series.

## Occ_HTML series
- Occ_HTML_1s: Occurrences of all cellphone tower traffic given in one second.
- Occ_HTML_30s: Occurrences of all cellphone tower traffic given in 30 second intervals (48 intervals on the time slider).

To use these tools with your own dataset, look in the index.js file and edit the following:

```javascript
mapboxgl.accessToken = EDIT_ME_HERE;
```

```javascript
map.on('load', function () {
    ...
      url: 'mapbox://EDIT_ME_HERE'
    },
    'source-layer': 'EDIT_ME_HERE',
    'paint': {
```

## Various Scripts
These were the assorted small scripts I used during my independent study.
- original_1NF: Went through a csv and normalized it in first normal form.
- total_occ.py: Made each row into a string (cut the user_id to generalize the data) and count the occurrence by the time and location.
- reduce.py: Went through the rows to delete some extra characters.
