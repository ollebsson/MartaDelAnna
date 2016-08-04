app.controller('navbarController', ['$scope', function($scope){
  $scope.isCollapsed = true;

  $scope.clickCollapse = function() {
  	$scope.isCollapsed = true;
  	console.log("clicked");
  }

}]);