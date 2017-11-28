var myApp = angular.module('myApp', ['ngRoute']);
myApp.config( function ($routeProvider){
	
	$routeProvider 
	
	.when('/',{ 
		templateUrl: 'pages/main.html',
		controller:  'mainController'
	})
	.when('/second/:num',{
		templateUrl: 'pages/second.html',
		controller: 'secondController'
	})
	.when('/second',{
		templateUrl: 'pages/second.html',
		controller: 'secondController'
	})	
});

myApp.controller('mainController', ['$scope','$location', function($scope,$location) {
    
	$scope.name='Main';

}]);
myApp.controller('secondController', ['$scope','$location','$routeParams', function($scope,$location,$routeParams) {
    
    $scope.name ='Main';
	$scope.num = $routeParams.num || 1;
	
}]);