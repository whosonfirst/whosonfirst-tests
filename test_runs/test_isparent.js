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

var test_isparent = require('../test_files/isparent.js')

module.exports.run = function()
{
	test_isparent(isparent)
}
