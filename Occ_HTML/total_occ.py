import datetime
from collections import Counter

# Argparse:
import argparse
parser = argparse.ArgumentParser(description='CSV Normalizer.')
parser.add_argument('file', metavar='--f', help='file path.')

args = parser.parse_args()

# Importing the file:
import csv
csvwriter = csv.writer(open(args.file+"_occ.csv",'w'),delimiter=",")

with open(args.file,'rb') as csvfile:
    csvreader = csv.reader(csvfile,delimiter=",")
    next(csvreader, None)
    
    mylist = []

    # Actual code:
    for row in csvreader:

        if row.length > 1:
        # Stringify the whole row to count the occ:
            for row[i] in row.length:
                list_ent += row[i]

        # Use append! Append is O(1) while insert is O(n)...
		mylist.append(list_ent)
        
    # Using the counter object and writing into a new csv:    
    cc = Counter(mylist)
    for key, value in cc.items():
       csvwriter.writerow([key, value])