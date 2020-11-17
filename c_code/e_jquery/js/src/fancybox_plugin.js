// fancybox_plugin.js

(function($){
  
  var data = [
    {
      "title":"juice_01",
      "thumImg": "juice_small_01.jpg",
      "bigImg":"juice_big_01.jpg",
      "content": "image_01 설명lorem2",
      "text":"이미지_01"
    },
    {
      "title":"juice_02",
      "thumImg": "juice_small_02.jpg",
      "bigImg":"juice_big_02.jpg",
      "content": "image_02 설명lorem5",
      "text":"이미지_02"
    },
    {
      "title":"juice_03",
      "thumImg": "juice_small_03.jpg",
      "bigImg":"juice_big_03.jpg",
      "content": "image_03 설명lorem10",
      "text":"이미지_03"
    },
    {
      "title":"juice_04",
      "thumImg": "juice_small_04.jpg",
      "bigImg":"juice_big_04.jpg",
      "content": "image_04 설명lorem3",
      "text":"이미지_04"
    }
  ];
  //===============================================================

  var modalnCode = '<li><button type="button"><span></span></button></li>';
  var galleryCode = '<div class="gallery_box"><div class="gallery_area">\
  <div class="close"><button type="button"><span>닫기</span>\
  </button></div><div class="big_img"><p></p></div></div></div>';
  
  //===============================================================

  var modal = $('.modal_01');
  var modalUl = modal.children('ul');

  // modal.append(galleryCode); //선택자 내부의 뒤에
  modal.after(galleryCode); // 선택자 바로 뒤에

 
  var galleryBox = $('.gallery_box');
  var galleryArea= galleryBox.children('.gallery_area');
  var close = galleryArea.find('.close');
  var bigImg = galleryArea.find('.big_img');
  var pTag = bigImg.children('p');

  // var theBig = theLi.attr('data-big');
  var dataNarr;
  var timed = 500;
    

    var url = "../../img/modal/";

    var modalBtn;
    var temLi;

    var i=0;
    // modalUl.empty(); // 선택자 내부 지우기
    for(; i < data.length ; i+=1){
      modalUl.append(modalnCode);
      temLi= modalUl.children('li').eq(i);
      // modalLi=modalUl.find('li').eq(i);
      modalBtn= temLi.find('button');
      // modalLi.attr({'data-big' : data[i].bigImg});
      // modalLi.attr({'data-narr': data[i].thumImg});
      //여기서 modalLi를 쓸수 없는 이유는 변수 바깥에서 정의를 해줬기때문에
      //해당 변수는 이것을 이해하지 못하므로 
      
      temLi.find('span').text(data[i].text);
      modalBtn.css({backgroundImage: 'url(' + url + data[i].thumImg+')', textTransform:'uppdercase'});
      // 1)위값을 객체가 아닌 변수값으로 사용해보자
      

      // temLi.attr({'data-big': data[i].bigImg ,'data-narr': data[i].content });
      // 2)위값을 사용해서 객체가 아닌 변수값으로 사용해보자
    }
    var modalLi = modalUl.find('li');
    var mLibtn = modalLi.find('button');
    var span = mLibtn.find('span');
    var pTag = bigImg.children('p');
    var indexCheck;
    
    galleryBox, galleryArea, close,bigImg, pTag;

    modalLi.children('button').on('click', function(e){
			e.preventDefault();
			var theLi = $(this).parent('li');
      var theLiI = theLi.index();
      indexCheck= theLiI;
      // ====================================
      modal.after(galleryCode);
      galleryBox = $('.gallery_box');
      galleryArea= galleryBox.children('.gallery_area');
      close = galleryArea.find('.close');
      bigImg = galleryArea.find('.big_img');
      pTag = bigImg.children('p');
      // ====================================
      
      
      // thedataNarr = theLi.attr('data-narr');
			// theBig = theLi.attr('data-big');      
      // pTag.text(thedataNarr);
      // bigImg.css({backgroundImage: 'url(' + url + theBig +')'});

      bigImg.css({backgroundImage: 'url(' + url + data[indexCheck].bigImg +')'});
      pTag.text(data[indexCheck].content);

			galleryBox.stop().fadeIn(function(){
        close.children('button').focus();
        setTimeout(function(){
          pTag.addClass('action');
        },timed/2);
			});
      // bigImg.css({backgroundImage : 'url('+ url + theBig +')'});
    
        
    close.children('button').on('click', function(e){
      e.preventDefault();
      galleryBox.stop().fadeOut();
      modalLi.eq(indexCheck).find('button').focus();	
      pTag.removeClass('action');

      galleryBox.remove();// 자체를 지워라
    }); //close
  });//mLiBtn button fadeIn


})(jQuery);