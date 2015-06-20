var shopGenie = angular.module("shopGenie");
   
shopGenie.controller("watuwantodoController", function ($scope, $q, dataService, $rootScope) {
    $scope.text = "Let's hack!";
    $scope.render = function(){
    	
    };



    $scope.getLocation = function() {
	    if (navigator.geolocation) {
	        navigator.geolocation.getCurrentPosition(showPosition);
	    } else { 
	        x.innerHTML = "Geolocation is not supported by this browser.";
	    }
	};

	function showPosition(position) {
	    var $defered;
	    var locURL = $rootScope.mainPath + "api/user/store/findNearByStores?lon="+position.coords.longitude+"&lat="+position.coords.latitude+"&itemCat=electronics_store&raduis=500";
	    $defered = dataService.POST(locURL, {}, $scope.onFindNowSucess, $scope.onFindNowFailure);
	}
	$scope.onFindNowSucess = function(data){
		console.log("on Sucess " + data)
	};
	$scope.onFindNowFailure = function(error){
		console.log("Error "+error);
	};
	$scope.getLocation();
	//http://localhost:8080/shoptimizer/api/user/store/findNearByStores?lon=114.13534899999999&lat=22.2834106&itemCat=electronics_store&radius=500
});