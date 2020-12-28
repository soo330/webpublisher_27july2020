// main_newsBox.js

(function($){
  // main_newsBox start

  var newsData = [];
  var i=0;
  var url = '../img/wwfimg/news_img/';
  var imgT = 'news_';
  var divClassName = 'news_img_';
  

  for( ; i < 30 ; i++ ){
    n = (i+1);
    newsData[i] = {};
    newsData[i].title = 'title' + n;
    newsData[i].imgT = url + imgT + n + '.jpg';
    newsData[i].divClassName = divClassName;
    // n을 더해줌으로 n=1번째 순서로 만들어준다
  }//for
  // console.log(newsData);

  var win = $(window);
  // var newsBox = $('#newsBox');
  var newsArea = $('.news_area');
  newsArea.append('<ul></ul>');

  var newsUl = newsArea.children('ul');
  var liText = '<li><a href="#"><div></div><dl><dt></dt><dd><span></span></dd></dl></a></li>';

  // var divClassName = 'news_img_';
  var loremT = 'Lorem';
  var loremC = 'Lorem ipsum dolor sit amet consectetur adipsicing elit. Ipsum, corporis!';

  var s = 0;
  var listEl;
  
  // li이하 태그들 for문으로 형성
  for( ; s < 30 ; s++ ){
    newsUl.append(liText);
    listEl = newsUl.children('li').eq(s);
    var namedDiv = listEl.find('div').addClass(divClassName +(s+1));
    namedDiv.css({backgroundImage: 'url('+ url+ divClassName+[n]+')'});


    // console.log(namedDiv[s])

    listEl.find('dt').text(loremT);
    listEl.find('dd').text(loremC);
  } // for s<30
  

  //jQuery end
})(jQuery);
