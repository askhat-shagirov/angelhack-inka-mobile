var shopGenie = angular.module("shopGenie");
shopGenie.controller("loginController", function ($scope, $q, $location, dataService) {
    $scope.text = "Let's hack!";
    
    $scope.render = function(){
    	
    };
    $scope.onLoginButtonClicked = function(evt){
        var $defered;
        var donatedListUrl = "http://172.30.41.191:8080/api/user/item";
        $defered = dataService.GET(donatedListUrl, $scope.onLoginSucess, $scope.onLoginFailure);
    };
    $scope.onLoginSucess = function(data){
        console.log("Data Called ::: " + data);
        $location.path("/wishlist");
    };
    $scope.onLoginFailure = function(){
    	console.log("Login Failed");
    }
});