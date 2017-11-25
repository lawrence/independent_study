# Changing delims.

# Argparse:
import argparse
parser = argparse.ArgumentParser(description='CSV Delim Changer.')
parser.add_argument('file', metavar='--f', help='file path.')

args = parser.parse_args()

#
import csv
csvwriter = csv.writer(open(args.file+"_changeDelim.csv",'w'),delimiter=",")

with open(args.file,'rb') as csvfile:
    
    # No delims in reader so that py will read each whole row as a string
    csvreader = csv.reader(csvfile,delimiter=",")
    
    # Actual code:
    for row in csvreader:
        
        # Replacing underscore...
        new = row[0].split('_')
        new.append(row[1])
        # Writes into new file with delim replaces from "_" since delim is "," for _replace.csv
        csvwriter.writerow(new)
