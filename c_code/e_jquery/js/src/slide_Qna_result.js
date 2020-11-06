// slide_Qna_result.js

// (function($){})(jQuery);
(function($){
  var part_01 = $('.part').eq(0); // 첫번째것
  var accor_01 = part_01.children('.accordion_01');
  var accor_01Dl = accor_01.children('dl');
  var accor_01Dt = accor_01Dl.children('dt');
  
  // ['button']을 써줌으로 직접적으로 버튼을->클릭한다고 써줌

  //dt를 클릭하여 기능을 수행
  accor_01Dt.on('click', ['button'], function(e){
    e.preventDefault();
    // console.log($(this).parent().index() );
    // 여기서 $(this)은 앞에 click한 dt를 기준으로
    // dt들중 '클릭' 되어진 (dt)그 ($(this))에서
    var it = $(this);
    it.siblings('dd').stop().slideToggle(function(){
      var itDdDisplay = it.siblings('dd').eq(0).css('display'); //diplay 된 기능을 확인가능
      console.log(itDdDisplay);

      // ('itDdDisplay') is dt's the first 'dd' of css style,
      // if the first ('dd')'s style is 'block', add 'action' as class to it.accordion_01
      // (if is not,) 'else if' display is 'none', remove  the class 'action'
      if(itDdDisplay === 'block'){
        it.addClass('action');
        it.parent('dl').stop().siblings().children('dt').removeClass('action');
        // in the accor_01Dt clicked dt, parent ('dl')'s siblings of children('dt')'s remove class ('action')
      }else if(itDdDisplay === 'none'){
        it.removeClass('action');
      }
    });
                                        // 여기서 stop을써주는 이유는 막클릭했을때 슬라이드가 지혼자 되기때문에 막아주는 기능으로써씀
    //그것의 부모인(dl)의 형제요소(siblings)의 자식인 dd를 슬라이드를 닫게 만들어라
    it.parent('dl').siblings().children('dd').stop().slideUp(); 
    // 하나를 클릭했을 때 슬라이드를 닫아라

    //그것의 형제중 첫번째 dd의 diplay상태 파악
    

  });

  // jQuery =======================================
})(jQuery);