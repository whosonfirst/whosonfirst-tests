// https://github.com/whosonfirst-data/whosonfirst-data/issues/937
// 
// load record
// load parent name
// check record's name properties for strings that include parent name
// if in name prop:
//   print id, name prop, name prop value
  
var successes = 0
var failures = 0
var get_record = require('../utils/get_record.js')
var get_metadata = require('../utils/get_metadata.js')

function test_name_labels(layer){

	// call the get_metadata w country
	var records = get_metadata.get_metadata_from_disk(layer) //this gives us an array...

	// loop through each id in the metadata results
	records.forEach(function(record){
		
		var result = get_record.get_record_from_disk(record.id.toString())
		
		if (result.properties.hasOwnProperty('wof:hierarchy')){
		    result.properties['wof:hierarchy'].forEach(function(parent){

                for(var parent_layer in parent){
		
		    		var parent_data = get_record.get_record_from_disk(parent[parent_layer].toString())
		       	 
		    		for(var key in parent_data.properties){
			
		    			// key equals full prop, like: name:pol_x_preferred 
		    			// to get at property, parent_data.properties[key] (value will be an array)
		    			if (key.indexOf('name:') !== -1){
    		
    		   	 		var names = parent_data.properties[key]
    		   	 		names.forEach(function(name){
    		
    		   	 			if (result.properties.hasOwnProperty[key] && result.properties[key].indexOf(name) !== -1){
    		   	 	        	console.log(record.id + ', ' + name + ', ' + key)
    		   	 	        	failures ++
    		   	 	    	}
    		
    		   	 	    	else {
    		   	 	        	console.log('.')
    		   	 	    	}
		    				})
		    			}
		    		}
				}
			})
		}
	})
}

module.exports.run = function()
{
	test_name_labels('locality')
}




