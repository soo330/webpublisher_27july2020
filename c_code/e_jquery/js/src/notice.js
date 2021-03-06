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
    }); //dataFile
    console.log(dataFile);

    // 1. 순서 뒤집어서 배치
    // 2. 한번에 보일 내용 30개를 적당히 줄여서 배치
    //  2-1. 인디케이터 생성하여 그 순번에 맞는 내용 나타내기
    // 3. 오름차순, 내림 차순 연결해보기

    
    var noticeCode = '<li><a href="#"><em>5</em><span></span></a></li>';
    var indiCode = '<li class="action"><a href="#">01</a></li>';


    var notice = $('.notice_board');
    var noticeCon = notice.children('.context');
    var noticeArea = noticeCon.children('ul');
    
    var indiCon = notice.children('.indicator');
    var indiArea = indiCon.children('ul');

    // 기본셋팅
    var myViewLen = 20; // 한번에 보일 갯수 

    // 인디케이터 생성하기
    var indiLen = Math.ceil(dataFile.length / myViewLen); //전체 데이터 갯수에서 나누기 70 의 나머지를 올림

    // 게시글 숫자(70) 만큼 인디케이터도 자동으로 생성하기
    var indiN = 0;
    for( ; indiN < indiLen ; indiN += 1 ){
      indiArea.append(indiCode);
      indiLi = indiArea.children('li').eq(indiN);
      indiLi.find('a').text( indiN + 1 );
    } //for
    //-------------------------------------

    // 인디케이터 보일 갯수 조정하기
    var indiViewLen = 5; //보고싶은 갯수
    var iv = 0; //최초값
    indiLi = indiArea.children('li');
    var memoryN; // 3) 변수를 준다 (임시기억장치)

    // indiLen: 인디갯수
    for( ; iv < indiLen ; iv += 1){
      if( iv < indiViewLen ){
        // 1)iv값이 1개씩 올라갈때 보이고자 하는 갯수5이면
        // 
        memoryN = iv+1; // 4) 3번을 언급 기억할 n 는 iv와 같다
        // memoryN은 보이는 인디li에서 마지막 순서값을 기억하게 하기위한 명칭


        continue; // 2) 5가 될때까지 계속 넘겨라(패스) 4번기능을 썼으므로 countinue는 지워줘도 된다
      } //if
      else {
        indiLi.eq(iv).hide(); // 5) indi iv번째는 숨겨라 1~5까지는 보이게하는 기능 // 여기서의 hide는 display none을 말하는 것
      } //else
    } // for

    /*
    주석처럼 코드는 아래처럼 변경할 수있다
    
    for( ;  iv < 인디갯수 ; iv+= 1 ){
      if(iv >= 5){
        indiLi.eq(iv).hide();
      }else{
        memoryN = iv;
      }
    }
    
    */



    // 5페이지까지 가더라도 더보기 버튼으로 다음으로가기
    var nBtn = indiCon.find('.next_notice');
    var pBtn = indiCon.find('.prev_notice');

    nBtn.on('click', function(e){
      e.preventDefault();
      var nbn = memoryN; // 1) 5로 만들어주기
      indiLi.hide();


      // nbn이 어디까지 기억하게 할것인지? 5개인 indiViewLen
      // nbn은 숫자라 수식 밖으로 빼내게되면 카운트가 계속 올라간다
      // nbn( ) + indiViewLen(5) 이상황에서 값은 전가되지 않는다
      // nbn만 카운트 올라감
      for( ; nbn < memoryN + indiViewLen ; nbn += 1 ){
        indiLi.eq(nbn).show();
      }//for
      //모든 처리가 끝났을 때에는 (두번째 다음버튼 누르는 
      
      // 상황을 동작하게하려고 nbn=memory 라고 해준다
      memoryN = nbn;
    }) //nBtn


    /*
    
    0: 0~ 70
    1: 71~140
    2: 141~210
    3: 211~280
    4: 281~350
    
    */

    // 내용 넣기        (n)매개변수값을 써주면서 위에 페이지당 보이는 글수를조정한다
    var reSetting = function(n){
      // var i = 0;
      // ( n !== undefined )? i = n : i = 0 ;
      var i=0;
      k = n || 0;
      noticeArea.empty();

      var noticeLi;
      // var settingLen = i + myViewLen ;

      // for( ; i< dataFile.length; i+=1 ){
      for( ; i< myViewLen ; i+=1 ){
        // datafile의 길이만큼 가지고오고 i에 1씩 더해라

        // 이걸 써주는 이유는 마지막 페이지 순서에서 
        if( dataFile[i+k] === undefined ){
          // !! -> 긍정이든 부정이든 
          //값이 없다면 빠져나가라 break
          break;
        } // if
        else{
          noticeArea.append(noticeCode);
          noticeLi = noticeArea.children('li').eq(i); //eq i번째
          noticeLi.find('em').text( dataFile[i+k].id );
          noticeLi.find('span').text( dataFile[i+k].address);
        }//else
      }// for
    } //reSetting

    // 기능 수행( 차후 인디케이터 기능 포함 시키기 )
    reSetting();

    var indiLiBtn = indiArea.children('li');

    indiLiBtn.on('click', function(e){
      e.preventDefault();
      // var liN = $(this).text(); 텍스트로 바로 불러오지않고 밑에 parseInt를 통해 숫자로 변환한 상태에서 불러온다
      var liN = parseInt( $(this).text() ) -1;
      var liSetN = liN * myViewLen;
      console.log( liN ); // liN-1을 해주는 이유는 js 첫번째는 0임으로
      reSetting(liSetN);
    }) // indiLiBtn




    // ---------------------------------------
    // 위를 아래 배열방식처럼 만든다
    // button을 만든다 

  //   var select_area = $('.select_area').find('button');
  //   select_area.on('click',function(e){
  //     e.preventDefault();
  //     var i = $(this).index();
  //     switch(i){
  //     case 0:
  //       dataFile = data.sort(function(a,b){
  //         return b.id-a.id;

  //       }); //data.sort
  //       reSetting();
  //       break
  //     // ------------------------
    
  //     case 1:
  //     dataFile= data.sort(function(a,b){
  //       return a.id-b.id;

  //     }); //data.sort
  //     reSetting();
  //     break
  //   } //switch
  
  // });// select_area




}); // done
//jQuery end
})(jQuery);
