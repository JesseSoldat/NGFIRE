let SdkCtrl = function($scope){
	var ref = firebase.database().ref();
    

	ref.on("value", function(snapshot) {
    	$scope.data = snapshot.val();

    	//if the digest is already running run this on the next tick
		 setTimeout(function(){ $scope.$apply(function(){
		 	$scope.data = snapshot.val();
		 }); });
});

};
SdkCtrl.$inject = ['$scope'];

export default SdkCtrl;