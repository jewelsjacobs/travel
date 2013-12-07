/*global $:false */
/*global testData:false */
/*global Modernizr:false */


  
  
// ########################
// BACK TO TOP FUNCTION
// ########################


$(document).ready(function(){
"use strict";
	// hide #back-top first
	$("#back-top").hide();
	
	// fade in #back-top
	$(function () {
		$(window).scroll(function () {
			if ($(this).scrollTop() > 700) {
				$('#back-top').fadeIn();
			} else {
				$('#back-top').fadeOut();
			}
		});

		// scroll body to 0px on click
		$('#back-top a').click(function () {
			$('body,html').animate({
				scrollTop: 0
			}, 500);
			return false;
		});
		
				// scroll body to 0px on click
		$('#goto a').click(function () {
			$('body,html').animate({
				scrollTop: 600
			}, 500);
			return false;
		});
		
		
		$(".scroll").click(function(event){		
			event.preventDefault();
			$('html,body').animate({scrollTop:$(this.hash).offset().top - 0}, 500);
		});
		
		
		
		
		
	});
});
	
	
	