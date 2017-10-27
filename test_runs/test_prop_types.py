import sys
import os
import logging
import optparse
import csv
import json
import geojson
import pprint
import string
import mapzen.whosonfirst.utils
import mapzen.whosonfirst.placetypes
import mapzen.whosonfirst.export
from urllib import urlopen

logging.basicConfig(level=logging.INFO)

if __name__ == '__main__':

    opt_parser = optparse.OptionParser()
    opt_parser.add_option('-i', '--input', dest='input', action='store', default=None, help='Where to read CSV import file from')
    opt_parser.add_option('-o', '--output', dest='output', action='store', default="/usr/local/mapzen/whosonfirst-data/data", help='Where to write WOF records to')
    options, args = opt_parser.parse_args()
    
    places = options.input
    fh = open(places, 'r')
    source = os.path.abspath(options.output)
    exporter = mapzen.whosonfirst.export.flatfile(source)
    reader = csv.DictReader(fh)

    jsonurl = urlopen('https://raw.githubusercontent.com/whosonfirst/whosonfirst-tests/master/property_types.json')
    text = json.loads(jsonurl.read())
        
    for row in reader:
        id = row['id']
        if id:
            feature = mapzen.whosonfirst.utils.load(source, id)
            if feature:
                props = feature['properties']
                for k,v in text.items():
                    if props.has_key(str(k)):
                        if not v == 'float':
                            if type(props[str(k)]) is float:
                                raise Exception (str(props['wof:id']))
                        if not v == 'str':
                            if type(props[str(k)]) is unicode:
                                raise Exception (str(props['wof:id']))
                        if not v == 'int':
                            if type(props[str(k)]) is int:
                                raise Exception (str(props['wof:id']))
                        if not v == 'list':
                            if type(props[str(k)]) is list:
                                raise Exception (str(props['wof:id']))
                        if not v == 'dict':
                            if type(props[str(k)]) is dict:
                                raise Exception (str(props['wof:id']))
                print str(props['wof:id']) + ' passes.'