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