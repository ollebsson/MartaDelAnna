app.controller('detailViewCtrl', ['$scope', '$routeParams', 'Item', function($scope, $routeParams, Item){
		var object;
		var id = $routeParams.id;
	  Item.getById({id: id}, function(data) {
    	$scope.item = data;
			$scope.carouselCaption = { title: data.title, text1: data.categories };
			$scope.backgrounds = { image: [$scope.item.media[0]]};
			console.log($scope.backgrounds);
    	console.log(data.media.length);

			// var i = 0;                     //  set your counter to 1
   //    var restartCounter = data.media.length;

			// function myLoop () {
			// 	$scope.slideShow = data.media[0];           //  create a loop function
			//    setTimeout(function () {    //  call a 3s setTimeout when the loop is called
			//       $scope.slideShow = data.media[i];        //  your code here
			//       i++;                     //  increment the counter
			//       if (i < restartCounter) {            //  if the counter < 10, call the loop function
			//          myLoop();             //  ..  again which will trigger another 
			//       }
			//                            //  ..  setTimeout()
			//    }, 1000)
			// }
			var i = 0;
			var a;
			        // $scope.$watch('text', function() {})
        // console.log($scope.backgrounds);

			restartCounter = data.media.length;
			setInterval(function() {
				// for (var i = 0; i < data.media.length; i++) {
				// 	Things[i]
				// }
					i++;
					if(i === data.media.length) {
						i = 0;
					}
					$scope.slideShow = data.media[i];
					 // $scope.$watch('slideShow', function() {

					 // }
					console.log(i);
					console.log(data.media[i]);
			}, 5000);
			console.log($scope.slideShow);



  	});


}]);