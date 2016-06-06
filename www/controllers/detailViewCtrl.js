app.controller('detailViewCtrl', ['$scope', '$routeParams', 'Item', function($scope, $routeParams, Item){
		var object;
		var id = $routeParams.id;
	  Item.getById({_id: id}, function(data) {
    	$scope.item = data;
    	object += data;
			$scope.backgrounds = { image: [data.media[0]]};
			$scope.carouselCaption = { title: data.title, text1: data.categories }
			console.log($scope.backgrounds);
  	});
  	console.log(object);

}]);