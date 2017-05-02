var test = [
	require('./test_runs/test_lang_names'),
	require('./test_runs/test_official_lang_names')
]

test.forEach(function (test){
	test.run()
	console.log('\n')
})