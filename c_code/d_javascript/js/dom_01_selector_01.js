// dom_01_selector_01.js

var wrap = document.getElementById('wrap'); // $('#wrap');
wrap.style= 'background-color:#ccf; \
             border:2px solid #333';
// ' background-color \ border 중간에 \ 로써 줄바꿈가능
var headBox = document.getElementById('headBox');
headBox.style= 'width:100%; height:250px; background-color:#fa0;';

var h1= document.getElementsByTagName('h1')[0]; //$('h1');
// tagName이 하나밖에 없더라도 태그이름 뒤에 숫자로 값을 알려준다 = nth-child
h1.style= 'width:150px; height:50px; background-color:#acf;';

var h1Link = h1.getElementsByTagName('a')[0]; // $h1.find('a');
// 위는 document.자리에 직접적으로 h1을 적어주어 h1>a를 선택하겠다고 설정가능
h1Link.style ='color:#333; text-decoration:none;';

var navBox = document.getElementById('navBox');
// var navBox = document.querySelector('#id/.class/h1'); 쿼리셀렉터는 단수형으로만 불러올 수 있어 뒤에 []값을 따로주지않는다
navBox.style= 'width:70%; \
padding:0; margin:auto; background-color:#fff';

// var navList = navBox.querySelector('li');
// navBox>li를 찾아라 라고 해석 (단 querySelector('li')는 첫번째[0]만 선택)
// navList.style = 'background-color:#f7c; margin-bottom:2px;';

//다른 li순번째를 선택하고 싶다면 querySelectorAll을 사용하고,
//('선택자')이후 순서 값[0];등을 꼭 주어야한다
//querySelectorAll('li')[0];을 주거나
//navList[0].style에 따로 값을준다

var navList = navBox.querySelectorAll('li');
navList.forEach(function(data){
  data.style = 'background-color:#f7c; margin-bottom:2px'
});