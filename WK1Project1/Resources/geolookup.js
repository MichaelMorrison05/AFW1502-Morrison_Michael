 var url = "http://api.wunderground.com/api/d8d6d376722c1591/geolookup/q/CA/San_Francisco.json";
 var client = Ti.Network.createHTTPClient({
     // function called when the response data is available
     onload : function(e) {
         Ti.API.info("Received text: " + this.responseText);
         alert('Success');
     },
     // function called when an error occurs, including a timeout
     onerror : function(e) {
         Ti.API.debug(e.error);
         alert('error');
     },
     timeout : 5000  // in milliseconds
 });
 
var userState = "State: ";

exports.state = userState;
		
 // Prepare the connection.
 client.open("GET", url);
 // Send the request.
 client.send();
 




/*
var ui = require("ui");
var url = "http://api.wunderground.com/api/d8d6d376722c1591/forecast/";
if (Ti.Network.online) {
     var getData = Ti.Network.createHTTPClient();
     getData.onload = function(e){
          var json = JSON.parse(this.responseText);
          var forecast = json.forecast;
          var location = json.location;
          ui.buildUi(forecast, location);
     }; //getData.onload closing
     getData.open("GET", url);
     getData.send();
} else {
     alert("Network currently unavailable.");
}; // if else Ti.Network closing
*/