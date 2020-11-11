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

  var typeTest = function(evt){
    console.log(evt)
  }

  // =============================================================================
  //indicator 클릭시 ul 이동 -> a에 focus 처리로 변경, 실제 배너에 a는 별도로 focus처리
  // 클릭 기능 일단 보류 'click focus'를 처리가 가능하기는 하지만,
  // 기능 하나하나 먹기 때문에 충돌이 일어난다 그래서 함수화 해주는것이 중요하다
  indiLi.children('a').on('focus', function(e){
    e.preventDefault();
    
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
    
  }); //li.on function()
  // ==============================================================
  // 클릭 기능 수행
  indiLi.on('click', function(e){
    e.preventDefault();
    var theLi = $(this);
    var propertyLink = theLi.children('a').attr('href');
    var thatPosition = $(propertyLink);

    // slideUl.stop().css({'marginLeft': indiSIN * -100 + '%'});
    slideUl.stop().css({'marginLeft': indiSIN * -100 + '%'}, function(){
      indiLi.eq(indiSIN).siblings().removeClass('action');
      indiLi.eq(indiSIN).addClass('action');
    });
    thatPosition.attr({'tabIndex':'1'});
    thatPosition.focus();
    // console.log(propertyLink);
  });

  // 클릭과 focus의 기능 같은경우 충돌이 일어남 특히 animate와 css가 합쳐지면 버그가 생기기때문에
  // 

  // ==============================================================
  //click시 색깔을 바꿔라
    indiLi.on('click', ['a'], function(e){
    e.preventDefault();
    var theLi = $(this);
    indiSIN =theLi.index();
    // indiUl.animate({'left' : slideN * -100 + '%'});

    indiLi.eq(indiSIN).siblings().removeClass('action');
    indiLi.eq(indiSIN).addClass('action');
  }); //indiLi.on()



})(jQuery);

// ==================================================================
// ==================================================================
