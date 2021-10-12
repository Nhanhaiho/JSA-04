//1
// const members = [
// { name: 'Lan', gender: 'female' },
// { name: 'Linh', gender: 'female' },
// { name: 'Trung', gender: 'male' },
// { name: 'Peter', gender: 'gay' }
//  ];

// members.forEach((peoples) => {
//     if (peoples.gender != 'female') {
//         console.log(peoples)
//     }
// })


// 2 Diff Two Arrays
// function diffArray(arr1, arr2) {
//     const twoArr = arr1.concat(arr2);
//     return twoArr.filter(diffNum => !arr1.includes(diffNum)|| !arr2.includes(diffNum))
    
// }

// console.log(diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5]));


//3. Sum of Minimums
// function sumMinimums(arr) {
//     var sum = 0;
//     for (var i of arr) {
//         sum += Math.min(...i);
//     }
//     console.log(sum);

// }

// sumMinimums([
//     [1, 2, 3, 4, 5],
//     [5, 6, 7, 8, 9],
//     [20, 21, 34, 56, 100]
// ]);


//4 
// function freeShipping(obj) {
//     var total = 0;
//     for (var i in obj) {
//         // console.log(obj[i]);
//         total += obj[i]
//     }
//     // console.log(total);
//     if (total >= 50) {
//         console.log(true);
//     } else {
//         console.log(false);
//     }
// }

// freeShipping({ "Shampoo": 5.99, "Rubber Ducks": 15.99 });
// freeShipping({ "Monopoly": 11.99, "Secret Hitler": 35.99, "Bananagrams": 13.99 })


//5 suy nghĩ thôi khó vl =(((

// const rate = {
// 	people: 4,
// 	 walls: 9,
// 	 minutes: 63 
// }
// let formula = (rate.minutes / rate.walls) * rate.people; // tính 1 người mất bao nhiêu phút để xong được 1 wall;

// function time(formula, people, walls) {
//     return (walls * formula) / people; // tính theo yêu cầu đề 
// }
// console.log(time(formula,14,14)) //formula không thay đổi chỉ thay đổi people và walls