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
csvwriter = csv.writer(open(args.file+"_reduce.csv",'w'),delimiter=",")

with open(args.file,'rb') as csvfile:
    csvreader = csv.reader(csvfile,delimiter=",")

    # Actual code:
    for row in csvreader:
        newline = row[1].replace("2013-10-20 ","")
        csvwriter.writerow([row[0],newline,row[2],row[3]])
