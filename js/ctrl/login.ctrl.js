let LoginCtrl = function($scope, LoginService){

	$scope.login = function(user){
		LoginService.login(user)
	}

	$scope.register = function(user){
		LoginService.register(user);

	}



};
LoginCtrl.$inject = ['$scope', 'LoginService'];
export default LoginCtrl;