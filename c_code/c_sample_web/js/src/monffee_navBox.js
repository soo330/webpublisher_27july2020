// navBox.js
(function($){
  //=====================================
  //navigation 내용을 담을 형식 설정
var navBox =  [
{ 'titleNav' : 'story',
  'subNav'   : ['몽피이야기', '회사소개', '후원'] },
{ 'titleNav' : 'menu',
  'subNav'   : ['커피류',  '기타음료', '음식 및 디저트', '선물상품', '기타안내']},
{ 'titleNav' : 'store',
  'subNav'   : ['신규매장', '매장찾기', '가맹문의', '창업설명회', '창업스토리'] },
{ 'titleNav' : 'news',
  'subNav'   : ['이벤트', '공지사항', '프로모션', '미디어광고'] }
];
  //=====================================
  // console.log(navBox.length);
  var navList = '<li><dl><dt></dt><dd></dd></li>';

  var navBoxSel = $('#navBox');
  var navBoxSelUl = navBoxSel.children('ul');
  var navLen = navBox.length;
  var navDt, navDd, subNavLen, i, j;
  // subNavLen의 경우는 갯수가 정해지지 않았기때문에 처음부터 갯수를 정할수없어 정의만 해놓은 상태로 시작한다

  //j라고 여기서 선언후 for(i)안에 값을 주어야함
  // (; 객체의 개수만큼; )
  for(i=0; i<navLen; i+=1){
    // 생성, 삽입,   내용
    navBoxSelUl.append(navList);
    navDt = navBoxSelUl.children('li').eq(i).find('dt');
    navDd = navBoxSelUl.children('li').eq(i).find('dd');
    navDt.append('<a href="#">' + navBox[i].titleNav + '</a>');
    subNavLen = navBox[i].subNav.length;
    // 반복문; 언제까지 subNavLen이 될때까지
    // console.log(subNavLen);
    
    for(j=0; j < subNavLen ; j+=1){
      navDd.append('<a href="#">'+ navBox[i].subNav[j] + '</a>');
    }
  } // for end =====================================================
  var navBoxFindDt = navBoxSel.find('dt');
  var navBoxFindDtLink = navBoxFindDt.find('a');
  var navBoxFindDd = navBoxSelUl.find('dd');
  var navBoxFindDdLink = navBoxFindDd.find('a');

  navBoxFindDd.hide(); // =display:none;
  // navBoxSelUl.addEventListener('mouseenter', function(){});
  navBoxSelUl.on('mouseenter', function(){navBoxFindDd.slideDown();
  });
  navBoxFindDtLink.on('focus', function(){navBoxFindDd.slideDown();
  });
  navBoxSelUl.on('mouseleave', function(){navBoxFindDd.slideUp();
  });
  navBoxFindDdLink.eq(-1).on('blur', function(){navBoxFindDd.slideUp();
  });
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