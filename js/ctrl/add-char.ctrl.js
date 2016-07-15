let AddCharCtrl = function($firebaseObject){

	let vm = this;
	this.addChar = addChar;


	function sendData(id, name, url){
		firebase.database().ref('char/' + id).set({
			name: name,
			url: url
		});
	}
	// addChar('1','Jesse', 'Soldat');
	

	function addChar(obj){
		let id = (Date.now().toString(36) + Math.random().toString(36).substr(2,5)).toUpperCase();
		console.log(id);

	sendData(id, obj.name, obj.url);

	obj = "";


	}

};
AddCharCtrl.$inject = ['$firebaseObject'];

export default AddCharCtrl;