// main_viewBox_slide.js
(function($){
  // main_viewBox_slide start
  
  var viewBox = $('#viewBox');
  var backImg = viewBox.find('.back_img');
  var lastLi = backImg.find('li'); // 인디케이터 맨 마지막 li
  
  //viewArea 마지막 이미지 복제하기
  var backLiLast = lastLi.eq(-1).clone(); //마지막 복제
  backImg.prepend(backLiLast); // 복제요소 0앞부분에 추가하기
  var reLiLen = backImg.find('li'); // 복제 후 갯수 재파악
  // console.log(reLiLen); //-1번째로 복제된것을 알수 있음

  backImg.css({'marginLeft': -100+'%', 'width' : reLiLen.length * 100 + '%'}); // backImg 크기변경
  reLiLen.css({'width': (100/ reLiLen.length) +'%'}); //내부 li갯수많큼 크기 변경되게하기


  var textPart = viewBox.find('text_part');
  var textDl = textPart.find('dl');
  var actionDl = textDl.find('.action');

  var slideN = 0;
  var timed = 2000;
  var permission = true;


  // 인디케이터 컬러 ============================
  var indicator = viewBox.find('.slide_indicator');
  var indiLi = indicator.find('li');
  
  indiLi.on('click', function(e){
    e.preventDefault();
    var theLi = $(this); // click시 선택된 해당 li
    slideN = theLi.index(); // 선택된 li의 순번확인
    // console.log(theLi);

    backImg.stop().animate({'left': slideN * -100 + '%'});
    

    indiLi.eq(slideN).siblings().removeClass('action');// 선택된 li의 다른 형제li들에서 action 태그 제거
    indiLi.eq(slideN).addClass('action');
  }) //indiLi on click

  // 인디케이터 포커스 시 ==============
  indiLi.children('a').on('focus',function(e){
    e.preventDefault();
    var theLi = $(this);
    slideN = theLi.parent().index(); // 포커스시 li가아닌 부모의 순서값을 가지고 와야한다
    // console.log(theLi);
    backImg.stop().animate({'left' : slideN * -100 + '%'});
    

    indiLi.eq(slideN).siblings().removeClass('action');
    indiLi.eq(slideN).addClass('action');
    
    //반복문 함수 만들기
  })//indiLi on focus

  // ======================================
  //광고영역 일정시간마다 자동수행하기
  // 해당기능은 pc에서만 작동하도록 수행
  
  var startInterval;
  var Start = function(){
    // 일정시간마다 실행되도록
    startInterval = setInterval(function(){
      slideN += 1;
      backImg.stop().animate({'left' : slideN * -100 +'%'},function(){
        if ( slideN >= lastLi.length-1 ){
          // slideN이 마지막li길이-1보다 클때
          slideN = -1;
          backImg.stop().css({'left':slideN * -100 + '%'});
          textDl.stop().animate({'zIndex': slideN});

        }//if

      }) //backimg
      // textDl.eq(slideN).silbling().removeClass('action');
      // textDl.eq(slideN).addClass('action');
      indiLi.eq(slideN).siblings().removeClass('action');
      indiLi.eq(slideN).addClass('action');
    },timed) //setInterval
  } //Start(){}

  Start();

  //============================
  // viewBox 마우스 올릴 시 일시정지
  var StopSlide = function(){
    clearInterval(startInterval);
  }; //StopSlide

  // viewBox.on('mouseenter', function(){
  //   clearInterval(startInterval);
  //   StopSlide();
  // });

  //2. viewBox 에서 마우스 벗어나면 재실행

  // viewBox.on('mouseleave', function(){
  //   Start();
  // });

  // ============================================
  // 1,2번 기능 통합 할때
  // 객체 지향화

  viewBox.on({
    'mouseenter': StopSlide,
    'mouseleave': Start
  });

})(jQuery)