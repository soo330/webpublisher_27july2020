// js_04_condition.js

// 피자먹을까? -> 응
// 피자먹을까? -> 아니 -> 그럼 순대국 먹자
// 피자먹을까? -> 아니 -> 그럼 순대국 먹을까? -> 아니 -> 냉면 먹자


// var q = myEat === 'pizza'; // 변수와 하나의 값이 같은지 비교여부로 참/거짓 도출
// true or false 를 사용할 때 === 기호를 쓴다.
// ===비교하여 같은 참을 확인 , !== 비교하여 같은값의 반대를 확인
// myEat과 pizza는 같은 아이인지 묻는 기능이다
// var q = myEat !== '순대국';
// console.log( q );

// if(){}
// switch(){}
// function(){}
// for(){}
// forEach(){}

// ;은 변수가 들어가 있을 때 (변수를 (새로)제정할 때)

// 1. if(조건){조건의 기능이 참이면 실행하는 내용}
// 2. if(조건){조건의 기능이 참이면 실행하는 내용} else {조건의 기능이 거짓일 경우 실행}
// myEat = '냉면';
// var myEatResult;

// if( myEat === 'pizza' ){
  // 참이면 수행
//   myEatResult = myEat + ' 먹으러 가자!!!';
// } else if( myEat == '순대국') {
  // if 문항이 거짓인 경우, 새로운 if 에 대한 문항이 참
//   myEatResult = myEat + ' 에 밥말아먹을까?'
// } else {
//   myEatResult = '니가먹고 싶은' + myEat + '먹으러가자';
// }
// console.log(myEatResult);

// var result = confirm('당신은 성인입니까');
// console.log(result);
// if(result=== true){
//   location = "http://naver.com";
// } else {
//   location = "http://store.pinkfong.com/"
// }
/*
var myOld = prompt ('당신의 태어난 연도를 입력하세요.');
// console.log(myOld);

var thisYear = new Date().getFullYear(); //올해 파악하는 기능
// console.log(thisYear - myOld +1);
var myAge = thisYear - myOld + 1;
if( myAge < 20 ){
  console.log('당신은 아직 미성년자 입니다.');
}else if( myAge >=40){
  console.log('당신은 제법 중후한 분이겠군요');
}else{
  console.log('20~30대의 청년이시군요')
}

단수
*/

// ===========================================================
/*

복수
switch(값){
  case 값 1: 참이면 수행 break;
  case 값 2: 참이면 수행 break;
  case 값 3: 참이면 수행 break;
  case 값 4: 참이면 수행 break;
  case 값 5: 참이면 수행 break;
  case 값 6: 참이면 수행 break;
  default: 위 기능이 모두 거짓이면 수행;
}
*/
/*
var n = parseInt(Math.random()*6); //random 숫자 0~5미망까지 생성하는 형태
var r;
switch(n){
  case 1:
    r = '1이 나온 당신: 바보입니다';
    break;
  case 2:
    r = '2가 나온 당신 똑똑한 천재입니다';
    break;
  case 3:
    r= '3이군요 희대의 명품얼굴을 가진분이시군요'
    break;
  case 4:
    r= '4로군요 오래오래 사실거에요'
    break;
  case 5:
    r= '5가 나왔군요......'
    break;
  default:
    r = '의외의 결과군요 사람이신가요';
}
console.log(n, ' : ',r);
*/


//===========================================================

//if, switch 하나의 문법구조를 이용하여 처리하는것
// 삼항연산자: 3가지 항목을 가진 연산자 기법
var i = 1+1;
// 조건 ?  w조건이 참이면 수행: 거짓이면 수행 ;
// (i>10) ? console.log('i는 10보다 크다') : console.log('i는 10보다 작다');
// if(조건 1){조건 1 }else if (조건 1이 아닐때 조건 2){조건2 참이면}else if (){}else{}
//switch(매개변수){case 값1: ....; break; case 값2:...; break; .... default:최종;}
// (조건) ? 조건이 참이면 : 조건이 거짓이면 ;