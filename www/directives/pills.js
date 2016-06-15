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

        $scope.sixthRow = items[10];

        $scope.seventhRow = items[11];

        $scope.eightRow = items[12];

        var ninth = [];
        for (var l = 13; l < 15; l++) {
          ninth.push(items[l]);
        }
        $scope.ninthRow = ninth;

        $scope.tenthRow = items[15];
        $scope.eleventhRow = items[16];
        });


        // var sixth = [];
        // for (var k = 10; k < ; k++) {
        //   sixth.push(items[k]);
        // }
        // $scope.sixthRow = sixth;




      }

      function loadInterior(data) {
        var interior = data || Item.get({categories:"INTERIOR"},function(data){

        $scope.interior = interior;
        });
      }
      function loadScenography(data) {
        var scenography = data || Item.get({categories:"SCENOGRAPHY"},function(data){

        $scope.scenography = scenography;
        });
      }
      function loadProduct(data) {
        var product = data || Item.get({categories:"PRODUCT"},function(data){

        $scope.product = product;
        });
      }
      loadItems();
      loadInterior();
      loadScenography();
      loadProduct();
      // $scope.firstRowStyle = {
      //   "background-image" : 
      // }


    }]
  };
}]);