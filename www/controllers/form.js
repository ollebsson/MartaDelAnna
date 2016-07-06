app.controller('form', ['$scope', function($scope){
	$scope.master = {};

	$scope.update = function(customer) {
	$scope.master = angular.copy(customer);
	};

	$scope.reset = function(form) {
	if (form) {
	  form.$setPristine();
	  form.$setUntouched();
	}
	$scope.customer = angular.copy($scope.master);
	};

	$scope.reset();
	
}]);