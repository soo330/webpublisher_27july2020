// monffee_main_module.js

// 옛날방식 $(document).ready(function(){/* jQuery */});
// 옛날방식 $(function(){/* jQuery */});
// ()() 즉시실행방식
(function($){
  //jQuery
  var headBox = $('#headBox');
  var viewBox = $('#viewBox');
  var bestNews = $('#bestNews');
  var issueBox = $('#issueBox');

  headBox.load('./monffee/monffee_headBox.html');
  viewBox.load('./monffee/monffee_viewBox.html');
  bestNews.append('<script src="../js/src/monffee_bestNews.js"></script>');
  issueBox.load('./monffee/monffee_issueBox.html');
})(jQuery);

// jquery에서는 선택자의 형태는 css와 매우 유사
// 단, $(' ')를 이용하여 내부에 선택자를 작성