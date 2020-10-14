// 1014 js_insert.js

var contentBox = document.getElementById('contentBox');
// var contentBox = document.querySelector('contentBox');

contentBox.innerHTML = '<h2>article 생성</h2>';
contentBox.style= 'background-color:#fa0;';

// 문서의 삽입할 요소를 생성
var createP = document.createElement('p');
// 생성한 요소에 요소를 포함한 내용을 생성 및 삽입
// 요소를 포함하지 않고, 글자만 생성 및 삽일할 경우에는 'innerText'로 처리

var innerP = createP.innerHTML = 'p 요소를 생성하고 <br /> 내용을 작성';
// var innerP = createP.innerText = 'p 요소를\n 생성하고 <br /> 내용을 작성';
console.log('내가 원하는 검증의 자료를 \n \"줄바꿈\" 처리하여 보고자 할 떄');
// 생성된 요소를 실제 요소에 (#contentBox)에 첨부(실제 삽입도 가능하나, 삽입된 요소는 재사용 불가)
// innerHTML 과 innerText는 무엇이 기준이냐에 따라서 달라진다
// createP.innerHTML = 'p 요소를 생성하고 <br /> 내용을 작성';으로 처리하면 그대로 처리되지만
// createP.innerText = 'p 요소를\n 생성하고 <br /> 내용을 작성'; 라고 처리하면 'p요소를' 이후에 줄바꿈 처리된다

//escape sequence text는 처리를 원하는 상황을 인지하면 이해하기 쉽다

// (createP);위는 한번만 사용가능하다
contentBox.appendChild(createP);