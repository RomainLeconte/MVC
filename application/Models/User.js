let mongoose = require('mongoose');
	mongoose.connect('mongodb://localhost/test');

module.exports = mongoose.model('User', {
	nom 	 : String,
	prenom 	 : String,
	email 	 : String,
	password : String
});