// //Narcissistic numbers
// function special2digits(n) {
//     if (n < 10 || n > 99) {
//         console.log('invalid value')
//     } else {
//         var firstnum = Math.floor(n / 10);
//         var secondnum = Math.floor(n % 10);
//         var sum = firstnum + secondnum;
//         var multiplier = firstnum * secondnum;
//         if ((sum + multiplier) == n) {
//             console.log(true);
//         } else {
//             console.log(false)
//         }
//     }
// }
// special2digits(59);

// //Area and perimeter finder
// let a = "area";
// let b = "perimeter";

// function areaPerimeter(width, height, choice) {
//     if (choice == a) {
//         console.log(width* height)
//     } else if(choice==b) {
//         console.log((width+height)*2)
//     }
// }
// areaPerimeter(2.9, 3.1, b);


// // Triangle and parallelogram area finder
// function areaShape(b, h,shape) {
//     if (shape == 'triangle') {
//         console.log(0.5 * b * h );
//     } else if (shape == "parallelogram") {
//         console.log (b * h)
//    }
// }
// areaShape(2.9, 1.3, "parallelogram");

// //The pH Scale
// function pHName(ph) {
//     if (ph < 0 || ph > 14) {
//         console.log("invalid");
//     } else {
//         if (ph === 7) {
//             console.log("neutral")
//         } else if (ph > 7) {
//             console.log("alkaline")
//         } else {
//             console.log("acidic")
//         }
//     }
// };
// pHName(6.9999);

// //Tax
// function tax(yourtax) {
//     if (yourtax <= 1000) {
//         console.log(0)
//     } else if ( yourtax <= 1500) {
//         console.log(yourtax*10/100);
//     }else if (yourtax <= 2000) {
//         console.log(yourtax*20/100)
//     } else if (yourtax <= 2500) {
//         console.log(yourtax*30/100)
//     } else {
//         console.log(yourtax*35/100)
//     }
// };
// tax(1234);

// //BMI Calculator
// function BMI(heigt, weight) {
//     var calcuBMI = (weight / heigt / heigt) * 10000
//     if (calcuBMI < 18.5) {
//         console.log('underweight')
//     } else if (calcuBMI >= 18.5 && calcuBMI <= 24.9) {
//         console.log("normal")
//     } else if (calcuBMI > 24.9 && calcuBMI <= 29.9) {
//         console.log("overweight");
//     } else if (calcuBMI > 29.9 && calcuBMI <= 34.9) {
//         console.log("obese")
//     } else {
//         console.log('extremely obese')
//     }
// };
// BMI(170, 60); 

// //zodiac
// function zodiac(age) {
//     var odd = (2021 - age) % 12;
//     switch (odd) {
//         case 0: console.log("Monkey");
//             break;
//         case 1: console.log("Chicken");
//             break;
//         case 2: console.log("Dog");
//             break;
//         case 3: console.log("Pig");
//             break;
//         case 4: console.log("Mouse");
//             break;
//         case 5: console.log("Buffalo");
//             break;
//         case 6: console.log("Tiger");
//             break;
//         case 7: console.log("Cat");
//             break;
//         case 8: console.log("Dragon");
//             break;
//         case 9: console.log("Snake");
//             break;
//         case 10: console.log("Horse");
//             break;
//         case 11: console.log("Goat");
//             break;
//     }
// }
// zodiac(8);

// //Quadratic expression Calculate
 
// function quadratic(a, b, c) {
//     var delta = (b * b) - (4 * a * c);
//     if (a == 0) {
//         console.log(`${-c / b}`);
//     } else {
//         if (delta == 0) {
//             console.log(`${-b/2*a}`)
//         } else if (delta < 0) {
//             console.log(`no solution`)
//         } else {
//             console.log(`${(-b-Math.sqrt(delta))/2*a} and ${(-b+Math.sqrt(delta))/2*a}`)
//         }
//     }
// }
// quadratic(1, 9, 5);

// Last Digit Ultimate
function lastDig(a, b, c) {
    var num1 = Math.floor(a % 10);
    var num2 = Math.floor(b % 10);
    var num3 = Math.floor(c % 10);
    var sumLastDiga_b = Math.floor((num1*num2)%10)
    if (sumLastDiga_b==num3) {
        console.log(true)
    } else {
        console.log(false)
    }
}
lastDig(25, 21, 125)