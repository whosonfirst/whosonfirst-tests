import sys
import os
import logging
import optparse
import csv

import pprint

import mapzen.whosonfirst.utils
import mapzen.whosonfirst.placetypes
import mapzen.whosonfirst.export

crawl = mapzen.whosonfirst.utils.crawl("/usr/local/mapzen/whosonfirst-data/data", inflate=True)
writer = None

all_props = []

for feature in crawl:
    props = feature["properties"]
    for v in props:
        if not v in all_props:
            all_props.append(v)
            with open('/Users/stephenepps/Desktop/all_props.csv', 'ab') as csvfile:
                writer=csv.writer(csvfile, delimiter='\t', lineterminator='\n')
                writer.writerow([v])