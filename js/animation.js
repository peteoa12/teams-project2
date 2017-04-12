


//Places people
var hiddenOnLoad = [
	"#productHeadline",
	"#infoHeadline",
	"#copy1",
	"#copy2",
	"#copy3",
	"#productBundle",
	"#productForm",
	"#submitBtn",
	"#arrowLayer",
	"#brandFill",
	"#sponsorLogo",
	".arrows_copy--top",
	".arrows_copy--bottom",
	".product-image",
	".product"
]
TweenMax.set(hiddenOnLoad, {alpha:0});


//Load screen animation
var tlIntro = new TimelineMax();

tlIntro.fromTo("#arrowLayer", 1, {alpha:0, rotation:0},{alpha:1, rotation:720, ease: Power1.SlowMo});
tlIntro.fromTo(".arrows_copy--top", 0.5, {alpha:0, y:-50},{alpha:1, y:0, ease: Power3.easeInOut});
tlIntro.fromTo("#sponsorLogo", 0.5, {alpha:0, x:50},{alpha:1, x:0, ease: Power2.easeInOut});
tlIntro.fromTo(".arrows_copy--bottom", 0.5, {alpha:0, y:50},{alpha:1, y:0, ease: Power1.easeInOut});
tlIntro.fromTo("#brandFill", 0.5, {alpha:0, x:-50},{alpha:1, x:0, ease: Power4.easeInOut});






// Scroll magic controller

var controller = new ScrollMagic.Controller();


// Time line 1

var tl0 = new TimelineMax();

tl0.staggerFromTo(".product", 0.4, {x:-100, alpha:0}, {x:0,alpha:1,ease:Back.easeOut});
tl0.staggerFromTo(".product-image", 0.6, {x:-100, alpha:0}, {x:0,alpha:1,ease:Back.easeOut}, 0.5);


var scene = new ScrollMagic.Scene({ triggerElement: "#trigger0", duration:220 })
				.setTween(tl0) // trigger a TweenMax.to tween
				// .addIndicators({name: "time line 0(duration: 220)"}) // add indicators (requires plugin)
								.addTo(controller);

// Time line 2

var tl1 = new TimelineMax();
tl1.fromTo("#infoHeadline", 1, {alpha:0, y:100}, {alpha:1, y:0, ease: Power4.easeInOut});
tl1.from(".littleTree", 1, {drawSVG:0, ease:Power1.easeInOut});
tl1.from(".littleTrunk", 0.5, {drawSVG:0, ease:Power1.easeInOut});
tl1.from(".bigTree", 0.5, {drawSVG:0, ease:Power1.easeInOut});
tl1.from(".bigTrunk", 0.2, {drawSVG:0, ease:Power1.easeInOut});


var scene = new ScrollMagic.Scene({ triggerElement: "#trigger1", duration:250 })
				.setTween(tl1) // trigger a TweenMax.to tween
				// .addIndicators({name: "time line 3(duration: 250)"}) // add indicators (requires plugin)
				.addTo(controller);



// Time line 3

var tl2 = new TimelineMax();
tl2.fromTo("#copy1", 1, {alpha:0, x:1000}, {alpha:1, x:0, ease: Power4.easeInOut});
tl2.from(".giantTree", 1, {drawSVG:0, ease:Power1.easeInOut});
tl2.from(".giantTrunk", 0.5, {drawSVG:0, ease:Power1.easeInOut});

var scene = new ScrollMagic.Scene({ triggerElement: "#trigger2", duration:270 })
				.setTween(tl2) // trigger a TweenMax.to tween
				// .addIndicators({name: "time line 2(duration: 270)"}) // add indicators (requires plugin)
				.addTo(controller);


// Time line 4

var tl3 = new TimelineMax();
tl3.fromTo("#copy2", 1, {alpha:0, x:-1000}, {alpha:1, x:0, ease: Power4.easeInOut});
tl3.from(".line1", 1, {drawSVG:0, ease:Power1.easeInOut});
tl3.from(".line2", 0.5, {drawSVG:0, ease:Power1.easeInOut});

var scene = new ScrollMagic.Scene({ triggerElement: "#trigger3", duration:220 })
				.setTween(tl3) // trigger a TweenMax.to tween
				// .addIndicators({name: "time line 3(duration: 220)"}) // add indicators (requires plugin)
				.addTo(controller);


// Time line 5

var tl4 = new TimelineMax();
tl4.fromTo("#copy3", 1, {alpha:0, x:-1000}, {alpha:1, x:0, ease: Power4.easeInOut});
tl4.from(".line3", 1, {drawSVG:0, ease:Power1.easeInOut});

var scene = new ScrollMagic.Scene({ triggerElement: "#trigger4", duration:220 })
				.setTween(tl4) // trigger a TweenMax.to tween
				// .addIndicators({name: "time line 4(duration: 220)"}) // add indicators (requires plugin)
				.addTo(controller);


// Time line 6

var tl5 = new TimelineMax();
tl5.fromTo("#productBundle", 1, {alpha:0, x:-1000}, {alpha:1, x:0, ease: Power4.easeInOut});
tl5.fromTo("#productForm", 1, {alpha:0, x:-1000}, {alpha:1, x:0, ease: Power4.easeInOut});
tl5.fromTo("#submitBtn", 1, {alpha:0, y:75}, {alpha:1, y:0, ease: Power4.easeInOut});

var scene = new ScrollMagic.Scene({ triggerElement: "#trigger5", duration:140 })
				.setTween(tl5) // trigger a TweenMax.to tween
				// .addIndicators({name: "time line 4(duration: 140)"}) // add indicators (requires plugin)
				.addTo(controller);




