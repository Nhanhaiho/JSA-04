// console.log(":v");
// let luong = 10000;
// const Pi = 3.14
// console.log(Pi);

// quy tắc đặt tên biến 
// - ko được có số đứng đầu
// -ko có kí tự đặc biệt ngoại trừ $ với dấu _ : ex let *lol =0; ==> ko đc 
// - đặt tên biến cho nó rõ nghĩa xíu đi bro. 

// let $nhan = 123; // đúng nè
// let _nhan = 124; // đúng nà 
// let 1nah = 125; // sai nè
// let nha 2 = 2132;// sai nè 

// DATA TYPES
// trong js : 1) string. 2) number. 3) boolean. 4)null. 5)symbol. 6)object. 7)BigInt.

// let fullName = "Nhan";
// let age = 16;
// let gender = true;
// console.log(fullName);
// console.log(age);
// console.log(gender);

//TOÁN TỪ . .
// toán : + - * /
// let A = 3;
// let B = 10;
// console.log(A + B);
// console.log(A-B);
// console.log(A * B);

// console.log(4 % 2);
// console.log(Math.sqrt(B))
// console.log(3 ** 2) // 3 mũ 2

// toán tử so sánh : =, == , === , >=, <=, 

// let a = 4;
// let b = 2;
// let c = "2";

// console.log(b == c);
// let str1 = "2";
// let str2 = "3";
// console.log(str1 - str2);

// let fullName = "Nhan";
// let age = 16;
// let school = "NQ";
// let result = "Hello my name is " + fullName + ", " + "i'm " + age + "years old";
// let result2 = `My name is ${fullName}, i'am ${age}`
// console.log(result);
// console.log(result2)

//function ( hàm)
// function convertMoney(dollar) {
//     let vnd = dollar * 23000;
//     return vnd 
// }
// let tip = 10;
// let result = convertMoney(1);
// console.log(result+tip);

// function sum(a, b) {
//     return a + b;
// }
// console.log(sum(3,4))


//3
function calcAge(age) {
    return age * 365;
}
console.log(calcAge(10));

//4
function remainder(a, b) {
    return a % b;
}
console.log(remainder(-9, 45));

//5 
function findPerimeter(c, d) {
    return 2*(c+d);
}
console.log(findPerimeter(6, 7));

//6
function giveMeSomething(str) {
    return `something ${str}`;
}
console.log(giveMeSomething("nhan"));

//7 
function points(p1, p2) {
    return p1 * 2 + p2 * 3;
}
console.log(points(38,8))