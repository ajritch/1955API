var mongoose = require('mongoose');
var Person = mongoose.model('Person');
var persons = require('../controllers/persons.js');

module.exports = function(app) {

	//get all persons
	app.get('/', function(req, res) {
		persons.get_all(req, res);
	});

	//add new name to database
	app.get('/new/:name', function(req, res) {
		persons.add(req, res);
	});

	//remove name from database
	app.get('/remove/:name', function(req, res) {
		persons.remove(req, res);
	});

	//show document of particular person
	app.get('/:name', function(req, res) {
		persons.get(req, res);
	});

}