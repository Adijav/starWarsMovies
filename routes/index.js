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

	if( eposideNumber >= 0 && eposideNumber <= 6) {
		var movie = movies[eposideNumber-1];
		var title = movie.title;
		var hero = movie.hero_image;
		var poster = movie.poster;
		var description = movie.description;
		var mainCharacters = movie.main_characters;
		res.render("partials/eposides",{
			movies: movies,
			title: title,
			hero: hero,
			poster: poster,
			description: description,
			mainCharacters: mainCharacters
		});
	}
	else {
		res.render("partials/notFound");
	}
	
};

exports.notFound = function(req, res){
	res.render("partials/notFound");
};