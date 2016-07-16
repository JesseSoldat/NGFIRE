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
};

ChatCtrl.$inject = ["$scope", "CharService"];

export default ChatCtrl;