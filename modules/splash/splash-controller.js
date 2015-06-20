var shopGenie = angular.module("shopGenie");
shopGenie.controller("splashController", function ($scope, $location, $timeout, appService, $rootScope) {
    // Variable Deceleration Goes Here
    $rootScope.pageHeader = "Splash";
    $timeout(function(){
        $location.path("/login");
    }, 1000);

});