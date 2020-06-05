(function($) {
	"use strict";

	$(document).ready(function() {
		/**-----------------------------
		 *  CTA Popup
		 * ---------------------------*/
		let cta = $('#ctaPopup');
		let modalClose = $('.ms-modal__cross');
		let modalOverlay = $('.ms-modal__overlay');
		if(cta.length) {
			cta.on('click', function() {
				$('.ms-modal').addClass('active');
			});
		}
		if(modalClose.length) {
			modalClose.on('click', function() {
				$('.ms-modal').removeClass('active');
			});
		}
		if(modalOverlay.length) {
			modalOverlay.on('click', function() {
				$('.ms-modal').removeClass('active');
			});
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
