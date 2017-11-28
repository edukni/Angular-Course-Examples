var myApp = angular.module('myApp', []);

myApp.controller('mainController', ['$scope', '$filter', function($scope, $filter) {
    
    $scope.handle = '';
    
    $scope.lowercasehandle = function() {
        return $filter('lowercase')($scope.handle);
    };
    
    $scope.characters = 5;
    
    // $scope.rules = [
      
    //     { rulename: "Must be 5 characters" },
    //     { rulename: "Must not be used elsewhere" },
    //     { rulename: "Must be cool" }
        
    // ];

    // USING API with JAVASCRIPT ASIDE
    var rulesrequest = new XMLHttpRequest();
    rulesrequest.onreadystatechange = function(){
       
        $scope.$apply(function(){
            if(rulesrequest.readyState == 4 && rulesrequest.status == 200){
                $scope.rules = JSON.parse(rulesrequest.responseText);
            }
        });

    }
    rulesrequest.open("GET", "https://jsonplaceholder.typicode.com/posts", true);
    rulesrequest.send();

}]);


myApp.controller('mainController2', ['$scope', '$filter','$http', function($scope, $filter,$http) {
    
    $scope.handle = '';
    
    $scope.lowercasehandle = function() {
        return $filter('lowercase')($scope.handle);
    };
    
    $scope.characters = 5;
    //USING API WITH ANGULAR HTTP REQUEST
    $http.get('https://jsonplaceholder.typicode.com/posts')
        .success(function(result){
            $scope.rules = result;
        })
        .error(function(data,status){
            console.log(data);
        });

    //SEND TO API BY POST, just example, not working post. 
    $scope.newRule = '';
    $scope.addRule = function(){
        $http.post('https://jsonplaceholder.typicode.com/posts', { newRule: $scope.newRule })
            .success(function(result){
                $scope.rules = result;
                $scope.newRule='';
            })
            .error(function(data,status){
                console.log(data);
            });
    };

    
    
}]);
