// Sticky header

$(window).scroll(function () {
	var header = $('#header');
	
	if ($(window).scrollTop() >= 60) {
		header.addClass('sticky');
		$('.header__logo').addClass('sticky-logo');
		
	} else {
		
		header.removeClass('sticky');
		$('.header__logo').removeClass('sticky-logo');
	}
});
