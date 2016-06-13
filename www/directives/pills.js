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
        for (var j = 4; j < 6; j++) {
          second.push(items[j]);
        }
        $scope.secondRow = second;

        var third = [];
        for (var k = 6; k < 8; k++) {
          third.push(items[k]);
        }
        $scope.thirdRow = third;

        // var fourth;
        // for (var l = 8; l < 9; l++) {
          // fourth.push(items[8]);
          $scope.fourthRow = items[8];
        // }
        // var fifth = [];
        // for (var m = 9; m < 10; m++) {
          // fifth.push(items[9]);
        // }
        $scope.fifthRow = items[9];
        });




      }
      loadItems();


      // $scope.firstRowStyle = {
      //   "background-image" : 
      // }


    }]
  };
}]);