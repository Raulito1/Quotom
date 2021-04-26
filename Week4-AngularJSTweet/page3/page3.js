angular.module("myApp.page3",['ngRoute','firebase'])
.config(['$routeProvider',function($routeProvider){
	$routeProvider
		.when('/page3/:id',{
			templateUrl:"page3/page3.html",
			controller:"page3Ctrl"
		});
}])
.controller('page3Ctrl', function($scope,$firebaseArray,$firebaseObject,$routeParams){
	$scope.msg3="";
	var id = $routeParams.id;
	var ref = firebase.database().ref("tweeter/"+id);
	$scope.tweeter = $firebaseObject(ref);

	$scope.editTweet = function(id){
		console.log(id);

		var ref = firebase.database().ref("tweeter/"+id);
		ref.update({
			name:$scope.tweeter.name,
			text:$scope.tweeter.text,
		})
		.then(
			function(ref){
				$scope.tweeter.name= "";
				$scope.tweeter.text = "";
				$scope.msg3= "updated successfully.";
				window.setTimeout(function(){
					$scope.$apply(function(){
						
					})
				},100);
				window.setTimeout(function(){
					$scope.$apply(function(){
						$scope.msg3 = false;
					})
				},2000)			}
			,function(error){
				console.log(error);
			}
		);
	}

	
});