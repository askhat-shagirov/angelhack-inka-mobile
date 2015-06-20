var masterApp = angular.module("masterApp");

masterApp.service("loginService", function ($http) {
    this.login = function () {
		$http.get("http://172.30.41.191:8080/api/user/item")
        .success(function (data) {
            console.log(data);
        }).error(function (error) {
    		console.log("on Error called");
    	});
    };

});