/*  JTScroll
07.05.2019 v 0.1
mail@itdix.net
*/


jQuery(document).ready(function(){
	var _HTML='<div class="butJTScroll"></div>';
	jQuery('body').append(_HTML);
	
	jQuery(window).scroll(function() {
		if(jQuery(this).scrollTop() != 0) {
			jQuery('.butJTScroll').fadeIn();
		} else {
			jQuery('.butJTScroll').fadeOut();
		}

	});

	jQuery('.butJTScroll').click(function() {
		jQuery('body,html').animate({scrollTop:0},800);
	});


 

});




