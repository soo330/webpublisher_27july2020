// main_mobile_menu.js
(function($){
  // main_mobile_menu start


  var headBox = $('#headBox');
  
  var menuIBox = headBox.find('.menuIBox');
  var showMenuBtn = menuIBox.find('.menu_btn');
  var showMenuWrap = headBox.find('.show_menu_wrap');


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



  



})(jQuery)