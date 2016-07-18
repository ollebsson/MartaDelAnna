app.controller('aboutCtrl', ['$scope', function($scope){
	$scope.backgrounds = { image: ["img/backgrounds/about.jpg"] };
	$scope.carouselCaption = { title: "MARTA DELL'ANNA", text1: "ABOUT & SERVICE" };

	$scope.portrait = 'background-image:' + 'url("img/portrait/marta.jpg");';
}]);