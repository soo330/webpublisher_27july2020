// slideBtnBanner4.js

(function($){
    var IFS= $('.indicator_fade_slide');
    var indiUl =IFS.children('.indicator4');
    var indiLi =indiUl.children('li');

    var slideWrap = IFS.find('.slide_wrap');
    var slideUl = slideWrap.children('ul');
    var slideLi = slideUl.children('li');
    var SlideLiLink = slideLi.children('a');

    var timed = 500;

    indiLi.children('a').on('click focus', function(e){
        e.preventDefault();

        var theLi = $(this);
        var theLiIndex = theLi.parent('li').index();
        indiLi.eq(theLiIndex).addClass('action');
        indiLi.eq(theLiIndex).siblings().removeClass('action');
        
        slideLi.eq(theLiIndex).addClass('action');
        slideLi.eq(theLiIndex).siblings().removeClass('action');
    }); //indiLi on
    
})(jQuery);