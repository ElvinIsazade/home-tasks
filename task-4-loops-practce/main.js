//Loops practice
// Task 1
// hec olmasa iki eyni reqem olarsa yes eks halda no cap edin,meselen input=12345 output=no; input=612456 output=yes;
// var input = Number(prompt("Ededi daxil edin:"));
// let tekrar = false;
// while (input > 0) {
//     let sonReqem = input % 10;
//     let temp = input / 10;
//     while (temp > 0) {
//         if (sonReqem == temp % 10) {
//             tekrar = true;
//             break;
//         } else {
//             tekrar = false;
//         }
//         temp = parseInt(temp / 10);
//     }
//     if (tekrar) {
//         break;
//     }
//     input = parseInt(input / 10);
// }
// if (tekrar) {
//     console.log("yes");
// } else {
//     console.log("no");
// }




// const { Ask } = require("asfk");
// Ask(["Ededi daxil edin:"]).then(([a]) => {
//     a = parseInt(a);
//     let tekrar = false;
//     while (a > 0) {
//         let sonReqem = a % 10;
//         let temp = parseInt(a / 10);
//         while (temp > 0) {
//             if (sonReqem == temp % 10) {
//                 tekrar = true;
//                 break;
//             }
//             temp = parseInt(temp / 10);
//         }
//         if (tekrar) {
//             break;
//         }
//         a = parseInt(a / 10);
//     }
//     if (tekrar) {
//         console.log("yes");
//     } else {
//         console.log("no");
//     }
// });



// const { Ask } = require("asfk");
// Ask(["Ededi daxil edin :"]).then(([a]) => {
//     a = a.split("").map(Number);
//     let tekrar = false;
//     for (let i = 0; i < a.length; i++) {
//         for (let j = 0; j < a.length; j++) {
//             if (a[i] == a[j] && i != j) {
//                 tekrar = true;
//             }
//         }
//         if (tekrar) {
//             break;
//         }
//     }
//     if (tekrar) {
//         console.log("yes");
//     } else {
//         console.log("no");
//     }
// });





// Task 2
//faktoriali hesablayin,meselen input=5 output=5*4*3*2*1=120;
// var input = Number(prompt("Ededi daxil edin:"));
// let hasil = 1;
// while (input > 0) {
//     hasil *= input;
//     input--;
// }
// console.log(hasil);



// const { Ask } = require('asfk');

// Ask(["Ededi daxil edin:"]).then(([a]) => {
//     a = parseInt(a);
//     let hasil = 1;
//     while (a > 0) {
//         hasil *= a;
//         a--;
//     }
//     console.log(hasil);
// });






//Task 3
//reqemi ters cevirin,meselen input=12345 output=54321;
// var input = Number(prompt("Ededi daxil edin:"));
// let reverse = 0;
// while (input > 0) {
//     let sonReqem = input % 10;
//     reverse = reverse * 10 + sonReqem;
//     input = parseInt(input / 10);
// }
// console.log(reverse);





// const { Ask } = require('asfk');

// Ask(["Ededi daxil edin:"]).then(([a]) => {
//     a = parseInt(a);
//     let reverse = 0;
//     while (a > 0) {
//         let sonReqem = a % 10;
//         reverse = reverse * 10 + sonReqem;
//         a = parseInt(a / 10);
//     }
//     console.log(reverse);
// });



// const { Ask } = require('asfk');

// Ask(["Ededi daxil edin:"]).then(([a]) => {
//     a = a.split("").map(Number);
//     a.reverse();
//     console.log(a.join(""));
// });








// Task 4
//Edede qeder kublari tapin,meselen input=6 output=1 8 27 64 125 216;
// var input = Number(prompt("Ededi daxil edin:"));
// let num = 1;
// while (input > 0) {
//     console.log(`Current Number is : ${num}  and the cube is ${num ** 3}`);
//     num++;
//     input--;
// }




// const { Ask } = require('asfk');

// Ask(["Ededi daxil edin:"]).then(([a]) => {
//     a = parseInt(a);
//     let num = 1;
//     while (a > 0) {
//         console.log(`Current Number is : ${num}  and the cube is ${num ** 3}`);
//         num++;
//         a--;
//     }
// });




//Task 5
// n ededi verilir. asagidaki kimi hesablayin,meselen input=5;output=2+22+222+2222+22222=24690;
// var input = Number(prompt("Ededi daxil edin:"));
// let first = 2;
// let result = 2;
// let say = 0;
// while (say < input) {
//     first += (result * 10) + 2;
//     result = (result * 10) + 2;
//     say++;

// }
// console.log(first);





// const { Ask } = require('asfk');

// Ask(["Ededi daxil edin:"]).then(([a]) => {
//     a = parseInt(a);
//     let first = 2;
//     let result = 2;
//     let say=0;
//     while (say < a) {
//         first += (result * 10) + 2;
//         result = (result * 10) + 2;
//         say++;
//     }
//     console.log(first);
// });






//Task 6
// fibonacci ededi.meselen,input=10, output=0 1 1 2 3 5 8 13 21 34;
// var input = Number(prompt("Eded daxil edin:"));
// let one = 0, two = 1, temp;
// let i = 1;
// while (i <= input) {
//     console.log(one);
//     temp = one + two;
//     one = two;
//     two = temp;
//     i++;
// }




// const { Ask } = require('asfk');

// Ask(["Ededi daxil edin:"]).then(([a]) => {
//     a = parseInt(a);
//     let one = 0;
//     let two = 1;
//     let term;
//     for (let i = 0; i < a; i++) {
//         console.log(one);
//         temp = one + two;
//         one = two;
//         two = temp;
//     }
// });














