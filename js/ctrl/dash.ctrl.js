let DashCtrl = function($firebaseObject, $firebaseArray, $scope){
	let vm = this;
	

	var ref = firebase.database().ref();

	
	$scope.array = $firebaseArray(ref);

	console.log($scope.array);

	

	
	



	

}

DashCtrl.$inject = ['$firebaseObject', '$firebaseArray', '$scope'];

export default DashCtrl;