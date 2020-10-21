// loop_01.js
/*
var n = 0;
console.log(n);
n += 1;
console.log(n);
n += 1;
console.log(n);
n += 1;
console.log(n);
n++;
console.log(n);
=================================================================*/


// if문과 비슷하게 while뒤에오는 ()가 참일때 while수행해라
/*
var k = 0;
while( k < 10 ){
  console.log('k:', k);
  k += 1;
  // break
};
console.log('k는 이제', k, '이 되었습니다.');
console.log('k는 이제', k, '될랑께요.');
*/
// ================================================================
// 숫자는 항상 0부터 시작하므로 0, 1, 2가 되며 값을 15 줄때에 전체적으로 16개가됨

/* *** while(조건){조건이 참이면, 기능수행}
 라는 뜻은 조건이 거짓이면 수행 못한다는 말임 while문 이후에 따로 설정해주어야만 어떤 값을 도출할 수 있다 */

//getElementByIdname은 단수이므로 Elemnet가 되며 ById로만 명명
// var test = document.getElementsByClassName();
// var test = document.getElementsByTagName();
/*
var test = document.getElementById('wrap');
var l = 0;
while ( l <= 15 ){
  var p = document.createElement('p');
  p.innerText = (l += 1) + ' 번째 p요소에 글자를 작성합니다.';
  test.append(p);
  l += 1;
};
====================================================*/


// do{일단 수행}while(조건비교)
// while(m<0){console.log(m); m+=1;}
// do while문은 var 변수를 가지고 일단 1) do문으로 수행을 하며
// 2) while문을 수행하게 되는데 아래 예시는 쓸수 없으므로 첫번째인
// 1)의 do문을 보여준뒤 빠져나간다

var m = 0;
do {
  console.log(m);
  m += 1;
} while(m<0);

/* 반복문의 중요포인트 3가지: 첫번째 값, 조건, 조건의 수행(증감) */
