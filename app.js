var test = [
	require('./test_runs/test_isparent'), 
	require('./test_runs/test_belongsto'),
	require('./test_runs/test_lang_names.js'),
	require('./test_runs/test_official_lang_names.js'), //not testing currently
	require('./test_runs/test_superseded_by.js'),
	require('./test_runs/wk_mismatch/index.js')
]

test.forEach(function (test){
	test.run()
	console.log('\n')
})