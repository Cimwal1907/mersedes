$(function(){
	$('.desing-slider').slick({
		dots: false,
		slidesToShow: 4,
		variableWidth: true,
		prevArrow: '<img class="arrow arrow-left" src="images/arrow-left.svg" alt="arrow-left">',
		nextArrow: '<img class="arrow arrow-right" src="images/arrow-right.svg" alt="arrow-right">',
		responsive: [
			{
				breakpoint: 465,
				settings: {
					variableWidth: false,
					slidesToShow: 1,
					
				}
			}
		]
	});
});