// var divEl = document.createElement('div');
// // console.log(divEl);
// divEl.id= 'product';

// document.body.appendChild(divEl);

// var article1 = document.createElement('article');
// var article2 = document.createElement('article');
// var article3 = document.createElement('article');
// var getdiv = document.getElementById('product');
// // console.log(getdiv);

// //product 1
// divEl.appendChild(article1);
// article1.style.width = "370px"  ;
// article1.style.height = "452px" ;
// article1.style.backgroundColor = '#F9FAFB'
// article1.style.padding = "24px";
// article1.style.borderRadius="5px" ;
// //img product 1
// var img1 = document.createElement('img');
// article1.appendChild(img1);
// img1.src = "https://commerce.withheadlesscms.com/_next/image?url=https%3A%2F%2Fmedia.graphcms.com%2FCE6zbBdaR9O8ixpQ16t6&w=1920&q=75";
// img1.style.width = "322px";
// img1.style.height = "322px";
// // product 1 description 
// var divInArticle = document.createElement("div");
// article1.appendChild(divInArticle);
// var description1 = document.createElement('p');
// divInArticle.appendChild(description1);
// description1.innerHTML = "Unisex Long Sleeve Tee"
// description1.style.marginBottom = "4px";
// divInArticle.style.width = "322px";
// divInArticle.style.height = "52px";
// divInArticle.style.marginTop = "24px";
// divInArticle.style.textAlign = "center";
// var money = document.createElement('p');
// divInArticle.appendChild(money);
// money.innerHTML = "£1.00";
// description1.style.fontWeight = "600"
// description1.style.fontSize ="1.125rem"

// // product 2
// divEl.appendChild(article2);
// article2.style.width = "370px"  ;
// article2.style.height = "452px" ;
// article2.style.backgroundColor = '#F9FAFB'
// article2.style.padding = "24px";
// article2.style.borderRadius="5px" ;
// // img product 2
// var img2 = document.createElement('img');
// article2.appendChild(img2);
// img2.src = "https://commerce.withheadlesscms.com/_next/image?url=https%3A%2F%2Fmedia.graphcms.com%2FzWiDwpcQ8msYs0JYm7o2&w=1920&q=75";
// img2.style.width = "322px";
// img2.style.height = "322px";
// // product 2 description 
// var divInArticle2 = document.createElement("div");
// article2.appendChild(divInArticle2);
// var description2 = document.createElement('p');
// divInArticle2.appendChild(description2);
// description2.innerHTML = "Snapback"
// description2.style.marginBottom = "4px";
// divInArticle2.style.width = "322px";
// divInArticle2.style.height = "52px";
// divInArticle2.style.marginTop = "24px";
// divInArticle2.style.textAlign = "center";
// var money2 = document.createElement('p');
// divInArticle2.appendChild(money2);
// money2.innerHTML = "£1.00";
// description2.style.fontWeight = "600"
// description2.style.fontSize ="1.125rem"


// //product 3
// divEl.appendChild(article3);
// article3.style.width = "370px"  ;
// article3.style.height = "452px" ;
// article3.style.backgroundColor =  '#F9FAFB';
// article3.style.padding = "24px";
// article3.style.borderRadius="5px" ;
// //img product 3
// var img3 = document.createElement('img');
// article3.appendChild(img3);
// img3.src = "https://commerce.withheadlesscms.com/_next/image?url=https%3A%2F%2Fmedia.graphcms.com%2FG0GMUFSPQoyzuYjiRdjw&w=1920&q=75";
// img3.style.width = "322px";
// img3.style.height = "322px";
// // product 2 description 
// var divInArticle3 = document.createElement("div");
// article3.appendChild(divInArticle3);
// var description3 = document.createElement('p');
// divInArticle3.appendChild(description3);
// description3.innerHTML = "Unisex Zip Hoodie"
// description3.style.marginBottom = "4px";
// divInArticle3.style.width = "322px";
// divInArticle3.style.height = "52px";
// divInArticle3.style.marginTop = "24px";
// divInArticle3.style.textAlign = "center";
// var money3 = document.createElement('p');
// divInArticle3.appendChild(money3);
// money3.innerHTML = "£1.00";
// description3.style.fontWeight = "600"
// description3.style.fontSize ="1.125rem"


// getdiv.style.display = 'flex';
// getdiv.style.justifyContent = 'space-around';
const rootElement = document.getElementById('root')
const productItem = document.createElement('div');
productItem.setAttribute('class', 'productItems');
const productImg = document.createElement("img");
productImg.setAttribute('class',"product-img")
productImg.setAttribute('src', 'https://commerce.withheadlesscms.com/_next/image?url=https%3A%2F%2Fmedia.graphcms.com%2FCE6zbBdaR9O8ixpQ16t6&w=1920&q=75');
rootElement.appendChild(productItem);
productItem.appendChild(productImg);
console.log(productItem)

