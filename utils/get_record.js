var fs = require('fs')
var colors = require('colors');
// request from API
module.exports.get_record_from_api = function api_request(recordid)
{
    var baseurl = 'https://whosonfirst.mapzen.com/api/rest/'
    var method = 'method=whosonfirst.places.getInfo'
    var token = 'access_token=6f3c39b6f3c210f381aa6c54694c211d'
    var record = 'id='+ recordid
    var extras = 'extras=wof:hierarchy'
    
    var url = baseurl + '?' + method + '&' + token + '&' + record + '&' + extras
    console.log(url)
    
    var child_process = require('child_process');
    var output = child_process.execSync('curl -X GET "' + url + '"');
    //console.log (output.toString())
    
    return JSON.parse(output.toString()).record
}

// request from local file
module.exports.get_record_from_disk = function local_file_request(recordid)
{
    var file = '/usr/local/mapzen/whosonfirst-data/data/'
    var record = ''
    if (recordid.length >= 9)
    {
    	record = recordid.substr(0,3) + '/' + recordid.substr(3,3) + '/' + recordid.substr(6,3) + '/' + recordid.substr(9) + '/' + recordid + '.geojson'
    }
    else
    {
    	record = recordid.substr(0,3) + '/' + recordid.substr(3,3) + '/' + recordid.substr(6) + '/' + recordid + '.geojson'
    }
    // console.log(record.length)
    var output = fs.readFileSync(file+record)
    // console.log(record)
    // console.log(output.toString())
    return JSON.parse(output.toString())
}