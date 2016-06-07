app.controller('detailViewCtrl', ['$scope', '$routeParams', 'Item', function($scope, $routeParams, Item){
		var object;
		var id = $routeParams.id;
	  Item.getById({id: id}, function(data) {
    	$scope.item = data;
			$scope.carouselCaption = { title: data.title, text1: data.categories };
    	console.log(data);
			console.log($scope.backgrounds);
			$scope.backgrounds = { image: [$scope.item.media[0]]};
  	});

}]);