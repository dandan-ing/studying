jQuery(function($) {

	//Goto Top
	$('#back_top').click(function(event) {
		 event.preventDefault();
		 $('html, body').animate({
			 scrollTop: $("body").offset().top
		 }, 500);
	});	
	//End goto top		

	$(".header_box .sub-list").on('mouseover', function() {
		// 显示
		console.log('mouseover');
		$(this).find(".sub").show();
	}).on('mouseout', function() {
		console.log('mouseout');
		$(this).find(".sub").hide();
	});
});