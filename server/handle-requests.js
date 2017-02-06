var express = require('express');


var app = express();

// app.use(bodyParser.json());
// app.use(express.static(__dirname + '/client'));

// require('./middleware.js')(app, express);

app.use(express.static(__dirname + '/../client'));

app.get('/test', function(req, res){
	console.log('Ya Hala')
})

module.exports = app;
