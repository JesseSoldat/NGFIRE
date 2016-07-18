let StorageCtrl = function($scope){
	
	var storage = firebase.storage();

	var storageRef = storage.ref();
	

	storageRef.child('costarica04.jpg').getDownloadURL().then(function(url) {
		console.log(url);
		$scope.$apply(function(){
			$scope.costarica04 = url.toString();

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
};
StorageCtrl.$inject = ['$scope'];

export default StorageCtrl;