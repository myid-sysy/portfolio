$(document).ready(function(){
  //
  // //section full size
  // var winHeight=$(window).height();
  // $("section").height(winHeight);
  // $(".header").height(winHeight);

  $(".burger").click(function(){
    $(this).toggleClass("on");
    if($(this).hasClass("on")){
      $(".menu_list").animate({"left":0}, 400);
      // $(".overlay").fadeTo(300,0.4);
      // $(".overlay").animate({"left":"350px"}, 300);
      $(".menu_list").addClass("over");

    } else{
      $(".menu_list").animate({"left":"-350px"}, 400);
      // $(".overlay").fadeOut();
      // $(".overlay").animate({"left":0});
      $(".menu_list").removeClass("over");
    }

  });

  $('html').click(function(e) {
    if(!$(e.target).hasClass("over")) {
      $(".burger").removeClass("on");
      $(".menu_list").stop().animate({"left":"-350px"}, 250);
      $(".overlay").fadeOut();
   }
  });

  $('#t').t({

  speed:40,
  speed_vary:true,
  mistype:true,
  locale:'en',
  caret:true,
  blink:false,
  blink_perm:true,
  tag:'span',
  pause_on_click:false,
  repeat:false,

  // Callbacks
  init:function(elem){},
  typing:function(elem,chars_total,chars_left,char){},
  fin:function(elem){}

});



$(".tooltip").click(function(){
  $(this).addClass("blink");
  $(".tooltip-content").fadeIn().promise().done(function(){ // tooltip 페이드인 -> 페이드아웃
      this.fadeOut();
    });

});





});












// ---
