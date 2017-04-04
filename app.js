var test = [
	require('./test_runs/test_isparent'), 
	require('./test_runs/test_belongsto')
]

test.forEach(function (test){
	test.run()
	console.log('\n')
})