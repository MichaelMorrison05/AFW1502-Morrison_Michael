// this sets the background color of the master UIView (when there are no windows/tab groups on it)
Titanium.UI.setBackgroundColor('#fafafa');

var navWindow, mainWindow, introWindow;

// Requiring Modules
mainWindow = require('mainWindowView').mainWindow;
introWindow = require('introWindowView');

// Define Navigation Window
navWindow = Ti.UI.iOS.createNavigationWindow({
	window : mainWindow
});

// Open Navigation Window
navWindow.open();
