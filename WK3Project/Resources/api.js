var Database = require('Database');

// collects data
var inTheatersInfo = function(){
	var xhr = Ti.Network.createHTTPClient({
		onload: function(){
			var json = JSON.parse(this.responseText);
			var movies = json.movies;
			
			var postArray = [];
			for (i=0, j=movies.length; i<j; i++) {
				var appData = {
				
				movieName: movies[i].title,
				criticsRating: movies[i].ratings.critics_rating,
				criticsScore: movies[i].ratings.critics_score,
				audienceRating: movies[i].ratings.audience_rating,
				audienceScore: movies[i].ratings.audience_score,
				poster: movies[i].posters.detailed,
				year: movies[i].year,
				mpaa_rating: movies[i].mpaa_rating,
				runtime: movies[i].runtime,
				synopsis: movies[i].synopsis,
				
				// criticsRating, criticsScore, audienceRating, audienceScore
				
			};
				postArray.push(appData);
			}
			//ui.buildUI(appData);
			Database.save(postArray);
			//Database.saveToCloud(appData);
			},
			
			// On an error a alert will appear
			onerror: function(){
				alert('Error');
			}
	
	});
	
	// Stops attemps after 5sec
	xhr.timeout = 5000;
	var url = 'http://api.rottentomatoes.com/api/public/v1.0/lists/movies/in_theaters.json?apikey=kr85dzry7wrc5dnhafu2xqdh';
	xhr.open('GET', url);
	xhr.send();
};

exports.inTheaters = inTheatersInfo;
