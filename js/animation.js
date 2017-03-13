


//Places people
var hiddenOnLoad = [
	"#productHeadline",
	"#infoHeadline",
	".info__copy--left"
]
TweenMax.set(hiddenOnLoad, {alpha:0});



//Little Trees

var controller = new ScrollMagic.Controller();

var tl = new TimelineMax();
tl.fromTo("#infoHeadline", 1, {alpha:0, y:100}, {alpha:1, y:0, ease: Power4.easeInOut});
tl.from(".littleTree", 1, {drawSVG:0, ease:Power1.easeInOut});
tl.from(".littleTrunk", 0.5, {drawSVG:0, ease:Power1.easeInOut});
tl.from(".bigTree", 0.5, {drawSVG:0, ease:Power1.easeInOut});
tl.from(".bigTrunk", 0.2, {drawSVG:0, ease:Power1.easeInOut});


var scene = new ScrollMagic.Scene({ triggerElement: "#trigger1", duration:250 })
				.setTween(tl) // trigger a TweenMax.to tween
				.addIndicators({name: "little trees(duration: 250)"}) // add indicators (requires plugin)
				.addTo(controller);




var gt = new TimelineMax();
gt.fromTo(".info__copy--left", 1, {alpha:0, x:1000}, {alpha:1, x:0, ease: Power4.easeInOut});
gt.from(".giantTree", 1, {drawSVG:0, ease:Power1.easeInOut});
gt.from(".giantTrunk", 0.5, {drawSVG:0, ease:Power1.easeInOut});

var scene = new ScrollMagic.Scene({ triggerElement: "#trigger2", duration:200 })
				.setTween(gt) // trigger a TweenMax.to tween
				.addIndicators({name: "giant tree(duration: 200)"}) // add indicators (requires plugin)
				.addTo(controller);

