app.controller('product', ['$scope', 'Item', function($scope, Item){
	$scope.backgrounds = { image: ["img/backgrounds/portfolio.jpg"] };
	$scope.carouselCaption = { title: "PORTFOLIO", text1: "PRODUCTS" };

	function loadProduct(data) {
	  var product = data || Item.get({categories:"PRODUCT"},function(data){

	  $scope.product = product;
	  });
	}

	loadProduct();

}]);