let config = function($stateProvider, $urlRouterProvider){

	$urlRouterProvider.otherwise('/');

	$stateProvider
		.state('root', {
			abstract: true,
			templateUrl: 'templates/layout.html'
		})
		.state('root.home', {
			url: '/',
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
		;

}
config.$inject = ['$stateProvider', '$urlRouterProvider'];

export default config;