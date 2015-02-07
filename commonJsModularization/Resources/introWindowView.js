// Initialize Intro Window
exports.init = function(){
	var introWindow, introWindowCopy, usageButton, usageWindowView;
	
	// Introduction Window
	introWindow = Ti.UI.createWindow({
		title : 'Introduction',
		backgroundColor : '#fafafa'
	});
	
	// Main body copy for introWindow
	introWindowCopy = Ti.UI.createLabel({
		text : 'text text text ' + 'more text ',
			font : {
				fontSize : '16sp'
			},
			color : '#333',
			top : 16, left : 16
		});
		
		// Button to continue on to usage window
		usageButton = Ti.UI.createButton({
			title : 'Usage',
			top : 350
		});
		
		Ti.API.debug('Adding components to introWindow');
		introWindow.add(introWindowCopy);
		introWindow.add(usageButton);

		
		Ti.API.debug('Opening introWindow');
		navWindow.openWindow(introWindow);
		
		// Import Usage Window Module
		usageWindowView = require('usageWindowView');
		
		
		//Usage button click event
		usageButton.addEventListener('click', function(){
			Ti.API.debug('Usage button has been clicked.');
			usageWindowView.init();
		});
		
};
		
		
		
		
		
		
		
		
