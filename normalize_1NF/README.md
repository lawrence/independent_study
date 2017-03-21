# original_1NF.py
This is a quick script I used to put a csv file in 1NF for better usability, albeit the csv of course became bigger...

For example the way this works is that if you csv rows were something like this:

    - row: id,[date,lat,long],[date_1,lat_1,long_1],[date_2,lat_2,long_2], ... ,[date_n,lat_n,long_n]

The script would break the rows into a new csv file (csv-filename_1NF.csv) in the same dir as this:

    - row: id,[date,lat,long]
    - row_1: id,[date1,lat1,long1]
    - row_2: id,[date_2,lat_2,long_2]
    - ...
    - row_n: id, [date_n,lat_n,long_n]
    
    and then goes to the next row, until the end of the csv

This py script right now only takes this specific example (well at least the number of repeated columns as seen in the array on every row). In the future, I'll make the script to be more universal!
