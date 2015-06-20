var shopGenie = angular.module("shopGenie");
shopGenie.controller("loginController", function ($scope, $q, $location, $rootScope, dataService, $http) {
    $scope.text = "Let's hack!";
    $scope.userType = "";
    $scope.render = function(){
    	
    };
    var un = document.getElementById("log_username");
    var pd = document.getElementById("log_pwd");
    $scope.onLoginButtonClicked = function(evt){

        var string = un.value+":"+pd.value;
        $rootScope.authString = window.btoa(string);
        console.log("Encoded Data :: "+ $rootScope.authString);
        var $defered;
        var userURL = $rootScope.mainPath + "api/user";
        //$defered = dataService.GET(userURL, $scope.onLoginSucess, $scope.onLoginFailure);
        $scope.onLoginSucess();
    };
    $scope.onLoginSucess = function(data){
        console.log("Data Called ::: " + data);
        $rootScope.typeOfUser = "existing";
        $scope.userType = "SELLER";
        if($scope.userType == "BUYER"){
            $location.path("/wishlist");
        }else if($scope.userType == "SELLER"){
            $location.path("/seller");
        }
        
    };
    $scope.onLoginFailure = function(){
    	console.log("Login Failed");
    }
});