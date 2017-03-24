var get_record = require('../utils/get_record.js')
var test_belongsto = require('../test_files/test_belongsto.js')
var colors = require('colors');
var successes = 0
var failures = 0
// pulling everything together
function condition(recordid, belongsto_ids)
{
    var result = get_record.get_record_from_disk(recordid.toString())
    function belongsto(id)
    {
    return result.properties["wof:belongsto"].indexOf(id) !== -1
    }
    if (belongsto_ids.every(belongsto)) {
    	console.log('Test passed.'.green)
    	successes ++  
    }
    	else {console.log('Test failed.'.red)
    	failures ++
    }
}

module.exports.run = function()
{
	test_belongsto
}