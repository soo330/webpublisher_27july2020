// slideBtnBanner3.js

(function($){
  var IHS = $('.indicator_horizontal_slide')
  var indiUl = IHS.find('.indicator'); //ul
  var indiLi = indiUl.children('li');

  var slideWrap = IHS.find('.slide_wrap');
  var slideUl = slideWrap.children('ul');
  var slideLi = slideUl.children('li');
  var slideLiLink = slideLi.children('a');

  var permission=true;
  var indiSIN=0;
  var timed = 500;


  // ===============================================
  // slide_wrap 내부 a에 focus기능 강제 비처리

  slideLiLink.attr({'tabIndex': '-1'});

  // =============================================================================
  //indicator 클릭시 ul 이동 -> a에 focus 처리로 변경, 실제 배너에 a는 별도로 focus처리
  // 클릭 기능 일단 보류
  lidiLi.on('click', function(e){ e.preventDefault(); });


  indiLi.children('a').on('focus', function(e){
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
