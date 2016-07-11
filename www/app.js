// declare our angular app
// and it's dependencies
var app = angular.module("myApp", [
  'ngRoute',
  'ngResource',
  'ngTouch',
  'ui.bootstrap'
]);

app.config(["$routeProvider", "$locationProvider", function($routeProvider, $locationProvider){

	$routeProvider
	.when("/",{
		templateUrl: "templates/home.html",
		controller: "homeController"
	})
	.when("/portfolio",{
		templateUrl: "templates/portfolio.html",
		controller: "portfolioCtrl"
	})
	.when("/about",{
		templateUrl: "templates/about.html",
		controller: "aboutCtrl"
	})
	.when("/portfolio/interior",{
		templateUrl: "templates/interior.html",
		controller: "interior",
	})
	.when("/portfolio/scenography",{
		templateUrl: "templates/scenography.html",
		controller: "scenography",
	})
	.when("/portfolio/product",{
		templateUrl: "templates/product.html",
		controller: "product",
	})
	.when("/portfolio/:id",{
		templateUrl: "templates/detailView.html",
		controller: "detailViewCtrl",
	})
	.otherwise({
		templateUrl: "templates/home.html"
	});

	$locationProvider.html5Mode(true);
}]);