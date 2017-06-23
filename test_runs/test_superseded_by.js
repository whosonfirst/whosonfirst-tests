var successes = 0
var failures = 0
var get_record = require('../utils/get_record.js')
var get_metadata = require('../utils/get_metadata.js')
//var updated_ids = [85632727]

function test_superseded_by(records){

	// loop through each id in the metadata results
	records.forEach(function(old_id){
		var old_record = get_record.get_record_from_disk(old_id.toString())
		//console.log(old_id, old_record)
		// per record, check that the language values exist for all specified languages that we define
		if (old_record.properties.hasOwnProperty('wof:superseded_by') && old_record.properties['wof:superseded_by'].length > 0)  {
		
			old_record.properties['wof:superseded_by'].forEach(function(new_id){
			
				var new_record = get_record.get_record_from_disk(new_id.toString())
			
				if (new_record && new_record.properties['wof:supersedes'].indexOf(old_id) > -1){
			
					console.log('Test passed.'.green + ' - ' + old_id + ' was superseded by ' + new_id)
					successes ++
				}
				else {console.log('Test failed'.red + ' - ' + new_id + ' ('
					+ new_record.properties['wof:name'] + ')' + ' has an incorrect "wof:supersedes" value!')
					failures ++
				}
			})
		}

		else {console.log('Test failed'.red + ' - ' + old_id + ' (' 
			+ old_record.properties['wof:name'] + ')' + ' does not have a value in the "wof:superseded_by" field. '
		)
			failures ++
		}
	})
}

var test_superseded_records = require('../test_files/test_superseded_records.js')

module.exports.run = function()
{
	test_superseded_by(test_superseded_records)
}