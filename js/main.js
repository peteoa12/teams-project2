
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

//Page loader screen==================================
setTimeout(function(){
    $('.load-screen').addClass('loaded');
}, 3000);

//Confirmation screen=================================

$("#submitBtn").on('click', function() {
    $(".confirmation").addClass("overlay");
    console.log("Form submitted");
});

$(".exit").on('click', function() {
    $(".confirmation").removeClass("overlay");
});

//Scroll to product section==========================
$("#scrollDown").on('click', function() {
    $(window).scrollTo("form", 40000);
});





