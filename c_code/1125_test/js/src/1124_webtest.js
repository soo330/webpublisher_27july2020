// 1124_webtest.js

(function($){
  // 1124_webtest start
  // console.log($.fn);

  var viewBox= $('#viewBox');
  // 이미지 영역 -----------------
  var backImg = viewBox.find('.back_img'); //ul
  var backLi = backImg.find('li');
  var permission = true;
  var timed = 500;

  

  var backLiLast = backLi.eq(-1).clone(); //마지막 이미지인 li 복제
  backImg.prepend(backLiLast); //복제 요소 앞에 추가
  var reBackLi = backImg.find('li'); //복제후 전체갯수 재파악
  backImg.css({'left': -100 + '%', 'width': (reBackLi.length * 100) + '%'}); // ul 내부요소 크기변경
  reBackLi.css({'width': (100 / reBackLi.length) + '%' }); // li 내부요소 크기변경

  //슬라이드 버튼 ------------------
  var slide_indi = viewBox.find('.slide_indicator'); 
  var slide_btn = slide_indi.find('.slide_btn');
  var nextBtn = slide_btn.children('button').eq(0); // next버튼
  var prevBtn = slide_btn.children('button').eq(1); // prev 버튼
  // console.log(nextBtn, prevBtn);

  var slideN = 0;

  nextBtn.on('click', function(e){
    e.preventDefault(); // 기능 초기화
    if(permission){
      // 기능제어 요소
      permission = false;
    // 처음 한번씩만 작동하게 해준다
      if( slideN >= backLi.length-1){
        //
        slideN = -1;
        backImg.stop().css({'marginLeft': slideN * -100 + '%'});
        console.log(backLi.length);
      } // if slideN
      slideN +=1;
      backImg.stop().animate({'marginLeft': slideN * -100 + '%'});
      console.log(slideN)

      setTimeout(function(){
        permission = true;
      },timed);

      indiLi.eq(slideN).siblings().removeClass('action');
      indiLi.eq(slideN).addClass('action');

    } //if permission
  }); // nextBtn

  prevBtn.on('click', function(e){
    e.preventDefault();
    if(permission){
      permission =false;
      // 한번씩만 작동하게 해준다
      slideN -=1; // 거꾸로 페이지 넘기기
      backImg.stop().animate({'marginLeft': slideN * -100 + '%'}, function(){
        if( slideN <= -1 ){
          slideN = backLi.length-1; //원래 순서의 마지막 이미지로 넘어감
          backImg.stop().css({'marginLeft': slideN * -100 + '%'});
        } //if slideN
        setTimeout(function(){permission=true;},timed);
      }); //setTimeout

      indiLi.eq(slideN).siblings().removeClass('action');
      indiLi.eq(slideN).addClass('action');
    } //permission
  }); //prevBtn

  // 인디케이터 영역---------------  
  var indicator = viewBox.find('.slide_indicator');
  var indiLi = indicator.find('li');

  indiLi.on('click', function(e){
    e.preventDefault();
    var theLi = $(this); //$(this) click 했을때 선택되는 것'들' 중복되는값
    slideN = theLi.index(); //.index 순서를 확인하는 아이
    // console.log(theLi)
    indiLi.eq(slideN).siblings().removeClass('action');
    indiLi.eq(slideN).addClass('action');
  }); // indiLi

  indiLi.children('a').on('focus', function(e){
    e.preventDefault(); // 기능초기화
    var its = $(this);
    slideN = its.parents().index(); // li가 아닌 부모의 순서값을 가지고와야함
    backImg.stop().animate({'marginLeft':slideN * -100 + '%'});
    indiLi.eq(slideN).siblings().removeClass('action'); // indiLi의 slideN번째있는 형제들의 action태그를 제거
    indiLi.eq(slideN).addClass('action');
  }) //indiLi focus

  // 광고영역 일정시간마다 자동수행 및 hover시 일시정지

  var startInterval;
  var Start = function(){
    startInterval = setInterval(function(){
      nextBtn.trigger('click');
    }, timed * 5); // start Interval
  } //start (){}
  Start();
  var StopSlide = function(){
    clearInterval(startInterval);
  } //StopSlide

  viewBox.on({
    'mouseenter': StopSlide,
    'mouseleave': Start
  });

  var win = $(window);
  var headBox = $('#headBox');
  
  var contentBox = $('#contentBox');
  var topBtn = contentBox.find('.top_btn');
  var headOffset = headBox.offset().top;

  topBtn.hide();
  win.on('scroll', function(e){
    var winSt = win.scrollTop();
    if ( winSt > headOffset){
      headBox.css({'position': 'fixed', 'top':0, 'width': 100+'%'});
    }
    else{
      headBox.removeAttr('style');
    }

    if( winSt >= 300){
      topBtn.stop().fadeIn();
    }//if
    else{
      topBtn.stop().fadeOut();
    } //else
  }); //win on

  

  //jQuery end
})(jQuery);
