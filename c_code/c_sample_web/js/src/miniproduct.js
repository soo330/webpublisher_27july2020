//miniprojuct.js

// (function(){})(jQuery);
(function($){
  var miniP = $('#miniProduct'); // #miniProduct
  var indi = miniP.find('.indicator'); //.indicator
  var indiBtn = indi.find('.indi_btn'); //ul.indi_btn
  var indiBtnLi = indiBtn.find('li'); //ul.indi_btn>li
  var backImg = miniP.find('.back_img');
  //.product>.textpart>ul.back_img
  
  var indiBtn = 0;

  // ↓↓↓↓ 선택한 li들중에서 라는 예문
  indiBtnLi.children('a').on('click', function(e){
    e.preventDefault();
    var its = $(this);
    indiBtn = its.parent().index();
    backImg.stop().animate({'left': indiBtn * -100 +'%'});
    indiBtnLi.eq(indiBtn).siblings().removeClass('action');
    indiBtnLi.eq(indiBtn).addClass('action');

  }); // product =======================================
})(jQuery);
