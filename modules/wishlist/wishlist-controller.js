var shopGenie = angular.module("shopGenie");
shopGenie.controller("wishlistController", function($scope, $q, dataService, $location, $rootScope) {
    $scope.text = "Let's hack!";
    $scope.wishListItems = [];
    $scope.wishListFromServer = [];
    $scope.allWishListItems = [{"wishListName":"MNI","items":[{"name":"QWQ","qty":"WE","cat":"W"}]}];
    $scope.render = function() {
        if ($rootScope.typeOfUser == "new") {
            $scope.onCreateListClicked();
        } else {
            $scope.onViewListClicked();
        }
    };
    $scope.addMoreItem = function(evt) {
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
    var broadcastBtn = document.getElementById("btn_broadcast");
    var ontheflyBtn = document.getElementById("btn_onfly");
    $scope.onBroadCastClicked = function(){
       if(broadcastBtn.className.indexOf('active') < 0){
        broadcastBtn.className = broadcastBtn.className + " active";
       }else{
        broadcastBtn.className = broadcastBtn.className.replace("active", "");
       }
    };
    $scope.onOnTheFlyClicked = function(){
       if(ontheflyBtn.className.indexOf('active') < 0){
        ontheflyBtn.className = ontheflyBtn.className.trim() + " active";
       }else{
        ontheflyBtn.className = ontheflyBtn.className.replace("active", "");
       }
    };
    $scope.onViewListClicked = function() {
        viewListAnchor.className = viewListAnchor.className.replace("dummy", "active")
        addListAnchor.className = addListAnchor.className.replace("active", "dummy");
        viewWishListCont.className = viewWishListCont.className.replace("hide", "show");
        addWishListCont.className = addWishListCont.className.replace("show", "hide");
    };
    $scope.onCreateListClicked = function() {
        console.log(addListAnchor.className);
        addListAnchor.className = addListAnchor.className.replace("dummy", "active");
        viewListAnchor.className = viewListAnchor.className.replace("active", "dummy");
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
                        case "checkbox":
                            e.checked = false;
                            break;
                        case "button":
                        case "submit":
                        case "image":
                            break;
                        default:
                            e.value = '';
                            break;
                    }
                    break;
                case 'select':
                    e.selectedIndex = 0;
                    break;
                case 'textarea':
                    e.innerHTML = '';
                    break;
                default:
                    $scope.clearChildren(e);
            }
        }
    };
    $scope.getChildrenData = function(element) {
        var obj = new Object();
        for (var i = 0; i < element.children.length; i++) {
            var e = element.children[i];
            if (e.tagName.toLowerCase() == "input" && e.type == "text") {
                var attr = e.getAttribute("data-attr");
                obj[attr] = e.value;
            }
        }
        return obj;
    };
    $scope.onwishListDoneClicked = function() {

        $scope.getListItems();
        $location.path("/wishlist");
    };
    $scope.getListItems = function() {
        $scope.wishListItems = [];
        var listContainer = document.getElementById("itemlistContainer");
        var listItem = listContainer.getElementsByClassName("listItems");
        var wishListObj = new Object();
        wishListObj.wishListName = document.getElementById("addwishlst_name").value;
        var arrItems = new Array();
        for (var i = 0; i < listItem.length; i++) {
            var data = $scope.getChildrenData(listItem[i]);
            arrItems.push(data);
            
        }
        wishListObj.items = arrItems;
        $scope.allWishListItems.push(wishListObj);
        console.log("Data :: " + JSON.stringify($scope.wishListItems));
        $scope.onViewListClicked();
    };
    $scope.getWishList = function() {
        var $defered;
        var donatedListUrl = "http://172.30.41.191:8080/api/user/item";
        $defered = dataService.GET(donatedListUrl, $scope.onWishListSucess, $scope.onWishListError);
    };
    $scope.onWishListSucess = function() {

    };
    $scope.onWishListError = function() {

    };
    $scope.updateDropDownValue = function(evt){
        console.log(evt.currentTarget.text);
        document.getElementById("dropdwn_btn_txt").innerHTML = evt.currentTarget.text + "<span class='caret'></span>";
    };
    $(".dropdown-menu li a").click(function(){

      $(".btn:first-child").text($(this).text());
      $(".btn:first-child").val($(this).text());

   });
    $scope.render();
});