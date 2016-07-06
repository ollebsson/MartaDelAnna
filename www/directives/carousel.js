app.directive('carousel', [function() {

  return {
    templateUrl: '/directives/carousel.html',
    controller: ['$scope', '$route', function($scope, $route) {
        var slides = $scope.slides = [];
        $scope.myInterval = 10000;
        var currIndex = 0;

        var caption = $scope.carouselCaption;
        var background = $scope.backgrounds;
        $scope.noWrapSlides = false;
        $scope.noPause = false;
        // $scope.noTransition = true;

        function getSlideHeight() {
                return (($(window).height() - parseInt($('body').css('marginTop')))/1.3);
        }

       
        $scope.addSlide = function() {
          slides.push({
            imageStyle: {
              'background-image': 'url(' + background.image[currIndex] + ')',
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
          !$scope.$$phase && $scope.$apply();
        }
        $scope.$watchGroup(['backgrounds', 'carouselCaption'], function() {
          background = $scope.backgrounds;
          caption = $scope.carouselCaption;
          if(background)  {  
            for (var i = 0; i < background.image.length; i++) {
              $scope.addSlide();
              
            }
          }
          if(caption) {
            $scope.text = caption;
          }


        });

        $scope.$on('$destroy', function() {
          $(window).off('resize', resizer);
        });


    }]
  };
}]);