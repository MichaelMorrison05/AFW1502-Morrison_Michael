Titanium.UI.setBackgroundColor('#000');

var mainWindow, appTitleText;

var loadGeolookup = require('geolookup');
var loadConditions = require('conditions');
var loadGeo = require('geo');

// Application Title
var appTitleText = Ti.UI.createLabel({
	color: "#2c3233",
	top: 60,
	font: {fontSize: 32, fontFamily: "Roboto", fontWeight: "bold"},
	textAlign: "center",
	text: "My Weather App"
	
});

var stateLable = Ti.UI.createLabel({
	color: "#2c3233",
	top: 100,
	font: {fontSize: 22, fontFamily: "Roboto", fontWeight: "bold"},
	textAlign: "center",
	text: loadGeolookup.state
	
});


/*
var loadFile = require("Export2");

console.log(loadFile.msg);
*/

mainWindow = Titanium.UI.createWindow({
	backgroundColor: '#fff'
});

mainWindow.add(appTitleText, stateLable);
mainWindow.open();