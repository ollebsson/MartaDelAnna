app.directive('carousel', [function() {

  return {
    templateUrl: '/directives/carousel.html',
    controller: ['$scope', '$route', function($scope, $route) {
        $scope.active = 0;
        var slides = $scope.slides = [];
        $scope.myInterval = 20000;
        var currIndex = 0;

        $scope.text = $scope.carouselCaption;
        // $scope.noWrapSlides = false;
        function getSlideHeight() {
                return (($(window).height() - parseInt($('body').css('marginTop')))/1.3);
        }
        var background = $scope.backgrounds;

        $scope.addSlide = function() {
          slides.push({
            imageStyle: {
              'background-image': 'url(' + background.image[i] + ')',
              height: getSlideHeight()
            },
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

        for (var i = 0; i < background.image.length; i++) {
          $scope.addSlide();
          console.log(slides)
        }
    }]
  };
}]);