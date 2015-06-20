var shopGenie = angular.module("shopGenie",
    ["ngRoute", "ngDialog"]);

shopGenie.config(function ($routeProvider) {
    $routeProvider
        .when("/", {
            templateUrl : "/modules/splash/splash.html",
            controller : "splashController"
        })
        .when("/login", {
            templateUrl : "/modules/login/loginPage.html",
            controller : "loginController"
        })
        .when("/signup", {
            templateUrl : "/modules/signup/signup-page.html",
            controller : "signupController"
        })
        .when("/wishlist", {
            templateUrl: "/modules/wishlist/wishlist-page.html",
            controller: "wishlistController"
        })
        .when("/watuwantodo",{
            templateUrl : "/modules/watuwantodo/watuwantodo-page.html",
            controller : "watuwantodoController"
        })
        .otherwise({
            redirectTo: "/"
        });
});

