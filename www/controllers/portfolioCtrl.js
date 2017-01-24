app.controller('portfolioCtrl',  ['$scope', 'Item', '$location', '$anchorScroll', function($scope, Item, $location, $anchorScroll){

	$scope.backgrounds = { image: ["img/backgrounds/portfolio.jpg"] };
	$scope.carouselCaption = { title: "PORTFOLIO", text1: "ALL CATEGORIES"};
	// console.log($scope.heading);
	// $('.nav-pills').css('height', $scope.heading );

	// $scope.watch('heading')
	// function getWindowHeight() {
	//         return (($(window).height() - parseInt($('body').css('marginTop'))) - 20);
	// }
	// $scope.heading = parseInt(getWindowHeight() * 0.2) + 'px';
	// var headings = $scope.heading;

	// console.log($('.nav-pills'))
	//     $('.nav-pills').css('height', headings );

}]);