// Gets data from the UI.js file
var Database = require('Database');
//var ui = require('UI');

// collects data from wunderground.com
var weatherInfo = function(lat, lon){
	var xhr = Ti.Network.createHTTPClient({
		onload: function(){
			var json = JSON.parse(this.responseText);
			var appData = {
				icon: json.current_observation.icon_url,
				city: json.current_observation.display_location.city,
				state: json.location.state,
				date: json.current_observation.local_time_rfc822,
				time: json.current_observation.observation_time,
				weather: json.current_observation.weather,
				lat: json.current_observation.display_location.latitude,
				lon: json.current_observation.display_location.longitude,
				temp_f: json.current_observation.temp_f,
				temp_c: json.current_observation.temp_c,
				webcam: json.webcams[2].CURRENTIMAGEURL,
				
				day1: json.forecast.txt_forecast.forecastday[2].title,
				day2: json.forecast.txt_forecast.forecastday[4].title,
				day3: json.forecast.txt_forecast.forecastday[6].title,
				
				dayIcon1: json.forecast.txt_forecast.forecastday[2].icon_url,
				dayIcon2: json.forecast.txt_forecast.forecastday[4].icon_url,
				dayIcon3: json.forecast.txt_forecast.forecastday[6].icon_url,
				
				day1High: 'Hi ' + json.forecast.simpleforecast.forecastday[1].high.fahrenheit,
				day1Low: 'Lo ' + json.forecast.simpleforecast.forecastday[1].low.fahrenheit,
				day2High: 'Hi ' + json.forecast.simpleforecast.forecastday[2].high.fahrenheit,
				day2Low: 'Lo ' + json.forecast.simpleforecast.forecastday[2].low.fahrenheit,
				day3High: 'Hi ' + json.forecast.simpleforecast.forecastday[3].high.fahrenheit,
				day3Low: 'Lo ' + json.forecast.simpleforecast.forecastday[3].low.fahrenheit,
				
				logo: 'http://icons.wxug.com/logos/PNG/wundergroundLogo_4c.png',
				lastUpdate: json.current_observation.observation_time
				
			};
			//ui.buildUI(appData);
			Database.save(appData);
			},
			
			// On an error a alert will appear
			onerror: function(){
				alert('Error');
			}
	
	});
	
	// Stops attemps after 5sec
	xhr.timeout = 5000;
	// wunderground API url for geolookup, conditions, forcast, webcams, and astronomy.
	// My lat and lon has been included so the right data is pulled
	var url = 'http://api.wunderground.com/api/d8d6d376722c1591/geolookup/conditions/forcast/webcams/astronomy/forecast10day/q/' +lat+ ',' +lon+ '.json';
	xhr.open('GET', url);
	xhr.send();
};

// Exports weatherAPI data so that it can be used throughout the code
exports.weather = weatherInfo;