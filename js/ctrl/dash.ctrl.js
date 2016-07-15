let DashCtrl = function($firebaseArray, $scope, $state){
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
		
		let item = data.$getRecord(id);
		console.log(item);


		// item.name = "Jesse";
		// data.$save(item).then(function() {
		// });
		
	}

	

	

}

DashCtrl.$inject = ['$firebaseArray', '$scope', '$state'];

export default DashCtrl;