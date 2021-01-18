// main_newsBox.js

(function($){
  // main_newsBox start

  $.ajax({
    url : '../data/main_newsArea_img.json',
    dataType: 'json',
    context: document.body
  }).done(function(data){


    // var news =0;
    // var myViewLen = 8;
    // var moreFn = function(m){
    //   var y;
    //   if( m === undefined ){
    //     y = myViewLen;
    //   } //if
    //   else {
    //     y = m;
    //   }//else
    // } //moreFn

    var newsData = data;

    var win = $(window);
    // var newsBox = $('#newsBox');
    var newsArea = $('.news_area');
    newsArea.append('<ul></ul>');

    // -----------------------------
    var newsUl = newsArea.children('ul');
    var liText = '<li><a href="#"><div><div></div></div><dl><dt></dt><dd><span></span></dd></dl></a></li>';
    var loremT = 'Lorem';
    var loremC = 'Lorem ipsum dolor sit amet consectetur adipsicing elit. Ipsum, corporis!';



    var i=0;
    var myLen = i;
    var myViewLen = 8;
    var maxLen = newsData.length;
    
    var more=$('.news_more_btn');
    var moreBtn = more.children('button');
    var liEq;



   
    var s = 0;
    var listEl;
    // li이하 태그들 for문으로 형성
    // console.log( newsData );
    for( ; s < 30 ; s++ ){
      newsUl.append(liText);
      listEl = newsUl.children('li').eq(s);
      var namedDiv = listEl.find('div').children('div').addClass(newsData[s].divClassName);
      namedDiv.css({backgroundImage: 'url('+ newsData[s].imgT +')'});

      // console.log(divClassName +(s+1))

      listEl.find('dt').text(loremT);
      listEl.find('dd').text(loremC);
    } // for s<30
      var newsLi = newsUl.children('li');
      var newsLiImg = newsLi.children('img');

      
    // ===========================================

    // var moreFn = function(j){
    //   var k;
    //   k = j || myViewLen;
    //   myLen = i+k;
    //   if( i >= maxLen){
    //     more.remove();
    //     break;
    //   }else{
    //     newsUl.append(liText);
    //     listEl = newsUl.children('li').eq(s);
    //     var namedDiv = listEl.find('div').children('div').addClass(newsData[s].divClassName);
    //     namedDiv.css({backgroundImage: 'url('+ newsData[s].imgT +')'});

    //     // console.log(divClassName +(s+1))

    //     listEl.find('dt').text(loremT);
    //     listEl.find('dd').text(loremC);
    //   }
    // }
    
    // ===========================================

      //=====================================================================
      // To-do
      // 1. 가로 1줄에 들어가는 마지막 번째 li 마진 제거

      var BrowserSet = function(){

        // 함수 재 수행시 li style 속성 제거
        newsLi.removeAttr('style');

        // (li의 가로크기a + li의 마진값(공백) b)===============================
        var newsLiWidth = newsLi.eq(0).outerWidth();
        var newsMargin = newsLi.eq(0).outerWidth(true)-newsLiWidth; //b를 빼주기위함

        // var winW = win.outerWidth();
        var winW = $('#newsBox').find('.news_area').outerWidth();
        // 정수 ( browser W / ( liWidth + liMargin )) = li 갯수
        var liLen = parseInt(winW / (newsLiWidth + newsMargin) );

        // (브라우저 가로값+ 카드li의 가로값)* li갯수 - 카드마진값b
        //      ↓ newsUl.css({ width: (winW * newsLiWidth) - newsMargin });

        //      ↓ var ulWidth = ((newsLiWidth + newsMargin) * liLen)-newsMargin;
        var ulWidth = ((newsLiWidth + newsMargin)* liLen)-newsMargin;
        newsUl.css({width : ulWidth + 'px'});
        
        // 갯수값 도출
        // console.log(ulWidth,liLen);  

        var x = 0;
        // 올림(newsLi총갯수 / 가로한줄에 들어갈 li갯수)
        var liNth = Math.ceil( newsLi.length / liLen );
        var k;
        
        // for문
        // ex 5개씩에서 5번째마다 -> eq(4*n)마다 마진값

        for( ; x < liNth ; x++ ){
          // 번째값 계산: (li갯수 * x)-1 
          // newsLi.eq( x * liLen - 1)
          k = liLen * x -1; 
          // console.log(k);

          newsLi.eq(k).css({marginRight:0}); // 1. 완료

        } // for x < liNth
      } //BrowserSet
      BrowserSet();

      
      // 브라우저 크기 재 측정시
      win.on('resize', function(){
        BrowserSet();
      }) // resize

  
  }); // ajax
  //jQuery end
})(jQuery);



// (function($){
//   $.ajax({
//     url: ...$,
//     dataType:...,
//     context:document.body
//   }).done(function(data){
//     var data = data;

//   })
// })(jQuery)