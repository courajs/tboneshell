var core = require('./core')
var data = require('./data')

T('data', data)
T('decoratedData', function(){
	var data = T('data')

	return data.map(core.Decorator.decorate)
})
T('currentSort', new core.SortOrder())
T('sortedData', function(){
	var data = T('decoratedData')
	var sort = T('currentSort')

	return sort.sortThusly(data)
})

$(function(){
	T(function(){
		var data = T('sortedData') || []
		var html = core.templates.table(data)
		$('table')[0].outerHTML = html
		$('th').click(function(){
			var sortProperty = $(this).text().toLowerCase()
			var sort = T('currentSort')

			T('currentSort', sort.sortBy(sortProperty))
		})
	})
})



