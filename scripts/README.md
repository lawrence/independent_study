# Various Scripts
These were the assorted small scripts I used during my independent study.
- original_1NF: Went through a csv and normalized it in first normal form. The
- total_occ.py: Made each row into a string (cut the user_id to generalize the data) and count the occurrence by the time and location.
- reduce.py: Went through the rows to delete some extra characters.

## original_1NF.py
### I/O:
#### Input:
 - In the terminal: `python original_1NF.py your_file_name.csv`
 - Takes a CSV file formatted where one id lists all of its contents on one line, instead of separate lines (not in first normal form)

#### Output:
 - In the same directory, places a csv file with each ids contents all separated out into different rows.

### Summary:
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

## ~~total_occ.py~~ occ.py
### I/O:
#### Input:
 - Do not use total_occ.py please.
 - In the terminal: `python total_occ.py your_file_name.csv`
 - Takes a CSV file and stringify all the rows, place inserts it into a python list, and uses the Python count object to count all the occurrences for each string and places it into a csv.

#### Output:
 - In the same directory, places a csv file with all the occurrences counted up.

# Other Scripts.
All other scripts were janky quick scripts I left in that I later found. Use them if needed! 
