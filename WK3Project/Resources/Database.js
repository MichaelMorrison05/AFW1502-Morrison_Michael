var ui = require('UI');

var save = function(apiInfo){

	var db = Ti.Database.open('inTheatersDatabase');
	
	db.execute('DROP TABLE IF EXISTS inTheatersInfo');

	db.execute('CREATE TABLE IF NOT EXISTS inTheatersInfo (id INTEGER PRIMARY KEY, movieName TEXT, criticsRating TEXT, criticsScore INTEGER, audienceRating TEXT, audienceScore INTEGER, poster TEXT, year INTEGER, mpaa_rating TEXT, runtime INTEGER, synopsis TEXT)');

	db.execute('DELETE FROM inTheatersInfo');
	
	// need for loop here
	for (i=0, j=apiInfo.length; i<j; i++) {
	db.execute('INSERT INTO inTheatersInfo (movieName, criticsRating, criticsScore, audienceRating, audienceScore, poster, year, mpaa_rating, runtime, synopsis) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?)', apiInfo[i].movieName, apiInfo[i].criticsRating, apiInfo[i].criticsScore, apiInfo[i].audienceRating, apiInfo[i].audienceScore, apiInfo[i].poster, apiInfo[i].year, apiInfo[i].mpaa_rating, apiInfo[i].runtime, apiInfo[i].synopsis);
	}
	
	read();

	db.close();
	
// criticsRating, criticsScore, audienceRating, audienceScore
	
};

var read = function() {
	var db = Ti.Database.open('inTheatersDatabase');
	var dbRows = db.execute('SELECT * FROM inTheatersInfo');
	var dbData = [];
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
		dbData.push(dbPost);
		dbRows.next();
	};
	dbRows.close();
	db.close();
	ui.buildUI(dbData);
};

var saveToCloud = function (apiInfo) {
	for (i=0, j=apiInfo.length; i<j; i++) {
		Cloud.Objects.create({
			classname: 'Movies',
			fields: {
        		movieName: apiInfo[i].movieName,
				criticsRating: apiInfo[i].criticsRating,
				criticsScore: apiInfo[i].criticsScoree,
				audienceRating: apiInfo[i].audienceRating,
				audienceScore: apiInfo[i].audienceScore,
				poster: apiInfo[i].poster,
				year: apiInfo[i].year,
				mpaa_rating: apiInfo[i].mpaa_rating,
				runtime: apiInfo[i].runtime,
				synopsis: apiInfo[i].synopsis,
		    }
		}, function (e) {
		    if (e.success) {
		        console.log('Saved To Cloud!');
		    } else {
		        console.log('Did not save to cloud!');
		    }
		});
	}
};

exports.save = save;
exports.saveToCloud = saveToCloud;
exports.read = read;
