// onpageScroll.js

(function($){
  // onpageScroll start
  
  /*
  1. scroll시 $('#headBox') 상단고정

    1-1. 상단 버튼 기능 추가

  2. $('popup_dp') 닫기버튼 클릭 시 팝업 창 삭제
  */

  /* 1번 사용 시 : offset().top, scrollTop.on('scroll'), $(window) */
  var win = $(window);
  var headBox = $('#headBox');
  // $(window).offset().top;

  //*** browser 상단에서 떨어져있는 양 체크
  var headOffset = headBox.offset().top;
  // console.log('offset:', headOffset);

  // *** 1-1. 보이지 않았다가 1000px 이동 후 나타나기
  var topBtn = $('.top_move_btn');
  topBtn.hide();


  win.on('scroll', function(e){
    // win.scrollTop(); // 스크롤이 얼마나 움직였는지 이동한 위치 값 파악
    var winSt = win.scrollTop();
    console.log(winSt);

    if( winSt >= headOffset ){
      headBox.css({"position":'fixed', 'top':0, 'zIndex':1500});
    } // if
    else{
      headBox.removeAttr('style');
    } // else
  }); //win.on(){}


  // ==========================================

  // if( winSt >= 500 ){
  //   topBtn.stop().fadeIn();
  // } //if
  // else{
  //   topBtn.stop().fadeOut();
  // } //else

  // ------------------------
  // ↓↓↓↓↓ 이렇게 사용가능 ()괄호 제거하고 이해하기 
  // ( (조건) ) ? (참이면) : (거짓이면) ;
    // ==========================================
  ( winSt >= 500 ) ? topBtn.stop().fadeIn() : topBtn.stop().fadeOut();

  topBtn.on('click', ['a'], function(e){
    e.preventDefault();
    var theA = $(this).find('a');

    // a요소의 연결된 선택자 파악
    var theAAtter = theA.atter('href');

    // a요소의 href값의 상단에서 떨어져있는 양 체크
    var theAOffset = $(theAAtter).offset().top;
    // 브라우저를 이동시켜라(스크롤) -> theAOffset으로 파악된 크기만큼
    win.animate({scrollTop: theAOffset});
  }) //on (){}

  //jQuery end
})(jQuery);
