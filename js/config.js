let config = function($stateProvider, $urlRouterProvider){

	$urlRouterProvider.otherwise('/');

	$stateProvider
		.state('root', {
			abstract: true,
			templateUrl: 'templates/layout.html',
			controller: 'LoginCtrl'
		})
		.state('root.login', {
			url: '/',
			controller: 'LoginCtrl as vm',
			templateUrl: 'templates/login.html'
		})
		.state('root.dash', {
			url: '/dash',
			controller: 'DashCtrl as vm',
			templateUrl: 'templates/dash.html'	
		})
		.state('root.form', {
			url: '/add',
			controller: 'AddCharCtrl as vm',
			templateUrl: 'templates/add-char.html'
		})
		.state('root.edit', {
			url: '/edit/:id',
			controller: 'EditCharCtrl as vm',
			templateUrl: 'templates/edit-char.html'
		})
		.state('root.test', {
			url: '/test',
			controller: 'TestCtrl as vm',
			templateUrl: 'templates/test.html'
		})
		.state('root.chat', {
			url: '/chat',
			controller: 'ChatCtrl as vm',
			templateUrl: 'templates/chat.html'
		})
		.state('root.sdk', {
			url: '/sdk',
			controller: 'SdkCtrl as vm',
			templateUrl: 'templates/sdk.html'
		})
		.state('root.profile', {
			url: '/profile',
			controller: 'ProfileCtrl as vm',
			templateUrl: 'templates/profile.html'
		})
		.state('root.edit-profile', {
			url: '/edit-profile',
			controller: 'EditProfileCtrl as vm',
			templateUrl: 'templates/edit-profile.html'
		})
		.state('root.storage', {
			url: '/storage',
			controller: 'StorageCtrl as vm',
			templateUrl: 'templates/storage.html'
		})
		;

}
config.$inject = ['$stateProvider', '$urlRouterProvider'];

export default config;