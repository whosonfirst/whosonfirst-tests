var test = [
	require('./tests/test_isparent'), 
	require('./tests/test_belongsto')
]

test.forEach(function (test){
	test.run()
	console.log('\n')
})