var successes = 0
var failures = 0
var get_record = require('../utils/get_record.js')
var get_metadata = require('../utils/get_metadata.js')
var lang_array = [
	'eng_x_preferred',
	'spa_x_preferred'
	]

// call the get_metadata w country
var country_records = get_metadata.get_metadata_from_disk('country') //this gives us an array...

// loop through each id in the metadata results
country_records.forEach(function(country_record){
	var result = get_record.get_record_from_disk(country_record.id.toString())

	lang_array.forEach(function(language){
	
		// per record, check that the language values exist for all specified languages that we define
    	if (result.properties.hasOwnProperty('name:' + language))  {
    		//console.log('Test passed.'.green)
			//successes ++
  		}
    
    	else {console.log('Test failed'.red + ' - ' + country_record.id + ' (' + country_record.name + ')' + ' is missing a ' + language + ' field.')
    		failures ++
    	}
    })
})

//potential name fields:
//name:eng_x_preferred
//name:eng_x_variant
//name:eng_x_historical
//name:eng_x_colloquial