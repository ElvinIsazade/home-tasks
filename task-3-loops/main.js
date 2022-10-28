//HomeWork loops
// Task 1
// ededdeki en boyuk reqemi tapin,meselen input=2345 output =5;
// var input = Number(prompt("eded daxil edin:"));
// let max = 0;
// while (input > 0) {
//     let sonReqem = input % 10;
//     if (sonReqem > max) {
//         max = sonReqem;
//     }
//     input = parseInt(input / 10);
// }
// console.log(max);








// const { Ask } = require("asfk");
// Ask(["Ededi daxil edin:"]).then(([a]) => {
//     a = parseInt(a);
//     let max = 0;
//     while (a > 0) {
//         let sonReqem = a % 10;
//         if (sonReqem > max) {
//             max = sonReqem;
//         }
//         a = parseInt(a / 10);
//     }
//     console.log(max);
// });








// Task2
//Ededin en boyuk reqemine nece defe rast gelinir,meselen input=2345 output=1, input=2545 output=2;
// var input = Number(prompt("ededi daxil edin:"));
// let max = 0;
// let count = 0;
// while (input > 0) {
//     let sonReqem = input % 10;
//     if (sonReqem >= max) {
//         max = sonReqem;
//         count++;
//     }
//     input = parseInt(input / 10);
// }
// console.log(count);




// const { Ask } = require('asfk');

// Ask(["Ededi daxil edin:"]).then(([a]) => {
//     a = parseInt(a);
//     let max = 0;
//     let count = 0;
//     while (a > 0) {
//         let sonReqem = a % 10;
//         if (sonReqem >= max) {
//             max = sonReqem;
//             count++;
//         }
//         a = parseInt(a / 10);
//     }
//     console.log(count);
// });









//Task 3
//Ededin tek reqemlerinin sayini tapin,meselen input=2345 output=2;
// var input = Number(prompt("Ededi daxil edin:"));
// let count = 0;
// while (input > 0) {
//     let sonReqem = input % 10;
//     if (sonReqem % 2 == 1) {
//         count++
//     }
//     input = parseInt(input / 10);
// }
// console.log(count);






// const { Ask } = require('asfk');

// Ask(["Ededi daxil edin:"]).then(([a]) => {
//     a = parseInt(a);
//     let count = 0;
//     while (a > 0) {
//         let sonReqem = a % 10;
//         if (sonReqem % 2 == 1) {
//             count++;
//         }
//         a = parseInt(a / 10);
//     }
//     console.log(count);
// });







//Task 4
// eded verilir.onun cut reqemlerini bir artirin,tek reqemlerini ise 1 azaldin,meselen input=30 output=21;
// var input = Number(prompt("Ededi daxil edin:"));
// let newNumber = 0;
// let mertebe = 0;
// while (input > 0) {
//     let sonReqem = input % 10;
//     if (sonReqem % 2 == 0) {
//         sonReqem++;
//     } else {
//         sonReqem--;
//     }
//     sonReqem *= 10 ** mertebe;
//     newNumber += sonReqem;
//     mertebe++;
//     input = parseInt(input / 10);
// }
// console.log(newNumber);






// const { Ask } = require('asfk');

// Ask(["Ededi daxil edin:"]).then(([a]) => {
//     a = parseInt(a);
//     let newNumber = 0;
//     let mertebe = 0;
//     while (a > 0) {
//         let sonReqem = a % 10;
//         if (sonReqem % 2 == 0) {
//             sonReqem += 1;
//         } else {
//             sonReqem -= 1;
//         }
//         sonReqem *= 10 ** mertebe;
//         newNumber += sonReqem;
//         mertebe++;
//         a = parseInt(a / 10);
//     }
//     console.log(newNumber);
// });



// const { Ask } = require("asfk");
// Ask(["Ededi daxil edin :"]).then(([a]) => {
//     a = a.split("").map(Number);
//     for (let i = 0; i < a.length; i++) {
//         if (a[i] % 2 == 0) {
//             a[i]++;
//         } else if (a[i] % 2 == 1) {
//             a[i]--;
//         }
//     }
//     console.log(a.join(""));
// });








// Task 5
// ededin tek reqemlerinin hasilini tapin,meselen input=327 output=21;
// var input = Number(prompt("Ededi daxil edin:"));
// let hasil = 1;
// while (input > 0) {
//     let sonReqem = input % 10;
//     if (sonReqem % 2 == 1) {
//         hasil *= sonReqem;
//     }
//     input = parseInt(input / 10);
// }
// console.log(hasil);






// const { Ask } = require('asfk');

// Ask(["Ededi daxil edin:"]).then(([a]) => {
//     a = parseInt(a);
//     let hasil = 1;
//     while (a > 0) {
//         let sonReqem = a % 10;
//         if (sonReqem % 2 == 1) {
//             hasil *= sonReqem;
//         }
//         a = parseInt(a / 10);
//     }
//     console.log(hasil);
// });







// Task 6
// ededin reqemlerini kicik mertebeden baslayaraq cap edin: input=123 output=3 2 1
// var input = Number(prompt("Ededi daxil edin:"));
// while (input > 0) {
//     let sonReqem = input % 10;
//     console.log(sonReqem);
//     input = parseInt(input / 10);
// }





// const { Ask } = require('asfk');

// Ask(["Ededi daxil edin:"]).then(([a]) => {
//     a = parseInt(a);
//     while (a > 0) {
//         let sonReqem = a % 10;
//         console.log(sonReqem);
//         a = parseInt(a / 10);
//     }
// });







// Task 7
// iki eded verilir. bu iki ededin araligina daxil olan cut ededleri azalan ardicilliqla cap edin,meselen input=2,7 output=6 4 2;
// var input1 = Number(prompt("1 ci ededi daxil edin:"));
// var input2 = Number(prompt("2 ci ededi daxil edin:"));
// while (input2 >= input1) {
//     if (input2 % 2 == 0) {
//         console.log(input2);
//     }
//     input2--;
// }





// const { Ask } = require('asfk');

// Ask(["1 ci ededi daxil edin:", "2 ci ededi daxil edin:"]).then(([a, b]) => {
//     a = parseInt(a);
//     b = parseInt(b);
//     while (b >= a) {
//         if (b % 2 == 0) {
//             console.log(b);
//         }
//         b--;
//     }
// });







//Task 8
//# simvolunu gosterildiyi kimi cap edin, meselen input=3 output=###;
// var input = Number(prompt("Eded daxil edin:"));
// let i = 0;
// while (input > i) {
//     console.log("#");
//     input--;
// }



// const { Ask } = require('asfk');

// Ask(["Eded daxil edin:"]).then(([a]) => {
//     a = parseInt(a);
//     let i = 0;
//     while (a > i) {
//         console.log("#");
//         a--;
//     }
// });







//Task 9
//eded verilir. hemin edede qeder reqemlerin kublarini tapin,meselen input=9 output=1 8;
// var input = Number(prompt("Ededi daxil edin:"));
// let previousInput = input;
// while (input > 1) {
//     input--;
//     if (input ** 3 < previousInput) {
//         console.log(input ** 3);
//     }
// }





// const { Ask } = require('asfk');

// Ask(["Ededi daxil edin:"]).then(([a]) => {
//     a = parseInt(a);
//     let previousInput = a
//     while (a > 1) {
//         a--;
//         if (a ** 3 < previousInput) {
//             console.log(a ** 3);
//         }
//     }
// });









//Task10
//eded verilir.hemin ededde daxil olmaqla hemin reqemlerin kvadratini tap,meselen input=3 output=1 4 9;
// var input = Number(prompt("Ededi daxil edin:"));
// while (input > 0) {
//     console.log(input ** 2);
//     input--;
// }






// const { Ask } = require('asfk');

// Ask(["Ededi daxil edin:"]).then(([a]) => {
//     a = parseInt(a);
//     while (a > 0) {
//         console.log(a ** 2);
//         a--;
//     }
// });