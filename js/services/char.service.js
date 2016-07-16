let CharService = function($http, $firebaseArray){

	var ref = firebase.database().ref();

	let data = $firebaseArray(ref);

	this.getChar = getChar;

	function getChar(){
		return data;

	}
};

CharService.$inject = ['$http', '$firebaseArray'];

export default CharService;