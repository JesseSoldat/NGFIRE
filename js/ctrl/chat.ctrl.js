let ChatCtrl = function($scope, CharService){
	$scope.user = "Guest " + Math.round(Math.random() * 100);
	
	let data = CharService.getArray();
	$scope.messages = data;

	$scope.addMessage = function() {
		$scope.messages.$add({
			from: $scope.user,
			content: $scope.message
		});
		$scope.message = "";
	};
	$scope.messages.$loaded(function(){
		console.log($scope.messages);
		if($scope.messages.length === 0) {
			console.log("You don't have any messages");
			$scope.messages.$add({
          		from: "Firebase Docs",
          		content: "Hello world!"
        });
		} else {
			console.log("You have some objects");
			let length = $scope.messages.length;
			for(let i = 0; i <= length; i++){
				if( typeof(data[i] === "number") ){
					// console.log(data[i].name);
					// console.log("You don't have any messages");
				}
				
					
				
			}
		}

	});
};

ChatCtrl.$inject = ["$scope", "CharService"];

export default ChatCtrl;