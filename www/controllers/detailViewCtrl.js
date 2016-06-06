app.controller('detailViewCtrl', ['$scope', '$routeParams', 'Item', function($scope, $routeParams, Item){

		var id = $routeParams.id;
	  Item.getById({_id: id}, function(data) {
    	$scope.item = data;
  	});
}]);