app.controller('form', ['$scope', function($scope){
	$scope.master = {};

	$scope.reset = function(form) {
		if (form) {
		  form.$setPristine();
		  form.$setUntouched();
		}
	$scope.customer = angular.copy($scope.master);
	};

	$scope.reset();

}]);