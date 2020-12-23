// <script src="../js/src/main_viewbox_slide.js"></script>

(function($){
  var win = $(window);
  var viewBox = $('#viewBox');
  var slideIndi = viewBox.find('.slide_indicator');
  var textPart = viewBox.find('.text_part');
  
  var IndicatorSet = function(){
    var tpLeft = textPart.offset().left;
    var tpWidth = textPart.outerWidth();

    
    slideIndi.css({ left : tpLeft + 'px', width:tpWidth + 'px', bottom: 1 + 'rem'});
    
  }; // IndicatorSet();
  IndicatorSet();

  // textPart위치 및 가로크기 파악
  win.on('resize', function(){
    IndicatorSet();
  });
 
})(jQuery);