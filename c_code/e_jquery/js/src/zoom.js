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
    var viewLink = viewLi.find('a');
    var scaleArea = $('.scale_area');

    
    // ++i = i+=1 같은뜻

    // var i = 0; 를 아래와 같이 바꿀수 있다 아래가 처리가 조금 더 빠름
    var i = viewLi.length-1;
    var vLink;
    for( ; i >=0 ; --i ){
      vLink = viewLi.eq(i).children('a');
      vLink.css({backgroundImage: 'url(' + imgUrl + imgData[i].thum +')'});
    } //for

    // console.log(i);

    var setImg = function(n){
      var myN = n || 0;
      product.css({ backgroundImage : 'url(' + imgUrl + imgData[myN].detail + ')'});
      scaleArea.css({ backgroundImage : 'url(' + imgUrl + imgData[myN].detail + ')'});
      
    } //setImg
    setImg();

    // 2) viewLink 클릭
    viewLink.on('click', function(e){
      e.preventDefault();
      var index = $(this).parent('li').index();
      setImg(index);
    }) // viewLink


    scaleArea.hide(); // 없는상태에서 처리되기위해서 먼저 hide처리
    //product 마우스 올렸을 때 처리
    product.on('mouseenter', function(){
      scaleArea.stop().fadeIn();
    }) // fadeIn

    product.on('mouseleave', function(){
      scaleArea.stop().fadeOut();
    }) // fadeOut


    // product 마우스 움직일때 처리
    product.on('mousemove', function(e){
      e.preventDefault();

      var thisWidth = $(this).outerWidth();
      var thisHeight = $(this).outerHeight();

      var x = e.originalEvent.offsetX;
      var y = e.originalEvent.offsetY;
      

      var xPer = x / thisWidth * 100;
      var yPer = y / thisHeight * 100;
      // console.log(x,y);

      scaleArea.css({ backgroundPosition: xPer + '%' + '  ' + yPer + '%'});
    }) // clientX, screenX, offsetX


    // offsetX  : 이벤트 대상을 기준으로 봄
    // pageX    : 전체문서를 기준 (document)
    // clientX  : 브라우저 크기를 기준 (window)
    // screenX  : 보여지는 화면크기를 기준 (모니터)

    
   

  }) // $.ajax
  //jQuery end
})(jQuery);
