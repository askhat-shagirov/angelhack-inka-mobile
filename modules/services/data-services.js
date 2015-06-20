var shopGenie = angular.module("shopGenie");
shopGenie.service("dataService", function ($http, $q, $rootScope) {

    this.GET = function(_urlToGet, _successCall, _errorCall){
        var myDeferedObj = $q.defer();
        myDeferedObj =
    	$http.get(_urlToGet, {
                headers: {'Authorization': 'Basic '+$rootScope.authString}
            })
    	.success(function(_data) {
             _successCall(_data);
    	})
    	.error(function(_data, _status) {
            _errorCall(_data, _status);
    	});
        return myDeferedObj;
    };
    this.POST = function(_urlToPost, _dataToSend, _successCall, _errorCall){
    	$http.post(_urlToPost, _dataToSend)
    	.success(function(_data){
    		_successCall(_data);
    	})
    	.error(function(_data, _status){
    		 _errorCall(_data, _status);
    	});
    };
});