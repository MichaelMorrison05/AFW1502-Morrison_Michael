var api = require('api');

getGeo = function(){
	Ti.Geolocation.purpose = 'This app would like to use your geo location.';
	Ti.Geolocation.getCurrentPosition(function(e){
		if (Ti.Platform.osname === 'android'){
			api.weather(34.820000, -119.040000);
		} else {
	api.weather(e.coords.latitude, e.coords.longitude);
	}
	});
};

exports.getGeo = getGeo;


