let DashCtrl = function($firebaseArray, $scope, $state, CharService){
	let vm = this;
	

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