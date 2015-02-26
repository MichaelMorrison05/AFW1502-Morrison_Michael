
var win = Ti.UI.createWindow({
	backgroundColor: '#343434'
});

	var takePhoto = Titanium.UI.createButton({
	   title: 'Photo',
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

takePhoto.addEventListener('click',function(evt) {

Titanium.Media.showCamera({
	success:function(evt) {
 if(evt.mediaType == Ti.Media.MEDIA_TYPE_PHOTO) {
			var imageView = Ti.UI.createImageView({
				width:100,
				height:100,
				image:evt.media
			});
			win.add(imageView);
		} 
	},
	cancel:function() {
	},
	saveToPhotoGallery:true,
	allowEditing:true,
	mediaTypes:[Ti.Media.MEDIA_TYPE_VIDEO,Ti.Media.MEDIA_TYPE_PHOTO]
});

});
win.add(takePhoto);
win.open();