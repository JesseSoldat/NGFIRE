let DashCtrl = function($firebaseObject, $firebaseArray){
	let vm = this;
	

	var ref = firebase.database().ref();

	let data = $firebaseObject(ref);
	let array = $firebaseArray(ref);
	
	console.log(data);
	console.log(array);

	vm.arr = array;

	

}

DashCtrl.$inject = ['$firebaseObject', '$firebaseArray'];

export default DashCtrl;