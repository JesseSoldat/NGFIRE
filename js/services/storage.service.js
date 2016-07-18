let StorageService = function($firebaseArray){

	var storageRef = firebase.storage().ref();

	//Keep track of the files users upload
	var ref = firebase.database().ref('img/');
	var data = $firebaseArray(ref);
	//////////

	
	// let array = $firebaseArray(ref);
	
	//Keep track of the files users upload


	this.uploadImg = uploadImg;

	function uploadImg(file){
		
		var imgRef = storageRef.child(file.name);
		console.log(file.name);
		var uploadTask = imgRef.put(file);
		var pic = file;
	
	//Keep track of the files users upload
		writeImgData(pic)
		function writeImgData(pic) {
	  		firebase.database().ref('img/').push({
	    		name: pic.name
				
	  		});
		}
//////////////////////
		// data.$add({
		// 	name: file.name,
		// 	url: uploadTask
		// });
	//Keep track of the files users upload

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
StorageService.$inject = ['$firebaseArray'];

export default StorageService;