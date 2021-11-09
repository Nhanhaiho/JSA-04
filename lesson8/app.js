// const btnClick1 = document.getElementById("btn-click1")
// const btnClick2 = document.getElementById("btn-click2")
// const number = document.getElementById("number")
// let count = 0;
// btnClick1.addEventListener("click", () => {
//     if (count <= 0) {
//         number.innerHTML = "stop"
//     } else {
//         count--;
//         number.innerHTML = count;
//     }
// }
// )

// btnClick2.addEventListener("click", () => {
//     if (count >= 10) {
//      number.innerHTML ="stop"
//     } else {
//         count++;
//         number.innerHTML = count;
//  }
 
// } )

const todos = [
    { title: 'an sang', Done: false,id:1 },
    { title: 'di hoc', Done: false, id: 2 },
    {title: 'di ngu', Done: false, id:3}
]

    const todoEl = document.getElementById("todos")
for (let i = 0; i < todos.length; i++) {
    const todo = document.createElement('li');
    todo.textContent = todos[i].title;
    todoEl.appendChild(todo);
}