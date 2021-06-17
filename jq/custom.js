$(document).ready(function(){
	$(window).on("scroll",function(){
		var scrolldistance = $(window).scrollTop();
		var $header = $(".js-header");
		if (scrolldistance>80) {
			$header.addClass("headercolor");
		}

		else{
			$header.removeClass("headercolor");
		}



	})


	new WOW().init();



$(window).stellar();

})
