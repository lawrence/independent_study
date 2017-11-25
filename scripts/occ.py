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
        list_ent = row[0]+','+row[1]+','+row[2]
        if "__" in list_ent:
            continue
        print list_ent

        mylist.append(list_ent)

    cc = Counter(mylist)
    for key, value in cc.items():
       csvwriter.writerow([key, value])
