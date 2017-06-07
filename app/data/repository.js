var xlsx = require('node-xlsx');
var Workbook = require('xlsx-workbook').Workbook;
var workbook = new Workbook();
var path = require('path');
var FILE_DATA = Symbol.for("xlsx.data");

var Repository = {
	
  	getDocumentData: function(documentPath){
		var globalSymbols = Object.getOwnPropertySymbols(global);
		var hasDatafromFile = (globalSymbols.indexOf(FILE_DATA) > -1);
		if (!hasDatafromFile){
		  global[FILE_DATA] = xlsx.parse(path.resolve('file.xlsx'));
		}
		return global[FILE_DATA];
	},
       
  	saveDocument : function(documentName, data){
		var result = workbook.add("result");
			data.map(function(item,index){
				result[index][0] = item[0];
				result[index][1] = item[1];
				result[index][2] = item[2];
				result[index][3] = item[3];
				result[index][4] = item[4];
				result[index][5] = item[5];
				result[index][6] = item[6];
				result[index][7] = item[7];
			});
		workbook.save(documentName +".xlsx");
	}
};


module.exports = Repository;