var moviesJSON = require('../movies.json');

var movies = moviesJSON.movies;

exports.home = function(req, res){
	res.render("home",{
		title: "Home",
		movies: movies
	});
};

exports.eposides = function(req, res){
	var eposideNumber = req.params.eposideNumber;
	res.send("This page is for eposide Number "+ eposideNumber);
};

exports.notFound = function(req, res){
	res.send("Wrong page");
};