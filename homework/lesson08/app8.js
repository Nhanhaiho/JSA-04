var btnaddEl = document.getElementById('btn-add'); //element btn add
var inputEl = document.getElementById('input'); // element input
var ulEl = document.querySelector('ul');

const todos = [
//   { title: "Ăn tối", isDone: false, id: 1 },
//   { title: "Học bài", isDone: false, id: 2 },
//     { title: "Đi ngủ", isDone: false, id: 3 },
];

// console.log('ban dau: ',todos)

//  hàm để tạo ra những object
function generatorTodoElements(todo) { // todo ở đây là mỗi object có trong mảng todos
    const container = document.createElement('div');
    container.style.display = 'flex';
    container.style.justifyContent = "space-around";
    container.style.alignItems = 'center';
    // container.style.marginBottom = "10px";
    
    const deleteEl = document.createElement('span');
    deleteEl.innerHTML = "x";
    deleteEl.classList.add('deleteTodo') // cho một cái class lát chọn để thực hiện chức năng 
    deleteEl.setAttribute('dataId',todo.id);

    const liEls = document.createElement('li'); // tạo thẻ li 
    liEls.setAttribute('class', todo.isDone ? 'todoItems done' : 'todoItems'); // kt xem isdone true or false
    liEls.setAttribute('dataId',todo.id)
    liEls.textContent = todo.title; // nội dung thẻ li
    
    container.appendChild(liEls)
    container.appendChild(deleteEl)
    return container;
    
}

// hàm dùng để lặp vào bên trong cái arr chứa obj dữ liệu người dùng
function renderTodos(todosData) { //truyền vào một array giống arr todos dòng 19
    for (let todo of todosData) { // lặp vào arr
        let todoHtml = generatorTodoElements(todo); // đây là 1 object
        ulEl.appendChild(todoHtml); // append vào trong thẻ ul
       
    }
    liTodo() // phải gọi lại hàm này thì nó mới hiểu và chạy cho những lần sau 
    removeTodo() // gọi lại hàm để một khi render là chạy được
}

// viết hàm để lấy update li 
function liTodo() {
    const liItems = document.querySelectorAll(".todoItems");
    // console.log(liItems);
    liItems.forEach(item => { //filter // mỗi item = li
        item.addEventListener('dblclick', () => {
            let todoId = item.getAttribute('dataId'); // lấy data id trên mảng todos khi dblc vào li
            for (let value of todos) { // cho chạy lặp qua để lấy những giá trị khi có đc id
                if (value.id == todoId) {
                    value.isDone = !value.isDone; // dùng !value.isDone để tối ưu vì cứ mỗi lần bấm là đổi true->false
                }
            }
            
            rerenderTodos()
        })
        
    })
    
}
// ham delete
function removeTodo() {
    const liEls = document.querySelectorAll(".deleteTodo");
    for (let item of liEls) {
        item.addEventListener('click', () => {
            let todoId = item.getAttribute('dataId'); // lấy data id trên mảng todos khi dblc vào li
            for (let i = 0; i < todos.length; i++) {
                if (todos[i].id == todoId) {
                    todos.splice(i, 1);
                    console.log(todos)
                    rerenderTodos()
                    break;
                    
                }
            }
            })
            
            
        }
   }





// tránh trường hợp bị nhảy lại 
function rerenderTodos() {
     ulEl.innerHTML = "";
        renderTodos(todos); // gọi làm hàm
}


// cho btn thêm add
btnaddEl.addEventListener('click', () => {
  if(input.value !=""){ // kt xem ng dùng có bổ trống input ko
        const newTodo = {
        title: input.value,
        isDone: false,
        id:`${new Date().valueOf()}`,
    }
    todos.push(newTodo);
    // console.log('ve sau', todos);
    input.value = ""; // để sau mỗi lần nhập là tự động xóa giá trị nhập cũ
    //   ulEl.innerHTML = ""; // xóa hiện tượng bị cộng dồn li
    // renderTodos(todos); // gọi lại render để lặp qua todo và add li vào ul
      rerenderTodos()
  } else {
      alert("nhập gì đi bạn ơi")
    }
    
});





// gọi lại hàm renderTodos truyền vào object todos chứa dữ liệu ng dùng
renderTodos(todos);
liTodo()








