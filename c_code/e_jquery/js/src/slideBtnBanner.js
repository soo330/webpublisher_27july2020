// slideBtnBanner.js

(function(){
  // console.log($.fn); // jQuery 연결 확인 및 버전 체크
  //slide 기능 만들기 1

  var slide_01 = $('.slide_01');
  var s_01_btn = slide_01.children('.slide_btn');
  var s_01_button = s_01_btn.children('button');
  s_01_btn.css({'zIndex' : 100 }); // 단위가 없으므로 그냥 써주기

  var s_01_wrap = slide_01.children('.slide_wrap');
  var s_01_Ul = s_01_wrap.children('ul');
  var before_s_01_Li = s_01_Ul.children('li');

  // 마지막 요소 복제하여 앞에 붙임 - 전체 가로값 변경, 내부 li크기 변경
  var cloneLastLi_s_01 = before_s_01_Li.eq(-1).clone(true); //true 를 써주는 이유는 특정 기능을 사용/미사용하기 위해
  s_01_Ul.prepend(cloneLastLi_s_01);
  // cloneLastLi_s_01.prependTo(s_01_Ul);
  var re_s_01_li = s_01_Ul.children('li');
  s_01_Ul.css({'width': re_s_01_li.length * 100 + '%', 'position' : 'relative',  'left':'-100%'});
  //                                                    position값 css에서 미리설정
  re_s_01_li.css({'width': 100 / re_s_01_li.length + '%'});
  var slideN = 0;
  var permission = true;
  var timed = 500;

  // console.log($('button.next')[0]);
/*
  // ↓↓↓↓ 1. 각각의 버튼을 분리하여 따로따로 처리하는 방법
s_01_btn.children('.next').on('click', function(e){
  e.preventDefault();
  // === 비교
  if(permission === true){
    permission = false;
    if ( slideN >= before_s_01_Li.length - 1){
      slideN = -1;
      s_01_Ul.css({marginLeft: slideN * -100 + '%'});
    }
    slideN += 1;
    s_01_Ul.stop().animate({marginLeft: slideN * -100 + '%'}, function(){
      setTimeout(function(){
        permission =true;
      },timed/5);
    });
  } // if (permission);
});


s_01_btn.children('.prev').on('click', function(e){
  e.preventDefault();
  if(permission){
    permission=false;
    slideN -= 1;
    s_01_Ul.stop().animate({marginLeft: slideN * -100 + '%'}, function(){
      if( slideN <= -1 ){
        slideN = before_s_01_Li.length-1;
        s_01_Ul.css({marginLeft: slideN *  -100 + '%'}); //이 조건문은 밖으로 빼줘도 그대로 기능함
      }
      setTimeout(function(){
        permission =true;
      }, timed/5);
    });
  }
});
*/
  // button 클릭 시 해당 요소 파악하기

  //초기화
  s_01_button.on('click', ['button'], function(e){
    e.preventDefault();
    if(permission){
      permission = false;

      var it = $(this); // 또한 = $(this).attr('class'); 로 속성값도 확인가능
      var itClass = it.attr('class');
      
      // ------------------------------------------------
      // 하단 if 문을 먼저 쓰면 5(우)-5(좌) 로 어색하게 움직이는 현상을 잡아 5(우)-5~스르륵~1이 됨

      // ↓↓↓↓ 2. 동일한 역할을 하는 버튼을 묶어서 그 기능에 따라 처리하도록 하는 방법
      if( itClass === 'next'){
        // 다음 버튼 클릭 시
        if ( slideN >= before_s_01_Li.length - 1){
          slideN = -1;
          s_01_Ul.css({marginLeft: slideN * -100 + '%'});
        }
        slideN += 1;
        // s_01_Ul.animate({marginLeft: slideN * -100 + '%'},function(){});

      }else if( itClass === 'prev'){
        // 이전 버튼 클릭 시
       slideN -= 1;
      //  s_01_Ul.animate({marginLeft: slideN * -100 + '%'}, function(){
      //   if( slideN <= -1 ){
      //     slideN = before_s_01_Li.length-1;
      //     s_01_Ul.css({marginLeft: slideN *  -100 + '%'});
      };
      s_01_Ul.animate({marginLeft: slideN * -100 + '%'}, function(){
      if( slideN <= -1 ){
        slideN = before_s_01_Li.length-1;
        s_01_Ul.css({marginLeft: slideN *  -100 + '%'});
        }
        setTimeout(function(){
          permission =true;
        }, timed/5);
    });
  }
});

// jQuery end ================================================
})(jQuery);