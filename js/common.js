$(function(){






/*common */

$(".nav-sel").mouseover(function(){
	$(this).find(".nav-data-list").show();
	$(this).addClass("nav-item-on");
}).mouseout(function(){
	$(this).find(".nav-data-list").hide();
	$(this).removeClass("nav-item-on");
});


/*common */

/* detail.html  */



$(".detail-main .nav-data-list").mouseover(function(){
	$(this).show();
	$(this).parent().addClass("nav-item-on");
}).mouseout(function(){
	$(this).hide();
	$(this).parent().removeClass("nav-item-on");
});



/* detail.html */
/* index.html  */
$(".inno-exper li").mouseenter(function(){
	$(this).addClass("on");
	$(this).find(".inno-exper-item").addClass("sacle_animated");
}).mouseleave(function(){
	$(this).removeClass("on");
	$(this).find(".inno-exper-item").removeClass("sacle_animated");
});

/* index.html  */

});







