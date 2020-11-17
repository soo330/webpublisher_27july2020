// fancybox_plugin.js

(function($){


  var data = [
    {
      "title":"juice_01",
      "thumImg": "juice_small_01.jpg",
      "bigImg":"juice_big_01.jpg",
      "content": "image_01 설명lorem2",
      "text":"이미지_01",
      "imgUrl":"'../../img/modal/juice_small_01.jpg'",
    },
    {
      "title":"juice_02",
      "thumImg": "juice_small_01.jpg",
      "bigImg":"juice_big_01.jpg",
      "content": "image_02 설명lorem5",
      "text":"이미지_02",
      "imgUrl":"'../../img/modal/juice_small_01.jpg'",
    },
    {
      "title":"juice_03",
      "thumImg": "juice_small_01.jpg",
      "bigImg":"juice_big_01.jpg",
      "content": "image_03 설명lorem10",
      "text":"이미지_03",
      "imgUrl":"'../../img/modal/juice_small_01.jpg'",
    },
    {
      "title":"juice_04",
      "thumImg": "juice_small_01.jpg",
      "bigImg":"juice_big_01.jpg",
      "content": "image_04 설명lorem3",
      "text":"이미지_04",
      "imgUrl":"'../../img/modal/juice_small_01.jpg'",
    }
  ];
  //===============================================================

  var modalnCode = '<li><button type="button"><span></span></button></li>';
  var galleryCode = '<div class="gallery_box"><div class="gallery_area">\
  <div class="close"><button type="button"><span>닫기</span>\
  </button></div><div class="big_img">/p></div></div></div>';
  
  //===============================================================


    var modal = $('.modal_01');
    var modalUl = modal.children('ul');

    // modal.append(galleryCode); //선택자 내부의 뒤에
    modal.after(galleryCode); // 선택자 바로 뒤에

    var modalLi = modalUl.find('li');
    var mLibtn = modalLi.find('button');
    var span = mLibtn.find('span');

    
    var galleryBox = $('.gallery_box');
    var galleryArea= galleryBox.children('.gallery_area');
    var close = galleryArea.find('.close');
    var bigImg = galleryArea.find('.big_img');

    // var theBig = theLi.attr('data-big');
    var dataNarr;
    var pTag = bigImg.children('p');
    var timed = 500;


    var i=0;
    // modalUl.empty(); // 선택자 내부 지우기
    for(; i < data.length ; i+=1){
      modalUl.append(modalnCode);
      modalLi=modalUl.find('li').eq(i);
      modalLi.attr({'data-big' : data[i].bigImg});
      modalLi.attr({'data-narr': data[i].thumImg});
      span.text(data[i].text);

    }
    
    




		var url = "../../img/modal/";
		var indexCheck;

    modalLi.children('button').on('click', function(e){
			e.preventDefault();
			var theLi = $(this).parent('li');
			var theLiI = theLi.index();

      indexCheck= theLiI;

      dataNarr = theLi.attr('data-narr');
      var pTag = bigImg.children('p');
      pTag.text(dataNarr);

			var theBig = theLi.attr('data-big');
			galleryBox.stop().fadeIn(function(){
        close.children('button').focus();
        setTimeout(function(){
          pTag.addClass('action');
        },timed/2);
			});
      bigImg.css({backgroundImage : 'url('+ url + theBig +')'});
    
    }); //mLiBtn button fadeIn
    
    close.children('button').on('click', function(e){
      e.preventDefault();
      galleryBox.stop().fadeOut();
      modalLi.eq(indexCheck).find('button').focus();	
      pTag.removeClass('action');
    }); //close



})(jQuery);