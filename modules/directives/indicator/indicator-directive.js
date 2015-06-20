var masterApp = angular.module("masterApp");
masterApp.directive("indicator", function(){
    function linkFunc(scope, element, attr){

    }
    return {
        templateUrl: "/modules/directives/indicator/indicator.html",
        link: linkFunc
    };
});