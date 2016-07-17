let AddCharCtrl = function( $firebaseArray, $firebaseObject, $state, $scope){
	var ref = firebase.database().ref();

	let array = $firebaseArray(ref);
	let obj = $firebaseObject(ref);
	obj.$bindTo($scope, "data");

	let vm = this;
	this.addChar = addChar;

	//AUTH
	var user = firebase.auth().currentUser;

	if (user) {
	  // User is signed in.
	  //Note: currentUser might also be null because the auth object has not finished initializing. If you use an observer to keep track of the user's sign-in status, you don't need to handle this case.
	  console.log(user.uid);
	} else {
	  // No user is signed in.
	}


	function sendData(name, url){

		array.$add({
			name: name,
			url: url
		});
		$state.go('root.dash');

	}

	function addChar(obj){
		// let id = (Date.now().toString(36) + Math.random().toString(36).substr(2,5)).toUpperCase();		
	sendData(obj.name, obj.url);

	}

};
AddCharCtrl.$inject = ['$firebaseArray', '$firebaseObject', '$state', '$scope'];

export default AddCharCtrl;