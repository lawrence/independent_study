# Removing strings from rows to make CSVs smaller.

# Argparse:
import argparse
parser = argparse.ArgumentParser(description='CSV Reducer')
parser.add_argument('file', metavar='--f', help='file path.')

args = parser.parse_args()

#
import csv
csvwriter = csv.writer(open(args.file+"_reduce.csv",'w'),delimiter=",")

with open(args.file,'rb') as csvfile:
    csvreader = csv.reader(csvfile,delimiter=",")
    
    # Actual code:
    for row in csvreader:
        
        # Replacing second column (row[1]) with empty string ("") of each row to save space in CSV
        newline = row[1].replace("2013-10-20 ", "")
        
        # Writing new row into new file.
        csvwriter.writerow([row[0],newline,row[2],row[3]])
