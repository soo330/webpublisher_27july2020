// navBox.js
(function($){
  //=====================================
  //navigation 내용을 담을 형식 설정
var navBox =  [
{ 'titleNav' : {'tname':'story', 'tlink':'http://naver.com','target':'_blank'},
  'subNav'   : [  {'sname':'몽피이야기','slink': 'http://google.com'},
                  {'sname':'회사소개','slink': 'http://google.com'},
                  {'sname':'후원','slink': 'http://google.com'}]},

{'titleNav' : { 'tname':'menu', 'tlink':'http://naver.com','target':'_blank'},
  'subNav'   : [ {'sname':'커피류', 'slink':'http://google.com'},
                {'sname':'기타음료', 'slink':'http://google.com'},
                {'sname':'음식 및 디저트', 'slink':'http://google.com'},
                {'sname':'선물상품',  'slink':'http://google.com'},
                {'sname':'기타안내', 'slink':'http://google.com'}]},

{ 'titleNav' : {'tname':'store', 'tlink':'http://naver.com','target':'_blank'},
  'subNav'   : [
    {'sname':'신규매장', 'slink': 'http://google.com'},
    {'sname':'매장찾기',  'slink': 'http://google.com'},
    {'sname':'가맹문의',  'slink': 'http://google.com'},
    {'sname':'창업설명회',  'slink': 'http://google.com'},
    {'sname':'창업스토리', 'slink': 'http://google.com'}]},

{ 'titleNav' : {'tname':'news', 'tlink':'http://naver.com','target':'_blank'},
  'subNav'   : [
    {'sname':'이벤트', 'slink':'http://google.com'},
    {'sname':'공지사항', 'slink':'http://google.com'},
    {'sname':'프로모션', 'slink':'http://google.com'},
    {'sname':'미디어광고','slink':'http://google.com'}]},

];
  //=====================================
  // console.log(navBox.length);
  var navList = '<li><dl><dt></dt><dd></dd></li>';

  var navBoxSel = $('#navBox');
  var navBoxSelUl = navBoxSel.children('ul');
  var navLen = navBox.length;
  var navDt, navDd, subNavLen, i, j, tNav, sNav;
  // subNavLen의 경우는 갯수가 정해지지 않았기때문에 처음부터 갯수를 정할수없어 정의만 해놓은 상태로 시작한다

  //j라고 여기서 선언후 for(i)안에 값을 주어야함
  // (; 객체의 개수만큼; )
  for(i=0; i<navLen; i+=1){
    // 생성, 삽입,   내용
    navBoxSelUl.append(navList);
    navDt = navBoxSelUl.children('li').eq(i).find('dt');
    navDd = navBoxSelUl.children('li').eq(i).find('dd');
    tNav = navBox[i].titleNav;    
  

    // $() jQuery에서의 선택자
    navDt.append('<a href="'+ tNav.tLink +'" target="'+ tNav.target+'">' + tNav.tname + '</a>');
    // 모든브라우저에서 사용가능
    // navDt.append(`<a href="${tNav.tlink}" target="${tNav.target}">${tNav.tname}</a>`);
    // 여기서의 $는 순수 js 표현기법 구 브라우저에서는 사용 불가
    
    subNavLen = navBox[i].subNav.length;
    // 반복문; 언제까지 subNavLen이 될때까지
    // console.log(subNavLen);
    
    
    for(j=0; j < subNavLen ; j+=1){
    sNav = navBox[i].subNav[j];
    navDd.append('<a href="'+sNav.slink+'">'+ sNav.sname+ '</a>');
    }
  } // for end =====================================================
  var navBoxFindDt = navBoxSel.find('dt');
  var navBoxFindDtLink = navBoxFindDt.find('a');
  var navBoxFindDd = navBoxSelUl.find('dd');
  var navBoxFindDdLink = navBoxFindDd.find('a');

  navBoxFindDd.hide(); // =display:none;
  // navBoxSelUl.addEventListener('mouseenter', function(){});
// 속도면에서 사후관리가 더 빨리 할 수 있다.
  var navSlideDown = function(){
    navBoxFindDd.stop().slideDown();
  };
  var navSlideUp = function(){
    navBoxFindDd.slideUp();
  };
  //역슬러시\를 쓰면 이 문장을 잇겠다는 의미로 줄바꿈해도 가능

  // navBoxSelUl.on('mouseenter', navSlideDown);
  // navBoxSelUl.on('mouseleave', navSlideUp );
  // => 다시 하나로 만들 수 있다 /객체도 함수로 만들 수 있다
  // navBoxSelUl.on({무엇을:해라});
  navBoxSelUl.on({'mouseenter':navSlideDown,
                  'mouseleave':navSlideUp});

  navBoxFindDtLink.on('focus', navSlideDown);
  navBoxFindDdLink.eq(-1).on('blur', navSlideUp);
  
  
})(jQuery);


/*
js 에서는 자식을 선택할 경우 children -> jquery 에서도 children
js 에서 내부의 자손요소를 선택 시 getElement... -> jquery 는 find()
*/
/*
요소 첨부 시, 
---js에서는
document.createElement(); // 생성 후 
??.append();              // 삽입
===================================
-- jQuery
선택자.append('요소이름') // 생성과 동시에 삽입

*/