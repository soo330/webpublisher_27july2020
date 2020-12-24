// like_pinterest.js

(function($){
  // like_pinterest start

  // todo List
  // [o] 1) 카드 js에서 구현
  // [x] 2) json파일 생성 후 불러오기 img list화 처리
  // [o]  3) 생성된 ul의 가로 크기를 li 갯수만큼 담을 수 있도록 수정

  // 실제 데이터 형식에서는

  /*
  [
    {"title": "카드제목", "content": "카드내용",
      "imgSrc":"random_1.jpg", "imgAlt":'이미지설명'},
  ]
  */

    
  var cardData = [];
  var k = 0, l, sampleObj = {};
  var url = '../img/pinterest/'
  var imgT = 'random_';
  for( ; k< 29 ; k+=1 ){
    // if( k < 9){
    //   l = '0' + (k+1) ; // 8->009 --> k=0임으로 사진은 1부터 시작하니까 =  k+1 
    // }else if (k <99){ //9 ->010
    //   l = (k+1);
    // }
    l = (k+1);

    // cardData[k] = imgT + l + '.jpg';


    // json 객체 만들기
    // sampleObj.title = 'title' + l;
    // sampleObj.imgSrc = imgT + l + '.jpg';  
    // sampleObj.imgAlt = imgT + l + '이미지설명';
    // cardData[k] = {sampleObj};
    
    cardData[k] = {};
    cardData[k].title = 'title' + l;
    cardData[k].imgSrc = url + imgT + l + '.jpg';
    cardData[k].imgAlt = imgT + l + '이미지설명'; 
  };
  console.log( cardData );


  var win = $(window); //browser는 따옴표 없이 가져옴
  var cardBox = $('#cardBox');
  cardBox.append('<ul></ul>'); // 이때 ('ul');이 아닌 태그로써 불러옴
  // ('ul'); 로 쓰면 뜯어오는 것이 됨

  var cardUl = cardBox.children('ul');
  var liText = '<li><a><div class="img_temp"><img /></div><span></span></a></li>';

  

  // cardUl.append(liText);
 
  var s = 0;
  var listEl;
                  // s++ / +=1 / ++1 모두 같음
  // li 이하 태그들 for문으로 만들기
  for( ; s < 20 ; s++ ){
    cardUl.append(liText);
    listEl = cardUl.children('li').eq(s);
    listEl.find('img').attr({'src' : cardData[s].imgSrc,
                             'alt' : cardData[s].imgAlt});
    listEl.find('span').text(cardData[s].title);
    listEl.find('a').attr({"href" : '#'});
  } //for 20개의 li tags
  var cardLi = cardUl.children('li');
  var cardLiImg = cardLi.children('img');
  cardLiImg.eq(s).append(url);
  
  
   // ★★★
   // 책장과도 같다고 생각해보자 나는 책이 많은 상태고 그에맞는 책장을 사려고함
   // >>> ul에 li갯수만큼 담을수있도록 설정하려면
   // 1. (li의 가로크기a + li의 마진값(공백) b)
   // 2. 브라우저의 (기준)크기값c

  /*
   outerWidth
    outerWidth(treu) 는 margin값을 포함한 값
    outerWidth() 는 margin을 제외한 가로값 (padding+border+width)값
  */

  //=====================================================================
  /* =========== 여기서 부터 브라우저 크기가 변경되면 다시수행 - 함수처리 */

  var BrowserSet = function(){
  // BrowserSet
  cardLi.removeAttr('style'); // 함수가 재수행하면 li에 style속성을 제거해야함

  
  // --------------------------
  var cardLiWidth = cardLi.eq(0).outerWidth();
  var cardMargin = cardLi.eq(0).outerWidth(true)-cardLiWidth; // 이 수식으로 b를 뺴주기 위해 설정

  // >> 브라우저 크기를 기준으로 내가 만든 li는 총 몇개를 담을 수 있는가?
  var winW = win.outerWidth();
  var liLen = parseInt( winW / ( cardLiWidth + cardMargin ) );
  // liLen =  정수로 가진 값(윈도우 가로값 나누기 (li가로값+li마진값))
  // li갯수값

  //정수화 처리 : parseInt()
  // 버림, 올림, 반올림: Math.floor(), Math.ceil(), Math.round();
  
  // console.log(liLen);

  // (브라우저 가로값+ 카드li의 가로값)* li갯수 - 카드마진값인b 를 빼주는 공식
  // ↓ cardUl.css({ width: (winW * cardLiWidth) - cardMargin });
  // ↓ var ulWidth =( (cardLiWidth + cardMargin) * liLen ) // - cardMargin

  // 마지막 번째 li의 margin b값을 뺴주어야 함
  var ulWidth =( ( cardLiWidth + cardMargin) * liLen )-cardMargin;
  cardUl.css({width: ulWidth + 'px'});
  // console.log(ulWidth,liLen);

  // >>> li 설정
  // 1. li순번에서 가로 행에 들어가는 마지막 번째에는 마진 제거
  // 2. 각각의 행에 들어가는 모든 마지막 위치의 갯수번째 margin 제거

  // js는 0부터 시작하므로 1씩 빼주어야함
  // cardLi.eq( liLen - 1 ).css({margin:0});


  // for( ; lin < ? ; lin +=1 ){} // for
  var lin = 0;
  // var liNth = cardLi.length / liLen;
  var liNth = Math.ceil( cardLi.length / liLen);
  var n; 

  for(; lin < liNth ; lin += 1 ){
    // cardLi.eq(lin * liLen - 1)
    n = liLen * lin -1;
    console.log(n);
    cardLi.eq(n).css({marginRight:0});
    cardLi.eq(n-lin).css({left: lin*(cardLiWidth + cardMargin)});

  } // for


  // 가로에 4개씩에서 4번째 마다 => eq(3*n) 마다 마진값
  // 4번째 마다라는 것은 4, 8 , 12 , 16 순으로 js에서는 3, 7 , 11, 15 값으로나와야함으로
  // eq(4*n -1)로 써주어야함

  //★★★ 브라우저 크기가 변경될 때 마다 재측정을 해주어야함

} // BrowserSet()
BrowserSet();

  win.on('resize', function(){
    BrowserSet();
  })// resize

  //jQuery end
})(jQuery);
