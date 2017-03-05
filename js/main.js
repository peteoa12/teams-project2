
//Nav popout============================================
$(".menu").on("click", function() {
	$("nav").toggleClass("overlay");
});


//Menu animation========================================
$(".menu").on("click", function() {
	$(".top").toggleClass("clicked");
});

$(".menu").on("click", function() {
	$(".middle").toggleClass("clicked");
});

$(".menu").on("click", function() {
	$(".bottom").toggleClass("clicked");
});

//Menu back ground color===============================
$(window).scroll(function (event) {
    var scroll = $(window).scrollTop();

    if (scroll > 4){
    	$(".menu-container").css("background-color","rgba(24,38,80,0.5)");
    }else if(scroll < 4){
    	$(".menu-container").css("background-color","inherit");
    }
});
