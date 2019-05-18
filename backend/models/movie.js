var mongoose = require('mongoose');

module.exports = mongoose.model('todos', {
	id : Number,
	name : String,
	year : Number,
	director : String,
	poster : String
});