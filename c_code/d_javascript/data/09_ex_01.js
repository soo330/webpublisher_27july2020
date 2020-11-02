// 09_ex_01.js
// console.log(arrObj);
var div, h3, par, par2, link;
var url = '../img/';
var product = document.getElementsByClassName('product')[0];


// product.innerHTML = '<div><h3></h3><p></p><a href=""></a></p></div>';
// var div = product.childNodes('div')[0];
// div.classList.add('apple');

for(var i=0; i<arrObj.length; i+=1){

var div = document.createElement('div');
var h3 = document.createElement('h3');
var imgBox = document.createElement('div');
var par = document.createElement('p');
var par2 = document.createElement('p');
var link = document.createElement('a');

div.classList.add(arrObj[i].company);
h3.innerText = arrObj[i].company;
imgBox.classList.add('product_img');
link.setAttribute('href',arrObj[i].site);
link.innerText = arrObj[i].serise;
par2.innerText = arrObj[i].content;

imgBox.style = 'background-image:url('+ url + arrObj[i].img +')';

product.append(div);
div.prepend(h3); // append와는 다르게 앞에 넣는 것
div.prepend(imgBox)
par.append(link);
div.append(par2);
div.append(par);
};