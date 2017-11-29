var myApp = angular.module('myApp', ['ngRoute']);

myApp.config(function ($routeProvider) {
    
    $routeProvider
    
    .when('/', {
        templateUrl: 'pages/main.html',
        controller: 'mainController'
    })
    
    .when('/second', {
        templateUrl: 'pages/second.html',
        controller: 'secondController'
    })
    
    .when('/second/:num', {
        templateUrl: 'pages/second.html',
        controller: 'secondController'
    })
    
});

myApp.controller('mainController', ['$scope', '$log', function($scope, $log) {
    
    $scope.people = [
    {
        name:'John Doe',
        address:'555 Main St',
        city: 'New York',
        state:'NY',
        zip:'11111'
    },
    {
        name:'Eduardo T.',
        address:'333 Second St',
        city: 'Buffalo',
        state:'NY',
        zip:'222222'
    },
    {
        name:'Edgar A.',
        address:'111 Third St',
        city: 'Miami',
        state:'FL',
        zip:'33333'
    }

    ]
    $scope.formattedAddress= function(person){

        return person.address + ', '+ person.city + ', '+person.state + ', '+ person.zip;

    };
    
}]);

myApp.controller('secondController', ['$scope', '$log', '$routeParams', function($scope, $log, $routeParams) {
    
    
    
}]);


myApp.directive("searchResult", function(){
    return{
        //Restrictions: elements E, attribute A, comments: M, class: C
        restrict: 'AECM' ,
        templateUrl: 'directives/searchResult.html',
        replace: true,
        scope:{
            //normalize the attribute.
            personName:"@",
            personAddress:"@"
        }
    }
});

//pass an object
myApp.directive("searchResultObject", function(){
    return{
        //Restrictions: elements E, attribute A, comments: M, class: C
        restrict: 'AECM' ,
        templateUrl: 'directives/searchresultobject.html',
        replace: true,
        scope:{
            //normalize the object. = indicates 2 way binding.
            personObject:"=",
            //indicates it is a function
            formattedAddressFunction:"&"
        }
    }
});