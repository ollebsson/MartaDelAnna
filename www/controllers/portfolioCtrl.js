app.controller('portfolioCtrl',  ['$scope', 'Item', function($scope, Item){

	$scope.backgrounds = { image: ["img/backgrounds/portfolio.jpg"] };
	$scope.carouselCaption = { title: "PORTFOLIO"};

	Item.create([
		{
			title: "BIANCHI MALMÖ",
			categories: "INTERIOR DESIGN",
			architects: "MARTA DELL'ANNA, MARCUS JANSSON & ANNA E. BRORSSON",
			released: 2013,
			placed: "MALMÖ",
			client: "BIANCHI CAFÉ & CYCLES",
			paragraph1: "We wanted to show that Bianchi stands for more than just bikes. Bianchi Café & Cycles is neither a restaurant, or a bike shop. It's both! In whatever order you decide! Here you can experience the real Italy, its magnificent kitchen and people. At Bianchi, it's all about connecting  people, bikes and fine dining!",
    	url: [],
    	media: [
				"img/items/bianchi0.jpg",
      	"img/items/bianchi1.jpg"
    	]
		},
		{
			title: "AKTIV ORTOPEDTEKNIK",
			categories: "INTERIOR DESIGN",
			architects: "MARTA DELL'ANNA, MARCUS JANSSON & ANNA E. BRORSSON",
			released: 2014,
			placed: "MALMÖ",
			client: "ORTOPEDTEKNISKT CENTRUM",
			paragraph1: "New interior especially designed to function for Aktiv Ortopedteknik in Malmö.",
			paragraph2: "You can read more about the project and Orthopaedic Technology Centre",
			pargraph3: "and you will find more detailed description of the project",
			paragraph4: "All photos taken by Martin Palvén",
			urlName: "here",
    	url: ["http://www.aktivortopedteknik.se/a.949/stories/ett-unikt-centrum.aspx",
      "http://www.aktivortopedteknik.se/documents/45/7/Articles/949/1/grand_opening_-_aktiv_ortopedteknik_malm___sv_.pdf"],
    	media: [
				"img/items/bianchi0.jpg",
      	"img/items/bianchi1.jpg"
    	]
		}


		])

}]);