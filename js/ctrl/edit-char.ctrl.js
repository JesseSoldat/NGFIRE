import $ from 'jquery';

let EditCharCtrl = function($firebaseArray, $scope, $stateParams, $state){

	let vm = this;

	this.editChar = editChar;

	let id = $stateParams.id;

	var ref = firebase.database().ref();

	let data = $firebaseArray(ref);

	//Show only one
	$scope.temp = $firebaseArray(ref);
	$scope.tempId = $stateParams.id;

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
			if(data[i].$id === id) {
				let singleChar = data[i];
				$scope.char = singleChar;
				

				$scope.$apply(function(){
					// $('#editNameBefore').text(singleChar.name);
					//  $("#inputName").append('<input type="text" placeholder="Name" ng-model="char.name"/>');
					// $('#editUrlBefore').text(singleChar.url);
					 // $("#inputUrl").append('<input type="text" placeholder="Image URL" ng-model="char.url"/>');
					 $('#spin').css('display', 'none');
					 // $('#editName').css('display', 'inline-block');
					 // $('#editUrl').css('display', 'inline-block');
					 // $('#editBtn').css('display', 'inline-block');
				});
			
			}	
		}
	}

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