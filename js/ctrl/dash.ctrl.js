let DashCtrl = function($firebaseArray, $scope, $state, CharService){
	let vm = this;

	
	
	firebase.auth().onAuthStateChanged(function(user) {
  	if (user) {
    // User is signed in.
    console.log(user.uid);
    	var user = firebase.auth().currentUser;

		user.updateProfile({
		  displayName: "Jane Q. User",
		  photoURL: "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcRCd2EPYX661uK3Io6i9pVKo4S4XXvmyQWTGec1k2Gv7EWHGCtv"

		}).then(function() {
		  // Update successful.
		  $scope.user = user;
		}, function(error) {
		  // An error happened.
		  console.log(error);
		});
  	} else {
    // No user is signed in.
    console.log('No user');
  	}
	});

	// var ref = firebase.database().ref();

	// let data = $firebaseArray(ref);
	let data = CharService.getArray();

	$scope.array = data;
	// console.log($scope.array);

	$scope.counter = function(id){
		if(id === "counter"){
			return false;
		} else {
			return true;
		}
	}

	$scope.deleteChar= function(id){
		var item = data.$getRecord(id);
		data.$remove(item).then(function(){
			console.log('deleted');
		})
	}

	// $scope.editChar = function(id){
		
	// 	let item = data.$getRecord(id);
	// 	console.log(item);


		// item.name = "Jesse";
		// data.$save(item).then(function() {
		// });
		
	// }

	

	

}

DashCtrl.$inject = ['$firebaseArray', '$scope', '$state', 'CharService'];

export default DashCtrl;