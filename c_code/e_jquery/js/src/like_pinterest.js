// like_pinterest.js

(function($){
  // like_pinterest start

  // todo List
  // [o] 1) 카드 js에서 구현
  // [x] 2) json파일 생성 후 불러오기 img list화 처리
  // []  3) 생성된 ul의 가로 크기를 li 갯수만큼 담을 수 있도록 수정

 
  var win = $(window); //browser는 따옴표 없이 가져옴
  var cardBox = $('#cardBox');
  cardBox.append('<ul></ul>'); // 이때 ('ul');이 아닌 태그로써 불러옴
  // ('ul'); 로 쓰면 뜯어오는 것이 됨

  var cardUl = cardBox.children('ul');
  var liText = '<li><a><div class="img_temp"><img /></div><span></span></a></li>';

  cardUl.append(liText);
  var cardLi = cardUl.children('li');

  var s = 0;
                  // s++ / +=1 / ++1 모두 같음
  // li 이하 태그들 for문으로 만들기
  for( ; s < 20 ; s++ ){
    cardUl.append(liText);
  } //for 20개의 li tags

   // ★★★
   // 책장과도 같다고 생각해보자 나는 책이 많은 상태고 그에맞는 책장을 사려고함
   // ul에 li갯수만큼 담을수있도록 설정하려면
   // 1. (li의 가로크기a + li의 마진값(공백) b)
   // 2. 브라우저의 (기준)크기값c

  /*
   outerWidth
    outerWidth(treu) 는 margin값을 포함한 값
    outerWidth() 는 margin을 제외한 가로값 (padding+border+width)값
  */

  var cardLiWidth = cardLi.eq(0).outerWidth();
  var cardMargin = cardLi.eq(0).outerWidth(true)-cardLiWidth; // 이 수식으로 b를 뺴주기 위해 설정

  // >> 브라우저 크기를 기준으로 내가 만든 li는 총 몇개를 담을 수 있는가?
  // winW 나누기 margin값
  var winW = win.outerWidth();
  var liLen = parseInt( winW / ( cardLiWidth + cardMargin ) );
  //정수화 처리 : parseInt()
  // 버림, 올림, 반올림: Math.floor(), Math.ceil(), Math.round();
  
  // console.log(liLen);

  // 브라우저 가로값 * 카드li의 가로값 - 카드마진값인b 를 빼주는 공식
  // cardUl.css({ width: (winW * cardLiWidth) - cardMargin });
  var ulWidth = ( cardLiWidth - liLen ); // - cardMargin)

  cardUl.css({width: ulWidth + 'px'});
  console.log(ulWidth)

  //jQuery end
})(jQuery);
