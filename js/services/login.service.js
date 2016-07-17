let LoginService = function($rootScope){
	this.login = login;
	this.register = register;

	function login(user){
		firebase.auth().signInWithEmailAndPassword(user.email1, user.password1).catch(function(error) {
		  // Handle Errors here.
		  var errorCode = error.code;
		  var errorMessage = error.message;
		  // ...
		  console.log(errorMessage);
		});
	}

	function register(user){
		firebase.auth().createUserWithEmailAndPassword(user.email, user.password).catch(function(error) {
  		var errorCode = error.code;
  		var errorMessage = error.message;
 		console.log(errorMessage);	
 		});
	}

};
LoginService.$inject = ['$rootScope'];

export default LoginService;