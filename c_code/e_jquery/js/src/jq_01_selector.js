// jq_01_selector.js

// $(document).ready(function(){});
// $(function(){});
// 옛날 방식
// =========================================

// <선택자 기본형, 간단한 css>
//function($) 이 달러가 jQuery라는 뜻
(function($){
  var idBox = $('#box'); //id 선택자
  // $('#box').css({'width': 100 + 'px', 'height':100 +'px', 'background-color': '#fa0'});
  // $('선택자').css({ property,한 단어, 문자는 ''로 감싸준다})
  // css 선택자는 camelCase 로써준다
  // 하단 확인===========================================
  idBox.css({'width': 100 + 'px', 'height':100 +'px', 'background-color': '#fa0'});
  // css({}) 이후에 한개로 쭉 쓸 수 있다 =css border 3px solid #0cf 같은맥락
  var boxTwo = $('.box_two'); //class선택자
  boxTwo.css({'width': '300px'});
  boxTwo.css({'height': 100 +'px'});
  boxTwo.css({'border': '3px solid #0cf'}); //얘도 따로따로 쓸수있다
  // boxTwo.css({'width': '300px', 'height': 100 +'px', 'border': 3+ 'px solid #0cf'});
  // ==================================================
  var listThree = $('.list_three'); //html에 있는 class나 id명 그대로를 불러와야함 ul
  var listLi = listThree.children('li'); //listThree가 ul임으로 li는 chirldren으로 들어감
  listLi.css({'backgroundColor':'#fac', 'marginBottom':'5px', 'width':200+'px'});
  // ===================================================
  // css에서 .list_three>li:nth-child(1)썼다면jQ에서는 아래와같이 쓸수 있다
  listThree.children('li:nth-child(1)').css({'color':'#03f', 'fontWeight':'bold'});
  listThree.children('li:nth-of-type(2)').css({'color':'#f30', 'fontWeight':'bold'});
  listThree.children('li:nth(3)').css({'color':'#330', 'fontSize':1.3+'rem'});
  listThree.children('li').eq(3).css({'color':'#fff', 'fontSize':1.3+'rem'});
  // nth-child, of-type, nth도 쓸수있지만 jq에서는 eq로 순서값을 줄수있다 시작은 (0,1,2~)
  // ===================================================
  // find()
  var listOl = listThree.find('ol'); //.list_three에 있는 ol을 이름정해주기
  listOl.css({'border':'5px solid #777', 'padding':'10px'});
  // ol::marker(불릿기호●), ol::before, ol::after
  // ===================================================
  var style = $('style');
  style.text('#wrap{width:800px; background-color:#ddd; margin:auto}');
  style.append('#wrap::after{content:"글씨를 작성해보아요!";}');
  // append는 style 요소의 내부 "뒷 쪽"에 작성 할 수 있음 <-> prepend
  // ==============================================================
  // ==============================================================
  // <형제, 부모선택자>
  var p2List = $('.part_2_list');
  var p2Li = p2List.children('li');
  p2List.css({'listStyle':'none'});
  p2Li.css({'width': '100px', 'height': '20px', 'marginBottom':'5px', 'backgroundColor':'#fff'});
  
  p2Li.eq(4).css({'color':'#07f', 'fontWeight':'bold'});
  p2Li.eq(4).prev().css({'textAlign':'right'});
  p2Li.eq(4).prevAll().css({'borderRadius':'20px', 'boxShadow':'5px 5px 5px #555'});
  // prev(), prevAll() 뒤에 괄호는 method의 개념으로 쓰임으로 특정 숫자가 없더라도 꼭 쓰여야함

  // =====================================================
  // var lli =document.getElementsByTagName('li');
  /* for(var i=0; i <lli.length ; i+=1){
    lli[i].style.backgroundColor='#acf';
    lli[i].style = 'font-size:0.8rem; font-weight:bold';
  }
  */
  p2Li.eq(-5).css({'fontWeight':'bold', 'color':'#f07'});
  p2Li.eq(-5).next().css({'backgroundColor':'#ff7'});
  p2Li.eq(-5).next().nextAll().css({'boxShadow':'5px 5px 0 #f07 inset'});

  // parents중 ('#/.')특정 선택자를 지정해줄수있다
  p2Li.eq(10).parents('#wrap').css({'border':'3px dotted #57a'}); // #wrap'만' 지정
  p2Li.eq(10).parentsUntil('#wrap').css({'outline':'5px solid rgba(51,51,255,0.3'});// #wrap을 제외한 직전 부모들
  p2Li.eq(10).parent().css({'border':'1px dotted #171717'});

  /*
    li.parent() => li.parent('ul') 인것을 ul을 굳이 써주지 않은것
    li.parent('wrap')=> #wrap만
    li.parentsUntil() => 여기서 안써주면 어디까지인지 지정되있지 않기때문에 '모두'를 말하는것
    ***closest는 5.6 이후로 쓰지않는다
  */
  // siblings를 쓰면 그 부모를 제외한 나머지를 선택하게 된다
  // ↓↓↓ li의.부모를 제외한().나머지 형제들에 대해서() 적용해라
  // p2Li.parent().parent().siblings().css({'backgroundColor':'#cfc', 'padding':'10px', 'marginBottom':'10px'});
  // --------- 당신의 부모의 부모의 부모의 형제 중에 첫째에게 사과를 주세요
  // ==> li.parent().parent().siblings().eq(0);
  p2Li.parent().siblings().css({'backgroundColor':'#cfc', 'padding':'10px', 'marginBottom':'10px'});
  // =============================================================
  // =============================================================
  //<이벤트 및 $(this)>

  // js는 .addEventListener라고 쓰며
  // jq에서는 선택자이름.순번().on(  , function(e){기능})의 형태로 쓰임
  var evt = $('.evt');
  var evtLi = evt.children('li');

  evtLi.eq(0).on('click', function(e){
    e.preventDefault();
    evtLi.css({'backgroundColor':'#aa7'});
  });

  evtLi.eq(1).on('mouseenter',function(e){
    e.preventDefault();
    evtLi.css({'backgroundColor':'transparent'});
  })

  // ======================================================================
  // <$this>
  // ↓↓↓li를 클릭하면 a가 존재하므로

  evtLi.on('click', function(e){
    e.preventDefault();
    // ↓↓↓선택한 그것.을 제외한 나머지 li에 border-bottom을 적용하겠다
    
    $(this).css({'border':'0'});
    $(this).siblings().css({'borderBottom':'5px solid #333'});
    // 해당하는 그것에 보더를 0줘라

    var thisI = $(this).index();
    console.log(thisI);
    // eq() -순서를 직접 언급 '특정의 어떤것 하나'
    // index() - 순서 확인용 "목록에서 어디냐"
  });
  /*
  click, dblclick, mousedown, mouseup, mousemove,
  mouseenter, mouseleave, mouseover, mouseout

  keypress, keydown, keyup
  focus, blur(focus가 빠져나가는 개념),
  touchstart, touchend, touchmove (사람손으로 인지됨)
  scroll, resize(브라우저 크기가 변함)
  */

})(jQuery);