var btnaddEl = document.getElementById('btn-add');
var inputEl = document.getElementById('input');
var ulEl = document.querySelector('ul');


// const liEl = document.createElement('li');
// const iconEl = document.createElement('i');
// iconEl.setAttribute("class", "fas fa-trash");
// liEl.appendChild(iconEl);
//     ulEl.appendChild(liEl);
//     liEl.innerHTML(inputEl.value);
// function newLi() {
//     var li = document.createElement('li');
    
// }

// btnaddEl.addEventListener('click', () => {
//     ulEl.textContent = 'nhan'
// })

// const todoUl = []

// for (let i=0; i < 5; i++){
    
// }

btnaddEl.onclick = () => {
    let userData = inputEl.value;
    let getlocalStorage = localStorage.getItem('new todo')
    if (getlocalStorage == null) {
        listArr = [];
    } else {
        listArr =JSON.parse(getlocalStorage)
    }
    listArr.push(userData);
    localStorage.setItem('new todo', JSON.stringify(listArr));
    lists()
}

function lists() {
    let getlocalStorage = localStorage.getItem('new todo');
     if (getlocalStorage == null) {
        listArr = [];
    } else {
        listArr =JSON.parse(getlocalStorage)
    }
    let newLi = '';
    listArr.forEach((element, index) => {
        newLi += `<li> ${element}<i class="fas fa-trash"></i></li>`;
    })
    ulEl.innerHTML = newLi;
}