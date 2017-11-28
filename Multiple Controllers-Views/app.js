var myApp = angular.module('myApp', []);

myApp.controller('mainController', ['$scope', function($scope) {
    
    $scope.name='mainController';

    
}]);
myApp.controller('secondController', ['$scope', function($scope) {
    
    $scope.name='secondController';

    
}]);