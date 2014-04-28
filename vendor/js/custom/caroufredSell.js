
//------------------------------
//CaroufredSell
//------------------------------
jQuery(document).ready(function($){
  "use strict";
  $("#foo").carouFredSel({
    width: "100%",
    height: 240,
    items: {
      visible: 5,
      minimum: 1,
      start: 2
    },
    scroll: {
      items: 1,
      easing: "easeInOutQuad",
      duration: 500,
      pauseOnHover: true
    },
    auto: false,
    prev: {
      button: "#prev_btn",
      key: "left"
    },
    next: {
      button: "#next_btn",
      key: "right"
    },
    swipe: true
  });


  $("#foo2").carouFredSel({
    width: "100%",
    height: 240,
    items: {
      visible: 5,
      minimum: 1,
      start: 2
    },
    scroll: {
      items: 1,
      easing: "easeInOutQuad",
      duration: 500,
      pauseOnHover: true
    },
    auto: false,
    prev: {
      button: "#prev_btn2",
      key: "left"
    },
    next: {
      button: "#next_btn2",
      key: "right"
    },
    swipe: true
  });


});
