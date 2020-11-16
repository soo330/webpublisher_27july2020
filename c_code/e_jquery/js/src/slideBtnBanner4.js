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
        actionLi = slideUl.find('.action');

        // indiLi.eq(theLiIndex).addClass('action');
        // indiLi.eq(theLiIndex).siblings().removeClass('action');

        // console.log(theLiIndex);

        // slideLi.eq(theLiIndex).stop().addClass('action');
        // slideLi.eq(theLiIndex).siblings().removeClass('action');
        
        // slideLi.eq(theLiIndex).fadeIn(function(){}); //fade In은 애니메이션이 생기니까
        // slideLi.eq(theLiIndex).stop().show();
        // actionLi.eq(theLiIndex).siblings().stop().fadeOut(function(){
        //     slideLi.eq(theLiIndex).siblings().removeClass('action');
        //     slideLi.eq(theLiIndex).stop().addClass('action');

        // }); //slide fadeOut
        // ==============================================================

        if(theLiIndex !== actionLi.index()){
            indiLi.eq(theLiIndex).addClass('action');
            indiLi.eq(theLiIndex).siblings().removeClass('action');

            slideLi.eq(theLiIndex).stop().addClass('action');
            slideLi.eq(theLiIndex).siblings().removeClass('action');
            actionLi = slideUl.find('.action');

            slideLi.eq(theLiIndex).stop().fadeIn(function(){
                slideLi.not(actionLi).stop().hide();
            }); // slideLi fadeIn
        } //if theLiIndex !==
    }); //indiLi on
    
})(jQuery);