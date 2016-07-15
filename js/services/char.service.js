let CharService = function($http, $firebaseArray){

	var ref = firebase.database().ref();

	let data = $firebaseArray(ref);

	this.getChar = getChar;

	function getChar(id){
		console.log(id);
		return data;

	}
};

CharService.$inject = ['$http', '$firebaseArray'];

export default CharService;