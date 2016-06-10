app.directive('pills', [function() {

  return {
    templateUrl: '/directives/pills.html',
    controller: ['$scope', 'Item', function($scope, Item) {

      function loadItems(data) {
        var items = data || Item.get(function(data) {
          console.log(data);
        // First row 
        var first = [];
        for (var i = 0; i < 4; i++) {
          first.push(items[i]);
        }
        $scope.firstRow = first;

        // Second row

        var second = [];
        for (var i = 4; i < 6; i++) {
          second.push(items[i]);
        }
        $scope.secondRow = second;
        });
      }
      loadItems();

      // $scope.firstRowStyle = {
      //   "background-image" : 
      // }


    }]
  };
}]);