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