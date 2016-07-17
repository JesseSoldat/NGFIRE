let LoginCtrl = function($scope, LoginService, $state){

	$scope.login = function(user){
		LoginService.login(user);

		firebase.auth().onAuthStateChanged(function(user) {
			if(user){
				$state.go('root.profile');
			}
			else {
				console.log('No User');
			}
		});

	}

	$scope.register = function(user){
		LoginService.register(user);

	}
	$scope.logout = function(){
		firebase.auth().signOut().then(function() {
  			// Sign-out successful.
			}, function(error) {
  			// An error happened.
		});
	}



};
LoginCtrl.$inject = ['$scope', 'LoginService', '$state'];
export default LoginCtrl;