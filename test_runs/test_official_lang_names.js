var successes = 0
var failures = 0
var get_record = require('../utils/get_record.js')
var get_metadata = require('../utils/get_metadata.js')

function test_lang_names(layer){

	// call the get_metadata w country
	var country_records = get_metadata.get_metadata_from_disk(layer) //this gives us an array...

	// loop through each id in the metadata results
	country_records.forEach(function(country_record){
		var result = get_record.get_record_from_disk(country_record.id.toString())

		if (result.properties.hasOwnProperty('wof:lang')){
			var lang_array = result.properties['wof:lang']
			lang_array.forEach(function(language){
	
				// per record, check that the language values exist for all specified languages that we define
				if (result.properties.hasOwnProperty('name:' + language + '_x_preferred'))  {
					//console.log('Test passed.'.green)
					//successes ++
				}
	
				else {console.log('Test failed'.red + ' - ' + country_record.id + ' (' 
					+ country_record.name + ')' + ' is missing the name:' + language + '_x_preferred field. '
					+ '(placetype: ' + layer + ')')
					failures ++
				}
			})
		}		
		else{console.log('Test failed'.red + ' - ' + country_record.id + ' (' 
			+ country_record.name + ')' + ' is missing the wof:lang property.'
			+ '(placetype: ' + layer + ')')
			failures ++
		}
	})
}

module.exports.run = function()
{
	test_lang_names('country')
}


//potential name fields:
//name:eng_x_preferred
//name:eng_x_variant
//name:eng_x_historical
//name:eng_x_colloquial