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
			templateUrl: 'templates/home.html'
			
		})
		;

}
config.$inject = ['$stateProvider', '$urlRouterProvider'];

export default config;