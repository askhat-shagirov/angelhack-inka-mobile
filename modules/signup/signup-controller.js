var shopGenie = angular.module("shopGenie");
shopGenie.controller("signupController", function($scope, $q, $rootScope, dataService, $location, $timeout) {
    $scope.text = "Let's hack!";

    $scope.render = function() {

    };
    var catList = document.getElementById("reg_catlist");

    $scope.onBuyerSelected = function(){
        catList.className = catList.className.replace("show", "hide");
    };
    $scope.onSellerSelected = function(){
        catList.className = catList.className.replace("hide", "show");
    };
    $scope.onRegisterBtnClicked = function() {
        var $defered;
        var signUpURL = $rootScope.mainPath + "registration/user";
        var seleOpt = "";
        if (document.getElementById("reg_buyer").checked) {
            seleOpt = "BUYER";
        } else if (document.getElementById("reg_seller").checked) {
            seleOpt = "SELLER";
        }
        var checkBox = document.getElementsByClassName("reg_checkboxcatgrp");
        var catSelList = [];
        for(var i = 0; i < checkBox.length; i++){
            var ele = checkBox[i];
            if(ele.checked) catSelList.push(ele.value);
        }
        var datatoSend = {
            "email": document.getElementById("reg_email").value,
            "password": document.getElementById("reg_pwd").value,
            "name": document.getElementById("reg_fullname").value,
            "userType": seleOpt,
            "categories" : catSelList
        };
        console.log(JSON.stringify(datatoSend));
        $scope.onSignUpSucess();
        //$defered = dataService.POST(signUpURL, datatoSend, $scope.onSignUpSucess, $scope.onSignUpFailure);
    };
    $scope.onSignUpSucess = function(_data) {
        console.log("Sign Up Sucess here");
        $rootScope.typeOfUser = "new";
        $location.path("/wishlist");
        return false;


        $timeout(function(){
            $scope.$apply(function () {
            $scope.message = "Timeout called!";
           
        });
            
        },1000);
        return false;
    };
    $scope.onSignUpFailure = function(_data) {
        console.log("Sign Up Failure");
    }
});