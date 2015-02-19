// Set default background color to black
Titanium.UI.setBackgroundColor('#000');

// load the Cloud Module
var Cloud = require('ti.cloud');
// set .debug property to 'true' as we are in Development mode
Cloud.debug = true;
var loginUser = function(){
	Cloud.Users.login({
		login: 'com.WK2Project',
		password: 'Darksith1'
	}, function(e){
		// use .info method to view login info in the Console, if successful
		if (e.success){
			var user = e.users[0];
			Ti.API.info('Success!\n' + 
				'ACS User ID: ' + user.id + '\n' + 
				'ACS App sessionId: ' + Cloud.sessionId + '\n' + 
				'ACS App Username: ' + user.username);
		} else {
			alert((e.error && e.message) || JSON.stringify(e));
		}
	});
}; // loginUser ends
loginUser();
// now your app is ready to access ACS network and data services


