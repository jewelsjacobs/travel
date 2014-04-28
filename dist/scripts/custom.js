//------------------------------
//Picker
//------------------------------
jQuery(function() {
  "use strict";
  jQuery( "#datepicker,#datepicker2,#datepicker3,#datepicker4,#datepicker5,#datepicker6,#datepicker7,#datepicker8" ).datepicker();
});

//------------------------------
//Custom select
//------------------------------
jQuery(document).ready(function(){
  "use strict";
  jQuery('.mySelectBoxClass').customSelect();

  /* -OR- set a custom class name for the stylable element */
  //jQuery('.mySelectBoxClass').customSelect({customClass:'mySelectBoxClass'});
});

function mySelectUpdate(){
  "use strict";
  setTimeout(function (){
    $('.mySelectBoxClass').trigger('update');
  }, 200);
}

$(window).resize(function() {
  "use strict";
  mySelectUpdate();
});
//------------------------------
//Add rooms
//------------------------------
function addroom2(){
  "use strict";
  $('.room2').addClass('block');
  $('.room2').removeClass('none');
  $('.addroom1').removeClass('block');
  $('.addroom1').addClass('none');

}
function removeroom2(){
  "use strict";
  $('.room2').addClass('none');
  $('.room2').removeClass('block');

  $('.addroom1').removeClass('none');
  $('.addroom1').addClass('block');
}
function addroom3(){
  "use strict";
  $('.room3').addClass('block');
  $('.room3').removeClass('none');

  $('.addroom2').removeClass('block');
  $('.addroom2').addClass('none');
}
function removeroom3(){
  "use strict";
  $('.room3').addClass('none');
  $('.room3').removeClass('block');

  $('.addroom2').removeClass('none');
  $('.addroom2').addClass('block');
}

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
			
			jQuery("#air2").niceScroll({horizrailenabled:false});
			jQuery("#hotel2").niceScroll({horizrailenabled:false});
			jQuery("#car2").niceScroll({horizrailenabled:false});
			jQuery("#vacations2").niceScroll({horizrailenabled:false});
			jQuery("#flighthotel2").niceScroll({horizrailenabled:false});
			jQuery("#cruise2").niceScroll({horizrailenabled:false});
			jQuery("#hotelcar2").niceScroll({horizrailenabled:false});
			jQuery("#flighthotelcar2").niceScroll({horizrailenabled:false});
			
			
			

			jQuery('html').addClass('no-overflow-y');
			
		});





//------------------------------
//slider parallax effect
//------------------------------

jQuery(document).ready(function($){
  "use strict";
  var $scrollTop;
  var $headerheight;
  var $loggedin = false;

  if($loggedin == false){
    $headerheight = $('.navbar-wrapper2').height() - 20;
  } else {
    $headerheight = $('.navbar-wrapper2').height() + 100;
  }


  $(window).scroll(function(){
    "use strict";
    var $iw = $('body').innerWidth();
    $scrollTop = $(window).scrollTop();
    if ( $iw < 992 ) {

    }
    else{
      $('.navbar-wrapper2').css({'min-height' : 110-($scrollTop/2) +'px'});
    }
    $('#dajy').css({'top': ((- $scrollTop / 5)+ $headerheight)  + 'px' });
    //$(".sboxpurple").css({'opacity' : 1-($scrollTop/300)});
    $(".scrolleffect").css({'top': ((- $scrollTop / 5)+ $headerheight) + 50  + 'px' });
    $(".tp-leftarrow").css({'left' : 20-($scrollTop/2) +'px'});
    $(".tp-rightarrow").css({'right' : 20-($scrollTop/2) +'px'});
  });

});

//------------------------------
//SCROLL ANIMATIONS
//------------------------------

jQuery(window).scroll(function(){
  "use strict";
  var jQueryiw = jQuery('body').innerWidth();

  if(jQuery(window).scrollTop() != 0){
    jQuery('.mtnav').stop().animate({top: '0px'}, 500);
    jQuery('.logo').stop().animate({width: '100px'}, 100);

  }
  else {
    if ( jQueryiw < 992 ) {
    }
    else{
      jQuery('.mtnav').stop().animate({top: '30px'}, 500);
    }


    jQuery('.logo').stop().animate({width: '120px'}, 100);

  }

  //Social
  if(jQuery(window).scrollTop() >= 300){
    jQuery('.social1').stop().animate({top:'0px'}, 100);

    setTimeout(function (){
      jQuery('.social2').stop().animate({top:'0px'}, 100);
    }, 100);

    setTimeout(function (){
      jQuery('.social3').stop().animate({top:'0px'}, 100);
    }, 200);

    setTimeout(function (){
      jQuery('.social4').stop().animate({top:'0px'}, 100);
    }, 300);

    setTimeout(function (){
      jQuery('.gotop').stop().animate({top:'0px'}, 200);
    }, 400);

  }
  else {
    setTimeout(function (){
      jQuery('.gotop').stop().animate({top:'100px'}, 200);
    }, 400);
    setTimeout(function (){
      jQuery('.social4').stop().animate({top:'-120px'}, 100);
    }, 300);
    setTimeout(function (){
      jQuery('.social3').stop().animate({top:'-120px'}, 100);
    }, 200);
    setTimeout(function (){
      jQuery('.social2').stop().animate({top:'-120px'}, 100);
    }, 100);

    jQuery('.social1').stop().animate({top:'-120px'}, 100);

  }

});
//------------------------------
//ROLLOVER
//------------------------------

var theSide = 'marginLeft';
var options = {};
options[theSide] = jQuery('.one').width()/2-15;
jQuery(".one")
  .mouseenter(function() {
    jQuery(".mhover", this).addClass( "block" );
    jQuery(".mhover", this).removeClass( "none" );
    jQuery(".icon", this).stop().animate(options, 100);
  })
jQuery(".one").mouseleave(function() {
  jQuery(".mhover", this).addClass( "none" );
  jQuery(".mhover", this).removeClass( "block" );
  jQuery(".icon", this).stop().animate({marginLeft:"0px"}, 100);
});




jQuery(document).ready(function(){
"use strict";
/* GETS 100% HEIGHT FOR FILTERS BG*/
//var jQuerypgc = jQuery('.pagecontainer').height();
//jQuery('.filters').css({'height':jQuerypgc+'px'});



});

// ########################
// BACK TO TOP FUNCTION
// ########################


jQuery(document).ready(function(){
"use strict";
	
	// hide #back-top first
	jQuery("#back-top").hide();
	
	// fade in #back-top
	jQuery(function () {
		jQuery(window).scroll(function () {
			if (jQuery(this).scrollTop() > 700) {
				jQuery('#back-top').fadeIn();
			} else {
				jQuery('#back-top').fadeOut();
			}
		});

		// scroll body to 0px on click
		jQuery('#back-top a').click(function () {
			jQuery('body,html').animate({
				scrollTop: 0
			}, 500);
			return false;
		});
		
				// scroll body to 0px on click
		jQuery('a#gotop2').click(function () {
			jQuery('body,html').animate({
				scrollTop: 0
			}, 500);
			return false;
		});
		
		var jQueryih = jQuery('body').innerHeight();
		
		jQuery(".scroll").click(function(event){		
			event.preventDefault();
			jQuery('html,body').animate({scrollTop:jQuery(this.hash).offset().top - jQueryih}, 1500);
		});
		
		
		
		
		
	});
});



