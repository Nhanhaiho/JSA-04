var btnaddEl = document.getElementById('btn-add');
var inputEl = document.getElementById('input');
var ulEl = document.querySelector('ul');


btnaddEl.addEventListener('click', function () {
    // var btnTrash = document.createElement('button');
    // console.log(btnTrash);
    // var iTrash = document.createElement('i')
    // iTrash.setAttribute("class", "fas fa-trash")
    // btnTrash.appendChild(iTrash);
    
    //////////////////////////////////////////////
    var liform = document.createElement('li');
    
    liform.innerHTML = input.value;
    ulEl.appendChild(liform);
    liform.addEventListener('click', function () {
        liform.style.textDecoration = "line-through";
    })
     liform.addEventListener('dblclick', function () {
         ulEl.removeChild(liform);
    })
})

const todos = [
  { title: "Ăn tối", isDone: false, id: 1 },
  { title: "Học bài", isDone: false, id: 2 },
  { title: "Đi ngủ", isDone: true, id: 3 },
];

for (var i = 0; i < todos.length; i++){
    console.log(todos[i]);
}

// btnaddEl.onclick = () => {
//     let userData = inputEl.value;
//     let getlocalStorage = localStorage.getItem('new todo')
//     if (getlocalStorage == null) {
//         listArr = [];
//     } else {
//         listArr =JSON.parse(getlocalStorage)
//     }
//     listArr.push(userData);
//     localStorage.setItem('new todo', JSON.stringify(listArr));
//     lists()
// }

// function lists() {
//     let getlocalStorage = localStorage.getItem('new todo');
//      if (getlocalStorage == null) {
//         listArr = [];
//     } else {
//         listArr =JSON.parse(getlocalStorage)
//     }
//     let newLi = '';
//     listArr.forEach((element, index) => {
//         newLi += `<li> ${element}<i class="fas fa-trash"></i></li>`;
//     })
//     ulEl.innerHTML = newLi;
// }





