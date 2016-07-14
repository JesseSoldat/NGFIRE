let AddCharCtrl = function($firebaseObject){


	function addChar(id, name, url){
		firebase.database().ref('char/' + id).set({
			name: name,
			url: url
		});
	}
	addChar('1','Jesse', 'Soldat');

};
AddCharCtrl.$inject = ['$firebaseObject'];

export default AddCharCtrl;