module.exports = function(condition) {
	successes = 0
	failures = 0
	console.log('Test: belongsto')
	condition(1108730699, [102191581, 85633287, 85688877]) // moldova
	condition(85977539, [102191575, 85633793, 85688543, 102082361, 102082377, 102081863, 102083063, 102081779]) // nyc locality
	condition(85922583, [102191575, 85633793, 85688637, 102087579]) // sf locality
	condition(1108712105, [85849485, 102191575, 404476573, 85633793, 85950361, 102084423, 85688645]) // boston microhood
	condition(857683023, [102191575, 85633293, 85686515, 102073737]) //mexico city
	condition(101749159, [102191581, 85633121, 85682581]) // copenhagen locality
	condition(890434421, [102191569, 85632509, 85676017]) // shoreline locality in PH
	// condition(571671601, [85869245, 102191575, 85633793, 85977539, 421205771, 102081863, 85688543]) //venue in manhattan
	console.log('Successes:'.green, successes, 'Failures:'.red, failures)
}
