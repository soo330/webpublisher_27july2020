// main_newsBox.js

(function($){
  // main_newsBox start

  var newsData = [];
  var i=0;
  var url = '../img/news_img/';
  var imgT = 'news_';
  var loremT = 'Lorem';
  var loremC = 'Lorem ipsum dolor sit amet consectetur adipsicing elit. Ipsum, corporis!';

  for( ; i < 30 ; k++ ){
    n = (i+1);
    newsData[i] = {};
    newsData[i].title = 'title' + n;
    newsData[i].img = url + imgT + '.jpg';
    
  }//for

  console.log(newsData);

  //jQuery end
})(jQuery);
