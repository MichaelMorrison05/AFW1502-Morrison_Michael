// Main Window Module

var mainWindow, titleLabel, subtitleLable, continueButton, mainWindowController;

Ti.API.info('Main Window Initialized\n======');

Ti.API.debug('Creating mainWindow components');

// Main Window (Window 1)
mainWindow = Ti.UI.createWindow({
	title : 'CommonJS Modules',
	backgroundColor : '#fafafa'
});

// Main title for mainWindow
titleLabel = Ti.UI.createLabel({
	text : 'CommonJS Modularization',
	top : 200,
	font : {
		fontSize: '24sp',
		fontWeight: 'bold'	
	},
	color : '#333'
});

// Subtitle for mainWindow
subtitleLabel = Ti.UI.createLabel({
	text : 'A short guidw to using CommonJS modules\nin an Appcelerator '
	+ 'Titanium Mobile App',
	top: 250,
	font : {
		fontSize : '16sp',
	},
	color : '#333'
});

// Button to continue to Introduction page
continueButton = Ti.UI.createButton({
	title : 'Introduction',
	top : 350
});

Ti.API.debug('Adding components to mainWindow');
mainWindow.add(titleLabel);
mainWindow.add(subtitleLabel);
mainWindow.add(continueButton);

exports.mainWindow = mainWindow;

//Continue button click event
continueButton.addEventListener('click', function(){
	introWindow.init();
});











