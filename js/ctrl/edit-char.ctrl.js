import $ from 'jquery';

let EditCharCtrl = function($firebaseArray, $scope, $stateParams){

	let vm = this;

	this.editChar = editChar;

	let id = $stateParams.id;

	var ref = firebase.database().ref();

	let data = $firebaseArray(ref);

	checkData();

	//Wait for data from firebase
	function checkData(){
		if(data.length <= 0){
			setTimeout(function(){
				console.log('waiting...');
				checkData()
			},500);
		}
		getOne();
		
	}
	
	//Get the specific character
	function getOne(){
		for(let i = 0; i < data.length ; i++){
			// console.log(data[i].$id);
			if(data[i].$id === id) {
				let singleChar = data[i];
				$scope.char = singleChar;
				// console.log($scope.char);

				$('#editNameBefore').text(singleChar.name);
				 // $("#inputName").append('<input type="text" placeholder="Name" ng-model="char.name"/>');
				$('#editUrlBefore').text(singleChar.url);
				 // $("#inputUrl").append('<input type="text" placeholder="Image URL" ng-model="char.url"/>');
			}	
		}
	}

	function editChar(char){
		console.log(char);
		// let item = data.$getRecord(id);
		// console.log(item);
		// // item.name = "Jesse";
		// data.$save(item).then(function() {
		// });
	}
	// editChar();


};
EditCharCtrl.$inject = ['$firebaseArray', '$scope', '$stateParams'];
export default EditCharCtrl;