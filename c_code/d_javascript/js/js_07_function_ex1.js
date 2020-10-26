// js_07_function_ex1.js

var btnEl = document.getElementsByClassName('btn')[0];
// console.log(btnEl);
// = <div class="btn"><button type="button">button</button>

var btnChildButton = btnEl.children[0];
console.log(btnChildButton);
// = <button type="button">button</button>
/* tip html에서

<div class="btn">
<button type="button">button</button>
</div>

생성 시 .btn와 button태그 사이를  space를 하게되면
값을 [1]을 줬을때 #text로 인식한다
thus, 스페이스를 빼고[0]을 써줘야 값이 제대로나옴
children으로 써주자....

*/


var resultBox = document.getElementsByClassName('result')[0];
// console.log(resultBox);
// = <div class="result"></div>

// 1. 버튼을 클릭하면,
// 2. resultBox내부의 색상을 변경

// 1-> 버튼.이벤트(수행)
// 2-> 이벤트 발생에 의해 --> resultBox.색상변경 (수행)
var myBg = function(){ resultBox.style.backgroundColor= '#7ff';};
btnChildButton.addEventListener('click', myBg);

//=> btnChildButton을 클릭하면/  수행해라/ 무엇을 / resultBox의 style 중 backgroundColor 를= '#컬러로';