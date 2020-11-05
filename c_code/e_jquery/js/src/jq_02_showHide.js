// jq_02_showHide.js

// (function($){})(jQuery);
(function($){

  var timed=1000;

  var box = $('.box');
  var boxPar = box.children('p');
  boxPar.css({'borderRadius': '1rem'});

  var part = $('.part');
  var partUl = part.children('ul');
  var showHide = partUl.children('.show_hide');
  var fade = partUl.children('.fade');
  var slide = partUl.children('.slide');
  var className = partUl.children('.class_name');
  var other = partUl.children('.other');


  // animation 기법을 쓰는 아이들은 if(){} callBack function이 가능하다
  // show-hide =================================
  var shBtn = showHide.children('button');
  shBtn.eq(0).on('click', function(e){
    e.preventDefault();
    boxPar.stop().show(timed);
  });

  shBtn.eq(1).on('click', function(e){
    e.preventDefault();
    boxPar.stop().hide(timed);
  });

  shBtn.eq(2).on('click', function(e){
    e.preventDefault();
    boxPar.stop().toggle(timed);
  });

  //fade ===========================================

  var shBtn2 = fade.children('button');
  shBtn2.eq(0).on('click', function(e){
    e.preventDefault();
    boxPar.fadeIn(timed);
  });

  shBtn2.eq(1).on('click', function(e){
    e.preventDefault();
    boxPar.fadeOut(timed);
  });

  shBtn2.eq(2).on('click', function(e){
    e.preventDefault();
    boxPar.fadeToggle(timed);
  });

  // slide ===========================================

  var shBtn3 = slide.children('button');
  shBtn3.eq(0).on('click', function(e){
    e.preventDefault();
    boxPar.slideDown(timed);
  });

  shBtn3.eq(1).on('click', function(e){
    e.preventDefault();
    boxPar.slideUp(timed);
  });

  shBtn3.eq(2).on('click', function(e){
    e.preventDefault();
    boxPar.slideToggle(timed);
  });

  // className ===========================================

  var shBtn4 = className.children('button');
  shBtn4.eq(0).on('click', function(e){
    e.preventDefault();
    boxPar.removeClass('view');
  });

  shBtn4.eq(1).on('click', function(e){
    e.preventDefault();
    boxPar.addClass('view');
  });

  shBtn4.eq(2).on('click', function(e){
    e.preventDefault();
    boxPar.toggleClass('view');
  });

})(jQuery);