// parallax.js

(function($){
  // parallax start
  
  var win = $(window); // browser를 움직였을때 아래 변수들을 변경하기위함

  var viewBox = $('#viewBox');
  var viewDiv = viewBox.children('div');
  
  var sampleBox = $('#sampleBox');
  var sampleUl = sampleBox.children('ul');
  var sampleList = sampleUl.children('li');

  win.on('scroll', function(e){
    var winSt = win.scrollTop();
    // console.log(winSt); //scroll 위치파악

    viewDiv.eq(0).css({backgroundPositionY: winSt + 'px'})
    viewDiv.eq(1).css({backgroundPositionY: (winSt/2) + 'px'})
    viewDiv.eq(2).css({backgroundPositionY: (winSt/3) + 'px'})
    viewDiv.eq(3).css({backgroundPositionY: (winSt/4) + 'px'})
    viewDiv.eq(4).css({backgroundPositionY: (winSt/5) + 'px'})
    viewDiv.eq(5).css({backgroundPositionY: (winSt/6) + 'px'})
    viewDiv.eq(6).css({backgroundPositionY: (winSt/7) + 'px'})
    viewDiv.eq(7).css({backgroundPositionY: (winSt/8) + 'px'})
    viewDiv.eq(8).css({backgroundPositionY: (winSt/10) + 'px'})

  }) //win.scroll

  //jQuery end
})(jQuery);
