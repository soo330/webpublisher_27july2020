// ex_18_like_pinterest2.js

(function($){
  // 1. 카드 감싸는 영역 크기설정, 내용물 삽입
  // 2. 스크롤의 진행 위치값 표시

  var headBox = $('#headBox');
  headBox.prepend('<div class="scroll_percent"></div');

  var scrollP = $('scroll_percent');
  scrollP.css({
    position: 'absolute', top: 0, left: 0, zIndex: -1, width: 0, height: '90%', opacity: 0.2, backgroundColor: '#f06', transform: 'rotate(5deg)'});
  

  // --------------------------------------------------------

  var cardCode = '<div class="card"><div class="card_img"></div><div class="card_narr"><a href="#"><dl><dt>title</dt><dd>Lorem, ipsum.</dd></dl></a></div></div>';

  // window, cardBox, card_area 선택자
  var win = $(window);
  var cardBox = $('#cardBox');
  var cardArea = cardBox.children('.card_area');

  // 추가 선택자
  var card; 
  // card 생성
  var i=0; 
  var cardCount = 50;

  for(; i < cardCount; i++){
    cardArea.append(cardCode);
    card = cardArea.children('.card').eq(i);
    card.find('dt').text( 'title_'+ (i+1) );
  }

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
  $('.card').css({float:'left'});

  // 브라우저 크기 변경시 cardArea 사이즈 재수정
  win.on('resize', function(){
    CardWidthSet();
  });


  // 2. 스크롤의 진행 위치값 표시
  win.on('scroll', function(){
    var st = $(this).scrollTop(); // scrollTop 값
    var wrap = $('#wrap');
    var wrapHeight = wrap.outerHeight();
    var wihH = win.outerHeight();

    // percentage 공식 : 값(ex높이값) /(나누기) 기준(전체) * 100
    // 스크롤 처리 시에는 (화면의 높이값) 만큼 빼주어야 함
    var per = st / (wrapHeight-wihH) * 100;
    // console.log(per);

    // .scroll_percent의 가로값에 적용
    // scrollP.css({width: 적용할값+'%'});
    scrollP.css({width : per + '%'});
  }); // win. scroll


})(jQuery);