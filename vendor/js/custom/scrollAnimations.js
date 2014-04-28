
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