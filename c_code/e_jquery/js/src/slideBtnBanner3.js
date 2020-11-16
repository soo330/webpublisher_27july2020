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
    // console.log(evt.type);
    if(permission && evt.type === 'focus'){
      permission= false;
      console.log('포커스 처리되었음')
    } else if(permission && evt.type === 'click'){
      permission= false;
      console.log('클릭되었음');
    }else{
      console.log('...');
    }
    // switch(evt.type){
    //   case 'focus':
    //     case 'click':
    //       console.log('f');
    //       console.log('c');
    // }
  }
  

  // =============================================================================
  //indicator 클릭시 ul 이동 -> a에 focus 처리로 변경, 실제 배너에 a는 별도로 focus처리
  // 클릭 기능 일단 보류 'click focus'를 처리가 가능하기는 하지만,
  // 기능 하나하나 먹기 때문에 충돌이 일어난다 그래서 함수화 해주는것이 중요하다

  indiLi.children('a').on('focus click', function(e){
    e.preventDefault();

    // typeTest(e);
    // e.preventDefault();
    
    // permission = false;
    var theLi = $(this);
    indiSIN = theLi.parent('li').index();

    indiLi.eq(indiSIN).siblings().removeClass('action');
    indiLi.eq(indiSIN).addClass('action');
    // slideUl.stop().css({'marginLeft': indiSIN * -100 + '%'});

    if(e.type === 'focus'){
      slideUl.stop().animate({'marginLeft': indiSIN * -100 +'%'},timed);
    }else if(e.type === 'click'){
      setTimeout(function(){
        var thatLink = theLi.attr('href');
        $(thatLink).attr({'tabIndex': 0});
        // $(thatLink).parent('li').siblings().children('a').attr({'tabIndex': -1}); 아래처럼 써보자
        slideLi.eq(indiSIN).siblings().children('a').attr({'tabIndex':-1});
        $(thatLink).focus();
      },timed+10);
    } //if e.type focus 
    
    
  }); //li.on function()
  // ==============================================================
  // 클릭 기능 수행
  // indiLi.on('click', function(e){
  //   e.preventDefault();

  //   typeTest(e);

  //   var theLi = $(this);
  //   var propertyLink = theLi.children('a').attr('href');
  //   var thatPosition = $(propertyLink);

  //   indiLi.eq(indiSIN).siblings().removeClass('action');
  //   indiLi.eq(indiSIN).addClass('action');

  //   // slideUl.stop().css({'marginLeft': indiSIN * -100 + '%'});
  //   slideUl.stop().css({'marginLeft': indiSIN * -100 + '%'});
  //   thatPosition.attr({'tabIndex':'1'});
  //   thatPosition.focus();
  //   // console.log(propertyLink);
  // });

  // 클릭과 focus의 기능 같은경우 충돌이 일어남 특히 animate와 css가 합쳐지면 버그가 생기기때문에
  // 

  // ==============================================================
  //click시 색깔을 바꿔라
  //   indiLi.on('click', ['a'], function(e){
  //   e.preventDefault();
  //   var theLi = $(this);
  //   indiSIN =theLi.index();
  //   // indiUl.animate({'left' : slideN * -100 + '%'});

  //   indiLi.eq(indiSIN).siblings().removeClass('action');
  //   indiLi.eq(indiSIN).addClass('action');
  // }); //indiLi.on()



})(jQuery);

// ==================================================================
// ==================================================================
