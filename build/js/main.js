// Sticky header

$(window).scroll(function () {
	var header = $('#header');
	
	if ($(window).scrollTop() >= 60) {
		header.addClass('sticky');
		
	} else {
		
		header.removeClass('sticky');
	}
});
