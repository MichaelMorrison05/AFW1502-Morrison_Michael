// Main Window Info
var mainWindow = Ti.UI.createWindow({
	backgroundColor: '#3a9425'
});

// Main View Info
var mainView = Ti.UI.createScrollView({
	width: Titanium.UI.FILL, 
	height: Titanium.UI.FILL,
	layout: 'vertical'
});



mainWindow.add(mainView);
mainWindow.open();