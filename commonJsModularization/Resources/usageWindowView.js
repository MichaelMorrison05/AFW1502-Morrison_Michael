// Initialize Usage Window
exports.init = function(){
	var usageWindow, usageIntroLabel, usageExportsTitle, usageExportsCopy,
	usageRequireTitle, usageRequireCopy;

	// Usage Window
	usageWindow = Ti.UI.createWindow({
		title : 'Usage',
		backgroundColor : '#fafafa',
		layout : 'verticle'
	}),
	
	// Usage window intro copy
	usageIntroLabel = Ti.UI.createLabel({
	text : 'text text text ' + 'more text ',
			font : {
				fontSize : '16sp'
			},
			color : '#333',
			top : 16, left : 16
		});
	
	// Title for exports section
	usageExportsTitle = Ti.UI.createLabel({
		text : 'Exports',
		font : {
			fontSize : '18dp',
			fontWeight : 'bold'
		},
		color : '#333',
		top : 16, left : 16
	}),
	
	// Exports section
	usageExportsCopy = Ti.UI.createLabel({
		text : 'Text',
		font : {
			fontSize : '16dp',
		},
		color : '#333',
		top : 3, left : 16,
	}),
	
	// Title for require section
	usageRequireTitle = Ti.UI.createLabel({
		text : 'Require',
		font: {
			fontSize : '18dp',
			fontWeight : 'bold'
		},
		color : '#333',
		top : 16, left : 16,
	}),
	
	// Require section
	
usageRequireCopy = Ti.UI.createLabel({
	text : 'Text',
	font : {
		fontSize : '16sp'
	},
		color : '#333',
		top : 3, left : 16,
	}),
	
	Ti.API.debug('Adding components to usageWindow');
	usageWindow.add(usageIntroLabel);
	
	usageWindow.add(usageExportsTitle);
	usageWindow.add(usageExportsCopy);
	
	usageWindow.add(usageRequireTitle);
	usageWindow.add(usageRequireTitle);
	
	Ti.API.debug('Opening usageWindow');
	navWindow.openWindow(usageWindow);
	
};
	
	
	
	
	
	
	
	
	
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		