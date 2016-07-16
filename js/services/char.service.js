let CharService = function($firebaseArray){

	var ref = firebase.database().ref();

	let dataArray = $firebaseArray(ref);

	this.getArray = getArray;

	function getArray(){
		return dataArray;
	}
};

CharService.$inject = ['$firebaseArray'];

export default CharService;