let StorageCtrl = function($scope, $firebaseArray){
	

	var storage = firebase.storage();

	var storageRef = storage.ref();

	//Delete a File
	$scope.deleteFile = function(file) {

	}
	
	// Create an Array of files URLs to download from the Database img section
	var ref = firebase.database().ref('img/');
	var data = $firebaseArray(ref);
	let imgArray2 = [];

	let urlArray = [];
	

	checkLength();

	function checkLength() {
		if(data.length === 0) {
			setTimeout(function(){
			checkLength();
		},200);
		} else {
			for(let i = 0; i < data.length; i++){
				imgArray2.push(data[i].name);
			}
			// console.log(imgArray2);
			showPictures();
			return
		}
	}
	// Create an Array of files URLs to download from the Database img section

	//Use the newly created array to get the URLs for Firebase Storage
	function showPictures(){
			for(let i = 0; i < imgArray2.length; i++) {
		storageRef.child(imgArray2[i]).getDownloadURL().then(function(url) {
			urlArray.push(url);
			console.log(urlArray);

			$scope.$apply(function(){
				$scope.url = urlArray;

				});

		}).catch(function(error) {
		  switch (error.code) {
			    case 'storage/object_not_found':
			    	console.log("not found");
			      // File doesn't exist
			      break;

			    case 'storage/unauthorized':
			      // User doesn't have permission to access the object
			      console.log('unauthorized');
			      break;

			    case 'storage/canceled':
			      // User canceled the upload
			      console.log('canceled');
			      break;

			    case 'storage/unknown':
			      // Unknown error occurred, inspect the server response
			      console.log('unknown error');
			      break;
			  }
		});
		}


	}
	//Use the newly created array to get the URLs for Firebase Storage


	//LOOP TEST //
	let imgArray = ['costarica04.jpg','costarica07.jpg','costarica08.jpg','costarica13.jpg','costarica12.jpg',];

	// let urlArray = [];

	// for(let i = 0; i < imgArray.length; i++) {
	// 	// console.log(imgArray[i]);

	// 	storageRef.child(imgArray[i]).getDownloadURL().then(function(url) {

	// 		urlArray.push(url);
	// 		// console.log(urlArray);
	// 		// console.log('Length:' + imgArray.length);
	// 		// console.log('index: ' + i);

	// 		$scope.$apply(function(){
	// 			$scope.url = urlArray;

	// 			});

			// if((imgArray.length -1) === i){

			// 	$scope.$apply(function(){
			// 	$scope.url = urlArray;

			// 	});
			// }
	
		
	// }).catch(function(error) {
	//   switch (error.code) {
	// 	    case 'storage/object_not_found':
	// 	    	console.log("not found");
	// 	      // File doesn't exist
	// 	      break;

	// 	    case 'storage/unauthorized':
	// 	      // User doesn't have permission to access the object
	// 	      console.log('unauthorized');
	// 	      break;

	// 	    case 'storage/canceled':
	// 	      // User canceled the upload
	// 	      console.log('canceled');
	// 	      break;

	// 	    case 'storage/unknown':
	// 	      // Unknown error occurred, inspect the server response
	// 	      console.log('unknown error');
	// 	      break;
	// 	  }
	// });
	// }
	//LOOP TEST FINISHED//

	// storageRef.child('costarica04.jpg').getDownloadURL().then(function(url) {
	// 	$scope.$apply(function(){
	// 		$scope.costarica04 = url.toString();

	// 	});
		
	// }).catch(function(error) {
	//   switch (error.code) {
	// 	    case 'storage/object_not_found':
	// 	    	console.log("not found");
	// 	      // File doesn't exist
	// 	      break;

	// 	    case 'storage/unauthorized':
	// 	      // User doesn't have permission to access the object
	// 	      console.log('unauthorized');
	// 	      break;

	// 	    case 'storage/canceled':
	// 	      // User canceled the upload
	// 	      console.log('canceled');
	// 	      break;

	// 	    case 'storage/unknown':
	// 	      // Unknown error occurred, inspect the server response
	// 	      console.log('unknown error');
	// 	      break;
	// 	  }
	// });
	// //Second Image
	// 	storageRef.child('costarica07.jpg').getDownloadURL().then(function(url) {
	// 	$scope.$apply(function(){
	// 		$scope.costarica07 = url.toString();

	// 	});
		
	// }).catch(function(error) {
	//   switch (error.code) {
	// 	    case 'storage/object_not_found':
	// 	    	console.log("not found");
	// 	      // File doesn't exist
	// 	      break;

	// 	    case 'storage/unauthorized':
	// 	      // User doesn't have permission to access the object
	// 	      console.log('unauthorized');
	// 	      break;

	// 	    case 'storage/canceled':
	// 	      // User canceled the upload
	// 	      console.log('canceled');
	// 	      break;

	// 	    case 'storage/unknown':
	// 	      // Unknown error occurred, inspect the server response
	// 	      console.log('unknown error');
	// 	      break;
	// 	  }
	// });

	

};
StorageCtrl.$inject = ['$scope', '$firebaseArray'];

export default StorageCtrl;