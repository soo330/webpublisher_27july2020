// monffee_bestNews.js
// (function(){})(jQuery);
// 만들 태그가 많다면 [{}]배열형식으로 사용가능
(function($){
  var url = '../img/monffee_img/new_menu/';
  var newsData = [
    {'title': '새로운 메뉴 1',
    'link': '#',
    'img': 'menu_01.png',
    'content': 'Lorem ipsum dolor sit amet consectetur adipisicing elit.Aperiam est nostrum tempore ducimus, hic voluptas. Soluta id optio eius aperiam quibusdam in?'
  },
  {'title': '새로운 메뉴 2',
  'link': '#',
  'img': 'menu_02.png',
  'content': 'Lorem ipsum dolor sit amet consectetur adipisicing elit.Aperiam est nostrum tempore ducimus, hic voluptas. Soluta id optio eius aperiam quibusdam in?'},

  {'title': '새로운 메뉴 3',
  'link': '#',
  'img': 'menu_03.png',
  'content': 'Lorem ipsum dolor sit amet consectetur adipisicing elit.Aperiam est nostrum tempore ducimus, hic voluptas. Soluta id optio eius aperiam quibusdam in?'},

  {'title': '새로운 메뉴 4',
  'link': '#',
  'img': 'menu_02.png',
  'content': 'Lorem ipsum dolor sit amet consectetur adipisicing elit.Aperiam est nostrum tempore ducimus, hic voluptas. Soluta id optio eius aperiam quibusdam in?'},

  {'title': '새로운 메뉴 5',
  'link': '#',
  'img': 'menu_05.png',
  'content': 'Lorem ipsum dolor sit amet consectetur adipisicing elit.Aperiam est nostrum tempore ducimus, hic voluptas. Soluta id optio eius aperiam quibusdam in?'},

  {'title': '새로운 메뉴 6',
  'link': '#',
  'img': 'menu_06.png',
  'content': 'Lorem ipsum dolor sit amet consectetur adipisicing elit.Aperiam est nostrum tempore ducimus, hic voluptas. Soluta id optio eius aperiam quibusdam in?'},

  {'title': '새로운 메뉴 7',
  'link': '#',
  'img': 'menu_07.png',
  'content': 'Lorem ipsum dolor sit amet consectetur adipisicing elit.Aperiam est nostrum tempore ducimus, hic voluptas. Soluta id optio eius aperiam quibusdam in?'}
  ];

  var bestNews = $('#bestNews');
  var bestH2 = bestNews.children('h2');
  bestH2.after('<ul class="clearfix"></ul>');
  var bestUl = bestNews.children('ul');
  var cardListBase ='<li><a href="#"><div class="news_img"></div><dl><dt></dt><dd></dd></dl></a></li>';

  // bestUl.append(cardListBase)
  var i=0;
  var bestLi;

  // 두번째 변수값은 배열 갯수(길이)인 7
  for(; i<newsData.length ; i+=1){
    bestUl.append(cardListBase); //ul에 태그들을 넣어라
    bestLi=bestUl.find('li').eq(i); //bestLi는 ul안에 li.eq(i)번째 아이
    bestLi.find('a').attr({href:newsData[i].link}); //attr=속성 css[type]
    // li안에 있는 a 의 속성을 href타입으로 하는데 배열중 i 번째의 link값을 써라
    bestLi.find('.news_img').css({'backgroundImage':'url(' + url + newsData[i].img + ')'});
    // li안에 있는 .news_img의 css를 bgImage로 하는데 url타입으로 하며 url 변수에 써놓은 경로와 + newsData 배열중 i번째에 있는 img 값을 불러와라
    bestLi.find('dt').text(newsData[i].title); // li안에있는 dt를 불러오며 그 안에 newsData의 i번째 있는 타이틀 값을 가져와라
    bestLi.find('dd').text(newsData[i].content);
    // li안에있는 dd를 불러오며 그안에 text를 쓰는데 newData배열 안에있는 i번째 content를 불러와라

  
  }

})(jQuery)