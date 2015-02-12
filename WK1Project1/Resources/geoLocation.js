// Pulls data from api.js
var api = require('api');


// Function that grabs geolocation data
var getGeo = function(){
		
		// Hard codes location for Android devices 
		if (Ti.Platform.osname === 'android'){
			api.weather(34.820000, -119.040000);
		} else {
			Ti.Geolocation.purpose = 'This app would like to use your geo location.';
			Ti.Geolocation.getCurrentPosition(function(e){
			api.weather(e.coords.latitude, e.coords.longitude);
	
		});
	}
};

// Exports data so that it can be used throughout the code
// Creates a new property called getGeo that calls the getGeo function
exports.getGeo = getGeo;



