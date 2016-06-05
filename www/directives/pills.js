app.directive('pills', [function() {

  return {
    templateUrl: '/directives/pills.html',
    controller: ['$scope', function($scope) {
      
      $scope.tabs = [
          { title:'Dynamic Title 1', content:'Dynamic content 1' },
          { title:'Dynamic Title 2', content:'Dynamic content 2', disabled: true }
        ];

        $scope.alertMe = function() {
          setTimeout(function() {
            $window.alert('You\'ve selected the alert tab!');
          });
        };

        $scope.model = {
          name: 'Tabs'
        };
    }]
  };
}]);