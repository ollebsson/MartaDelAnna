app.controller('scenography', ['$scope', 'Item', function($scope, Item){
	$scope.backgrounds = { image: ["img/backgrounds/portfolio.jpg"] };
	$scope.carouselCaption = { title: "PORTFOLIO", text1: "SCENOGRAPHY" };

	function loadScenography(data) {
		
	  var scenographys = data || Item.get({categories:"SCENOGRAPHY"},function(data){

	  $scope.scenography = scenographys;

	  });
	}
        
	loadScenography();

}]);