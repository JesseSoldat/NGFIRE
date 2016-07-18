let StorageService = function(){

	var storageRef = firebase.storage().ref();



	this.uploadImg = uploadImg;

	function uploadImg(file){
		
		var imgRef = storageRef.child(file.name);
		
		var uploadTask = imgRef.put(file);

		uploadTask.on('state_changed', function(snapshot){
			// console.log(snapshot);
		}, function(error) {
			console.log(error);
		}, function() {
			var downloadURL = uploadTask.snapshot.downloadURL;
			// console.log(downloadURL);
		});

	}
};
StorageService.$inject = [];

export default StorageService;