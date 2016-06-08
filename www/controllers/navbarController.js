app.controller('navbarController', ['$scope', function($scope){
  $scope.isCollapsed = true;

  console.log($scope.isCollapsed);

  $scope.clickCollapse = function() {
  	$scope.isCollapsed = true;
  	console.log("clicked");
  }

}]);