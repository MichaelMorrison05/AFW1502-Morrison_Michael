// Set default background color to black
Titanium.UI.setBackgroundColor('#000');

// Get geo location
var geo = require('geoLocation');

// Check if Network is online
if (Ti.Network.online){
	alert('Online :)');
	geo.getGeo();
	//var api = require('api');
	//api.getData();
	
} else {
	alert('Offline :()');
	
};

