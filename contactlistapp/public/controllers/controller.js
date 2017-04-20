var myApp = angular.module('myApp', []);
	myApp.controller('AppCtrl', ['$scope', '$http', function($scope, $http) {
	console.log("hello world from controller");

	$http.get("/contactlist");

	person1 = {
		name: 'Clayton',
		email: 'claytonemail.com',
		number: '(111) 111-1111'
	};

	person2 = {
		name: 'Evelyn',
		email: 'evelynemail.com',
		number: '(222) 111-1111'
	};

	person3 = {
		name: 'Martha',
		email: 'marthaemail.com',
		number: '(615) 400-3121'
	};

	var contactlist = [person1, person2, person3];
	$scope.contactlist = contactlist;

}]);