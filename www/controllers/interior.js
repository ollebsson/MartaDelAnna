app.controller('interior', ['$scope','Item', function($scope, Item){

	$scope.backgrounds = { image: ["img/backgrounds/portfolio.jpg"] };
	$scope.carouselCaption = { title: "PORTFOLIO", text1: "INTERIOR" };

	function loadInterior(data) {
	  var interior = data || Item.get({categories:"INTERIOR"},function(data){

	  $scope.interior = interior;
	  });
	}

	loadInterior();

}]);