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

var customPosterLable = Ti.UI.createLabel({
	top: banner.height + banner.top + 10,
	color: '#fff',
	width: 165,
    textAlign: 'center',
	right: 23,
	text: 'Make your own custom movie poster!',
   	font: { fontWeight: 'bold', fontSize: 16, fontStyle: 'roboto' },
});

var customPoster = Ti.UI.createView({
	height: 170,
	width: 124,
	right: 40,
	borderRadius: 5,
   borderWidth: 2,
   borderColor: '#f5d64e',
	top: banner.height + banner.top + 55,
});

var takePhoto = Titanium.UI.createButton({
   title: 'Photo',
   font: { fontWeight: 'bold', fontSize: 16, fontStyle: 'roboto' },
   color: '#3d589d',
   borderRadius: 5,
   borderWidth: 2,
   borderColor: '#aebad0',
   backgroundColor: '#edf0f7',
   right: 72,
   top: customPoster.height + customPoster.top + 10,
   width: 55,
   height: 35,
});

if (Ti.Platform.osname === 'android'){

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
	left: 20
});

var logo2 = Ti.UI.createImageView({
	width: 160,
	height: 120,
	image: 'http://www.userlogos.org/files/logos/jumpordie/rottentomatoes_03.png',
	right: 20
});

} else {
	
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
	left: 75
});

var logo2 = Ti.UI.createImageView({
	width: 160,
	height: 120,
	image: 'http://www.userlogos.org/files/logos/jumpordie/rottentomatoes_03.png',
	right: 20
});
	
}

// Main View Info
var mainView = Ti.UI.createScrollView({
	left: 0,
	width: '75%',
	height: Ti.UI.SIZE,
	top: banner.height + banner.top,
	backgroundColor: '#343434',
	//backgroundColor: '#665c5c',
	layout: 'vertical',
});

var splat = Ti.UI.createImageView({
	top: 200,
	height: 500,
	width: 500,
	image: 'http://d3biamo577v4eu.cloudfront.net/static/images/trademark/rotten.png'
});
	
Ti.Gesture.addEventListener('shake',function(e) {
	
	mainWindow.add(splat);
		
	setTimeout(function(){
	    
	    mainWindow.remove(splat);
	    
	}, 5000);
	
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
	
	for (i=0, j=obj.length; i<j; i++) {
		
		
	var movieName = Ti.UI.createLabel({
		font: { fontSize: 22, fontWeight: 'bold', fontStyle: 'roboto' },
		color: '#fff',
		left: 15,
		top: 10,
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
		top: 20,
		textAlign: Ti.UI.TEXT_ALIGNMENT_LEFT
	});
	
	var criticsRating = Ti.UI.createLabel({
		font: { fontSize: 16, fontStyle: 'roboto' },
		color: '#fff',
		left: 15,
		top: 20,
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
		top: 75,
		height: 164,
		width: 118
	});
	
	var button = Titanium.UI.createButton({
	   title: 'Like',
	   font: { fontWeight: 'bold', fontSize: 16, fontStyle: 'roboto' },
	   color: '#3d589d',
	   borderRadius: 5,
	   borderWidth: 2,
	   borderColor: '#aebad0',
	   backgroundColor: '#edf0f7',
	   left: 15,
	   top: 20,
	   width: 55,
	   height: 35
	});

	movieName.text = obj[i].movieName;
	criticsRating.text = 'CRITICS RATING: ' + obj[i].criticsRating;
	criticsScore.text = 'CRITICS SCORE: ' + obj[i].criticsScore;
	audienceRating.text = 'AUDIENCE RATING: ' + obj[i].audienceRating;
	audienceScore.text = 'AUDIENCE SCORE: ' + obj[i].audienceScore;
	poster.image = obj[i].poster;
	year.text = 'YEAR: ' + obj[i].year;
	mpaa_rating.text = 'MPAA RATING: ' + obj[i].mpaa_rating;
	runtime.text = 'RUNTIME: ' + obj[i].runtime + ' min';
	synopsis.text = 'SYNOPSIS: ' + obj[i].synopsis;
	
	mainView.add(poster);
	
	mainView.add(movieName);

	mainView.add(year);
	mainView.add(mpaa_rating);
	mainView.add(runtime);
	
	mainView.add(synopsis);
	
	mainView.add(criticsRating);
	mainView.add(criticsScore);
	mainView.add(audienceRating);
	mainView.add(audienceScore);
	
	mainView.add(button);
	
	
	console.log(criticsRating.text);
	
		button.addEventListener('click',function(evt) {
			
	   Titanium.API.info("You clicked the button");
	   
	   Cloud.Likes.remove({
		    user_id: '54e3849dde9cf309835b7778'
		}, function (e) {
		    if (e.success) {
		        // alert('Removed');
		    } else {
		        //alert('Error:\n' +
		           // ((e.error && e.message) || JSON.stringify(e)));
		    }
		});
	   
	   	Cloud.Likes.create({
		    user_id: '54e3849dde9cf309835b7778'
		}, function (e) {
		    if (e.success) {
		        alert('You Liked This Movie!');
		    } else {
		        //alert('Error:\n' +
		            //((e.error && e.message) || JSON.stringify(e)));
		    }
		});
	});
	
	}
	
};

takePhoto.addEventListener('click',function(evt) {

Titanium.Media.showCamera({
	success:function(evt) {
 if(evt.mediaType == Ti.Media.MEDIA_TYPE_PHOTO) {
			var imageView = Ti.UI.createImageView({
				height: 164,
				width: 118,
				right: 43,
   				top: banner.height + banner.top + 58,
				image:evt.media
			});
			mainWindow.add(imageView);
			// Test
		} 
	},
	cancel:function() {
	},
	saveToPhotoGallery:true,
	allowEditing:true,
	mediaTypes:[Ti.Media.MEDIA_TYPE_VIDEO,Ti.Media.MEDIA_TYPE_PHOTO]
	});

});

banner.add(logo1);
banner.add(title);
banner.add(logo2);

//mainView.add(nameIcon);

mainWindow.add(banner);

mainWindow.add(customPosterLable); 
mainWindow.add(customPoster); 
mainWindow.add(takePhoto);
mainWindow.add(mainView);
//mainWindow.add(nameIcon);

mainWindow.open();