var btnaddEl = document.getElementById('btn-add');
var inputEl = document.getElementById('input');
var ulEl = document.querySelector('ul');


// btnaddEl.addEventListener('click', function () {
//     var liform = document.createElement('li');
    
//     liform.innerHTML = input.value;
//     ulEl.appendChild(liform);
//     liform.addEventListener('click', function () {
//         liform.style.textDecoration = "line-through";
//     })
//      liform.addEventListener('dblclick', function () {
//          ulEl.removeChild(liform);
//     })
// })

const todos = [
  { title: "Ăn tối", isDone: false, id: 1 },
  { title: "Học bài", isDone: false, id: 2 },
    { title: "Đi ngủ", isDone: true, id: 3 },
];

// tạo ra hàm để tạo ra những object
function generatorTodoElements(todo) { // todo ở đây là mỗi object có trong mảng todos
    const liEls = document.createElement('li'); // tạo thẻ li 
    if(todo.isDone){ // kiểm tra xem có done ch
        liEls.setAttribute('class', 'done') 
    }
    liEls.textContent = todo.title; // nội dung thẻ li
    return liEls; 
}

// hàm dùng để lặp vào bên trong cái arr chứa obj dữ liệu người dùng
function renderTodos(todosData) { //truyền vào một array giống arr todos dòng 19
    for (let todo of todosData) { // lặp vào arr
        let todoHtml = generatorTodoElements(todo); // đây là 1 object
        ulEl.appendChild(todoHtml); // append vào trong thẻ ul
    }
}

// gọi lại hàm renderTodos truyền vào object todos chứa dữ liệu ng dùng
renderTodos(todos)




