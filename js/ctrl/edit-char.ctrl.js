import $ from 'jquery';

let EditCharCtrl = function($firebaseArray, $scope, $stateParams, $state){

	let vm = this;

	this.editChar = editChar;

	let id = $stateParams.id;

	var ref = firebase.database().ref();
	let data;
	
	setTimeout(function(){
		data = $firebaseArray(ref);

	}, 500);

	//Show only one
	$scope.temp = $firebaseArray(ref);
	$scope.tempId = $stateParams.id;

	checkLength();

	function checkLength() {
		if(data === undefined) {
			setTimeout(function(){
			checkLength();

		},200);
		} else {
			$('#spin').css('display', 'none');
			return

		}

	}
	


	// checkData();

	//Wait for data from firebase
	// function checkData(){
	// 	if(data.length <= 0){
	// 		setTimeout(function(){
	// 			console.log('waiting...');
	// 			checkData()
	// 		},500);
	// 	}
	// 	getOne();
		
	// }
	// getOne();
	//Get the specific character
	// function getOne(){
		// for(let i = 0; i < data.length ; i++){
		// 	if(data[i].$id === id) {
		// 		let singleChar = data[i];
		// 		$scope.char = singleChar;
				

				// $scope.$apply(function(){
					// $('#editNameBefore').text(singleChar.name);
					//  $("#inputName").append('<input type="text" placeholder="Name" ng-model="char.name"/>');
					// $('#editUrlBefore').text(singleChar.url);
					 // $("#inputUrl").append('<input type="text" placeholder="Image URL" ng-model="char.url"/>');
					 // $('#spin').css('display', 'none');
					 // $('#editName').css('display', 'inline-block');
					 // $('#editUrl').css('display', 'inline-block');
					 // $('#editBtn').css('display', 'inline-block');
				// }); //$scope.$apply
			
			// }	//if
		// } //for
	// } //getOne

	function editChar(char){
		let item = data.$getRecord(char.$id);
		item.name = char.name;
		item.url = char.url;
		data.$save(item).then(function() {
			$state.go('root.dash');
		});

	}
	


};
EditCharCtrl.$inject = ['$firebaseArray', '$scope', '$stateParams', '$state'];
export default EditCharCtrl;