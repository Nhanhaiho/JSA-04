var btnaddEl = document.getElementById('btn-add');
var inputEl = document.getElementById('input');
var ulEl = document.querySelector('ul');


btnaddEl.addEventListener('click', function () {
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






