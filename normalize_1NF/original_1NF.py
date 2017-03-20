# Normalize large csv file into seperate rows (1NF)
# Our example will be taking any rows with anything larger than three will keep splitting.

# four max columns: id, time, lat, lon

# Argparse:
import argparse
parser = argparse.ArgumentParser(description='CSV Normalizer.')
parser.add_argument('file', metavar='--f', help='file path.')

args = parser.parse_args()

# Importing the file:
import csv
csvwriter = csv.writer(open(args.file+"_1NF.csv",'w'),delimiter=",")

with open(args.file,'rb') as csvfile:
    csvreader = csv.reader(csvfile,delimiter=",")

    # Actual code:
    for row in csvreader:
        countdown = len(row)
        placeholder = 4
        
        if len(row) > 4: 
            while countdown > 3: 
                csvwriter.writerow([row[0],row[placeholder-3],row[placeholder-2],row[placeholder-1]])
                
                placeholder+=3
                countdown-=3 
        else:
            csvwriter.writerow(row)
