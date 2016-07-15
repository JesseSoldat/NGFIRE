let EditCharCtrl = function($firebaseArray, $scope, $stateParams){

	let id = $stateParams.id;

	var ref = firebase.database().ref();

	let data = $firebaseArray(ref);

	// console.log(data.length);
	console.log(data);

	setTimeout(function(){
		getOne();
	},2000);
	
	function getOne(){
		for(let i = 0; i < data.length ; i++){
			console.log(data[i]);	
		}
	}

	function editChar(){
		console.log(id);
		let item = data.$getRecord(id);
		console.log(item);
		// item.name = "Jesse";
		data.$save(item).then(function() {
		});
	}
	// editChar();


};
EditCharCtrl.$inject = ['$firebaseArray', '$scope', '$stateParams'];
export default EditCharCtrl;