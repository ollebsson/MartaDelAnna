app.directive('carousel', [function() {

  return {
    templateUrl: '/directives/carousel.html',
    controller: ['$scope', '$route', '$location', function($scope, $route, $location) {

        var route = $location.url();
        console.log(route);
        var slides = $scope.slides = [];
        var currIndex = 0;
        var caption = $scope.carouselCaption;
        var background = $scope.backgrounds;
        $scope.myInterval = 10000;
        $scope.noWrapSlides = false;
        $scope.noPause = false;

        var slideDivider;
        var ui = parseInt($('#ui').css('height'));
        var width = parseInt($(window).width());



        var tabs = (getWindowHeight() * 0.2)/2;
        if(width < 700 && route === '/portfolio') {

            $scope.heading = parseInt((getWindowHeight() * 0.1)) + 'px';
            var headings = $scope.heading;
        }
        else {

             $scope.heading = parseInt(getWindowHeight() * 0.2) + 'px';
            var headings = $scope.heading;
        
        }
        // console.log(tabs);

        function getSlideHeight() {
                return ((($(window).height() - ui) - 20)*.8);
        }
        function getWindowHeight() {
                return (($(window).height() - parseInt($('body').css('marginTop'))) - 20);
        }

        $scope.addSlide = function() {
          slides.push({
            imageStyle: {
              'background-image': 'url(' + background.image[currIndex] + ')',
              height: getSlideHeight(slideDivider)
            },
            id: currIndex++
          });
        };

        function resizer() {
          $scope.slides.forEach(function(s) {
            s.imageStyle.height = getSlideHeight();

          });
          !$scope.$$phase && $scope.$apply();
        }

        $scope.$watch('backgrounds', function() {
          background = $scope.backgrounds;

          if(background) {

            for(var i = 0; i < background.image.length; i++) {

              $scope.addSlide();
            }
          }
        });
        $scope.$watch('carouselCaption', function(caption) {
          // caption = $scope.carouselCaption;

          if(caption) {
            $scope.text = caption;
          }
        });        
        $scope.$watch('heading', function(heading) {
          // heading = $scope.heading;

          if(heading) {
            $('.nav-pills').css('height', headings );
            console.log('heading', heading);
          }
        });

        $scope.$on('$destroy', function() {
          $(window).off('resize', resizer);
        });

       
    }]
  };
}]);