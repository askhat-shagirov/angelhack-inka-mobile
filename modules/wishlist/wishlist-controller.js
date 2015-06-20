var shopGenie = angular.module("shopGenie");
shopGenie.controller("wishlistController", function ($scope, $q, dataService, $location) {
    $scope.text = "Let's hack!";
    $scope.wishListItems = [];
    $scope.render = function(){
    	
    };
    $scope.addMoreItem = function(evt){

        var listContainer = document.getElementById("itemlistContainer");
        var listItem = listContainer.getElementsByClassName("listItems")[0];
        var cln = listItem.cloneNode(true);
        $scope.clearChildren(cln);
        listContainer.appendChild(cln);
    };
    var viewWishListCont = document.getElementById("viewwishlist");
    var addWishListCont = document.getElementById("addwishlist");
    var viewListAnchor = document.getElementById("viewlist_anchor");
    var addListAnchor = document.getElementById("addlist_anchor");
    $scope.onViewListClicked = function(evt){

        viewListAnchor.className = viewListAnchor.className + " active";
        addListAnchor.className = addListAnchor.className.replace("active", "");

        viewWishListCont.className = viewWishListCont.className.replace("hide", "show");
        addWishListCont.className = addWishListCont.className.replace("show", "hide");
    };
    $scope.onCreateListClicked = function(evt){

      addListAnchor.className = addListAnchor.className + " active";
      viewListAnchor.className = viewListAnchor.className.replace("active", "");

        viewWishListCont.className = viewWishListCont.className.replace("show", "hide");
        addWishListCont.className = addWishListCont.className.replace("hide", "show");
    };
    $scope.clearChildren = function(element) {
       for (var i = 0; i < element.childNodes.length; i++) {
          var e = element.childNodes[i];
          if (e.tagName) switch (e.tagName.toLowerCase()) {
             case 'input':
                switch (e.type) {
                   case "radio":
                   case "checkbox": e.checked = false; break;
                   case "button":
                   case "submit":
                   case "image": break;
                   default: e.value = ''; break;
                }
                break;
             case 'select': e.selectedIndex = 0; break;
             case 'textarea': e.innerHTML = ''; break;
             default: $scope.clearChildren(e);
          }
       }
    };
    $scope.getChildrenData = function(element){
        var obj= new Object();
        for (var i = 0; i < element.children.length; i++) {
          var e = element.children[i];
          if(e.tagName.toLowerCase() == "input" && e.type=="text"){
            var attr =  e.getAttribute("data-attr");
            obj[attr] = e.value;
          }
       }
       return obj;
    };
    $scope.onwishListDoneClicked = function(){

        $scope.getListItems();
        $location.path("/watuwantodo");
    };

    $scope.getListItems =function(){
        $scope.wishListItems = [];
        var listContainer = document.getElementById("itemlistContainer");
        var listItem = listContainer.getElementsByClassName("listItems");
        for (var i = 0; i < listItem.length; i++) {
            var data = $scope.getChildrenData(listItem[i]);
            $scope.wishListItems.push(data);
        } 
        console.log("Data :: " + $scope.wishListItems.length);
    };
    $scope.getWishList = function(){
        var $defered;
        var donatedListUrl = "http://172.30.41.191:8080/api/user/item";
        $defered = dataService.GET(donatedListUrl, $scope.onWishListSucess, $scope.onWishListError);
    };


    $scope.onWishListSucess = function(){

    };
    $scope.onWishListError = function(){
    	
    }
});