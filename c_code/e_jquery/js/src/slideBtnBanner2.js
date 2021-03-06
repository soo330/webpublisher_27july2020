// slideBtnBanner2.js

(function($){
  var slide = $('.slide2');
  var slideBtnPart = slide.find('.slide_btn');
  var slideBtn = slideBtnPart.children('button');

  var indexSlide = slide.find('.index_slide');
  var slideLi = indexSlide.find('li');
  var liLen = slideLi.length;

  slideLi.not( $('.action') ).hide();
  /*
  <action을 제외하고>라는 의미
  2번째로도 사용가능
  slideLi.hide();
  indexSlide.find('.action').show();
  */

/* 용어 정리
hasClass(); : ()안에있는 속성값이 있는지 확인하는 기능
*/

/* action Class이름이 몇번 째 있는 지 파악하는 기능; */

  var actionIndex;
  var MyActionIndex =function(){
    var i=0,  actionCheck;
    for(; i<liLen ; i+=1 ){
      actionCheck = slideLi.eq(i).hasClass('action');
      if(actionCheck){
        actionIndex = i;
        break;
      } // if()
    } // for()
    return actionIndex;
  } // MyActionIndex

  // console.log(actionIndex);

  // -----------------------------------------------------------
  var SlideAction = function(){
    slideLi.eq(indexN).show();
    // z-idex값 하나 없어지면 된다
    slideLi.eq(actionIndex).stop().fadeOut(timed/2, function(){
      // 1) 해당하는 eq번째에 addClass인 ('action')을 넣어줘라
      slideLi.eq(indexN).siblings().removeClass('action');
      // 1-2) 해당 eq번쨰아이의 형제들은 action값을 빼줘라
      slideLi.eq(indexN).addClass('action');
      // 1-3 eq번째의 li에 C action을 넣어주고
      
      // 5) setTimeout을 사용하여 permission true로
      setTimeout(function(){
        permission = true;
      }, timed/5);

    }); //fadeOut()
  } //SlideAction()


  //===========================================================
  //===========================================================

  //아래에 있는 prev/next버튼의 기능값을 위처럼 함수화하여 사용할 수 있다
  // -----------------------------------------------------------

  var indexN = 0;

  // 4) permission을 사용하여 2번 클릭시에 뜨는 에러를 잡아본다
  var permission = true;
  var timed = 500; //0.5초

  slideBtn.on('click', function(e){
    e.preventDefault();
    MyActionIndex();

    if (permission){
      // button 클릭 시 
      permission = false;
      var it = $(this).attr('class');

    if( it === 'next'){
      indexN += 1;

      if( indexN >= liLen){
        indexN = 0;
      } // if()

      // slideLi.eq(indexN).show();
      // // z-idex값 하나 없어지면 된다
      // slideLi.eq(actionIndex).fadeOut(function(){
      //   // 1) 해당하는 eq번째에 addClass인 ('action')을 넣어줘라
      //   slideLi.eq(indexN).siblings().removeClass('action');
      //   // 1-2) 해당 eq번쨰아이의 형제들은 action값을 빼줘라
      //   slideLi.eq(indexN).addClass('action');
      //   // 1-3 eq번째의 li에 C action을 넣어주고
      // }); //fadeOut()
      SlideAction();
    } else if( it === 'prev' ){
      indexN -= 1;
      // slideLi.eq(indexN).show();
      // slideLi.eq(actionIndex).fadeOut(function(){
      //   slideLi.eq(indexN).siblings().removeClass('action');
      //   slideLi.eq(indexN).addClass('action');
      // }) //fadeOut
      SlideAction();

      if(indexN <= -1){
        indexN = liLen-1;
      } // if()
      
    } // if (if === 'prev') End
    console.log(indexN);

    } // if(permission)
    
  }); // slideBtn.on('click') End
})(jQuery);