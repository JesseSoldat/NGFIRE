let ProfileCtl = function($scope, $firebaseArray, CharService, $state){
	let data = CharService.getArray();

	$scope.array = data;
	//if the digest is already running run this on the next tick
	// setTimeout(function(){ $scope.$apply(function(){

		firebase.auth().onAuthStateChanged(function(user) {
	  	if (user) {
	    // User is signed in.
	    console.log(user.uid);
	    	
	    	$scope.user = firebase.auth().currentUser;
	    	console.log(user);

			
	  	} else {
	    // No user is signed in.
	    console.log('No user');
	  	}
		});

// }); });

	$scope.editProfile = function(){
		$state.go('root.edit-profile');
	}



};

ProfileCtl.$inject = ['$scope', '$firebaseArray', 'CharService', '$state'];
export default ProfileCtl;