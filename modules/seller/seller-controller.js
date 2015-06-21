var shopGenie = angular.module("shopGenie");
shopGenie.controller("sellerController", function ($scope, $q, dataService, $rootScope) {
    $scope.text = "Let's hack!";
    $scope.selectedItem = "";
    $scope.render = function(){
    	var listUrl = $rootScope.mainPath + "api/seller/wishes";
    	dataService.G
    };
    $scope.giveOffersTouser = function(evt, _text){
    	$scope.selectedItem = _text;
    };

});