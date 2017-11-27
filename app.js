// MODULE
var angularApp = angular.module('angularApp', ['ngMessages','ngResource']);

// CONTROLLERS
angularApp.controller('mainController2', ['$scope', function ($scope) {
    $scope.name='Tony';
    $scope.occupation='Coder';
    
    $scope.getname=function(){
    	return 'John Doe';
    }
	// console.log($scope);

}]);

angularApp.controller('mainController', function ($scope, $log, $filter, $resource) {

	$scope.name="John";
	$scope.formattedname=$filter('uppercase')($scope.name);
	$log.info($scope.name);
	$log.info($scope.formattedname);
	$log.log($resource);
	// $log.log("This is .log");
	// $log.info("This is .info");
	// $log.warn("This is .warn");
	// $log.debug("This is .debug");
	// $log.error("This is .error");

});

angularApp.controller('mainController3',['$scope','$log','$filter','$resource','$timeout' ,function ($scope, $log, $filter, $resource,$timeout) {

	$scope.name='Tony';
	// $timeout(function() {
	// 	$scope.name='Everybody';
	// }, 3000);
}]);

//minified version
//angularApp.controller("mainController3",["$scope","$log","$filter","$resource",function(o,r,l,n){r.info(o)}]);


// CONTROLLERS
angularApp.controller('mainController4', ['$scope','$filter','$timeout', function ($scope,$filter,$timeout) {

	$scope.handle='';
	$scope.lowercasehandle = function(){
		return $filter('lowercase')($scope.handle);
	};

	$scope.characters=5;

	$scope.rules= [ 

		{rulename: "Must be 5 characters"},
		{rulename: "Must not be used elsewhere"},
		{rulename: "Must be cool"}

	];

	//monitor the cycle process of angular with watchers.
	// $scope.$watch('handle', function(newValue,oldValue){
	// 	console.info('Changed!');
	// 	console.log('Old ' + oldValue);
	// 	console.log('New ' + newValue);
	// });

	// setTimeout(function(){
		//make sure that angular execute
	// 	$scope.$apply(function(){
	// 		$scope.handle='newtwitterhandle';
	// 		console.log('scope changed');		
	// 	});
	// },3000);

		//using angular timeout service.
	// $timeout(function(){
	// 		$scope.handle='newtwitterhandle angular';
	// 		console.log('scope changed');		
	// },6000);


}]);


var searchPeople = function (firstname, lastname, height, age,occupation){
	return'Jane Doe';
}


//Print function parameters.
// console.log(angular.injector().annotate(searchPeople));


//DEPENDENCY INJECTION EXAMPLE, pass the object into the function. WITHOUT CREATING THE OBJECT INSIDE THE FUNCTION.
var Person = function(firstname, lastname){
	this.firstname=firstname;
	this.lastname=lastname;
}

function logPerson(person){
	console.log(john);
}

var john= new Person('John','Doe');
logPerson();


//
var things = [1,'2',3,function(){ alert('Hello') }];
// things[3]();
console.log(things);
