app.directive('pills', [function() {

  return {
    templateUrl: '/directives/pills.html',
    controller: ['$scope', 'item', function($scope, item) {

      function loadItems(data) {
        $scope.items = data || item.get(function(data) {
          console.log(data);
          console.log(data[0]);
          console.log(data[0].media);
          console.log($scope.items[0].media[0]);
        });
      }
      loadItems();

      // $scope.firstRowStyle = {
      //   "background-image" : 
      // }


    }]
  };
}]);