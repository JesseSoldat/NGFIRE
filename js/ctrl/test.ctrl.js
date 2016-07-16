let TestCtrl = function($firebaseArray, $scope){
	var ref = firebase.database().ref();
	var data = $firebaseArray(ref);
	$scope.data = data;

	$scope.addChar = function() {
		$scope.data.$add({
			name: $scope.name,
			url: $scope.url
		});
		$scope.name = "";
		$scope.url = "";
	};

	

};
TestCtrl.$inject = ['$firebaseArray', '$scope'];
export default TestCtrl;