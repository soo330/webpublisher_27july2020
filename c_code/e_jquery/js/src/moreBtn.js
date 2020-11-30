// moreBtn.js

(function($){
  // moreBtn start
  $.ajax({
    url: '../data/random_people.json',
    dataType: 'json',
    context:document.body
  }).done(function(data){
    var people = data;
    // console.log(people.length);
    var i=0;

    var myLen = i; // = 0과 같은내용
    var myViewLen = 10;
    var maxLen = people.length;
    var part = $('.part');
    var partUl = part.find('ul');
    var insertCord = '<li><div class="num"></div><div class="image"></div><dl><dt>title</dt><dd></dd></dl></li>';
    var more = $('.more_btn')
    var moreBtn = more.children('button');

    var liEq;
    var moreFn = function(j){
      // 변수값 j를 써줌으로
      var k;
      if( j === undefined ){
        //j가 값이 없다면
        k = myViewLen; // myViewLen(한번에 보이고자하는 변수)을 불러와라 
      } //if j ===
      else{
        k = j;
      } //else

      myLen = i + k;
      for(; i < myLen ; i+=1){
        if( i >= maxLen ){
          more.remove();
          break
        } //if maxLen
        else{
          partUl.append(insertCord);
          liEq = partUl.children('li').eq(i);
          liEq.find('.num').text( people[i].id );
          liEq.find('.image').css({ backgroundImage: 'url(' + people[i].image + ')'});
          liEq.find('dt').text(people[i].first_name);
          liEq.find('dd').text(people[i].address);
        } //else
      } //for
    }; //moreFn (){}
    moreFn(2); // 여기에 처음에 볼 숫자를 써주면 된다

    // myLen = i + myViewLen; 
    // for( ; i < myLen ; i+=1 ){
    //   partUl.append(insertCord);
    // } //for

  // ----------------------------------------
    moreBtn.on('click', function(e){
      e.preventDefault();
      moreFn(7); //여기엔 더보기 버튼을 눌렀을때 한번에 보고자하는 숫자를  숫자를 적어준다
    }); //moreBtn on




  }); //jQuery end
})(jQuery);
