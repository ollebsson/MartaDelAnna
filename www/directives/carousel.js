app.directive('carousel', [function() {

  return {
    templateUrl: '/directives/carousel.html',
    controller: ['$scope', '$route', function($scope, $route) {
        $scope.active = 0;
        var slides = $scope.slides = [];
        $scope.myInterval = 20000;
        var currIndex = 0;
        // $scope.noWrapSlides = false;
        function getSlideHeight() {
                return (($(window).height() - parseInt($('body').css('marginTop')))/1.3);
        }

        $scope.addSlide = function() {
          slides.push({
            imageStyle: {
              'background-image': 'url(/img/backgrounds/img' + (currIndex) + '.jpg)',
              height: getSlideHeight()
            },
            text: ['Nice image','Awesome photograph','That is so cool','I love that'][slides.length % 4],
            id: currIndex++
          });
        };

        function resizer() {
          $scope.slides.forEach(function(s) {
            s.imageStyle.height = getSlideHeight();
            console.log("resize: " + s.imageStyle.height)
          });
        }

        !$scope.$$phase && $scope.$apply();
        $scope.$on('$destroy', function() {
          $(window).off('resize', resizer);
        });
        for (var i = 0; i < 2; i++) {
          $scope.addSlide();
          console.log(slides)
        }
    }]
  };
}]);