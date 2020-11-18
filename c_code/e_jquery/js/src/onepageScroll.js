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
  var navBox = $('#navBox');
  var navUl = navBox.find('ul');
  var navLi = navUl.find('li');
  // var navA = navLi.find('a');
  var topBtn = $('.top_move_btn');


  //*** browser 상단에서 떨어져있는 양 체크
  var headOffset = headBox.offset().top;
  // console.log('offset:', headOffset);

  // ------------------------------------------------
  // *** 1-1. 보이지 않았다가 1000px 이동 후 나타나기

  topBtn.hide();

  win.on('scroll', function(e){
    // win.scrollTop(); // 스크롤이 얼마나 움직였는지 이동한 위치 값 파악
    var winSt = win.scrollTop();
    // console.log(winSt);

    if( winSt >= headOffset ){
      headBox.css({"position":'fixed', 'top':0, 'zIndex':1500,});
    } // if
    else{
      headBox.removeAttr('style');
    } // else



  // ===================

  // if( winSt >= 500 ){
  //   topBtn.stop().fadeIn();
  // } //if
  // else{
  //   topBtn.stop().fadeOut();
  // } //else

  // ------------------------
  // ↓↓↓↓↓ 이렇게 사용가능 ()괄호 제거하고 이해하기 
  // ( (조건) ) ? (참이면) : (거짓이면) ;
  // ====================
  ( winSt >= 500 ) ? topBtn.stop().fadeIn() : topBtn.stop().fadeOut();
}); //win.on(){}


/*
  topBtn.on('click', ['a'], function(e){
    e.preventDefault();
    var theA = $(this).find('a');

    // a요소의 연결된 선택자 파악
    var theAAtter = theA.attr('href');

    // a요소의 href값의 상단에서 떨어져있는 양 체크
    var theAOffset = $(theAAtter).offset().top;
    // 브라우저를 이동시켜라(스크롤) -> theAOffset 으로 파악된 크기만큼
    console.log(theAOffset);
    $('html,body').animate({scrollTop: theAOffset});

  }) // topBtn.on (){}
 //------------------------------------------
  navLi.on('click', ['a'], function(e){
    e.preventDefault();
    var theNavLi = $(this).find('a');
    var theNavLiAttr = theNavLi.attr('href');
    var theNavOffset = $(theNavLiAttr).offset().top;
    $('html,body').animate({ scrollTop: theNavOffset});
  }); //navLi.on (){}
*/


//================================================================
//================================================================
//클릭시 처리되는 내용을 함수 처리하기

var liScrollMove = function(e){
  e.preventDefault();
  var theA = $(this).find('a');
  // a요소의 연결된 선택자 파악
  var theAAtter = theA.attr('href');
  // a요소의 href값의 상단에서 떨어져있는 양 체크
  var theAOffset = $(theAAtter).offset().top;
  // 브라우저를 이동시켜라(스크롤) -> theAOffset 으로 파악된 크기만큼
  console.log(theAOffset);
  $('html,body').animate({scrollTop: theAOffset});

}; // scrollMove on (){}
//-----------------------------------------------------------

// topBtn.on('click', ['a'], liScrollMove );
// navBtn.on('click', ['a'], liScrollMove );

// js 선택자.forEach(function(배열요소 각각, 해당 배열 요소 순서){});
// jq   배열.forEach(function(배열요소 순서, 순서에 맞는 배열요소 각각){});

var btnCollection = [topBtn, navLi];
$.each([topBtn, navLi], function(i, btn){
  btn.on('click', ['a'], liScrollMove);
}); //btnCollection = $each


// =================================================================
// =================================================================


// 2. $('popup_dp') 닫기버튼 클릭 시 팝업 창 삭제
  var popupDp = $('.popup_dp');
  var popupBtn =popupDp.find('button');
  popupBtn.on('click', function(e){
    e.preventDefault();
    popupDp.remove();
  }); //popupBtn (click){}


// ==================================================================
// ==================================================================
// //3. tab 메뉴 처리하기
// var tabMenu = $('.tabMenu');
// var tabUl = tabMenu.find('ul');
// var tabLi = tabUl.find('li');

// var ContentBox = $('.tab_content');
// var tabCon = ContentBox.find('div');

// tabUl.children('li').on('click',['a'], function(e){
//   e.preventDefault();
//   var theTabLi = $(this).find('a');
//   var theTabLiAttr = theTabLi.attr('href');
//   var theTabLiOffset = $(theTabLiAttr).offset().top;

// }); //tabUl

var tabLi = $('.tabMenu li');
var tabCon = $('tab_content div');

tabLi.on('click', ['a'], function(e){
  e.preventDefault();
  var it = $(this);
  var itI = it.index();

  tabCon.eq(itI).show();
  tabeq.eq(itI).siblings().hide();
});

  

  //jQuery end
})(jQuery);
