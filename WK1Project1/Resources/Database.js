
//var db = Titanium.Database.open('weatherDatabase');
//db.execute('CREATE TABLE IF NOT EXISTS weatherInfo (id INTEGER PRIMARY KEY, date TEXT, time TEXT, city TEXT, state TEXT, weather TEXT, lat TEXT, lon TEXT, temp_f TEXT, temp_c TEXT, day1 TEXT, day2 TEXT, day3 TEXT, day1High TEXT, day2High TEXT, day3High TEXT, day1Low TEXT, day2Low TEXT, day3Low TEXT, lastUpdate TEXT)');

// Parameterization - Prevents malicious code
//db.execute('INSERT INTO weatherInfo (date,time,city,state,weather,lat,lon,temp_f,temp_c,day1,day2,day3,day1High,day2High,day3High,day1Low,day2Low,day3Low,lastUpdate) VALUES (?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)', 'obj.date', 'obj.time', obj.city, obj.state, obj.weather, obj.lat, obj.lon, obj.temp_f, obj.temp_c, obj.day1, obj.day2, obj.day3, obj.day1High, obj.day2High, obj.day3High, obj.day1Low, obj.day2Low, obj.day3Low, obj.lastUpdate);

//obj.date, obj.time, obj.city, obj.state, obj.weather, obj.lat, obj.lon, obj.temp_f, obj.temp_c, obj.day1, obj.day2, obj.day3, obj.day1High, obj.day2High, obj.day3High, obj.day1Low, obj.day2Low, obj.day3Low, obj.lastUpdate

// Updating Rows

/*
UPDATE tablename

SET column1=value1,column2=value2,...

WHERE id=id
*/

// db.execute('UPDATE tablename SET c1=?,c2=? WHERE id=?','value1','value2');

// Delete from database
// db.execute('DELETE FROM tablename WHERE id=?',1);

// Read table
// db.execute('SELECT * FROM tablename');
// db.execute('SELECT * FROM user');













