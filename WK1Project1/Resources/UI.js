var mainWindow, mainView, title, icon, logo, weather, temp_f, temp_c, city, time, lastUpdate, lat, lon, state, webcam;

mainWindow = Ti.UI.createWindow({
	backgroundColor: '#1199ff'
});

mainView = Ti.UI.createView({

});

title = Ti.UI.createLabel({
	color: '#fff',
	text: 'My Weather App',
	font: {fontSize: 22, fontFamily: 'roboto', fontWeight: 'bold'},
	top: 50
});

icon = Ti.UI.createImageView({
	top: 100
});

logo = Ti.UI.createImageView({
	height: 156,
	width: 210,
	bottom: 75
});

weather = Ti.UI.createLabel({
	color: '#fff',
	top: 230
});

temp_f = Ti.UI.createLabel({
	color: '#fff',
	top: 290
});

temp_c = Ti.UI.createLabel({
	color: '#fff',
	top: 310
});

city = Ti.UI.createLabel({
	color: '#fff',
	top: 170
});

time = Ti.UI.createLabel({
	color: '#fff',
	top: 210
});

lastUpdate = Ti.UI.createLabel({
	color: '#fff',
	bottom: 50
});

lat = Ti.UI.createLabel({
	color: '#fff',
	top: 250
});

lon = Ti.UI.createLabel({
	color: '#fff',
	top: 270
});

state = Ti.UI.createLabel({
	color: '#fff',
	top: 190
});

webcam = Ti.UI.createImageView({
	top: 400,
	height: 400,
	width: 400,
	color: '#fff',
	zIndex: 1,
});



exports.buildUI = function(obj){
	console.log('obj: ' + JSON.stringify(obj));
	
	icon.image = obj.icon;
	logo.image = obj.logo;
	temp_f.text = 'Fahrenheit: ' + obj.temp_f;
	temp_c.text = 'Celsius: ' + obj.temp_c;
	weather.text = 'Current weather: ' + obj.weather;
	city.text = 'City: ' + obj.city;
	time.text = obj.time;
	lastUpdate.text = obj.lastUpdate;
	lat.text = 'Latitude: ' + obj.lat;
	lon.text = 'Longitude: ' + obj.lon;
	state.text = 'State: ' + obj.state;
	webcam.image = obj.webcam;
};

mainView.add(title, temp_f, icon, weather, city, time, lat, lon, state, lastUpdate, webcam, logo, temp_c);
mainWindow.add(mainView);
mainWindow.open();