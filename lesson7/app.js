// const a = {
//     html: {
//         head: {
//             meta: {},
//             title: {
//                 value: 'documment'
//             },
//         }
//     }
// }
// console.log(a);
// let h2Element = document.getElementById('title');
// // console.log(h2Element);
// // console.log(h2Element.id)
// // console.log(h2Element.classList)
// // console.log(h2Element.localName)
// let red = document.getElementsByClassName('text-red');
// for (var i of red) {
//     console.log(i.innerText);
//     console.log(i.localName);
// }
// const divEl = document.getElementById('contain');
// console.log(divEl);
// let inputEl = document.createElement("input");
// inputEl.type = 'text';
// inputEl.value = 'hello';
// inputEl.className = 'nhan';
// divEl.appendChild(inputEl);

// const divEl = document.getElementById('contain');
// console.log(divEl.children.remove())


var demoId = document.querySelector('#demo');
//console.log(demoId);

var demoClass = document.querySelectorAll('.demo')
//console.log(demoClass);
demoClass = Array.from(demoClass)
demoClass.push(1,2,3)
//console.log(demoClass);
// console.log(Array.from(demoClass).push(1,2,3));

var btnModal = document.querySelector("body [data-toggle='modal']");
// console.log(btnModal);

var img="https://sites.google.com/site/thietkewebtaihanoi/_/rsrc/1480308136221/kien-thuc-web/tim-kiem-hinh-anh-dep-cho-giao-dien-website/T%C3%ACm%20ki%E1%BA%BFm%20h%C3%ACnh%20%E1%BA%A3nh%20%C4%91%E1%BA%B9p%20cho%20giao%20di%E1%BB%87n%20website-1.jpg"

var pic = document.querySelector('.pic')
pic.setAttribute('src', img)
pic.setAttribute('alt', "day là tranh")
pic.setAttribute('width', 300);
pic.setAttribute('height', 300);
pic.setAttribute('title',"ok")
//console.log(pic);

var datatile = Array.from(document.querySelectorAll("[data-title]"));
for (var i = 0; i < datatile.length; i++) {
    //     console.log(datatile[i],i)
   // console.log(datatile[i].getAttribute('data-title')
    
}
// console.log(datatile)

function handleclick() {
   console.log('click')
}



var colorSkin = document.getElementById('color-skin');
var containEl = document.querySelector('.container');

function changeStyleColor(href) {
    colorSkin.setAttribute("href",href)
}

function changeStyleCotaniner(type) {
    var newClass = "container " + type;
    containEl.setAttribute("class",newClass)
    console.log(type);
    
}