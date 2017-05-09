# independent_study
Just some code samples I used during my independent study at Rutgers University.

## mapbR
Under construction at the moment.

This is a tool to quickly input some given parameters from MapBox and then print out the map in HTML very quickly.

This code relies on two very important parts:
- time filter function: filters out the data from MapBox. Since we are just dumping out all the plotted points into a dataset on Mapbox, we are going

## Occ_HTML series
- Occ_HTML_1s: Occurrences of all cellphone tower traffic given in one second.
- Occ_HTML_30s: Occurrences of all cellphone tower traffic given in 30 second intervals (48 intervals on the time slider).

## Various Scripts
These were the assorted small scripts I used during my independent study.
- original_1NF: Went through a csv and normalized it in first normal form. The
- total_occ.py: Made each row into a string (cut the user_id to generalize the data) and count the occurrence by the time and location.
- reduce.py: Went through the rows to delete some extra characters.
