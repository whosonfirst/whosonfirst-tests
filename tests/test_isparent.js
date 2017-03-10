// 85922583 includes 85688637 as region_id in wof:hierarchy
// curl -X GET 'https://whosonfirst.mapzen.com/api/rest/?method=whosonfirst.places.getInfo&access_token=f4524f4adde9f758a02da8e3d03293ee&id=85922583&extras=wof:hierarchy'

// https://whosonfirst.mapzen.com/api/rest/?method=whosonfirst.places.getInfo&access_token=f4524f4adde9f758a02da8e3d03293ee&id=85922583&extras=wof:hierarchy

// {"record":{"wof:id":85922583,"wof:parent_id":"102087579","wof:name":"San Francisco","wof:placetype":"locality","wof:country":"US","wof:repo":"whosonfirst-data","wof:hierarchy":[{"continent_id":102191575,"locality_id":85922583,"country_id":85633793,"region_id":85688637,"county_id":102087579}]},"stat":"ok"}% 

var successes = 0
var failures = 0
var get_record = require('../utils/get_record.js')
// pulling everything together
function isparent(recordid, parentlayer, parentid)
{
    var result = get_record.get_record_from_disk(recordid.toString())
    if (result.properties["wof:hierarchy"][0][parentlayer + '_id'] === parentid) {
    	console.log('Test passed.'.green)
    	successes ++
    }
    	else {console.log('Test failed.'.red)
    	failures ++
    }
}

module.exports.run = function()
{
	successes = 0
	failures = 0
	console.log('Test: parentid')
	isparent(85922583, 'region', 85688637)
	isparent(101749159, 'country', 85633121)
	isparent(404227491, 'country', 85633237)
	isparent(102088083, 'country', 85633805)
	isparent(102087931, 'country', 85633805)
	isparent(102088151, 'country', 85633805)
	isparent(102088033, 'country', 85633805)
	isparent(1108730627, 'country', 85633805)
	isparent(102087951, 'country', 85633805)
	isparent(102087923, 'country', 85633805)
	isparent(102088023, 'country', 85633805)
	isparent(1108730699, 'country', 85633805)
	isparent(102087997, 'country', 85633805)
	isparent(1108730625, 'country', 85633805)
	isparent(102087917, 'country', 85633805)
	isparent(102087919, 'country', 85633805)
	isparent(102088113, 'country', 85633805)
	isparent(102087995, 'country', 85633805)
	isparent(1108730697, 'country', 85633805)
	isparent(102088079, 'country', 85633805)
	isparent(102088029, 'country', 85633805)
	isparent(102088121, 'country', 85633805)
	isparent(102088075, 'country', 85633805)
	isparent(1108730629, 'country', 85633805)
	isparent(102087967, 'country', 85633805)
	isparent(102087913, 'country', 85633805)
	isparent(102087985, 'country', 85633805)
	isparent(102087941, 'country', 85633805)
	isparent(102088165, 'country', 85633805)
	isparent(102088047, 'country', 85633805)
	isparent(102087949, 'country', 85633805)
	isparent(102087929, 'country', 85633805)
	isparent(1108730693, 'country', 85633805)
	isparent(102088003, 'country', 85633805)
	isparent(1108730695, 'country', 85633805)
	console.log('Successes:'.green, successes, 'Failures:'.red, failures)
}