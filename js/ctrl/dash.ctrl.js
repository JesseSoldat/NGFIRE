let DashCtrl = function($firebaseObject){
	let vm = this;
	

	var ref = firebase.database().ref();

	vm.data = $firebaseObject(ref);
	console.log(vm.data);

	

}

DashCtrl.$inject = ['$firebaseObject'];

export default DashCtrl;