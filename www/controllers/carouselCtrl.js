app.controller('carouselCtrl',  ['$scope', 'Item', '$routeParams',  function($scope, Item, $routeParams){
	$scope.myInterval = 4000;

	var slides = $scope.slides = [];
	var currIndex = 0;

	var object;
	var ids = $routeParams.id;
	$scope.item;
	Item.getById({id: ids}, function(data) {

		$scope.item = data;
			// $scope.carouselCaption = { title: data.title, text1: data.categories };
			// $scope.backgrounds = { image: [$scope.item.media[0]]};
			console.log($scope.item);

	});

	$scope.addSlide = function(id) {

		slides.push({
			image: $scope.item.media[id],
			id: currIndex++
		});
		console.log(currIndex);
		// console.log(slides);
	};

	$scope.$watch('item', function() {

		if($scope.item !== undefined) {
			for (var i = 0; i < $scope.item.media.length; ++i) {
			  $scope.addSlide(i);

			}
			if($scope.item.video) {
				slides.push({
					video: $scope.item.video,
					id: currIndex++
				});
				console.log(slides);
			}
		}
	});
}]);