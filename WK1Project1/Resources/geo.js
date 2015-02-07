var runGeo = function(){
	Ti.Geolocation.purpose = "Your location is needed to gather lat/long coords."; 
	Ti.Geolocation.getCurrentPosition(function(e){
		var lat = e.coords.latitude;
		var lng = e.coords.longitude;
		buildUi(lat, lng); //buildUi would be a function from app.js perhaps
	});
}; //runGeo closing
exports.runGeoCode = runGeo;