// monffee_issueBox.js

(function($){
  var issueBox = $('#issueBox');
  var issueText = issueBox.find('.issue_text');

  var issueIndicator = issueText.find('.issue_indicator');
  // 버튼
  var issueBtn = issueIndicator.find('.auto_slide_btn');
  var autoPlay = issueBtn.children('.auto_play');
  var autoPause = issueBtn.children('.auto_pause');

  // 인디케이터
  var issueIndiUl = issueIndicator.find('.check_indi');
  var issueIndiLl = issueIndiUl.find('li');
  // 내용영역
  var issueTextArea = issueText.find('.issue_text_area');
  var issueUl = issueTextArea.find('ul');
  var issueLi = issueUl.find('li');
  var timed = 500;
  var issueLiLen = issueLi.length;
  // ---------------------------------------------
  /** 1. 인디케이터 list를 클릭시 각 내용으로 위치 이동*/
  var permission = true;
  var itIndex = 0;
  
  // 함수 수행기능 별도로 처리
  var SlideFn = function( itIndex ){
    issueUl.stop().animate({'marginLeft': itIndex * -100 + '%'}, timed,function(){
      issueIndiLl.eq(itIndex).addClass('action');
      issueIndiLl.eq(itIndex).siblings().removeClass('action');

      // permission = true;
      setTimeout(function(){
        permission =true;
      }, timed/2);
    });
  }

  issueIndiLl.on('click', ['a'], function(e){
    e.preventDefault();
    if(permission){
      permission = false;

      itIndex = $(this).index();
      SlideFn(itIndex);
    }
  });
  //------------------------------------------------
  // 2. 자동 슬라이드 처리
  var mySlideGo;
  var SlideGoFn =function(){
    mySlideGo = setInterval(function(){
      autoPlay.removeClass('action');
      autoPause.addClass('action');

      itIndex += 1;
      if ( itIndex > issueLiLen-1){
        itIndex = 0;
      }
      SlideFn(itIndex);
    }, timed * 3); //일정시간인 timed마다
  };

  var SlideStopFn = function(){
    clearInterval( mySlideGo );
  };
  SlideGoFn();

  // auto Play --------------------------------
  autoPause.on('click', function(e){
    e.preventDefault();
    SlideStopFn();
  });
  autoPlay.on('click',function(e){
    e.preventDefault();
    SlideGoFn();
  })
  
})(jQuery);