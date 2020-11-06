// accordion_test01.js

(function($){
  var accr = $('.accordion');
  var accrDl = accr.children('dl');
  var accrDt = accrDl.children('dt');

  accrDt.on('click',['a'], function(e){
    e.preventDefault();
    var theDt = $(this);
    //선택된 dt의 뒤에오는 것을 토글해라
    theDt.next('dd').slideToggle(function(){
      var theDdDisplay = theDt.next('dd').css('display');
      console.log(theDdDisplay);

      if( theDdDisplay == 'block'){
        theDt.addClass('action');
        theDt.siblings('dt').removeClass('action');
        //굳이 형제의dd를 선택할 필요가 없음
      }else if( theDdDisplay == 'none'){
        theDt.removeClass('action');
      }
    });
    
    theDt.next('dd').siblings('dd').slideUp();
    // theDt의 next dd를 제외한 siblings('dt') 의 자식인 dd

  });
  //jQuery
})(jQuery);