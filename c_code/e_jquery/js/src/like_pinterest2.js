// ex_18_like_pinterest2.js

(function($){
  // 1. 카드 감싸는 영역 크기설정, 내용물 삽입
  // 2. 스크롤의 진행 위치값 표시
  // 3. 스크롤 시 일정 위치가 넘어가면 추가 카드가 생성되게 처리
  // 4. Math.random(); 을 이용하여 색상, 높이값 변경

  // ===================================================
  // ===================================================

  // 4. math.random
  // ramdom = Math.floor(Math.random() * 2);

  /*
  var r1 = Math.floor(Math.random() * 16).toString(16);
  var r2 = Math.floor(Math.random() * 16).toString(16);
  var r3 = Math.floor(Math.random() * 16).toString(16);
  */
  var Rn = function(){
  return  Math.floor(Math.random()*16).toString(16);
  };
  // var randomColor = '#'+Rn()+Rn()+Rn();  
  // console.log(randomColor);

  //----------------------------------------------
  var headBox = $('#headBox');
  headBox.prepend('<div class="scroll_percent"></div');


  // 2. 스크롤의 진행 위치값 표시 css
  var scrollP = $('.scroll_percent ');
  scrollP.css({
    position:'absolute', top:0, left:0, zIndex:-1, width:0, height:'90%', opacity:0.2,    backgroundColor:'#f06', transform:'translate(-0.5rem) scale(1.1) skew(-15deg)'});
  

  // --------------------------------------------------------
  var cardCode = '<div class="card"><div class="card_img"></div><div class="card_narr"><a href="#"><dl><dt>title</dt><dd>Lorem, ipsum.</dd></dl></a></div></div>';

  // window, cardBox, card_area 선택자
  var win = $(window);
  var cardBox = $('#cardBox');
  var cardArea = cardBox.children('.card_area');

  // 추가 선택자
  var card; 
  // 1. card 생성
  // 3번에서 요구하는 카드생성 형태임으로 중복 수행하게되는 형태로써 함수화 처리

  var i=0; 

  var cardCount = 0;
  var randomColor = [];
  

  // 3-1 카드값 만들기
  var AppendCardFn = function(){
    cardCount += 50;

    for(; i < cardCount; i++){
      cardArea.append(cardCode);
      card = cardArea.children('.card').eq(i);
      card.find('dt').text( 'title_'+ (i+1) );
      randomColor = '#'+Rn()+Rn()+Rn(); // 함수 밖에서 배열처리 후 만들어줌
      card.find('.card_img').css({backgroundColor: randomColor[i]}); 

    } //for
    $('.card').css({float:'left'});

  } // AppendCardFn
  AppendCardFn(); // 50개씩 늘어나게됨

  
  // ---------------------------------------------
  // .card_area의 가로값 세팅
  var cardEq0 = $('.card').eq(0);
  var cardWidth = cardEq0.outerWidth(); 
  //outerWidth = 가로+패딩+외곽선;

  var CardWidthSet = function(){
    cardWidthLen = 
    parseInt(cardBox.outerWidth() / cardWidth);
    cardArea.css({width:cardWidth * cardWidthLen + 'px'});

  } //cardWidthSet
  CardWidthSet();
  

  // 브라우저 크기 변경시 cardArea 사이즈 재수정
  win.on('resize', function(){
    CardWidthSet();
  });


  // ------------------------------------------------------
  // 2. 스크롤의 진행 위치값 표시
  win.on('scroll', function(){
    var st = $(this).scrollTop(); // scrollTop 값
    var wrap = $('#wrap');
    var wrapHeight = wrap.outerHeight();
    var winH = win.outerHeight();

    // percentage 공식 : 값(ex높이값) /(나누기) 기준(전체) * 100
    // 스크롤 처리 시에는 (화면의 높이값) 만큼 빼주어야 함
    var per = st / (wrapHeight-winH) * 100;
    // console.log(per);

    // .scroll_percent의 가로값에 적용
    // scrollP.css({width: 적용할값+'%'});
    scrollP.css({width : per + '%'});

    // ----------------------------------------------------
    // 3. 일정 수치가 넘어가면 추가 카드를 생성
    // 카드를 생성한 영역을 재호출, 기존의 카드는 유지해야함
    if( per >= 90 ){ // per가 90을 넘어가면
      AppendCardFn(); // 50개씩 생성해라
    }//if

  }); // win. scroll


})(jQuery);