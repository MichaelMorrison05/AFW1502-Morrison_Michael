
var ui = require('UI');

var save = function(apiInfo){

	var db = Ti.Database.open('weatherDatabase');

	db.execute('CREATE TABLE IF NOT EXISTS weatherInfo (id INTEGER PRIMARY KEY, date TEXT, time TEXT, city TEXT, state TEXT, weather TEXT, lat TEXT, lon TEXT, temp_f TEXT, temp_c TEXT, day1 TEXT, day2 TEXT, day3 TEXT, day1High TEXT, day2High TEXT, day3High TEXT, day1Low TEXT, day2Low TEXT, day3Low TEXT, lastUpdate TEXT, icon TEXT, webcam TEXT, dayIcon1 TEXT, dayIcon2 TEXT, dayIcon3 TEXT, logo TEXT)');

	db.execute('DELETE FROM weatherInfo');

	db.execute('INSERT INTO weatherInfo (date, time, city, state, weather, lat, lon, temp_f, temp_c, day1, day2, day3, day1High, day2High, day3High, day1Low, day2Low, day3Low, lastUpdate, icon, webcam, dayIcon1, dayIcon2, dayIcon3, logo) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)', apiInfo.date, apiInfo.time, apiInfo.city, apiInfo.state, apiInfo.weather, apiInfo.lat, apiInfo.lon, apiInfo.temp_f, apiInfo.temp_c, apiInfo.day1, apiInfo.day2, apiInfo.day3, apiInfo.day1High, apiInfo.day2High, apiInfo.day3High, apiInfo.day1Low, apiInfo.day2Low, apiInfo.day3Low, apiInfo.lastUpdate, apiInfo.icon, apiInfo.webcam, apiInfo.dayIcon1, apiInfo.dayIcon2, apiInfo.dayIcon3, apiInfo.logo);

	read();

	db.close();
	
};

var read = function() {
	var db = Ti.Database.open('weatherDatabase');
	var dbRows = db.execute('SELECT * FROM weatherInfo');
	while (dbRows.isValidRow()) {
	var dbPost = {
		date : dbRows.fieldByName('date'),
		time : dbRows.fieldByName('time'),
		city : dbRows.fieldByName('city'),
		state : dbRows.fieldByName('state'),
		weather : dbRows.fieldByName('weather'),
		lat : dbRows.fieldByName('lat'),
		lon : dbRows.fieldByName('lon'),
		temp_f : dbRows.fieldByName('temp_f'),
		temp_c : dbRows.fieldByName('temp_c'),
		day1 : dbRows.fieldByName('day1'),
		day2 : dbRows.fieldByName('day2'),
		day3 : dbRows.fieldByName('day3'),
		day1High : dbRows.fieldByName('day1High'),
		day2High : dbRows.fieldByName('day2High'),
		day3High : dbRows.fieldByName('day3High'),
		day1Low : dbRows.fieldByName('day1Low'),
		day2Low : dbRows.fieldByName('day2Low'),
		day3Low : dbRows.fieldByName('day3Low'),
		lastUpdate : dbRows.fieldByName('lastUpdate'),
		icon : dbRows.fieldByName('icon'),
		webcam : dbRows.fieldByName('webcam'),
		dayIcon1 : dbRows.fieldByName('dayIcon1'),
		dayIcon2 : dbRows.fieldByName('dayIcon2'),
		dayIcon3 : dbRows.fieldByName('dayIcon3'),
		logo : dbRows.fieldByName('logo'),
	};
		dbRows.next();
	};
	dbRows.close();
	db.close();
	ui.buildUI(dbPost);
};




exports.save = save;
exports.read = read;






