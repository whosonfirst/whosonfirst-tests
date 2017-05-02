var parse = require('csv-parse/lib/sync');
var fs = require('fs');
var colors = require('colors');

// request from local file
var func = module.exports.get_metadata_from_disk = function local_file_request(layer)

{
    var file = '/usr/local/mapzen/whosonfirst-data/meta/wof-' + layer + '-latest.csv'

    var filecontents = fs.readFileSync(file)

	var options = { auto_parse: true, columns: true }
	
	// parse the csv file
	var records = parse(filecontents.toString(), options)

    return records
}