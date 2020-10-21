// loop_02.js

/* 조건의 시작 값, 조건비교, 연산 */

/*
var n= 0;
while(n < 5 ){
  console.log(n);
  n+=1;
}
=↓↓↓↓↓↓======================*/
/*
<for문 양식>
for( ; ; ){

}
<for문 실제 쓰일때>
for( 변수; 조건 ; 연산){

}



*/
/*
for(var n =0; n<5; n+=1){
 console.log(n);
}

*/
/*
var y = 0;
for( ; y < 10; ){
  console.log(y);
  y+= 1;
}
=====================================*/
///for (var y=0; y<10; y+1){}


/*
for( let k =0; k < 5; k++){
  console.log(k);
}
console.log('k:' , k );
*/

// var문 대신 let문을 쓴다면 for괄호까지의 영역을 변수로써 활용할 수 있다.

//또한 for문이 끝난이후로도 let문을 사용하기를 원한다면,
//let, const는 함께쓰면 안된다.
//var변수때처럼 let k=0을 for문의 밖으로 빼놓고 사용하면된다.

/*
let k =0
for( ; k < 5; k++){
  console.log(k);
}console.log('k:' , k );


===
그래서 가급적 아래와 같이 var의 변수를 for문 밖으로 놓고 사용하는 방식을 추천함

var k =0
for( ; k < 5; k += 1){
  console.log(k);
}console.log('k:' , k );

============================================*/

// 요소를 삽입하기 조건: 1. 요소생성 2. 요소내용 기입 3. 요소삽입 (2,3 바꿔도상관없음)
/*
var arr = ['포도', '사과', '바나나', '딸기'];
var classN = ['grape', 'apple', 'banana', 'straw'];
var testEl = document.getElementsByClassName('test')[0];
var pEl; 

var i =0;
for (; i<4; i += 1) {
  pEl= document.createElement(+'p');
  pEl.innerText = arr[i]+'를 먹는다';
  pEl.setAttribute('class', classN[i]);
  
  testEl.append(pEl);
    // console.log(arr[i]);
}
*/


// setAttribute
//=======================================================

// 문제 1. 각각의 p에 className 설정하기
/*
var arr = ['포도', '사과', '바나나', '딸기'];
var classN = ['grape', 'apple', 'banana', 'straw'];
var testEl = document.getElementsByClassName('test')[0];
var pEl; 

var i =0;
for (; i<4; i += 1) {
  pEl= document.createElement('p');
  pEl.innerText = arr[i]+'를 먹는다';
  // <className 지정을위한 사용가능한 문법>
  // 1. (set)Attribute : 속성을 변경이 가능(어떠한 속성명이든 관계x)
  // setting하는 속성이다
  // pEl.setAttibute('title', classN[i]);
  //
  // Attribute= 속성 / 하나의 속성밖에 추가할수있다
  // <id="#"> 와 같은개념으로 1회성으로만 사용가능
  // 
  //========================================
  // 2. pEl.className :
  // 이름에서도 알 수 있듯이, 속성 중 오직 class속성만 이름변경가능

  // peL.className = classN[i];

  // className을 2개이상 지정할 때는 좋지않다
  //========================================
  // ***가장 중요 ******************

  // 3. pEl.classList : class 속성을 리스트처럼 여러개 설정가능
  // classList 계속 추가가능/덮어쓰기 가능/
  pEl.classList.add('testClass');
  // pEl.classList.add(classN[i]);
  // pEl.classList.remove(classN[i]); /className 삭제
  // pEl.classList.toggle(classN[i]); / className 스위치

  testEl.append(pEl);
    // console.log(arr[i]);
}
*/
//======================================================

//for(최초의 값; 조건; 연산)={}


var coffee =['esspress', 'americano', 'latte','flat white', 'cafe mocha', 'long black'];

/*
for ( var j=0; j<coffee.length ; j+=1 ){
  console.log('1:', coffee[j] );
}
*/


/*
// for (변수 (임의의 변수:i) in 변수이름)
for(var i in coffee){
   console.log(조건의[i(임의의 변수);])
   console.log(coffee[i]);
}
*/

//for ~in 문법은 객체를 위한 형식이므로 / 배열을 위한 형식이 아니다.
// for(var i in coffee){ console.log('2:', coffee[i]);}

// 배열형식을 사용할 때에는 for, forEach를 사용
// 조건의 이름.forEach(function(data){console.log(매개변수이름인 data); });
// ----- 매개변수는 data, index의 식으로 여러개 가능
/*
coffee.forEach(function(data, index){
  console.log(data, index);
});
*/
// ==============================================
// for~in을 위해서는 객체를 위해 사용한다 (객체: 무언가를 정의한다)


/*
var obj = {
  'spring': 'black tea',
  // property : value
  'summer':'ice americano',
  'fall' : 'hot choco',
  'winter' : 'pepsi'
};
*/

// var o = 0;
// for (; o < 4 ; o += 1){
//   console.log( obj.spring );
// }

/*
for ( var o in obj ){
  console.log( o );
  //여기서의 (o)는 obj.o 라는 형식으로
  // 풀어서 쓴다면 obj.spring이라는 식으로 인식하는 것
  // 그걸 o라고 명명하는것임으로 : 'black tea' 등의 value가 나오는 방식이 아니다.
  console.log(obj[o]);
  //== 이걸 위와같이 console.log(obj[o]);로 써주면 value값만 나온다
}
*/
// 반복문
// for, forEach, for-in, (for-of)
/*
var i = 0;
for( ; i<100 ; i += 1 ){

  if( i<10 ){
    console.log( '0'+ i );
  }else if( i === 50 ){
    break;
    //break; / continue;
  } else {
    console.log(i);
  }

}
*/
