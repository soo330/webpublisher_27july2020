// monffee_main_module.js

// 옛날방식 $(document).ready(function(){/* jQuery */});
// 옛날방식 $(function(){/* jQuery */});
// ()() 즉시실행방식
(function($){
  //jQuery
  var headBox = $('#headBox');
  headBox.load('./monffee/monffee_headBox.html');

})(jQuery);

// jquery에서는 선택자의 형태는 css와 매우 유사
// 단, $(' ')를 이용하여 내부에 선택자를 작성