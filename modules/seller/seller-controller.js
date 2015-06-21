var shopGenie = angular.module("shopGenie");
shopGenie.controller("sellerController", function ($scope, $q, dataService, $rootScope, $timeout, $localStorage) {
    $scope.text = "Let's hack!";
    $scope.selectedItem = "";
    $scope.userWishList = new Object();
    $scope.render = function(){
    	var listUrl = $rootScope.mainPath + "api/seller/wishes";
    	dataService.GET(listUrl, $scope.onWishListSucess, $scope.onWishListError)
    };
    $rootScope.$on("sellerData", function(event, data){
        $scope.userWishList = data;
    })
    $scope.onWishListSucess =  function(_data){
        console.log("On Success :: " + _data);
    };
    $scope.onWishListError = function(_error){
        console.log("On Error ::: "+ _error)
    };
    $scope.giveOffersTouser = function(evt, _text){
    	$scope.selectedItem = _text;
    };
    function getFromLocalStorage(){
        var myObj = JSON.parse($localStorage.sellerData);
        if($scope.userWishList != myObj){
            $scope.userWishListmyObj;
        }
        //$scope.sellerlistPoller();
        console.log("Data GOt");
    }
    $scope.sendOfferToUser = function(){
        var sendOfferUrl = $rootScope.mainPath + "";
        dataService.GET(sendOfferUrl, $scope.onOfferSendSucess, $scope.onOfferSendError)
    };
    $scope.onOfferSendSucess = function(){

    };
    $scope.onOfferSendError = function(){

    };

    $scope.sellerlistPoller = function(){
        
        $timeout(function(){
            getFromLocalStorage();
        }, 1500);
    	//var sellerListUrl = $rootScope.mainPath + "api/seller/wishes";
    	//dataService.GET(sellerListUrl, $scope.onSellerListSucess, $scope.onSellerListError);
    }
    $scope.onSellerListSucess = function(_data){
    	console.log("Seller Poll Sucess");
        $scope.userWishList = _data;
    	$timeout(function(){
    		$scope.sellerlistPoller();
    	}, 1000);
    };
    $scope.onSellerListError = function(){
    	console.log("ON SELLER LIST ERROR");
    }
    $scope.sellerlistPoller();
});