var express = require('express');
var app = express();
var port = process.env.PORT||2000;
app.listen(port);
app.use(express.static(__dirname + '/client'));


// app.use(bodyParser.json());
// app.use(express.static(__dirname + '/client'));

// require('./middleware.js')(app, express);



app.get('/test', function(req, res){
	console.log('Ya Hala')
})