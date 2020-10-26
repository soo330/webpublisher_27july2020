//  js_06 function.js

// var i = 0;
// console.log(i);

// console.log는 결과를 알려주는 것이 아니라 중간점검의 개념이다
// 함수는 어떠한 기능을 묶어서 수행하도록 처리하게 만든 형태
// 함수를 호출하여 사용할 떄는 함수의 이름+() => '함수()'로 사용
/*
var fn = function(){
  return 10;
};

var fnResult = fn();
*/
// console.log(fnResult);






/*
var fn2 = function(){
  console.log(20);
};
fn2();
위와 같이 쓸 수 있지만 지양*/

// var fnR = 10;
// // console.log(fnR);
// var fn = function(){return 20;};
// var fnR=fn();
// // console.log(fnR);


// var fn2 = function(a){ return a*a;};
// fnR = fn2(2);
// console.log(fnR);
/*
// var old = 35;
var ret; // -> 함수 바깥에 존재하는 전역변수(전체를 역전할 수 있는 변수)
// 전역변수는 함수 안에서도 존재할 수 있으나 함수 안에 있을 때는 없는 것으로 침 (식으로써만 인지)
var myOld = function(old){
  if (old<20){
    ret = '아직 미성년입니다.';
  } else if (old <30){
    ret = '아직 순수 하시군요';
  } else if ( old < 60 ) {
    ret = '가장 열심히 일하고있는 시기이군요';
  } else {
    ret = '이제 즐기면서~~';
  }
  return ret;
};
myOld(15);
console.log(ret);

// 함수로 function을 감싼다 return으로써 값을 알려준다
// old는 {}안에있는 식들을 수행하기 위한 매개변수이다 무언가를 담게되는 수, 인수( 안에 담는 수)
// (old){if(old<20){}}와 같이 매개변수 괄호안에 있는 (old)는 인자라고 함
*/

// 함수: 함수 선언식과 함수 표현식
// function DecFn (){}; 함수 선언식
// var ExpFn = function(){};
/*
console.log( DecFn() );
console.log( ExpFn() );
function DecFn (){return 1;};
var ExpFn = function(){return 2;}
호이스팅현상으로 시작점에 function DecFn(){return 1;}이 있는것 처럼 인지
변수를 나중에 선언해도 하나는 값이 도출된다 (원래는 안되는 기능)

function DecFn (){return 1;};
var ExpFn = function(){return 2;}
console.log( DecFn() );
console.log( ExpFn() );

function DecFn (){return 1;};
-> 함수 자체가 호이스팅 현상 발행하여 시작점에 있는 것 처럼 인지
태어나면서부터 이름이 존재(ex예수) 기명함수(이름이있는 함수)

var ExpFn = function(){return 2;}
-> 변수 명이 호이스팅 현상 발생
태어날 땐 이름이 없음: 익명함수 annonymous

-매개변수 (argument), 인수, 인자, 전역변수(global), 지역변수(local), 익명함수, 기명함수

-함수 선언식(declaration) 함수 표현식(Expression), hoisting(끌어올리기), 생성자 함수

=함수는 최초의 형태 하나만 존재하는데 이를 복제하여 사용한다는 개념으로 인지 -생성자 함수
====================================================*/
/*
var myNewFn = function(name){
  this.name = name;
  this.family = 'park';
  this.fullName = this.name + ' ' + this.family;
  //return
};
var a = new myNewFn('soo');
*/
// console.log(a.fullName);


//this는 js에서 2가지의 개념을 가짐
//1(window), 2(생성자 처리 시 매개변수 또는 선택 자체)

// =============================================

// 선언식  (함수 자체에 이름을 부여하는 방법)
// 표현식 (함수를 변수에 대입하는 방법)
// 생성자 함수 (함수 기능을 복제하여 재처리하는 함수)
// 즉시 실행함수 (함수지만 재활용이 불가능한 일회용 함수)

/*
var ffn = function(){
  var i = 10;
  var j = 7;
  return i + j;
};
*/
// console.log(ffn());
// ===================================================

//즉시 실행 함수(IIFE: immediately invoked function expression)


/*
(function (k){
  var i = 10;
  var j = 7;
  console.log(i*j);
  return i * j;
})(10);
*/
// function(){}를 ()로 한번 더 크게 감싸준다 이는 '이 자체가 식이다' 라는 개념으로 쓰인다 같은 값이 도출됨

//여기서 식 뒤에따라오는 ()에 아무것도 없으면 '수행해라' 라는 뜻
// 이걸 즉시실행 함수로 바꾸면 (function(){})() 임,
//=> 뜻은 (function(){})(수행해라) 라는 뜻이다
// 어떠한 또는 여러개의 기능을 동작하게 하는 것(내가 명령을 내리는 순간에)

// console.log는 결과값을 보여주는 것이아니라 눈에 보이게끔 해주는 것
