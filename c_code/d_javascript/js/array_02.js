// array_02.js

var coffee = ['esspresso', 'americano', 'cappuccino', 'cafe latte', 'cafe mocha', 'vanila choco latte'];

// console.log(coffee);
var cLen= coffee.length;
//  coffee 안에 든 내부의 개수값을 확인하라는 뜻

//pop(), push(), shift(), unshift()
// console.log(coffee[2]);

var i = coffee.indexOf('mocha'); //없을경우: -1, 있을경우 해당 위치값을 나타냄
// console.log(i)

var str = '안산, 수원, 강릉, 부산, 제주, 서울, 태안';
// console.log(str.indexOf('부산'));

// split은 문자를 배열화 시키는 명령어 , 를 기준으로 단어들을 ''처리함
var strToArray = str.split(',');
// console.log(strToArray);

var tel = '031-999-9999';
// console.log(tel.split('-'));

var coffeeToPar = coffee.join(', ');
// console.log(coffeeToPar);

// sort 명령어를 주면 abcd 알파벳 순서로 순서가 바뀐다
var coffeeSort = coffee.sort();
// console.log(coffeeSort);

var coffeeSortReverse = coffeeSort.reverse();
// console.log(coffeeSortReverse);

var coffeeDec = coffee.sort(function(a,b){return b-a});
// console.log(coffeeDec);

var arr =[1,5,10,3,2,7,6,8,9];
// console.log(arr.sort(function(a,b){return b-a}));

coffee.push('ice tea');
coffee.pop();
coffee.shift();
// splice는 몇번째부터 지울것인지 설정하는것
var sp = coffee.splice(0, 0); //변수.splice(시작순서, 갯수) - 원하는 배열의 순서를 삭제하는 것
// console.log(coffee);

var a = 'hi';
var b = a;
    a = 'bye';
// console.log(a,b);

var c = ['toDay'];
var d = c;
c[0]='nextDay';
console.log(c[0],d[0]);

var e = c.slice();
c[0] = 'prevDay';
console.log(c,e);