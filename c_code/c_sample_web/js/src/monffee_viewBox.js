
// monffee_viewBox.js
(function($){
  var viewBox = $('#viewBox');

  var backImg = viewBox.find('.back_img');
  var backLi = backImg.find('li');
  //순서를 언급시에는 eq() method 사용 0~..., 뒤에서부터(역순)은 -1,-2...
  //복제의 기능은 clone() -> 복제된 기능을 원본처럼 수행하려면true 또는 매개변수 입력하면 된다
  // console.log(backLi)
  var backLiLast = backLi.eq(-1).clone();
  backImg.prepend(backLiLast);
  var reBackLi = backImg.find('li');

  backImg.css({'marginLeft' : -100+ '%', 'width' : reBackLi.length * 100 + '%'});
  reBackLi.css({'width': (100/ reBackLi.length) + '%'});

  // console.log(backLi.length);
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

*/ 