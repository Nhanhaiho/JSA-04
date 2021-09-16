//1. Return the Remainder from Two Numbers
function remainder(a1, b1) {
    return a1 % b1
}
//console.log(remainder(5,5))

//2. Find the Perimeter of a Rectangle
function findPerimeter(length, width) {
    return 2*(length+width)
}
//console.log(findPerimeter(6,7))

//3. Basketball Points
function points(point1, point2) {
    return point1 * 2 + point2 * 3;
}
//console.log(points(38, 8));

//4. The Farm Problem
function animals(ani1, ani2, ani3) {
     return ani1 * 2 + ani2 * 4 + ani3 * 4;
    
};
//console.log(animals(5, 2, 8));

//5. Football Points
function footballPoints(wins, draws, losses) {
    return wins * 3 + draws * 1 + losses * 0;
};
console.log( footballPoints(5, 0, 2));

//7. Let's Fuel Up!
function calculateFuel(fuel) {
    if (fuel * 10 <=100) {
        return 100;
    } else {
        return fuel * 10;
    }
}
//console.log(calculateFuel(15));

//6. Sum of Polygon Angles
function sumPolygon(n) {
    if (n > 2) {
        return (n-2)*180
    } else {
        return "nothing"
    }    
}
//console.log(sumPolygon(6))

//8. Moving House
function yearsInOneHouse(age, moves) {
    return age / (moves + 1);
}
//console.log(yearsInOneHouse(15, 2));

//9. Frames Per Second
function frames(fps, num_per_sec) {
    return fps * (num_per_sec * 60);
};
//console.log(frames(10, 25));












// phần này không liên quan em làm cái khác :D

// //8
// function lessThan100(number1, number2) {
//     if (number1 + number2 < 100) {
//         return true
//     } else {
//         return false;
//     }
// };
// console.log("question 8 :",lessThan100(50, 81));


// //10 
// function boolToString(flag) {
//     return flag.toString();
// }
// console.log("question 10 :",boolToString(true))

// //11 
// function isSameNum(num1,num2) {
//     if (num1 === num2) {
//         return true
//     } else {
//         return false
//     }
// }
// console.log("question 11 :", isSameNum(2, 2))


// //13 
// function sumPolygon(angles) {
//     return angles * 60;
// }
// console.log("question 13 :", sumPolygon(3));

// //14 
// function howManyWalls(n, w, h) {
//     return n / (w * h);
// }
// console.log("question 14 :", Math.floor(howManyWalls(41, 3, 6)));

// //17 
// function makesTen(a, b) {
//     if ((a === 10 || b === 10) ||(a + b) === 10) {
//         return true;
//     } else {
//         return false;
//     }
// }
// console.log("question 17 :", makesTen(10, 9));

// //19
// function calculator(exp) {
// return eval(exp);
// }
// console.log("question 19 :", calculator("49/7*2-3") )

// //20 
// function leapYear(years) {
//     if (years % 4 == 0) {
//         return true;
//     } else {
//         return false
//    }
// }
// console.log("question 20 :", leapYear(2021));

