// zoom.js

(function($){
  // zoom start
  $.ajax({
    url: "../data/zoom_img.json",
    dataType: 'json',
    context: document.body

  }).done(function(data){
    var imgData = data;
    var imgUrl = '../img/zoom/';

    var viewArea = $('.view_area');
    var product = viewArea.children('.product');
    var viewLi = viewArea.find('li');
    var viewA = viewLi.find('a');
    var scaleArea = $('.scale_area');

    var i = 0;
    // ++i = i+=1 같은뜻
    for( ; i < viewLi.length ; ++i ){
      vLink = viewLi.eq(i).children('a');
      vLink.css({backgroundImage: 'url(' + imgUrl + imgData[i].thum +')'});
    } //for


  }) // $.ajax
  //jQuery end
})(jQuery);
