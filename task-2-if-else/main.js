//HomeWork Task 1 
// verilmis ededin diger iki ededin arasina daxildirse yes daxil deyilse no cap edin,meselen input=4,2,6 output=yes,input=5,10,15 output=no;
// var input1 = Number(prompt("Reqem daxil edin:"));
// var input2 = Number(prompt("2 ci reqemi daxil edin:"));
// var input3 = Number(prompt("3 cu reqemi daxil edin:"));
// if (input1 > input2 && input1 < input3) {
//     console.log("yes");
// } else {
//     console.log("no");
// }





// const { Ask } = require("asfk");
// Ask(["Reqem daxil edin:", "2 ci reqemi daxil edin", "3 cu reqemi daxil edin:"]).then(([a, b, c]) => {
//     a = parseInt(a);
//     b = parseInt(b);
//     c = parseInt(c);
//     if (a > b && a < c) {
//         console.log("yes");
//     } else {
//         console.log("no");
//     }
// });










// Task 2
//eded verilmisdir.hemin ededden sonra gelen tek ededi yazdirin meselen,input=7,output=5;input=6,output=5;
// var input = Number(prompt("Reqem daxil edin:"));
// if (input % 2 == 0) {
//     input--;
//     console.log(input);
// } else {
//     input -= 2;
//     console.log(input);
// }





// const { Ask } = require("asfk");
// Ask(["Reqem daxil edin:"]).then(([a]) => {
//     a = parseInt(a);
//     if (a % 2 == 0) {
//         a--;
//         console.log(a);
//     } else {
//         a -= 2;
//         console.log(a);
//     }
// });






//Task3
//Eger bir eded digerine bolunurse onda tam ve qaliq hisseni cap et egeer bolunmurse onda divisible cap et,meselen input=12,5;output=2 2 ; input=12,4 output=divisible;
// var input1 = Number(prompt("1 ci reqemi daxil edin:"));
// var input2 = Number(prompt("2 ci reqemi daxil edin:"));
// if (input1 % input2 == 0) {
//     console.log("divisible");
// } else {
//     console.log(parseInt(input1 / input2), input1 % input2);
// }




// const { Ask } = require("asfk");
// Ask(["1 ci reqemi daxil edin:", "2 ci reqemi daxil edin:"]).then(([a, b]) => {
//     a = parseInt(a);
//     b = parseInt(b);
//     if (a % b == 0) {
//         console.log("divisible");
//     } else {
//         console.log(parseInt(a / b), a % b);
//     }
// });








//Task 4
//Ededden evvelki cut ededi cap edin,meselen input=7 output=6; input=6 output=4;
// var input = Number(prompt("Reqem daxil edin"));
// if (input % 2 == 0) {
//     input -= 2;
//     console.log(input);
// } else {
//     input--;
//     console.log(input);
// }



// const { Ask } = require("asfk");
// Ask(["Reqem daxil edin:"]).then(([a]) => {
//     a = parseInt(a);
//     if (a % 2 == 0) {
//         a -= 2;
//         console.log(a);
//     } else {
//         a--;
//         console.log(a);
//     }
// });






// Task 5
// Yaz aylari ucun spring,yay aylari ucun summer,payiz aylari ucun autumn,qis aylari ucun winter cap edin;
// var input = Number(prompt("her hansi bir ay girin:"));
// switch (input) {
//     case 1:
//         console.log("winter");
//         break;
//     case 2:
//         console.log("winter");
//         break;
//     case 3:
//         console.log("spring");
//         break;
//     case 4:
//         console.log("spring");
//         break;
//     case 5:
//         console.log("spring");
//         break;
//     case 6:
//         console.log("summer");
//         break;
//     case 7:
//         console.log("summer");
//         break;
//     case 8:
//         console.log("summer");
//         break;
//     case 9:
//         console.log("autumn");
//         break;
//     case 10:
//         console.log("autumn");
//         break;
//     case 11:
//         console.log("autumn");
//         break;
//     case 12:
//         console.log("winter");
//         break;
//     default:
//         console.log("duzgun ay girin!");
//         break;
// }



// const { Ask } = require("asfk");
// Ask(["Ayi girin:"]).then(([a]) => {
//     a = parseInt(a);
//     switch (a) {
//         case 1:
//             console.log("winter");
//             break;
//         case 2:
//             console.log("winter");
//             break;
//         case 3:
//             console.log("spring");
//             break;
//         case 4:
//             console.log("spring");
//             break;
//         case 5:
//             console.log("spring");
//             break;
//         case 6:
//             console.log("summer");
//             break;
//         case 7:
//             console.log("summer");
//             break;
//         case 8:
//             console.log("summer");
//             break;
//         case 9:
//             console.log("autumn");
//             break;
//         case 10:
//             console.log("autumn");
//             break;
//         case 11:
//             console.log("autumn");
//             break;
//         case 12:
//             console.log("winter");
//             break;
//         default:
//             console.log("duzgun ay girin!");
//             break;
//     }
// });







// Task 6
//Eger eded musbetdirse water 0 ve ya menfidirse ice cap edin,meselen input=5 output=water, input=0 output=ice;
// var input = Number(prompt("Reqem daxil edin:"));
// if (input > 0) {
//     console.log("water");
// } else {
//     console.log("ice");
// }




// const { Ask } = require("asfk");
// Ask(["Reqem daxil edin:"]).then(([a]) => {
//     a = parseInt(a);
//     if (a > 0) {
//         console.log("water");
//     } else {
//         console.log("ice");
//     }
// });




// Task 7
// dord reqemli eded verilir.onun palindrom olmasini teyin edin, meselen,input=2332 output=yes;
// var input = Number(prompt("4 reqemli eded daxil edin:"));
// let firstNumber = parseInt(input / 1000);
// let secondNumber = parseInt(input / 100) % 10;
// let thirdNumber = parseInt(input / 10) % 10;
// let lastNumber = input % 10;
// if (firstNumber == lastNumber && secondNumber == thirdNumber) {
//     console.log("yes");
// } else if(firstNumber==secondNumber && secondNumber==thirdNumber) {
//     console.log("no");
// }





// const { Ask } = require("asfk");
// Ask(["4 reqemli eded daxil edin:"]).then(([a]) => {
//     a = parseInt(a);
//     let firstNumber = parseInt(a / 1000);
//     let secondNumber = parseInt(a / 100) % 10;
//     let thirdNumber = parseInt(a / 10) % 10;
//     let lastNumber = a % 10;
//     if (firstNumber == lastNumber && secondNumber == thirdNumber) {
//         console.log("yes");
//     } else {
//         console.log("no");
//     }
// });