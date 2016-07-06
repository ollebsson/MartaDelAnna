// the controller for the modal itself
// (separate from underlying view/directive)
app.controller('modalInstance', ['$scope', '$uibModalInstance', function($scope, $uibModalInstance) {

  $scope.ok = function() {

    $scope.notification = "Thank you! I'll contact you as soon as possible. Modal will close in a sec.";
    // user approves om seleted option
    // so send the selected option back to the myModal directive
    // (modalInstance.result.then(...))
    console.log("clicked");
    setTimeout(close, 4000);
    // modalInstance.result.then($scope.name, $scope.adress, $scope.zipCode, $scope.city, $scope.phone, $scope.email);
    function close() {
      $uibModalInstance.close($scope.customer);
    }

  };

  $scope.cancel = function() {
    // user does not approve/ignored us
    // so send nothing back to the myModal directive
    // (modalInstance.result.then(...))
    $uibModalInstance.dismiss();
  };
    // customer.create(data);
}]);