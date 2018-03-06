$('.carousel-container').each(function() {
	var carouselSelect = $(this);
	var totalItems = carouselSelect.find('.item').length;
	var currentIndex = carouselSelect.find('div.active').index() + 1;
	$('.counter').html(''+currentIndex+'/'+totalItems+'');
	$('.carousel').on('slid.bs.carousel', function () {
		currentIndex = $('div.active').index() + 1;
	$('.counter').html(''+currentIndex+'/'+totalItems+'');
});
});
