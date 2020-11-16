// slideBtnBanner4.js

(function($){
    var IFS= $('.indicator_fade_slide');
    var indiUl =IFS.children('.indicator4');
    var indiLi =indiUl.children('li');

    var slideWrap = IFS.find('.slide_wrap');
    var slideUl = slideWrap.children('ul');
    var slideLi = slideUl.children('li');

    var actionLi = slideUl.find('.action');
    actionLi.show();

    var timed = 500;
    var index=0;

    indiLi.children('a').on('click focus', function(e){
        e.preventDefault();

        var theLi = $(this);
        var theLiIndex = theLi.parent('li').index();
        
        indiLi.eq(theLiIndex).addClass('action');
        indiLi.eq(theLiIndex).siblings().removeClass('action');

        if(e.type === 'focus'){
            console.log('focus 처리 되었습니다');

        }else if (e.type === 'click'){
            console.log('click 처리 되었습니다');
        }
        slideLi.eq(theLiIndex).addClass('action');
        slideLi.eq(theLiIndex).siblings().removeClass('action');
        
        // slideLi.eq(theLiIndex).fadeIn(function(){}); //fade In은 애니메이션이 생기니까
        slideLi.eq(theLiIndex).fadeIn(function(){
            slideLi.eq(theLiIndex).siblings().hide();
        }); //slide fadeIn
        // ==============================================================

    }); //indiLi on
    
})(jQuery);