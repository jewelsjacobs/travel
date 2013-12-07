//------------------------------
//Change Tabs
//------------------------------
$(document).ready(function(){
  "use strict";
  function mySelectUpdate(){
    setTimeout(function (){
      $('.mySelectBoxClass').trigger('update');
    }, 500);
  }
  mySelectUpdate();

  $('.hotelstab2').removeClass('none');

  $( "#optionsRadios1" ).click(function() {
    "use strict";
    $('.hotelstab2').removeClass('none');
    $('.flightstab2').addClass('none');
    $('.vacationstab2').addClass('none');
    $('.carstab2').addClass('none');
    $('.cruisestab2').addClass('none');
    $('.flighthotelcartab2').addClass('none');
    $('.flighthoteltab2').addClass('none');
    $('.flightcartab2').addClass('none');
    $('.hotelcartab2').addClass('none');
    mySelectUpdate();
  });
  $( "#optionsRadios2" ).click(function() {
    "use strict";
    $('.hotelstab2').addClass('none');
    $('.flightstab2').removeClass('none');
    $('.vacationstab2').addClass('none');
    $('.carstab2').addClass('none');
    $('.cruisestab2').addClass('none');
    $('.flighthotelcartab2').addClass('none');
    $('.flighthoteltab2').addClass('none');
    $('.flightcartab2').addClass('none');
    $('.hotelcartab2').addClass('none');
    mySelectUpdate();
  });
  $( "#optionsRadios3" ).click(function() {
    "use strict";
    $('.hotelstab2').addClass('none');
    $('.flightstab2').addClass('none');
    $('.vacationstab2').removeClass('none');
    $('.carstab2').addClass('none');
    $('.cruisestab2').addClass('none');
    $('.flighthotelcartab2').addClass('none');
    $('.flighthoteltab2').addClass('none');
    $('.flightcartab2').addClass('none');
    $('.hotelcartab2').addClass('none');
    mySelectUpdate();
  });
  $( "#optionsRadios4" ).click(function() {
    "use strict";
    $('.hotelstab2').addClass('none');
    $('.flightstab2').addClass('none');
    $('.vacationstab2').addClass('none');
    $('.carstab2').removeClass('none');
    $('.cruisestab2').addClass('none');
    $('.flighthotelcartab2').addClass('none');
    $('.flighthoteltab2').addClass('none');
    $('.flightcartab2').addClass('none');
    $('.hotelcartab2').addClass('none');
    mySelectUpdate();
  });
  $( "#optionsRadios5" ).click(function() {
    "use strict";
    $('.hotelstab2').addClass('none');
    $('.flightstab2').addClass('none');
    $('.vacationstab2').addClass('none');
    $('.carstab2').addClass('none');
    $('.cruisestab2').removeClass('none');
    $('.flighthotelcartab2').addClass('none');
    $('.flighthoteltab2').addClass('none');
    $('.flightcartab2').addClass('none');
    $('.hotelcartab2').addClass('none');
    mySelectUpdate();
  });
  $( "#optionsRadios6" ).click(function() {
    "use strict";
    $('.hotelstab2').addClass('none');
    $('.flightstab2').addClass('none');
    $('.vacationstab2').addClass('none');
    $('.carstab2').addClass('none');
    $('.cruisestab2').addClass('none');
    $('.flighthotelcartab2').removeClass('none');
    $('.flighthoteltab2').addClass('none');
    $('.flightcartab2').addClass('none');
    $('.hotelcartab2').addClass('none');
    mySelectUpdate();
  });
  $( "#optionsRadios7" ).click(function() {
    "use strict";
    $('.hotelstab2').addClass('none');
    $('.flightstab2').addClass('none');
    $('.vacationstab2').addClass('none');
    $('.carstab2').addClass('none');
    $('.cruisestab2').addClass('none');
    $('.flighthotelcartab2').addClass('none');
    $('.flighthoteltab2').removeClass('none');
    $('.flightcartab2').addClass('none');
    $('.hotelcartab2').addClass('none');
    mySelectUpdate();
  });
  $( "#optionsRadios8" ).click(function() {
    "use strict";
    $('.hotelstab2').addClass('none');
    $('.flightstab2').addClass('none');
    $('.vacationstab2').addClass('none');
    $('.carstab2').addClass('none');
    $('.cruisestab2').addClass('none');
    $('.flighthotelcartab2').addClass('none');
    $('.flighthoteltab2').addClass('none');
    $('.flightcartab2').removeClass('none');
    $('.hotelcartab2').addClass('none');
    mySelectUpdate();
  });
  $( "#optionsRadios9" ).click(function() {
    "use strict";
    $('.hotelstab2').addClass('none');
    $('.flightstab2').addClass('none');
    $('.vacationstab2').addClass('none');
    $('.carstab2').addClass('none');
    $('.cruisestab2').addClass('none');
    $('.flighthotelcartab2').addClass('none');
    $('.flighthoteltab2').addClass('none');
    $('.flightcartab2').addClass('none');
    $('.hotelcartab2').removeClass('none');
    mySelectUpdate();
  });

});