// jq_03_makeRemove.js

(function($){
  var part = $('.part');
  var p= part.children('p');
  // div = part.find('div');
  // console.log(div);
  
  p.css({'border' : '0.0625rem solid #7a0'});

  var p1 = part.find('.text');
  p1.text('원하는 글자를 <br /> 입력할 수 있습니다'); //글자로써의 기능

  var p2 = part.find('.html');
  p2.html('원하는 요소를 <br /> 삽입할 수 있습니다.'); // 요소로써의 기능

  var p3 = part.find('.wrap');
  p3.wrap('<div></div>'); // 감싸는 요소 생성
  p3.unwrap(); // 감싸는 요소 삭제

  // prepend는 내부의 앞에 생성하게 되는 method이며,
  // 요소의 형태로 사용하지 않으면, 다른 곳의 요소를 강제로 뜯어서 가져올 수 있다


  var p4 = part.find('.prepend');  // p요소 내부 앞에 span 삽입
  p4.prepend($('.pretwo'));
  // var span = $('span');
  // p4.prepend(span);
  var mySpan = $('.pretwo'); 
  mySpan.prependTo( p4 );  // .pretwo를, p요소 내부 앞에 삽입

  /*
  1. 선택자A.prepend(선택자B);
  2. 선택자C.prependTo(선택자D);

  1은 A내부에 B를 담는것 
  2는 D의 내부에 C를 담는 것
  */
// =====================================
  var p5 = part.find('.append'); //내부 뒤에 삽입
  p5.append('<span>내부 뒤에 삽입 완료!!!</span>');
  mySpan.appendTo( p5 );
// =====================================
  var p6 = part.find('.context');
  var p6Con = p6.contents(); //p요소 내부에 들어있는 모든 내용(기능을 살려서)을 가져오는 기능 ctrl+X
  console.log(p6Con);
  // html method는 기존 내용(해당 내용을 드래그된 상태에서)을 바로 붙여넣기  새로 작성한 내용을 삽입 하는 기능

  // 바로 삽입 할 수가 없다
  
  p6.html('<a href="#"></a>');
  p6.children('a').html(p6Con);

  var p6Html = p6.html();
  p6.html('<a href="#">'+ p6Html +'</a>');

  console.log(p6.html()); //
  console.log(p6.text()); // 내용 자체를 글자화 

  var p7 = part.find('.before');
  p7.before('<div>.before 앞에 요소를 생성 </div');

  var p8 = part.find('.after');
  p8.after('<div>.after 뒤에 요소를 생성 </div');

  // div = part.find('div');
  // console.log(div);

  //attribute(속성)을 처리하는 기능
  var p8Attr = p8.attr('title').split(' '); //뒤의 속성(값)을 꼭 언급해주어야한다
  console.log( p8Attr );
  p8.attr({'data-x':'what is data'});
  // p8.removeAttr('style');
  // p8.removeAttr('class');
  // p8.removeAttr('title');
  // p8.removeAttr('data-x');


  //한번에 모든내용 지우기
  var arr = ['style', 'class', 'title', 'data-x'];
  // arr.forEach(function(){}) //js문법
  // arr.forEach(function(){
  //   p8.removeAttr(d);
  // })

  // 모든내용 한번에 지우기 jq
  //내부에 변수값
  // $.each(arr, function(i,d){
  //   p8.removeAttr(d);
  // });
})(jQuery);