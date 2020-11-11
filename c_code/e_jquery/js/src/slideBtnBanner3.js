// slideBtnBanner3.js

(function($){
  var IHS = $('.indicator_horizontal_slide')
  var indiUl = IHS.find('.indicator'); //ul
  var indiLi = indiUl.children('li');

  var slideWrap = IHS.find('.slide_wrap');
  var slideUl = slideWrap.children('ul');

  var permission=true;
  var indiSIN=0;
  var timed = 500;


  //indicator 클릭시 ul 이동
  indiLi.children('a').on('click', function(e){
    e.preventDefault();
    if(permission){
      permission = false;
      var theLi = $(this);
      indiSIN = theLi.parent().index();

      slideUl.stop().animate({'marginLeft': indiSIN * -100 + '%'}, function(){
        indiLi.eq(indiSIN).siblings().removeClass('action');
        indiLi.eq(indiSIN).addClass('action');
      });
      setTimeout(function(){
        permission=true;
      }, timed/5);

    }
    
  }); //li.on function()

    indiLi.on('click', ['a'], function(e){
    e.preventDefault();
    var theLi = $(this);
    indiSIN =theLi.index();
    // indiUl.animate({'left' : slideN * -100 + '%'});

    indiLi.eq(indiSIN).siblings().removeClass('action');
    indiLi.eq(indiSIN).addClass('action');
  });

})(jQuery);

// ==================================================================
// ==================================================================
