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
    var getScroll = win.scrollTop()+ winH; //스크롤탑보다 많다
    // console.log(getScroll);

    if(getScroll >= conBoxOffset ){
      conBox.addClass('action');
    }else{
      conBox.removeClass('action');
    }


    if ( getScroll >= moreBoxOffset){
      moreBox.addClass('action');
    }else if( getScroll >= moreBoxOffset + winH ){
      moreBox.removeClass('action');
      moreBox.addClass('more');
    }
    else{
      moreBox.removeClass('action');
    }

  }); //win.scroll

  //jQuery end
})(jQuery);
