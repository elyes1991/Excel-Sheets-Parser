
var express    = require('express'); 
var app        = express();            
var bodyParser = require('body-parser');
var repository = require('./app/data/Repository');
var router = express.Router();  
var swig = require('swig');
var path = require('path');

app.use(express.static(__dirname + '/public/'));

// view engine setup
app.engine('swig', swig.renderFile);
app.set('view engine', 'swig');

app.set('views', path.join(__dirname, '/app/views'));
app.set('view cache', false);
swig.setDefaults({ cache: false });

app.get('/', function(req, res) {
    res.render('index',{ title: 'Superhero API' });
});

var port = process.env.PORT || 8080;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

var sheetModel = require('./app/models/sheet');
require('./app/apis/sheets')(router,sheetModel);

app.use('/api', router);

app.listen(port);
console.log('Check port ' + port);