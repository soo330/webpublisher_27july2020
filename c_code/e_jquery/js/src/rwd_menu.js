// ex_06_rwd_menu.js

(function($){

  var winSize = deviceSize();
  var deviceType = ['mobile','tablet','laptop','pc','pcfull'];
  
  var headBox = $('#headBox');
  var menuBtn = $('.menu_btn');
  
  console.log( winSize );
  if(winSize === deviceType[0] || winSize === deviceType[1] ){
    headBox.append('<script src="../js/src/rwd_menu_mobile.js"></script>');
  }else{
    menuBtn.remove();
    // headBox.append('<script src="../js/src/rwd_menu_other.js"></script>');
  }

})(jQuery);
