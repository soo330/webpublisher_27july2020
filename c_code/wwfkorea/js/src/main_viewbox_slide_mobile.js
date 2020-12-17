(function($){
  var nowW = deviceSize();
  var deviceType = ['mobile', 'tablet', 'laptop','pc','pcfull'];
  var win = $(window);
  var viewBox = $('#viewBox');
  var slideIndi = viewBox.find('.slide_indicator');
  var textPart = viewBox.find('.text_part');
  
  var IndicatorSet = function(){
  var tpLeft = textPart.offset().left;
  var tpWidth = textPart.outerWidth();
  
  

    if(nowW === deviceType[0]){
      slideIndi.css({
        left: tpLeft + 'px', width: tpWidth + 'px'});
    }else if( nowW === deviceType[1]){
      slideIndi.css({
        left:tpLeft + 'px', width: tpWidth + 'px'});
    }
  }; // IndicatorSet();
  IndicatorSet();

  // textPart위치 및 가로크기 파악
  win.on('resize', function(){
    

    IndicatorSet();
   
  });
  
 
})(jQuery);