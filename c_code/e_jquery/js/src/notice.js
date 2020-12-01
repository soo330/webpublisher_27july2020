// notice.js

(function($){
  // notice start
  $.ajax({
    url : '../data/random_people.json',
    dataType: 'json',
    context: document.body

  }).done(function(data){
    var dataFile = data.sort(function(a,b){
      return b.id-a.id;
    });


   
  
    

  }); // done

    console.log(dataFile);
    var noticeCode = '<li><a href="#"><em>5</em><span></span></a></li>';
    var indiCode = '<li class="action"><a href="#">01</a></li>';


    var notice = $('.notice_board');
    var noticeCon = notice.children('.context');
    var noticeArea = noticeCon.children('ul');
    var indiCon = notice.children('.indicator');
    var indiLi = indiCon.children('li');

    // 내용 넣기

    var reSetting = function(){}
    var i = 0;
    var noticeLi;
    

    for( ; i< dataFile.length; i+=1 ){
      // datafile의 길이만큼 가지고오고 i에 1씩 더해라
      noticeArea.append(noticeCode);
      noticeLi = noticeArea.children('li').eq(i); //eq i번째
      noticeLi.find('em').text(dataFile[i].id );
      noticeLi.find('span').text(dataFile[i].address);
    }// for

    // 1. 순서 뒤집어서 배치
    // 2. 한번에 보일 내용을 적당히 줄여서 배치
    // 3. 오름차순, 내림 차순 연결해보기

  }); // ajax

    // 아래 배열방식처럼 만든다
   
    var select_area = $('.select_area').find('button');
    select_area.on('click',function(e){
      e.preventDefault();
      var i = $(this).index();
      switch(k){
      case 0:
        dataFile = data.sort(function(a,b){
          return b.id-a.id;

        }); //data.sort
        break //
      // ------------------------
      case 1:
      dataFile= data.sort(function(a,b){
        return a.id-b.id;

      }); //data.sort
      break //
    } //switch
  
  })// select_area

  
  //jQuery end
})(jQuery);
