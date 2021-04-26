angular.module("myApp.page2",['ngRoute','firebase'])
.config(['$routeProvider',function($routeProvider){
	$routeProvider
		.when('/page2',{
			templateUrl:"page2/page2.html",
			controller:"page2Ctrl"
		});
}])
.controller('page2Ctrl', function($scope,$firebaseArray){
	$scope.addTweet = function(){
		$scope.msg2="";
		var ref = firebase.database().ref("tweeter");
		$firebaseArray(ref).$add($scope.tweeter)
		.then(
			function(ref){
				$scope.tweeter.name = "";
				$scope.tweeter.text = "";
				$scope.msg2= "Tweet added successfully.";
				window.setTimeout(function(){
					$scope.$apply(function(){
						$scope.msg2 = false;
					})
				},2000)
			},
			function(error){
				console.log(error);
			}
			)
	};
	console.log('page2');
});
