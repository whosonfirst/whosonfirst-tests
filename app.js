var test = [
	//require('./test_runs/test_isparent'), 
	//require('./test_runs/test_belongsto'),
	require('./test_runs/test_names_for_labels')
]

test.forEach(function (test){
	test.run()
	console.log('\n')
})