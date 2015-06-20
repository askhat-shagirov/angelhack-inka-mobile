var shopGenie = angular.module("shopGenie");
shopGenie.controller("appController", function ($scope, $timeout, appService, $location, $rootScope) {
    $rootScope.mainPath = "http://128.199.154.40:8080/shoptimizer/";
    $scope.getMainClass = function () {
        if ($scope.showSidebar) {
            return "slide";
        }
        return "";
    };

    $scope.$watch($scope.currentScreen, function (newVal, oldVal) {
        console.log("On Current Screen Change :: " + newVal + " :: " + oldVal);
    });
    $rootScope.back = function () {
        //should maintain a stack to store all the sub page.
        $rootScope.$broadcast("back");
    };

    $scope.onOverlayClicked = function (_evt) {
        $scope.showSidebar = false;
    };

    $scope.gotoPage = function (_url) {
        $scope.showSidebar = false;
        $location.path(_url);
    };

    $scope.render = function () {
        console.log("RENDER FUNCTION FROM APP CONTROLLER");
        var mpStatus = getParameterByName("mpstatus");
        console.log("MPSTATUS ::: " + mpStatus);
        if (mpStatus == "null" || mpStatus == undefined)
            return false;
        if (mpStatus == "success") {
            $location.path("/checkoutSuccess");
        } else {
            $location.path("/checkout");
        }
    };

    function getParameterByName(name) {
        var match = RegExp('[?&]' + name + '=([^&]*)').exec(window.location.search);
        return match && decodeURIComponent(match[1].replace(/\+/g, ' '));
    }

    $scope.render();
});
shopGenie.filter("percentage", function ($filter) {
    return function (input, decimals) {
        var decimals = decimals || 2;
        return $filter("number")(input * 100, decimals) + "%";
    };
});
shopGenie.config(['$httpProvider', function($httpProvider) {
        $httpProvider.defaults.useXDomain = true;
        delete $httpProvider.defaults.headers.common['X-Requested-With'];
    }
]);