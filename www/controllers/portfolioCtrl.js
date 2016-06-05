app.controller('portfolioCtrl', ['$scope', 'item', function($scope, item){

	$scope.backgrounds = { image: ["img/backgrounds/portfolio.jpg"] };
	$scope.carouselCaption = { title: "PORTFOLIO"};

  function loadItems(data) {
    $scope.items = data || item.get(function(data) {
        console.log(data);
        }
    );
	}
	loadItems();
}]);