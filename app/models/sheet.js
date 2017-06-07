var repository = require('../data/Repository');

var sheetModel = {

	getSheets: function(){
		return repository.getDocumentData().map(function(sheet){
			return sheet.name;
		});
	},

	getSheetColumns: function(sheetName){
		var sheetColumns;
	    repository
	    	.getDocumentData()
	    	.filter(function(item){
			  	return item.name == sheetName;
			})
			.map(function(sheet){			
				sheetColumns = sheet.data[0].map(function(columnName){
					return columnName;
				});
			});
		return sheetColumns;
	},

	getSheetData: function(sheetName){
		var sheetData = [];
	    repository
	    	.getDocumentData()
			.filter(function(item){
    			  	return item.name == sheetName;
			})
    		.map(function(sheet){
				sheet.data.map(function(line){
					sheetData.push(line);	
				});
			});
		return sheetData;
	},

	joinSheets: function(sheet1, sheet2, sheet1Field, sheet2Field, relation){

		var joinResult = [];
		sheetModel.getSheetData(sheet1).map(function(sheet1Item){
			var array = new Array();
			array[0] = sheet1Item[0];
			sheetModel.getSheetData(sheet2).map(function(sheet2Item) {
				if(sheet1Item[2] == sheet2Item[0]){
					array[1] = sheet1Item[2];
					array[2] = sheet2Item[13];
					array[3] = sheet2Item[27];
					array[4] = sheet2Item[3];
					array[5] = sheet2Item[4];
					array[6] = sheet2Item[6];
				}
			});
			joinResult.push(array);
		});
		return joinResult;
	},

	getDocumentJsonData	: function(sheetName){
		var sheetsData = [];
	    sheetModel.getSheets()
	    	.filter(function(item){
	    		if(sheetName != null){
	    			return item == sheetName;
	    		}
	    		return true;
	    	})
	    	.map(function(sheetName){
				var jsonModel = {};
				jsonModel.table = sheetName;
				jsonModel.columns = sheetModel.getSheetColumns(sheetName);
				sheetsData.push(jsonModel);
			});
		return { "document" : "file.xlsx", "sheets" : sheetsData};
	}	

};

module.exports = sheetModel;


