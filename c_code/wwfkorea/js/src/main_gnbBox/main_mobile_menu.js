// main_mobile_menu.js
(function($){
  // main_mobile_menu start

  // var win = $(window);
  var headBox = $('#headBox');
  
  var menuIBox = headBox.find('.menuIBox');
  var showMenuBtn = menuIBox.find('.menu_btn');
  var showMenuWrap = headBox.find('.show_menu_wrap');
  var menuArea =showMenuWrap.find('.menu_area');

  var menuCloseBtn = showMenuWrap.find('.menu_close_btn');


  // console.log(winT)

  // 햄버거 메뉴버튼 누르면 메뉴 토글
  showMenuBtn.find('button').on('click', function(e){
    //showMenuBtn을 click하면 기능으로,
    e.preventDefault();
    // 기능 초기화
    var menuDp = showMenuWrap.css('display');
    if(menuDp === 'none'){
      showMenuWrap.fadeIn();
    }else{
      showMenuWrap.fadeOut();
    }
    // console.log(menuDp);
  });
  // console.log(showMenuBtn)

  // 메뉴안에 있는 x닫기 버튼 누르면 메뉴 닫아지기
  menuCloseBtn.find('button').on('click',function(e){
    e.preventDefault();
    showMenuWrap.fadeToggle();
  });


  



})(jQuery)