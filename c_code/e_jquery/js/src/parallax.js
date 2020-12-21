// parallax.js

(function($){
  // parallax start
  
  var win = $(window); // browser를 움직였을때 아래 변수들을 변경하기위함

  var viewBox = $('#viewBox');
  var viewBoxHeight = viewBox.outerHeight();
  //outerHeight
  var viewDiv = viewBox.children('div');
  
  var sampleBox = $('#sampleBox');
  var sampleUl = sampleBox.children('ul');
  var sampleList = sampleUl.children('li');

  win.on('scroll', function(e){
    var winSt = win.scrollTop();
    var setScroll = winSt / 100;
    // 스크롤탑에 백분율한값을 사용하겠다

    // console.log(winSt); //scroll 위치파악
    // 1단계 ----------------------------------------------
    // viewDiv.eq(0).css({backgroundPositionY: winSt + 'px'});
    // viewDiv.eq(1).css({backgroundPositionY: (winSt/2) + 'px'});
    // viewDiv.eq(2).css({backgroundPositionY: (winSt/3) + 'px'});
    // viewDiv.eq(3).css({backgroundPositionY: (winSt/4) + 'px'});
    // viewDiv.eq(4).css({backgroundPositionY: (winSt/5) + 'px'});
    // viewDiv.eq(5).css({backgroundPositionY: (winSt/6) + 'px'});
    // viewDiv.eq(6).css({backgroundPositionY: (winSt/7) + 'px'});
    // viewDiv.eq(7).css({backgroundPositionY: (winSt/8) + 'px'});
    // viewDiv.eq(8).css({backgroundPositionY: (winSt/10)+ 'px'});

    // 2단계 ----------------------------------------------
    // viewDiv.eq(0).css({ bottom: -(setScroll*100)+'px'});
    // viewDiv.eq(1).css({ bottom: -(setScroll*90) +'px'});
    // viewDiv.eq(2).css({ bottom: -(setScroll*80) +'px'});
    // viewDiv.eq(3).css({ bottom: -(setScroll*70) +'px'});
    // viewDiv.eq(4).css({ bottom: -(setScroll*60) +'px'});
    // viewDiv.eq(5).css({ bottom: -(setScroll*50) +'px'});
    // viewDiv.eq(6).css({ bottom: -(setScroll*40) +'px'});
    // viewDiv.eq(7).css({ bottom: -(setScroll*30) +'px'});
    // viewDiv.eq(8).css({ bottom: -(setScroll*60) +'px'});
    // 3단계  반복문 만들기-----------------------------------

    var i=0;
    for(; i < viewDiv.length-1 ; i++ ){
      viewDiv.eq(i).css({ bottom : -(setScroll * (10- i) * 10) + 'px'});
      //10에서 i만큼 빼고 *10을 곱하면 100%
      // 마지막번째 i는 동작하지 않을 것임으로 아예 빼주기 위해
      // viewDiv.length-1로 하나를 빼준다

    } //for.viewDiv.length

  }) //win.scroll

  //jQuery end
})(jQuery);
