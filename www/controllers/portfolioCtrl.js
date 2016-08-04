app.controller('portfolioCtrl',  ['$scope', 'Item', '$location', '$anchorScroll', function($scope, Item, $location, $anchorScroll){

	$scope.backgrounds = { image: ["img/backgrounds/portfolio.jpg"] };
	$scope.carouselCaption = { title: "PORTFOLIO", text1: "ALL CATEGORIES"};

}]);