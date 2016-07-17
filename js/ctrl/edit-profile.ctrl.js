let EditProfileCtrl = function($scope, $state){

	$scope.editProfile = function(user){
		var user = firebase.auth().currentUser;

			user.updateProfile({
			 displayName: "Cindy Q. User",
			  photoURL: "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcRCd2EPYX661uK3Io6i9pVKo4S4XXvmyQWTGec1k2Gv7EWHGCtv",
			  firstName: user.fName,
			  lastName: user.lName,
			  streetAddress: user.street,
			  city: user.city,
			  state: user.state,
			  zip: user.zip,
			  country: user.country

			}).then(function() {
			  // Update successful.
			  $scope.user = user;
			  $state.go('root.profile');

			}, function(error) {
			  // An error happened.
			  console.log(error);
			});
	}
};

EditProfileCtrl.$inject = ['$scope', '$state'];

export default EditProfileCtrl;