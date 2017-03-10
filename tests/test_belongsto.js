var get_record = require('../utils/get_record.js')
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
	successes = 0
	failures = 0
	console.log('Test: belongsto')
	condition(1108730699, [102191581, 85633287, 85688877])
	console.log('Successes:'.green, successes, 'Failures:'.red, failures)
}