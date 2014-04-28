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

  jQuery(".hotelstab").niceScroll({horizrailenabled:false});
  jQuery(".flightstab").niceScroll({horizrailenabled:false});
  jQuery(".vacationstab").niceScroll({horizrailenabled:false});
  jQuery(".carstab").niceScroll({horizrailenabled:false});
  jQuery(".cruisestab").niceScroll({horizrailenabled:false});
  jQuery(".flighthotelcartab").niceScroll({horizrailenabled:false});
  jQuery(".flighthoteltab").niceScroll({horizrailenabled:false});
  jQuery(".flightcartab").niceScroll({horizrailenabled:false});
  jQuery(".hotelcartab").niceScroll({horizrailenabled:false});

  jQuery('html').addClass('no-overflow-y');

});