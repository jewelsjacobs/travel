//------------------------------
// List Hover Animations
//------------------------------
$(document).ready(function($){
  "use strict";
  function StartAnime2() {
    "use strict";
    var $wlist = $('.listitem').width();
    var $hlist = $('.listitem').height();

    $('.liover').css({
      "width":100+"%",
      "height":100+"%",
      "background-color":"#0099cc",
      "position":"absolute",
      "top":0+"px",
      "left":$wlist+"px",
      "opacity":0.5,
    });
    $('.fav-icon').css({
      "top":$hlist/2-11+"px",
      "left":-25+"px",
    });
    $('.book-icon').css({
      "top":$hlist/2-11+"px",
      "left":-25+"px",
    });

    $( ".listitem" )
      .mouseenter(function() {
        "use strict";
        $(this).find('.liover').stop().animate({ "left":10+"%","top":10+"%","width":80+"%","height":80+"%"  });
        $(this).find('.book-icon').stop().animate({ "left":$wlist/2+18+"px" });
        $(this).find('.fav-icon').stop().animate({ "left":$wlist/2-42+"px" },{ duration: 1000, queue: false });


      })
      .mouseleave(function() {
        "use strict";
        $(this).find('.liover').stop().animate({ "left":$wlist+"px","top":0+"px","width":100+"%","height":100+"%"  });
        $(this).find('.book-icon').stop().animate({ "left":-25+"px" },{ duration: 1000, queue: false });
        $(this).find('.fav-icon').stop().animate({ "left":-25+"px" });

      });

  }

  StartAnime2();

  $(window).resize(function() {
    "use strict";
    StartAnime2();
  });



});