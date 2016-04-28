'use strict';

var nextSlide = function() {
	var element = $('.carousel-indicators > li.active').data("slide-to");
	var list = $('.carousel-indicators > li');
	var toSelect = (element + 1) % list.length;
	list[toSelect].click();
};

var prevSlide = function() {
	var element = $('.carousel-indicators > li.active').data("slide-to");
	var list = $('.carousel-indicators > li');
	var toSelect = (element - 1) % list.length;
	if (toSelect === -1)
		toSelect = list.length - 1;
	list[toSelect].click();
};
