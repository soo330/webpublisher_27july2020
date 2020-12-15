// landing.js

(function($){
  // landing start
  var win = $(window);
  var conBox = $('#conBox');
  var moreBox = $('#moreBox');

  var winH = win.outerHeight(); 

  var conBoxOffset = conBox.offset().top;
  var moreBoxOffset = moreBox.offset().top; 
  console.log(conBoxOffset, moreBoxOffset);

  win.on('scroll', function(e){
    var getScroll = win.scrollTop()+ winH; //스크롤 값
    // console.log(getScroll);

    // 스크롤 값이, conBox의 offset().top만큼에서 (브라우저 높이값 일부빠진만큼) 보다 크면 수행하라
    // 더 값이 커졌을 때, moreBox offset값이 화면의 상단에 위치하면
    if(getScroll >= conBoxOffset-winH ){
      conBox.addClass('action');
    }else{
      conBox.removeClass('action');
    }


    if ( getScroll >= moreBoxOffset-winH){
      moreBox.addClass('action');
    }else if( getScroll >= (moreBoxOffset + winH) +100 ){
      // moreBox.removeClass('action');
      moreBox.addClass('more');
    }
    else{
      moreBox.removeClass('action');
    }

  }); //win.scroll

  //jQuery end
})(jQuery);
