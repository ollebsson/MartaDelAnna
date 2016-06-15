app.controller('detailViewCtrl', ['$scope', '$routeParams', 'Item', function($scope, $routeParams, Item){
		var object;
		var id = $routeParams.id;
	  Item.getById({id: id}, function(data) {
    	$scope.item = data;
			$scope.carouselCaption = { title: data.title, text1: data.categories };
			$scope.backgrounds = { image: [$scope.item.media[0]]};

					// Lower carousel
			var i = 0;
			var restartCounter = data.media.length;
      $scope.slideShow = 'background-image:' + 'url("' + data.media[0] + '");';
			$scope.$watch('slideShow', function() {
				setInterval(function() {
					$scope.slideShow = 'background-image:' + 'url("' + data.media[i] + '");';
					++i;
					if(i === restartCounter) {
						i = 0;
					}
			}, 2000);
			});
  	});

	  Item.get({categories: "INTERIOR DESIGN"},function(data) {
	  	console.log(data);
	  })



}]);