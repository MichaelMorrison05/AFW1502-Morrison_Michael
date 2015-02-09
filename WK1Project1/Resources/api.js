ui = require('UI');

weatherApi = function(lat, lon){
	var xhr = Ti.Network.createHTTPClient({
		onload: function(){
			var json = JSON.parse(this.responseText);
			var appData = {
				city: json.current_observation.display_location.city,
				temp_f: json.current_observation.temp_f,
				temp_c: json.current_observation.temp_c,
				time: json.current_observation.local_time_rfc822,
				lastUpdate: json.current_observation.observation_time,
				weather: json.current_observation.weather,
				lat: json.current_observation.display_location.latitude,
				lon: json.current_observation.display_location.longitude,
				state: json.location.state,
				icon: json.current_observation.icon_url,
				//icon: 'http://icons.wxug.com/i/c/c/partlycloudy.gif',
				logo: 'http://icons.wxug.com/logos/PNG/wundergroundLogo_4c.png',
				webcam: json.CURRENTIMAGEURL
			};
			ui.buildUI(appData);
			},
			onerror: function(){
				alert('Error');
			}
	
	});
	xhr.timeout = 5000;
	var url = 'http://api.wunderground.com/api/d8d6d376722c1591/geolookup/conditions/forcast/webcams/astronomy/q/' +lat+ ',' +lon+ '.json';
	xhr.open('GET', url);
	xhr.send();
};

exports.weather = weatherApi;