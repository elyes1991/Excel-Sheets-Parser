

module.exports = function (router, sheetModel) {

	router.get('/sheets', function(req, res) {
	    res.json(sheetModel.getDocumentJsonData(null).sheets);   
	});

	router.get('/sheets/:name', function(req, res) {
	    res.json(sheetModel.getDocumentJsonData(req.params.name).sheets);   
	});

	router.get('/join', function(req, res) {  
		res.json(sheetModel.joinSheets(
			req.param('sheet1'), req.param('sheet2'), 
			req.param('field1'), req.param('field2'), "1n")
		); 
	});
}
