(function($) {
	"use strict";

	$(document).ready(function() {
		/**-----------------------------
		 *  Slider
		 * ---------------------------*/
		let sliderBg = $('.slider-bg');
		if(sliderBg.length) {
			sliderBg.slick({
				fade: true,
				arrows: false,
				mobileFirst: true,
				autoplay: true,
				autoplaySpeed: 6000,
				speed: 6000,
				pauseOnHover: false,
				pauseOnFocus: false
			})
		}
		/**-----------------------------
		 *  Navbar fix
		 * ---------------------------*/

		$(document).on(
			"click",
			"li.menu-item-has-children>a",
			function(e) {
				e.preventDefault();
			}
		);
		
	});
})(jQuery);

$(window).on('load', function() {

	/*-----------------
        preloader
    ------------------*/
	var preLoder = $(".preloader");
	preLoder.fadeOut(1000);
})
