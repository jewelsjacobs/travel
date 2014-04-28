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