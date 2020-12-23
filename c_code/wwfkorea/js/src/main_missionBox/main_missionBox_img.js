// main_missionBox_img.js


(function($){
  // main_missionBox_img start
  $.ajax({
    url: "../data/main_misson_img.json",
    context: document.body
    // dataType:'json',
  }).done(function(data){
    var msImgData = data;
    // console.log(msImgData);
    
    var win = $(window);
    var msBox = $('.missionBox');
    msBox.append('<ul class="mission_img"></ul>');

    var msUl = msBox.children('ul');
    var liText = '<li><a><div></div><span></span></a></li>';

    var url = '../../img/wwfimg/mission_img/';

    var s = 0;
    var listEl
    for(; s < 5 ; s++ ){
      msUl.append(liText);
      listEl = msUl.children('li').eq(s);

      var msLi = msUl.children('li');
      var msDiv = msLi.children('div');

      listEl.find('a').attr({"href": '#'});
      listEl.find('div').addClass(msImgData[s].title);
      listEl.find('div').css({backgroundImage: 'url('+ url+ msImgData[s].img + ')'});
      listEl.find('span').text( msImgData[s].spanText);

      // msDiv.eq(s).append(url+msImgData[s].img);
    } // for 5개의 li tag들

    var msLi = msUl.children('li');
    var msDiv = msLi.children('div');
    // msDiv.eq(s).append(url+msImgData[s].img);


    // =============================================
    var msLiWidth = msLi.eq(0).outerWidth();
    var msMargin = msLi.eq(0).outerWidth(true)-msLiWidth; // 작은 이미지 오른쪽 마진을 빼주기

    var winW = win.outerWidth();
    var liLen = parseInt( winW / (msLiWidth + msMargin)); //li개수값
    
    var ulWidth = ((msLiWidth+msMargin)*liLen)-msMargin;// 마지막 번째 마진을 빼주기

    msUl.css({window: ulWidth+'px'});
    var i = 0;
    var liNth = Math.ceil( msLi.length / i);
    var n;

    // for( ; i < liNth ; i++ ){
    //   n = liLen*i-1;
    //   console.log(n);
    // }// for

  });
  //jQuery end
})(jQuery);
