# independent_study
Just some code samples I used during my independent study at Rutgers University.

# original_1NF.py
This is a quick script I used to put a csv file in 1NF for better usability, albeit it made the csv bigger.

For example the way this works is that if you csv rows were something like this:
    - row: id,[date,lat,long],[date1,lat1,long1],etc...

The script would break the rows into a new csv file in the same dir as this:
    - row: id,[date,lat,long]
    - row1: id,[date1,lat1,long1]
    - row_etc...

This py script right now only takes this specific example (well at least the number of columns). In the future, I'll make the script to be more universal.
