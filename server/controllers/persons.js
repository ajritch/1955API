var mongoose = require('mongoose');
var Person = mongoose.model('Person');

module.exports = {

	//get all people
	get_all: function(req, res) {
		Person.find({}).exec(function(err, persons) {
			res.json(persons);
		});
	},

	//get specific person
	get: function(req, res) {
		Person.findOne({name: req.params.name}).exec(function(err, person) {
			res.json(person);
		});
	},

	//remove person
	remove: function(req, res) {
		Person.remove({name: req.params.name}, function(err) {
			if (err) throw err;
		});
	},

	//add person
	add: function(req, res) {
		var person = new Person({name: req.params.name});
		person.save(function(err) {
			if (err) throw err;
		});
	}

}