
// monffee_viewBox.js
(function($){
  var viewBox = $('#viewBox');

  var backImg = viewBox.find('.back_img');
  var backLi = backImg.find('li');
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

  var slideN = 0;
  nextSlideBtn.on('click', function(e){
    // a 또는 button 요소처럼 이벤트 기능이 이미 내장된 요소는 미리 해당 기능을 제거하라는 옵션을 먼저 넣는다
    e.preventDefault();
    slideN += 1; // 1씩 카운트를 올리겠다 함수의 바깥에서 선언해주면 내부에서 값을 변경했을때 안에있는 1이 위에 선언한식에서 1씩 더해주게 된다 그래서 slideN은 +1씩 늘어난다
    
    // backImg.css({'left': slideN * -100 + '%'});
    // backImg.stop().animate({'left': slideN * -100 + '%'},700,'easeInSine');
    //                                             여기있는 700은 속도 0.7ms를 뜻함
    // 'transition': 'left 400ms linear'}
    
    
    //---------------------------------------------------------------
    //if*(){}else{} 콜백함수
    // if문 아래는 slide시
    backImg.stop().animate({'left': slideN * -100 + '%'},function(){
      if(slideN >= backLi.length-1){
        slideN = -1; // -1을 하는 이유는
        // 아래 slideN*-100% 값에 -1*-100% 를 하는 격으로 답은 +100이나옴
        backImg.stop().css({'left': slideN * -100 + '%'});
        
      }
    });
  });

  
  prevSlideBtn.on('click', function(e){
    e.preventDefault();
    slideN -=1;
    backImg.stop().animate({'left': slideN * -100 + '%'},function(){
      if(slideN <= -1 /*여기서의 -1이 순번째라고 이해하면 쉽다*/ ){
        slideN = backLi.length-1;
        backImg.stop().css({'left': slideN * -100 + '%'});
      };
    });
  });
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
부모+형제를 선택 -> $('dt').parent('dl'); $('dt').parentUntil('dd');
-----------------------------------------------------------------
** css
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


 
jQuery에서 콜백함수란?
하나의 method(함수) 를 수행한 후에, 다시 함수를 수행할 수 있도록 처리하는 형태
단, anmimation 기능을 가진 method 내 및 이벤트에서만 콜백 함수의 기능을 가질 수 있다

선택자.on('click'1), function(){
  선택자.anmate({기능수행}, 2)function(){3)})
차례는 1) -> 2) -> 3) 의 순서로 진행됨
})

*/