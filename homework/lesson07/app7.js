var divEl = document.createElement('div');
// console.log(divEl);
divEl.id= 'product';

document.body.appendChild(divEl);

var article1 = document.createElement('article');
var article2 = document.createElement('article');
var article3 = document.createElement('article');
var getdiv = document.getElementById('product');
console.log(getdiv);
divEl.appendChild(article1);
article1.style.width = "370px"  ;
article1.style.height = "452px" ;
article1.style.backgroundColor = 'red'
article1.style.padding = "24px"  ;

divEl.appendChild(article2);
article2.style.width = "370px"  ;
article2.style.height = "452px" ;
article2.style.backgroundColor = 'green'
article2.style.padding = "24px"  ;


divEl.appendChild(article3);
article3.style.width = "370px"  ;
article3.style.height = "452px" ;
article3.style.backgroundColor = 'blue';
article3.style.padding = "24px";


getdiv.style.display = 'flex';
getdiv.style.justifyContent = 'space-around';

