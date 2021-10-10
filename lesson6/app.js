// let const : khai báo ở đâu dùng ở đấy
//var : nó thoải mái hơn 
// let num1 = [1, 2, 3];
// let num2 = num1;
// num1.push(4);
// num2.unshift(0)
// console.log(num2);

// let Tom = {
//     name: 'Tom',
//     age: 10,
// };
// let oggy = Object.assign({},Tom) /// copy giá trị 

// oggy.name = "nhan";
// oggy.age = 0;
// console.log(oggy);
// console.log(Tom);
let arr = [
  { name: "John", age: 21, budget: 23000 },
  { name: "Steve", age: 32, budget: 40000 },
  { name: "Martin", age: 16, budget: 2700 },
];
 let newArr = [];
// // for (var i of arr) {
// //     if (i.age >= 20) {
// //         newArr.push(i);
// //     }
// // }
// // console.log(newArr);

// // function(a, b) {
// //     return a + b;
// // }

// arr.forEach((item) => {
//     if (item.age >= 20) {
//        console.log(item)
//    }
// })

// let number = [1, 2, 3, 4,]

// number.forEach((num) => {
//     console.log(num)
// })

// let res = arr.filter((item) => item.age >= 20)
// console.log(res)
 let number =[1, 3,7,-9, 5, 10, 15, 4]
// let int = number.filter((even) => even % 2 == 0)
// console.log(int)
let target = 0;
let ischecked = number.includes(target)
console.log(ischecked) // true

