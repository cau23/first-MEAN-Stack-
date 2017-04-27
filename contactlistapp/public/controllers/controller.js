var myApp = angular.module('myApp', []);
	myApp.controller('AppCtrl', ['$scope', '$http', function($scope, $http) {
	console.log("hello world from controller");

	$http.get('/contactlist').then(function (response) {
		//console to test our code
		console.log("I got the data I requested");
		// $scope below will put the data in our HTML or our browser
		$scope.contactlist = response.data;
	});

}]);