// Sticky header

$(window).scroll(function () {
	
	if ($(window).width() > 750) {
		var header = $('#header');
		
		if ($(window).scrollTop() >= 60) {
			header.addClass('sticky');
			$('.header__logo').addClass('sticky--logo');
			
		} else {
			
			header.removeClass('sticky');
			$('.header__logo').removeClass('sticky--logo');
		}
	}
});

//Burger menu

$(document).ready(function () {
	$('#burger').click(function () {
		$('.header__nav').toggleClass('menu--open');
		$('.header__burger').toggleClass('burger--open');
		$('.header__close').toggleClass('close--hide');
		$('.header').css('background-color', 'var(--color-green-hover)');
		$('body').css('overflow', 'hidden');
		$('.header__content-logo span').css('background-color', 'var(--color-white)');
		$('.header__content-logo span').css('color', 'var(--color-black)');
		$('.header__content-search').css('display', 'none');
	});
	
	$('#close').click(function () {
		$('.header__nav').toggleClass('menu--open');
		$('.header__burger').toggleClass('burger--open');
		$('.header__close').toggleClass('close--hide');
		$('.header').css('background-color', 'var(--color-white)');
		$('body').css('overflow', '');
		$('.header__content-logo span').css('background-color', '');
		$('.header__content-logo span').css('color', '');
		$('.header__content-search').css('display', '');
	});
	
	$(window).resize(function () {
		if ($(window).width() > 750) {
			$('.header__nav').removeClass('menu--open');
			$('.header').css('background-color', '');
		} else {
			$('.header__nav').addClass('menu--open');
			$('.header').css('background-color', 'var(--color-green-hover)');
		}
	});
});


