// 7
function points(point1, point2) {
    return point1 * 2 + point2 * 3;
}
console.log("question 7 :",points(38, 8));

//8
function lessThan100(number1, number2) {
    if (number1 + number2 < 100) {
        return true
    } else {
        return false;
    }
};
console.log("question 8 :",lessThan100(50, 81));

//9 
function animals(ani1, ani2, ani3) {
    let total = ani1 * 2 + ani2 * 4 + ani3 * 4;
    return total;
};
console.log("question 9 :",animals(5, 2, 8));

//10 
function boolToString(flag) {
    return flag.toString();
}
console.log("question 10 :",boolToString(true))

//11 
function isSameNum(num1,num2) {
    if (num1 === num2) {
        return true
    } else {
        return false
    }
}
console.log("question 11 :", isSameNum(2, 2))

//12 
function footballPoints(wins, draws, losses) {
    return wins * 3 + draws * 1 + losses * 0;
};
console.log("question 12 :", footballPoints(5, 0, 2));

//13 
function sumPolygon(angles) {
    return angles * 60;
}
console.log("question 13 :", sumPolygon(3));

//14 
function howManyWalls(n, w, h) {
    return n / (w * h);
}
console.log("question 14 :", Math.floor(howManyWalls(41, 3, 6)));

//15
function calculateFuel(fuel) {
    if (fuel * 10 <=100) {
        return 100;
    } else {
        return fuel * 10;
    }
}
console.log("question 15 :", calculateFuel(15));

//16 
function yearsInOneHouse(age, moves) {
    return age / (moves + 1);
}
console.log("question 16 :", yearsInOneHouse(15, 2));

//17 
function makesTen(a, b) {
    if ((a === 10 || b === 10) ||(a + b) === 10) {
        return true;
    } else {
        return false;
    }
}
console.log("question 17 :", makesTen(10, 9));

//18 
function frames(fps, num_per_sec) {
    return fps * (num_per_sec * 60);
};
console.log("question 18 :", frames(10, 25));

//19
function calculator(exp) {
return eval(exp);
}
console.log("question 19 :", calculator("49/7*2-3") )

//20 
function leapYear(years) {
    if (years % 4 == 0) {
        return true;
    } else {
        return false
   }
}
console.log("question 20 :", leapYear(2021));

