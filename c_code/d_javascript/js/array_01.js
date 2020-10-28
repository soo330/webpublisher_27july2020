// array_01.js

/*
var a=[1,2,3];
a.push('one');
console.log(a);

a.shift('two');
console.log(a);

a.push('three');
a.unshift('');
console.log(a);
*/
// push 는 추가를,
// shift는 앞을, pop은 뒤를 빼주는 기능
// unshift는 앞에 추가할 수 있다
//==========================================
/*
var b=[1,2,3];
var c=[4,5,6];
var d;
d = b.concat(c);
console.log(b);
console.log(c);
console.log(d);
*/
// concat은 합치기 기능 console.log(d)를 보면 알수있다
// ===========================================

//var ar;
//ar= new Array
// new Array 새로 만들겠다고 선언하기(js쓰지않음)

//권장하는 방법:
/*
ar=[];
ar[4]='in string';
console.log(ar);
*/
// 값이 empty*4라고 나오는데 empty1, empty2, ....를 약자로 써놓은 값이다 ㅋㅋㅋ
// =============================================

// [1,2,3,... 100]
// 값을 도출하라
/*
var arrQ_01 = [];
var i = 0;
for( ; i <100 ; i+=1 ){
  arrQ_01[i]= i+1;
};
console.log(arrQ_01);
*/
/*
for(1.시작값or 변수; 2,5. 조건; 4,7 값의 증감){3,6 수행};
조건에서 수행을 해보고 바로 여기서 빠져나가지않는다
수행한 상태에서 증감자리로 가서 계산해보고 다시 수행을 한다
*/
// ========================================
// [1,3,5,7,9..]99] odd number 홀수 숫자를 구해라
/*
var arrQ_02=[];
var j= 0, k;
for ( ; j < 100 ; j+=1 ){
  k = j%2;
  if(k !== 0){
  arrQ_02[j]=j;
  if (k === 0){ continue; }else if(k !== 0){
    arrQ_02.push(j); //continue문을 쓰면 empty가 안뜸
  }
*/  
  // /*
  // l=parseInt(j/2);
  // arrQ_02[l]=j;
  // */
/*  } 
}
console.log(arrQ_02);
*/

/*
1 == '1' : 있는 그대로만을 보는 것
1 ==='1' : 타입까지 확인하는것 (false)
1 !== '1': 
*/

// ==========================================
// 예제 3 100,99,98,97... 1의 수를 도출
/*
var q3 =[];
var i = 0;
for( ; i <100 ; i+=1 ){
  q3[i]= i+1;
};
q3.reverse();
console.log(q3);
*/

// 나는 reverse();로 도출했지만 sort를 통해서 도출하는 방법도 있다
// =============================================
// 풀이

// var q3_1 = [];
// for( i=100; i<100; i+=1){
//   q3_1[i]= 100-i;
// }
// console.log(q3_1)

// ==============================================
// 예제 4 100,98,96,92,90....0의 수를 도출
// var q4=[];
// var j= 0, k;
// for ( ; j <= 100 ; j+=2 ){
//   if (k === 0){ continue; }
//   else if(k !== 0){
//     q4.push(j);
//   }
// }
// q4.reverse();
// console.log(q4)

// ============================================
//풀이

// var q4_1=[];
// for (a =100; i<100  ; i+=2){
//   if(i !== 0){
//   q4_1[a]=a;
// }
// console.log(q4_1);

// var nav = document.getElementsByClassName('nav')[0];
// for( ; nav; ){
//   var cln = ['nav_01','nav_two', 'nav_tt', 'four']
//   var li = document.createElement('li');
//   nav.appendChild(li);
//   li.innerText="글쓰기";
// };

// var li2 = document.createElement('li');
// nav.append(li2);
// li2.classList.add(cln[0]);
// li2.innerText="글쓰기2";

// var li3 = document.createElement('li');
// nav.append(li3);
// li3.classList.add(cln[1]);
// li3.innerText="글쓰기3";

// var li4 = document.createElement('li');
// nav.append(li4);
// li4.classList.add(cln[2]);
// li4.innerText="글쓰기4";

// var li5 = document.createElement('li');
// nav.append(li5);
// li5.classList.add(cln[3]);
// li5.innerText="글쓰기5";

// =========================================
//노가다를 하지않고 for문으로 하는법
// var nav = document.getElementsByClassName('nav')[0];
// var liList = ['nav_01','nav_two', 'nav_tt', 'four'];
// var i;

// for(i=0 ; i<4 ; i+=1){
//   var li = document.createElement('li');
//   li.classList.add( liList[i] );
//   li.innerText="글쓰기";
//   nav.append(li);

//   var a = document.createElement('a');
//   li.appendChild(a);
//   li.innerHTML="<a href=\"#\">글쓰기";
// };
// console.log(liList)
//=================================================
//풀이

var cln = ['nav_01','nav_two', 'nav_tt', 'four'];
var nav = document.getElementsByClassName('nav')[0];

var j=0, li,link;
var clnLen = cln.length;
for ( ; j < clnLen ; j+= 1 ){
  li = document.createElement('li');
  link = document.createElement('a');
  li.append(link);
  li.classList.add( cln[j] );
  // 미리 a값을 변수로 정의해준다
  link.setAttribute('href', '#');
  // link.setAttribute('href', './'+cln[j]+ '.html'); //결과 <a href="./#.html">로 쓰임
  nav.append(li);
  // link.innerHTML='<span>글쓰기'+ (j+1) + '<span>';
  // li.innerText="글쓰기"+(j+1);
  // link.innerHTML은 1번밖에 사용못함으로 setAttribute로 사용해준다
  
  // link = document.createElement('a');
  // li.appendChild(link);
  // li.innerHTML="<a href=\"#\">글쓰기";
}
// ===========================================
