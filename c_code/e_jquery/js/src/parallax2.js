// parallax2.js

(function($){
  // parallax2 start
    var win = $(window);
    var winH = win.outerHeight();
  
    var headBox = $('#headBox');
    var h1 = headBox.find('h1');
    var frontImg = headBox.find('.front_image');
    var backImg = headBox.find('.back_image');
  
    var setN = 1.5;


  
    // 브라우저 스크롤시 수행
    
    win.on('scroll', function(){
      var winSt = $(this).scrollTop();
      var per = winSt / winH;
      var scaleR = 1+per;
      var opacityR, airPer;

    // 4. logo 사라지게 만들기 (언제쯤 사라질까?)
    // 5. logo 사라지는 동안 투명막 생기게 하기
    var logoR = 0.5;
    if(per >= logoR){
      logoPer = (1 + logoR) - per;
      console.log( logoR + per );    
      h1.css({opacity: logoPer, transform:'scale('+ (logoR + per) + ')' });

      // 5. logo 사라지는 동안 투명막 생기게 하기
      headBox.addClass('default');
      } //if 1>per
      else{
        headBox.removeClass('default');
      }
    
    // 6. frontImg의 투명도가 0이되면 headBox 사라지게 만들기
    if(opacityR < 0 ){
      headBox.hide();
    }else{
      headBox.show();
    }

    // 1. frontImg가 점점 커지게( transform:scale() );
    // 2. 점점 사라지게
    if(scaleR <= setN){
      console.log('scale: ', 1 + per);
      frontImg.css({transform:'scale(' + scaleR + ')'});
    }else if(scaleR >= setN + 1){      
      // console.log('opacity: ', opacityR + 1 );
      opacityR = setN + 1 - per;
      frontImg.css({ opacity : opacityR });
    } // if scaleR <= setN

    // 3. 비행기 나타나면서 올라가기
    if( scaleR > setN ){
      // saaleR이 setN보다 커지면
      var airPer = (scaleR - setN) * 100;
      // console.log (airPer);
      backImg.css({backgroundPositionY: airPer + '%'});
    }
  
    }); // win.on('scroll')
  
  



  //jQuery end
})(jQuery);
