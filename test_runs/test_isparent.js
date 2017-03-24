var successes = 0
var failures = 0
var get_record = require('../utils/get_record.js')
var test_isparent = require('../test_files/test_isparent.js')

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
	test_isparent
}