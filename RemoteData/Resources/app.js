Titanium.UI.setBackgroundColor('#000');

var win1, table1, remote;

remote = require('Remote-Data');

// Application Title
table1 = Ti.UI.createTableView();

win1 = Titanium.UI.createWindow({
	title: "Tab1",
	backgroundColor: '#fff'
});

win1.add(table1);
win1.open();