let DashCtrl = function($firebaseObject, $firebaseArray, $scope){
	let vm = this;
	

	var ref = firebase.database().ref();

	
	let data = $firebaseArray(ref);
	
	$scope.array = data;

	console.log($scope.array);

	$scope.deleteChar= function(id){
		var item = data.$getRecord(id);
		data.$remove(item).then(function(){
			console.log('deleted');
		})
	}

	$scope.editChar = function(id){
		var item = data.$getRecord(id);
		item.name = "Jesse";
		data.$save(item).then(function() {
	 
	});

	}

	

}

DashCtrl.$inject = ['$firebaseObject', '$firebaseArray', '$scope'];

export default DashCtrl;