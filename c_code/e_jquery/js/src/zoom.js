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

    
    // ++i = i+=1 같은뜻

    // var i = 0; 를 아래와 같이 바꿀수 있다 아래가 처리가 조금 더 빠름
    var i = viewLi.length-1;
    var vLink;
    for( ; i >=0 ; --i ){
      vLink = viewLi.eq(i).children('a');
      vLink.css({backgroundImage: 'url(' + imgUrl + imgData[i].thum +')'});
    } //for

    var setImg = function(n){
      var myN = n || 0;
      product.css({ backgroundImage : 'url(' + imgUrl + imgData[n].detail + ')'});
      scaleArea.css({ backgroundImage : 'url(' + imgUrl + imgData[n].detail + ')'});
      
    } //setImg

    // console.log(i);
   

  }) // $.ajax
  //jQuery end
})(jQuery);
