var shopGenie = angular.module("shopGenie");
shopGenie.controller("signupController", function ($scope, $q, $rootScope, dataService) {
    $scope.text = "Let's hack!";
    
    $scope.render = function(){
    	
    };
    $scope.onRegisterBtnClicked = function(){
        var $defered;
        var signUpURL = $rootScope.mainPath + "registration/user";
        var seleOpt = "";
        if(document.getElementById("reg_buyer").checked){
            seleOpt = "buyer";
        }else if(document.getElementById("reg_seller").checked){
            seleOpt = "seller";
        }
        var datatoSend = {
            "email": document.getElementById("reg_email").value,
            "password": document.getElementById("reg_pwd").value,
            "name" : document.getElementById("reg_fullname").value,
            "userType" : seleOpt
        };
        console.log(JSON.stringify(datatoSend));
        $defered = dataService.POST(signUpURL, datatoSend, $scope.onSignUpSucess, $scope.onSignUpFailure);
    };




    $scope.onSignUpSucess = function(_data){

    };
    $scope.onSignUpFailure = function(_data){
    	
    }
});