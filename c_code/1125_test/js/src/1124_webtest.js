// 1124_webtest.js

(function($){
  // 1124_webtest start
  // console.log($.fn);

  var viewBox= $('#viewBox');
  // 이미지 영역 -----------------
  var backImg = viewBox.find('.back_img'); //ul
  var backLi = backImg.find('li');
  var permission = true; // 기능 제어 장치
  var timed = 500; // 0.5초

  

  var backLiLast = backLi.eq(-1).clone(); //마지막 이미지인 li 복제
  backImg.prepend(backLiLast); //복제 요소 앞에 추가
  var reBackLi = backImg.find('li'); //복제후 전체li갯수 재파악
  backImg.css({'left': -100 + '%', 'width': (reBackLi.length * 100) + '%'}); // ul 내부요소 크기변경
  reBackLi.css({'width': (100 / reBackLi.length) + '%' }); // li 내부요소 크기변경

  //슬라이드 버튼 ------------------
  var slide_indi = viewBox.find('.slide_indicator'); 
  var slide_btn = slide_indi.find('.slide_btn');
  var nextBtn = slide_btn.children('button').eq(0); // next버튼
  var prevBtn = slide_btn.children('button').eq(1); // prev 버튼
  // console.log(nextBtn, prevBtn);

  var slideN = 0; // 임의로 설정해주는 값 수학에서 x(미지수)와 비슷한 형태

  //next button에
  nextBtn.on('click', function(e){
    //nextBtn을 클릭시
    e.preventDefault(); // 원래기능 초기화
    if(permission){
      // 기능제어 요소
      permission = false;
    // 처음 한번씩만 작동하게 제어
      if( slideN >= backLi.length-1){
        // 마지막 li번째가 slideN보다 작을때
        slideN = -1; // -1번째로 이동을
        backImg.stop().css({'marginLeft': slideN * -100 + '%'}); // ul인 backImg의 css를 marginLeft로 -100%씩 민다
        // console.log(backLi.length);
      } // if slideN
      slideN +=1; // 위 기능을 수행하고 조건이 일치하지 않으면 slideN에 +1씩 더하여
      backImg.stop().animate({'marginLeft': slideN * -100 + '%'}); // backImg를 marginLeft-100%씩 animation으로 넘기는데 스르륵넘어가게됨
      console.log(slideN)

      setTimeout(function(){
        // 일정 시간이 지난 후에 기능을 실행시키는 명령
        permission = true;
        // true를 줌으로써 그 기능을 처리하도록 승인
      },timed); // 위에서 setTimeout이란 이름 그대로 (일정시간)에서 "시간"을 정의해주기

      indiLi.eq(slideN).siblings().removeClass('action'); //위 슬라이드가 지나간다면 indicator의 li도 활성화되는데
      // 활성화 된 (선택된)li를 제외한 나머지 형제들에 class에서 action을 빼준다 (색깔이 활성화되지 않게끔)
      indiLi.eq(slideN).addClass('action');
      // 그리고 선택되어진 페이지와 동일한 인디케이터li에 class action을 주어 색깔이바뀌도록 활성화

    } //if permission
  }); // nextBtn


  prevBtn.on('click', function(e){
    // prev버튼을 클릭시
    e.preventDefault(); // 원래 기능초기화
    if(permission){
      // 기능 제어로
      permission =false;
      // 한번씩만 작동하게 해준다
      slideN -=1; // -1씩 해주어 거꾸로 페이지 넘기기
      backImg.stop().animate({'marginLeft': slideN * -100 + '%'}, function(){
        // 이번에는 next버튼과 반대로 ul인 backImg를 marginLeft로 -100% 씩 애니메이션으로 넘겨준다
        if( slideN <= -1 ){
          // slideN의 값이 -1(위치)보다 작다면
          slideN = backLi.length-1; //원래 순서의 마지막 이미지로 넘어가라
          backImg.stop().css({'marginLeft': slideN * -100 + '%'}); // 그때 넘기는 것은 css로 marginLeft -100%로 넘겨준다
        } //if slideN
        setTimeout(function(){permission=true;},timed); // 일정시간 지난뒤 기능 실행하는것 승인/ 0.5초뒤에 시작한다
      }); //setTimeout

      indiLi.eq(slideN).siblings().removeClass('action'); //next버튼과 마찬가지로 페이지를 넘기면 선택된 인디케이터의 색깔이 활성화 되는데
      // 활성화된 li를 제외한 나머지 형제들의 class action을 빼서 색깔이 활성화 되지 않도록 함
      indiLi.eq(slideN).addClass('action');
      // 해당되는 li는 class action을 주어 색깔 활성화
    } //permission
  }); //prevBtn



  // 인디케이터 영역---------------  
  var indicator = viewBox.find('.slide_indicator');
  var indiLi = indicator.find('li');


  indiLi.on('click', function(e){
    // indiLi를 클릭시
    e.preventDefault(); // 원래기능 초기화
    var theLi = $(this); // click 했을때 '선택'되는 것
    slideN = theLi.index(); //해당 li의 순서를 확인
    // console.log(theLi)
    indiLi.eq(slideN).siblings().removeClass('action'); // 선택되어진 li의 선택받지 못한 형제들은 class action을 빼주어 색깔이 활성화 되지않도록 함
    indiLi.eq(slideN).addClass('action'); // class action을 주어 색깔 활성화
  }); // indiLi


  indiLi.children('a').on('focus', function(e){
    // indiLi에 있는 a에 포커스했을 때
    e.preventDefault(); // 기능 초기화
    var its = $(this); // focus시 선택된 그것
    slideN = its.parents().index(); // 이때는 a가 아닌 부모의 순서값인 li 가지고와야함
    backImg.stop().animate({'marginLeft':slideN * -100 + '%'}); // 순번을 알았다면 focus를 통해 backImg인 ul을 marginLeft-100%씩 애니메이션으로 자연스럽게 넘겨줄수있다
    indiLi.eq(slideN).siblings().removeClass('action'); //반복 설명 .action을 제거함으로써 색깔 비활성화
    indiLi.eq(slideN).addClass('action'); // .action을 줌으로써 선택된 li 색깔 활성화
  }) //indiLi focus


  // 광고영역 일정시간마다 자동수행 및 hover시 일시정지 ==================

  var startInterval; // 일정 시간 간격을 두고 설정하는 방법

  var Start = function(){
    // start 는 setInterval이라는 함수(기능)을 담기위해 처리함
    startInterval = setInterval(function(){
      // 일정시간 마다  수행하게 하는 기능
      nextBtn.trigger('click');
      /*
      slideN += 1;
      backImg.stop().animate({'left': slideN * -100 + '%'},function(){
        if(slideN >= backLi.length-1){
          slideN = -1;
          backImg.stop().css({'left': slideN * -100 + '%'});
        }
        
      });
      indiLi.eq(slideN).siblings().removeClass('action');
      indiLi.eq(slideN).addClass('action');
    }, timed);
    이것을 trigger의 기능으로 함축해 쓴것
      */
    }, timed * 5); // start Interval
    // 2.5초마다 setinterval(일정시간간경을 두고 설정한것)을 수행하도록 하게 함

  } //start (){}
  Start(); // start기능 실시

  // =========================
  //slide를 멈추는 기능

  var StopSlide = function(){
    // StopSlide 는 setInterval이라는 함수(기능)을 담기위해 정의함
    clearInterval(startInterval);
    // setInterval로 반복하고 있는것을 멈추게 해주는 명령어
  } //StopSlide

  viewBox.on({
    'mouseenter': StopSlide,
    'mouseleave': Start
  });

  // viewBox에 mouseenter를 하면 위에 만들어두었던 clearInterval인 StopSlide기능을 실행하고
  // mouseleave를 하면 setInterval인 Star변수를 사용한다

  var win = $(window); // 현재 켜고있는 브라우저
  var headBox = $('#headBox');
  
  var contentBox = $('#contentBox');
  var topBtn = contentBox.find('.top_btn');
  var headOffset = headBox.offset().top; // 선택자(headBox)가 브라우저 상단부터의 좌표

  topBtn.hide(); // topBtn을 감춘다

  // 브라우저 스크롤시 headBox 늘이기
  win.on('scroll', function(e){
    // 브라우저 스크롤 시
    var winSt = win.scrollTop(); //win(브라우저)의 스크롤바 위치 정해주는것
    // 브라우저의 스크롤이 얼마만큼 이동했는지를 winSt로 변수지정

    if ( winSt > headOffset){
      // 만약 winSt 브라우저 스크롤바의 위치보다 headBox의 브라우저 상단으로부터의 좌표가 클때 
      headBox.css({'position': 'fixed', 'top':0, 'width': 100+'%'});
      // headBox의 css position을 fixed로 바꾸고 top 0, width 100%로 바꿔라
    }
    else{
      // 그렇 지 않으면
      headBox.removeAttr('style');
      // headBox의 style 요소를 지워( 원래 지정된 상태로 만들어준다)
    }

    // page top 버튼 
    if( winSt >= 300){
      // 브라우저의 스크롤탑 위치가 300보다 클때
      topBtn.stop().fadeIn();
      // top 버튼을 fadeIn으로 보여라
    }//if
    else{
      // 그렇지 않으면
      topBtn.stop().fadeOut();
      // top 버튼을 fadeOut으로 가려라
    } //else
  }); //win on

  

  //jQuery end
})(jQuery);
