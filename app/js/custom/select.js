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