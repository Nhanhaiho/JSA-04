var btnaddEl = document.getElementById('btn-add'); //element btn add
var inputEl = document.getElementById('input'); // element input
var ulEl = document.querySelector('ul');

const todos = [
  { title: "Ăn tối", isDone: false, id: 1 },
  { title: "Học bài", isDone: false, id: 2 },
    { title: "Đi ngủ", isDone: true, id: 3 },
];

console.log('ban dau: ',todos)

// tạo ra hàm để tạo ra những object
function generatorTodoElements(todo) { // todo ở đây là mỗi object có trong mảng todos
    const liEls = document.createElement('li'); // tạo thẻ li 
    liEls.setAttribute('class', todo.isDone ? 'todoItems done' : 'todoItems'); // kt xem isdone true or false
    liEls.setAttribute('dataId',todo.id)
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

// viết hàm để lấy những thẻ li 
function liTodo() {
    const liItems = document.querySelectorAll(".todoItems");
    console.log(liItems);
    liItems.forEach(item => { //filter // mỗi item = li
        item.addEventListener('dblclick', () => {
            let todoId = item.getAttribute('dataId'); // lấy data id trên mảng todos khi dblc vào li
            console.log(todoId);
        })
    })
}


// cho btn thêm add
btnaddEl.addEventListener('click', () => {
  if(input.value !=""){ // kt xem ng dùng có bổ trống input ko
        const newTodo = {
        title: input.value,
        isDone: false,
        id: todos.length + 1,
    }
    todos.push(newTodo);
    console.log('ve sau', todos);
    ulEl.innerHTML = ""; // xóa hiện tượng bị cộng dồn li
    input.value = ""; // để sau mỗi lần nhập là tự động xóa giá trị nhập cũ
    renderTodos(todos); // gọi lại render để lặp qua todo và add li vào ul
  } else {
      alert("nhập gì đi bạn ơi")
    }
    liEls.addEventListener('dblclick', () => {
        
    })
});



// gọi lại hàm renderTodos truyền vào object todos chứa dữ liệu ng dùng
renderTodos(todos);
liTodo()










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