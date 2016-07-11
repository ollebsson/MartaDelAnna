app.controller('portfolioCtrl',  ['$scope', 'Item', function($scope, Item){

	$scope.backgrounds = { image: ["img/backgrounds/portfolio.jpg"] };
	$scope.carouselCaption = { title: "PORTFOLIO", text1: "ALL CATEGORIES"};

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

        $scope.fourthRow = items[8];

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

      }

      loadItems();

	// Item.get({},function(data){if(!data.length){addItems();}});

	// function addItems() {
	// 	Item.create([
	// 		{
	// 			title: "BIANCHI MALMÖ",
	// 			categories: "INTERIOR DESIGN",
	// 			architects: "MARTA DELL'ANNA, MARCUS JANSSON & ANNA E. BRORSSON",
	// 			released: 2013,
	// 			placed: "MALMÖ",
	// 			client: "BIANCHI CAFÉ & CYCLES",
	// 			paragraph1: "We wanted to show that Bianchi stands for more than just bikes. Bianchi Café & Cycles is neither a restaurant, or a bike shop. It's both! In whatever order you decide! Here you can experience the real Italy, its magnificent kitchen and people. At Bianchi, it's all about connecting  people, bikes and fine dining!",
	//     	url: [],
	//     	media: [
	// 				"img/items/bianchi0.jpg",
	//       	"img/items/bianchi1.jpg"
	//     	]
	// 		},
	// 		{
	// 			title: "AKTIV ORTOPEDTEKNIK",
	// 			categories: "INTERIOR DESIGN",
	// 			architects: "MARTA DELL'ANNA, MARCUS JANSSON & ANNA E. BRORSSON",
	// 			released: 2014,
	// 			placed: "MALMÖ",
	// 			client: "ORTOPEDTEKNISKT CENTRUM",
	// 			paragraph1: "New interior especially designed to function for Aktiv Ortopedteknik in Malmö.",
	// 			paragraph2: "You can read more about the project and Orthopaedic Technology Centre",
	// 			pargraph3: "and you will find more detailed description of the project",
	// 			paragraph4: "All photos taken by Martin Palvén",
	// 			urlName: "here",
	//     	url: ["http://www.aktivortopedteknik.se/a.949/stories/ett-unikt-centrum.aspx",
	//       "http://www.aktivortopedteknik.se/documents/45/7/Articles/949/1/grand_opening_-_aktiv_ortopedteknik_malm___sv_.pdf"],
	//     	media: [
	// 				"img/items/aktiv0.jpg",
	//       	"img/items/aktiv1.jpg"
	//     	]
	// 		}


	// 	])
	// }
}]);