
// <><><><><><><><>NAV POP OUT<><><><><><><><><><><><><>
	$(".menu").on("click", function() {
		$("nav").toggleClass("overlay");
	});
//END NAV POP OUT=======================================

// <><><><><><><><><>menu ANIMATION<><><><><><><><><>
	$(".menu").on("click", function() {
		$(".top").toggleClass("clicked");
	});

	$(".menu").on("click", function() {
		$(".middle").toggleClass("clicked");
	});

	$(".menu").on("click", function() {
		$(".bottom").toggleClass("clicked");
	});
// END menu==========================================