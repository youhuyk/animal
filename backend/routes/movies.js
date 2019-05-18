var router = require('express').Router();
var movie = require('../models/movie');

//get all movies
router.get('/', function(req, res) {

	// use mongoose to get all movies in the database
	movie.find(function(err, movie) {

		// if there is an error retrieving, send the error. nothing after res.send(err) will execute
		if (err)
			res.send(err)
		
		console.log(movie);
		res.send(movie); // return all movies in JSON format
	});
});

module.exports = router;
