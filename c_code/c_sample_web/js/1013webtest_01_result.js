//1013webtest_01_result.js

console.log($.fn.jquery);

// 1. css 문법을 이용하여 jQuery 문법으로 수정
// #navBox > ul > li:hover > ol {display:block;}

// #navBox > ul > li > a 에 마우스 올리거나 포커스를 잡을 경우

var navLink = $('#navBox > ul > li > a')
navLink.on('mouseenter focus', function(){
  
  //마우스를 올리거나 포커스 처리된 상태의 a 바로 뒤의
  // ol을 나타나게 만들기
  //1. 마우스를 올리거나 포커스 처리된 상태의a:$(this)
  navLink.next('ol').hide();
  $(this).next('ol').show();
  
});

// #navBox에서 마우스를 벗어나면 ol 사라지게 만들기
var navBox = $('#navBox');
navBox.on('mouseleave', function(){
  navBox.find('ol').hide();
});

//--------------------------------------------
// .banner_context를 event처리 (클릭)하면 다음(function)기능을 //수행

var bannerContext = $('.banner_context');
//아래해석> 'click' ,(,=하면) function해라 
var modalWin = $('.modal_window');
var closeBtn = modalWin.children('.close');

bannerContext.on('click', function(){
 // .modal_window 를 나타나게 만들기
 modalWin.fadeIn();
});

// .modal_window 자식인 .close 버틀을 클릭시, 다음기능을 수행
var closeBtn = modalWin.children('.close');
modalWin.on('click', function(){
  modalWin.fadeOut();
});