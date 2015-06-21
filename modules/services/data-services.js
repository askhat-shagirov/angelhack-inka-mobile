var shopGenie = angular.module("shopGenie");
shopGenie.service("dataService", function ($http, $q, $rootScope) {

    this.GET = function(_urlToGet, _successCall, _errorCall){
        var myDeferedObj = $q.defer();
        console.log("ON GET ::: " + $rootScope.authString);
        var config = {headers:  {
                'Authorization': 'Basic '+$rootScope.authString,
                'Accept': 'application/json;odata=verbose',
                'X-Testing' : 'testing',
                'Content-Type' : 'application/json'
            }
        };


        myDeferedObj =
    	$http.get(_urlToGet, {
            headers : {
                'Authorization': 'Basic '+$rootScope.authString,
                'content-type' : 'application/json'
            }
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
    	$http.post(_urlToPost, _dataToSend, {
            headers : {
                "content-type" : "application/json"
            }}
        )
    	.success(function(_data){
    		_successCall(_data);
    	})
    	.error(function(_data, _status){
    		 _errorCall(_data, _status);
    	});
    };
});