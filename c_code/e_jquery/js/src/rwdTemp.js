// rwdTemp.js

  /* 
  1. 브라우저의 가로 크기 값 확인
  2. 내가 원하는 기준치로 설정된 범위
  (이름을 설정해서 처리) 맞는지 파악 (mobile, tablet, laptop, pc)
  3. 브라우저의 크기가 변경될 때 ('resize') 기준 가로값과 변경된 가로값을 비교하여 일치하지 않을 경우에 재처리
  */

(function($){
  // var winW = win.css('width');
            /* ===치명적 문제 
            1. 문자로 값을 가져옴 (parseInt로 대처)
            2. padding, margin, border값을 가져오지 않음

            */

  //  선택자.width() -> 가로값의 수치
  // .innerWidth() -> padding 포함 가로값
  // .outerWidth() -> border(+padding포함)값 포함한 가로값
  // .outerWidth(true) -> margin(+border+padding)을 포함한 가로값
  // =============================================================

  //기준 치를 설정
  // [480, 1024, 1440, 1920];
  var deviceType =[
    {type: 'mobile', size: 480},
    {type: 'tablet', size: 1024},
    {type: 'laptop', size: 1440},
    {type: 'pc', size: 1920},
    {type: 'pcfull'}
  ];


  //브라우저의 최초 크기값 확인
  var win = $(window);
  var winW = win.outerWidth(true);
  var myType;
  // console.log(winW);
  //-------------------------------------------
  // if( winW <= deviceType[0].size ){
  //   myType = deviceType[0]
  // } //if
  // else if(winW <= deviceType[1].size){
  //   myType = deviceType[1]
  // }
  // else if(winW <= deviceType[2].size){
  //   myType = deviceType[2]
  // }
  // else if(winW <= deviceType[3].size){
  //   myType = deviceType[3]
  // }else{
  //   myType = deviceType[deviceType.length-1].type;
  // }
  // if문 for문으로 바꾸기====================
  for(var i=0; i <deviceType.length; i+=1){
    if( winW <= deviceType[i].size ){
      myType = deviceType[i].type;
      break;
    } // if
    else{
      myType = deviceType[deviceType.length-1].type;
    } // else
  } // for

  console.log(myType);

  win.on('resize', function(){
    var reWinW = win.outerWidth(true);
    console.log(reWinW);
  }); // win.resize

  //jQuery end
})(jQuery);
