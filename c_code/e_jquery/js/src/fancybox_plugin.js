// fancybox_plugin.js

(function($){
    var modal = $('.modal_01');
    var modalUl = modal.children('ul');
    var modalLi = modalUl.find('li');
    var mLiBtn = modalLi.find('button');

    
    var galleryBox = $('.gallery_box');
    var galleryArea= galleryBox.children('.gallery_area');
    var close = galleryArea.find('.close');
    var bigImg = galleryArea.find('.big_img');

		var url = "../../img/modal/";
		var indexCheck;

    modalLi.children('button').on('click', function(e){
			e.preventDefault();
			var theLi = $(this).parent('li');
			var theLiI = theLi.index();

			indexCheck= theLiI;

			var theBig = theLi.attr('data-big');
			galleryBox.stop().fadeIn(function(){
				close.children('button').focus();
			});
			bigImg.css({backgroundImage : 'url('+ url + theBig +')'});

    }); //mLiBtn button
    
    close.children('button').on('click', function(e){
      e.preventDefault();
      galleryBox.stop().fadeOut();
			modalLi.eq(indexCheck).find('button').focus();			
    }); //close
})(jQuery);