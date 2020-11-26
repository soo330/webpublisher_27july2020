// monffee_viewBox.js

  
// var count = 0;
// setTimeOut(function(){},시간); 0.1초 뒤에
// setInterval(function(){},시간);
// clearInterval(setInterval함수이름);

// var Go =setInterval(function(){
//   count += 1;
//   console.log(count);
//   if( count > 20 ){
//     clearInterval(Go); // break문과 비슷함 setInterval을 날려라
//   }
// },1000);

(function($){
//   var count = 0;
//   var Start; // undefind
//   var MyCount = function(){
//     Start = setInterval(function(){
//     count += 1;
//     // console.log(count);
//   },500);
// };
//   MyCount();

//   $('h1').on('mouseenter', function(){
//     clearInterval( Start ); //위의 start라는 변수를 지워라
//   });
//   $('h1').on('mouseenter', function(){
//     count= 0; // 마우스를 올렸다가 떼면 다시 카운트해라
//     MyCount();
//   });


  var viewBox = $('#viewBox');

  var backImg = viewBox.find('.back_img'); //ul
  viewBox.css({'overflow':'hidden'}); // 가급적 css에서 처리하자
  var backLi = backImg.find('li');
  var permission = true; // 워터슬라이드같은 개념 하나보내고 하나보냄
  //순서를 언급시에는 eq() method 사용 0~..., 뒤에서부터(역순)은 -1,-2...
  //복제의 기능은 clone() -> 복제된 기능을 원본처럼 수행하려면true 또는 매개변수 입력하면 된다
  // console.log(backLi)


  //마지막 요소 복제에 의한 내용변경
  var backLiLast = backLi.eq(-1).clone(); // 마지막 복제
  backImg.prepend(backLiLast); // 복제요소 앞에 추가하기
  var reBackLi = backImg.find('li'); // 복제 후 갯수 재 파악하기 console.log로 확인해보기
  backImg.css({'marginLeft' : -100+ '%', 'width' : reBackLi.length * 100 + '%'}); //크기변경
  reBackLi.css({'width': (100/ reBackLi.length) + '%'}); // 내부요소 크기 변경

  //슬라이드 버튼 만드는방법
  var slideBtn = viewBox.find('.slide_btn');
  var nextSlideBtn = slideBtn.children('button').eq(0); // next 버튼
  var prevSlideBtn = slideBtn.children('button').eq(1); // prev 버튼
  // console.log(nextSlideBtn, prevSlideBtn);

  var slideN = 0; //최초의 값
  var timed =2000; // 일정시간 마다 처리하게하는 시간


  // 다음버튼 클릭========================================
  nextSlideBtn.on('click', function(e){
    // a 또는 button 요소처럼 이벤트 기능이 이미 내장된 요소는 미리 해당 기능을 제거하라는 옵션을 먼저 넣는다
    e.preventDefault();

    if(permission){
      permission = false;
      slideN += 1; // 1씩 카운트를 올리겠다 함수의 바깥에서 선언해주면 내부에서 값을 변경했을때 안에있는 1이 위에 선언한식에서 1씩 더해주게 된다 그래서 slideN은 +1씩 늘어난다
    
    // backImg.css({'left': slideN * -100 + '%'});
    // backImg.stop().animate({'left': slideN * -100 + '%'},700,'easeInSine');
    //                                             여기있는 700은 속도 0.7ms를 뜻함
    // 'transition': 'left 400ms linear'}
    
    //---------------------------------------------------------------
    //if*(){}else{} 콜백함수
    // if문 아래는 slide시
    backImg.stop().animate({'left': slideN * -100 + '%'},function(){
      if( slideN >= backLi.length-1){
        slideN = -1; // -1로 이동해라
        // 아래 slideN*-100% 값에 -1*-100% 를 하는 격으로 답은 +100이나옴
        backImg.stop().css({'left': slideN * -100 + '%'});
        
      }
      // permission=true;
      // setTimeOut(function(){},시간); 뒤에있는 0.1초 시간 뒤에 함수를 시작하세요
      setTimeout(function(){
        permission=true; //여기에 permission을 주면 
      },100);
    });
    indiLi.eq(slideN).siblings().removeClass('action');
    indiLi.eq(slideN).addClass('action');}
  });

  // 이전버튼 클릭========================================
  prevSlideBtn.on('click', function(e){
    e.preventDefault();
    if(permission){
      permission =false;
      slideN -=1;
      backImg.stop().animate({'left': slideN * -100 + '%'},function(){
        if(slideN <= -1 /*여기서의 -1이 순번째라고 이해하면 쉽다*/ ){
        slideN = backLi.length-1;
        backImg.stop().css({'left': slideN * -100 + '%'});
    };
      setTimeOut(function(){permission=true;},1000);
    });
    indiLi.eq(slideN).siblings().removeClass('action');
    indiLi.eq(slideN).addClass('action'); //인디케이터도 같이넘어감
    };
  });
  // -----------------------------------------
  // indicator 색깔바꾸기
  var indicator = viewBox.find('.slide_indicator');
  var indiLi = indicator.find('li');

  // ↓↓↓↓ 선택한 li들중에서 라는 예문
  indiLi.on('click', function(e){
    e.preventDefault();
    var its = $(this); //$(this)는 click했을때 선택되는 것'들' 중복되는값
    slideN = its.index(); //.index는 순서를 확인하는 아이
    // console.log(itI);
    backImg.stop().animate({'left': slideN * -100 + '%'});
    // indiLi.removeClass('action');
    /*↓↓권장*/
    indiLi.eq(slideN).siblings().removeClass('action');
    indiLi.eq(slideN).addClass('action');
  });

  // 내가 했던거  
  // slideIndi.each(function(index){
  //   $(this).on('click', function(){
  //       $(this).addClass('active').siblings().removeClass('active');
  //       slideIndiUl = index;
  //       slideindiUlLi.animate({left: '-' + (listBoxWidth*index)+'px'}, 200);
  //   });
  //});

  // 인디케이터 포커스 버튼 클릭======================================================
  //
  indiLi.children('a').on('focus', function(e){
    e.preventDefault();
    var its= $(this); 
    slideN = its.parent().index(); //li가 아닌 부모의 순서값을 가지고와야함
    backImg.stop().animate({'left': slideN * -100 + '%'});
    indiLi.eq(slideN).siblings().removeClass('action');
    indiLi.eq(slideN).addClass('action');
    //** 계속 반복문이 있으므로 함수도 생각해봐야함
  });

  // 광고영역 일정시간마다 자동수행/ 마우스 올릴경우 일시정지 =======================

  var startInterval;
  var Start = function(){
    // setInterval 일정시간마다 ~실행해라
    startInterval = setInterval(function(){
      // 1. trigger() 기능 - 대신 처리하는 방아쇠
      // nextSlideBtn.trigger('click');

      //=============================================
      //2 직접 카운트 처리하여 수행
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
  };
  Start();

  // 1. viewBox 마우스올리면 일시정지해라
  var StopSlide = function(){
    clearInterval(startInterval);
  };
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

  //jQuery End
})(jQuery);

/*
<jQuery 선택자>
#box -> $('#box');
.box -> $('.box');
ul>li -> $('ul>li'); -> 권장 $('ul').children('li');
ul>li -> $('ul li'); -> 권장 $('ul').find('li');
dt+dd -> $('dt+dd'); -> 권장 $('dt').next('dd');
dt~dd -> $('dt~dd'); -> 권장 $('dt').nextAll('dd');

-css에존재하지 않는것
이전 형제 선택       -> 권장 $('dt').prev('dd');
이전 형제 모두       -> 권장 $('dt').prevAll('dd');

자신을 제외한 형제   -> $('dt').siblings('dd');
부모+형제를 선택 -> $('dt').parent('dl'); $('dt').parentUntil('dd');*/
// -----------------------------------------------------------------
/* css
선택자.style.backgroundColor = '#acf';

선택자.css({속성명:'속성갑',(코마) 속성명:'속성갑',(코마) });
 
var reFn = function(i){
  i+=1;
  if(i<20){
    //reFn(i); refn에 (i)값을 다시넣어라
    reFn(i);
  }
  else{console.log('20이 되었습니다');}
};
*/

// jQuery에서 콜백함수란?
// 하나의 method(함수) 를 수행한 후에, 다시 함수를 수행할 수 있도록 처리하는 형태
// 단, anmimation 기능을 가진 method 내 및 이벤트에서만 콜백 함수의 기능을 가질 수 있다

// 선택자.on('click'1), function(){
//   선택자.anmate({기능수행}, 2)function(){3)})
// 차례는 1) -> 2) -> 3) 의 순서