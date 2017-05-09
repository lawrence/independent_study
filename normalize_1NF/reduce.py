
# Argparse:
import argparse
parser = argparse.ArgumentParser(description='CSV Normalizer.')
parser.add_argument('file', metavar='--f', help='file path.')

args = parser.parse_args()

#
import csv
csvwriter = csv.writer(open(args.file+"_reduce.csv",'w'),delimiter=",")

with open(args.file,'rb') as csvfile:
    csvreader = csv.reader(csvfile,delimiter=",")

    # Actual code:
    for row in csvreader:
        # Replacing second column of each row
        newline = row[1].replace("2013-10-20 ","")
        csvwriter.writerow([row[0],newline,row[2],row[3]])
