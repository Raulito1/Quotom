/* Since the module is a container for the different parts of an application
	and is a container for the apllication controllers 
*/
angular.module("myApp.page1",['ngRoute','firebase'])
.config(['$routeProvider',function($routeProvider){
	$routeProvider
		.when('/page1',{
			templateUrl:"page1/page1.html",
			controller:"page1Ctrl"
		});
}])
/*
	Controllers always belong to a module so this is the controller for Page1
*/
.controller('page1Ctrl', function($scope,$firebaseArray){
	$scope.msg1 = false;
	var ref = firebase.database().ref("tweeter");
		$scope.data = $firebaseArray(ref);
	console.log('page1');
	$scope.deleteTweet = function(info){
		$scope.data
		.$remove(info)
		.then(
			function(ref){
				$scope.msg1 = "Tweet deleted successfully.";
				window.setTimeout(function(){
					$scope.$apply(function(){
						$scope.msg1 = false;
					})
				},2000)
				console.log(info);
			},
			function(error){
				console.log(error);
			}
		)
		

	}
});
