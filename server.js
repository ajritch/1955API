var express = require('express');
var path = require('path');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');

var app = express();

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

//setup db
require('./server/config/mongoose.js');

//routing
routes = require('./server/config/routes.js');
routes(app);

var server = app.listen(7000, function() {
	console.log('listening on port 7000');
});