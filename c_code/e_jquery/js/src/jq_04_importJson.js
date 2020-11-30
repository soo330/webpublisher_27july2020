// jq_04_importJson.js

(function($){
  // jq_04_importJson start
  // 비동기처리
  $.ajax({
    url : '../data/make_json.json',
    dataType: 'json',
    context: document.body
  }).done(function(data){
    //써야하는 기능을 수행해
    
    // console.log( data );
    // console.log( $(this).addClass('data'));
    var wrap = $('#wrap');
    wrap.append('<ul class="list_insert"></ul>');
    var Insert = wrap.children('ul');
    
    var i=0;
    for (; i<data.length; i+=1){
      Insert.append('<li></li>');
      Insert.children('li').eq(-1).text( data[i].name );
    }
  }); //done

  // ==================================================
  $.ajax({url: '불러올파일'}).done(function(){});
  // ------------------------------------------------
  // XMLHttpRequest

  //jQuery end
})(jQuery);
