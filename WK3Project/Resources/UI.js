// Main Window Info
var mainWindow = Ti.UI.createWindow({
	backgroundColor: '#343434'
});

// Main View Info
var banner = Ti.UI.createView({
	width: Titanium.UI.FILL, 
	height: 125,
	top: 20,
	layout: 'Horizontal',
	backgroundColor: '#3a9425'
});

var title = Ti.UI.createLabel({
	text: 'In Theaters Now',
	font: { fontSize: 36, fontWeight: 'bold', fontStyle: 'roboto' },
	color: '#fff',
	textAlign: Ti.UI.TEXT_ALIGNMENT_CENTER
});

var logo1 = Ti.UI.createImageView({
	width: 160,
	height: 120,
	image: 'http://www.userlogos.org/files/logos/jumpordie/rottentomatoes_03.png',
	left: 70,
	right: 20
});

var logo2 = Ti.UI.createImageView({
	width: 160,
	height: 120,
	image: 'http://www.userlogos.org/files/logos/jumpordie/rottentomatoes_03.png',
	left: 20
});

// Main View Info
var mainView = Ti.UI.createScrollView({
	left: 0,
	width: '75%',
	//width: Titanium.UI.FILL,
	height: Titanium.UI.SIZE,
	top: banner.height + banner.top,
	backgroundColor: '#343434',
	layout: 'vertical'
});

var movieName = Ti.UI.createLabel({
	font: { fontSize: 18, fontWeight: 'bold', fontStyle: 'roboto' },
	color: '#fff',
	left: 15,
	top: 15,
	textAlign: Ti.UI.TEXT_ALIGNMENT_LEFT
});

var year = Ti.UI.createLabel({
	font: { fontSize: 16, fontStyle: 'roboto' },
	color: '#fff',
	left: 15,
	top: 10,
	textAlign: Ti.UI.TEXT_ALIGNMENT_LEFT
});

var mpaa_rating = Ti.UI.createLabel({
	font: { fontSize: 16, fontStyle: 'roboto' },
	color: '#fff',
	left: 15,
	top: 1,
	textAlign: Ti.UI.TEXT_ALIGNMENT_LEFT
});

var runtime = Ti.UI.createLabel({
	font: { fontSize: 16, fontStyle: 'roboto' },
	color: '#fff',
	left: 15,
	top: 1,
	textAlign: Ti.UI.TEXT_ALIGNMENT_LEFT
});

var synopsis = Ti.UI.createLabel({
font: { fontSize: 16, fontStyle: 'roboto' },
	color: '#fff',
	left: 15,
	top: 10,
	textAlign: Ti.UI.TEXT_ALIGNMENT_LEFT
});

var criticsRating = Ti.UI.createLabel({
	font: { fontSize: 16, fontStyle: 'roboto' },
	color: '#fff',
	left: 15,
	top: 10,
	textAlign: Ti.UI.TEXT_ALIGNMENT_LEFT
});

var criticsScore = Ti.UI.createLabel({
	font: { fontSize: 16, fontStyle: 'roboto' },
	color: '#fff',
	left: 15,
	top: 1,
	textAlign: Ti.UI.TEXT_ALIGNMENT_LEFT
});

var audienceRating = Ti.UI.createLabel({
	font: { fontSize: 16, fontStyle: 'roboto' },
	color: '#fff',
	left: 15,
	top: 1,
	textAlign: Ti.UI.TEXT_ALIGNMENT_LEFT
});

var audienceScore = Ti.UI.createLabel({
	font: { fontSize: 16, fontStyle: 'roboto' },
	color: '#fff',
	left: 15,
	top: 1,
	textAlign: Ti.UI.TEXT_ALIGNMENT_LEFT
});

var poster = Ti.UI.createImageView({
	left: 15,
	top: 10,
});


/*
var nameIcon = Ti.UI.createImageView({
	image: 'http://img1.wikia.nocookie.net/__cb20111027001559/logopedia/images/1/1a/Rotten_tomatoes_logo.png',
	bottom: 20
});
*/


// Builds UI with Remote Data
exports.buildUI = function(obj){
	
	// Logs obj into a string
	console.log('obj: ' + JSON.stringify(obj));
	
	// Adds remote data to desired location
	movieName.text = obj.movieName;
	criticsRating.text = 'Critics Rating: ' + obj.criticsRating;
	criticsScore.text = 'Critics Score: ' + obj.criticsScore;
	audienceRating.text = 'Audience Rating: ' + obj.audienceRating;
	audienceScore.text = 'Audience Score: ' + obj.audienceScore;
	poster.image = obj.poster;
	year.text = 'Year: ' + obj.year;
	mpaa_rating.text = 'MPAA Rating: ' + obj.mpaa_rating;
	runtime.text = 'Runtime: ' + obj.runtime + ' min';
	synopsis.text = 'Synopsis: ' + obj.synopsis;
};

banner.add(logo1);
banner.add(title);
banner.add(logo2);

mainView.add(movieName);

mainView.add(year);
mainView.add(mpaa_rating);
mainView.add(runtime);

mainView.add(synopsis);

mainView.add(criticsRating);
mainView.add(criticsScore);
mainView.add(audienceRating);
mainView.add(audienceScore);
mainView.add(poster);

//mainView.add(nameIcon);

mainWindow.add(banner);
mainWindow.add(mainView);
//mainWindow.add(nameIcon);

mainWindow.open();