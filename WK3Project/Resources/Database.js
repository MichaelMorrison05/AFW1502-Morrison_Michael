var ui = require('UI');

var save = function(apiInfo){

	var db = Ti.Database.open('inTheatersDatabase');
	
	db.execute('DROP TABLE IF EXISTS inTheatersInfo');

	db.execute('CREATE TABLE IF NOT EXISTS inTheatersInfo (id INTEGER PRIMARY KEY, movieName TEXT, criticsRating TEXT, criticsScore INTEGER, audienceRating TEXT, audienceScore INTEGER, poster TEXT, year INTEGER, mpaa_rating TEXT, runtime INTEGER, synopsis TEXT)');

	db.execute('DELETE FROM inTheatersInfo');

	db.execute('INSERT INTO inTheatersInfo (movieName, criticsRating, criticsScore, audienceRating, audienceScore, poster, year, mpaa_rating, runtime, synopsis) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?)', apiInfo.movieName, apiInfo.criticsRating, apiInfo.criticsScore, apiInfo.audienceRating, apiInfo.audienceScore, apiInfo.poster, apiInfo.year, apiInfo.mpaa_rating, apiInfo.runtime, apiInfo.synopsis);

	read();

	db.close();
	
// criticsRating, criticsScore, audienceRating, audienceScore
	
};

var read = function() {
	var db = Ti.Database.open('inTheatersDatabase');
	var dbRows = db.execute('SELECT * FROM inTheatersInfo');
	while (dbRows.isValidRow()) {
	var dbPost = {
		movieName : dbRows.fieldByName('movieName'),
		criticsRating : dbRows.fieldByName('criticsRating'),
		criticsScore : dbRows.fieldByName('criticsScore'),
		audienceRating : dbRows.fieldByName('audienceRating'),
		audienceScore : dbRows.fieldByName('audienceScore'),
		poster : dbRows.fieldByName('poster'),
		year : dbRows.fieldByName('year'),
		mpaa_rating : dbRows.fieldByName('mpaa_rating'),
		runtime : dbRows.fieldByName('runtime'),
		synopsis : dbRows.fieldByName('synopsis')
	};
		dbRows.next();
	};
	dbRows.close();
	db.close();
	ui.buildUI(dbPost);
};




exports.save = save;
exports.read = read;
