let fileUpload = function(StorageService){
	return {
		restrict: 'E',
		replace: true,
		scope: {
			file: '=image'
		},
		template: `
		<div>
			<form>
				<input type="file" name="img" accept="image/*" ng-model="image.one" placeholder="Choose a File" />
				<button id="addPhotosBtn">Submit</button>
			</form>
			<hr>
		</div>
		`,
		link: function(scope, element, attrs, ctrl){
			element.on('click', function(){
				let submit = angular.element(document.querySelector('#addPhotosBtn'));
			});
			element.on('submit', function(){
				let file = element.find('input')[0].files[0];
				StorageService.uploadImg(file);
			})
		}
	};
};

fileUpload.$inject = ['StorageService'];

export default fileUpload;
