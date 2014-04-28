//------------------------------
//Counter
//------------------------------
jQuery(function($) {
  "use strict";
  $('.countprice').countTo({
    from: 5,
    to: 36,
    speed: 1000,
    refreshInterval: 50,
    onComplete: function(value) {
      console.debug(this);
    }
  });
  $('.counthotel').countTo({
    from: 1,
    to: 53,
    speed: 2000,
    refreshInterval: 50,
    onComplete: function(value) {
      console.debug(this);
    }
  });
});