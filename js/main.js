
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

//Redirect screen close button ========================

$("#close").on('click', function(event) {
    event.preventDefault();
    // $(this) .toggleClass("open");
    $(".redirect").removeClass("redirect-open");
});

$(".menu-link").on('click', function(event) {
    event.preventDefault();
    $(".redirect").addClass("redirect-open");
});


//Page loader screen==================================
setTimeout(function(){
    $('.load-screen').addClass('loaded');
}, 3000);

//Confirmation screen=================================

$("#submitBtn").on('click', function() {
    $(".confirmation").addClass("overlay");
    
});

$(".exit").on('click', function() {
    $(".confirmation").removeClass("overlay");
   
});

//Scroll to product section==========================
$("#scrollDown").on('click', function() {
    $(window).scrollTo("form", 40000);
});

//Find the anchor tag in the <div>

  $(".product").click(function() {
    console.log("click working!")
    window.location = $(this).find("a").attr("href"); 
    return false;
  });





