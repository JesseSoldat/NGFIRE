let AddCharCtrl = function($firebaseObject, $firebaseArray){
	var ref = firebase.database().ref();

	let array = $firebaseArray(ref);

	let vm = this;
	this.addChar = addChar;


	function sendData(id, name, url){

		array.$add({
		name: name,
		url: url
		});

	}

	function addChar(obj){
		let id = (Date.now().toString(36) + Math.random().toString(36).substr(2,5)).toUpperCase();
		

	sendData(id, obj.name, obj.url);

	}

};
AddCharCtrl.$inject = ['$firebaseObject', '$firebaseArray'];

export default AddCharCtrl;