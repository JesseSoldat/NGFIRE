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

	$scope.counter = function(id){
		if(id === "counter"){
			return false;
		} else {
			return true;
		}
	}
	
	ref.child("/counter").transaction(function(currentValue) {
  	return (currentValue || 0) + 1;
	});
	// console.log(data);
	$scope.data.$loaded().then(function() {
    	// console.log($scope.data);
 	})
  .catch(function(err) {
    console.error(err);
  });
	

	

};
TestCtrl.$inject = ['$firebaseArray', '$scope'];
export default TestCtrl;