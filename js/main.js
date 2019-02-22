$(function(){
	$('.slider').slick();
	$("#datepicker").datepicker();
	$('select').jselector();
	$('.fancy').fancybox();

	$('.menu_toggle').click(function(){
		if($(this).hesClass('active')){
			$('.main_menu nav').slideUp();
			$(this).removeClass('active');
		}
		else{
			$('.main_menu nav').slideDown();
			$(this).addClass('active');
		}
	});


});