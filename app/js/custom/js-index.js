
//------------------------------
//Nice Scroll
//------------------------------
		jQuery(document).ready(function() {
		"use strict";
			var nice = jQuery("html").niceScroll({
				cursorcolor:"#ccc",
				cursorborder :"0px solid #fff",			
				railpadding:{top:0,right:0,left:0,bottom:0},
				cursorwidth:"5px",
				cursorborderradius:"0px",
				cursoropacitymin:0,
				cursoropacitymax:0.7,
				boxzoom:true,
				autohidemode:false
			});  
			
			jQuery("#air").niceScroll({horizrailenabled:false});
			jQuery("#hotel").niceScroll({horizrailenabled:false});
			jQuery("#car").niceScroll({horizrailenabled:false});
			jQuery("#vacations").niceScroll({horizrailenabled:false});
			

			jQuery('html').addClass('no-overflow-y');
			
		});
	




