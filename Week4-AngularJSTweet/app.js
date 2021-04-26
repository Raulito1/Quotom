/* Defining my app using my module with my first parameter referring to my HTML element "myApp" in which 
	the application will run

	the second parameter is ngRoute dependency this is used to route my application to different pages
	without reloading the entire application

	the $routeProvider is used to configure the different routes in my webApp
	so this will define what page to display when a user clicks a link 

	Due to, the default hash-prefix used for $location hash-bang URLs has changed from the empty string ('') to the bang ('!'). 
	If your application does not use HTML5 mode or is being run on browsers that do not support HTML5 mode, 
	and you have not specified your own hash-prefix then client side URLs will now contain a ! prefix. 
*/
angular.module("myApp",['ngRoute','myApp.page1','myApp.page2','myApp.page3'])
.config(['$routeProvider','$locationProvider',function($routeProvider,$locationProvider){
	$locationProvider.hashPrefix('!');
	$routeProvider
		.otherwise({
			redirectTo:"/page1"
		})
}]);
