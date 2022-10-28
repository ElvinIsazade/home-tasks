//Task 1
//Sayı ters sırada
//1234
//4321
//100
//001




// var input = prompt();
// function reverseNumber(number) {
//     let newString = "";
//     for (let i = number.length - 1; i >= 0; i--) {
//         newString += number[i];
//     }
//     return newString;
// }
// console.log(reverseNumber(input));



// const { Ask } = require("asfk");
// Ask(["Ededi daxil edin:"]).then(([a]) => {
//     let newString = "";
//     for (let i = a.length - 1; i >= 0; i--) {
//         newString += a[i];
//     }
//     console.log(newString);

// });







//Task 2
//n sayısındaki a rakamlarını sayın.
//25557
//5
// cavab cisin 3


//100
//0
//cavab cixsin 2


// var input1 = prompt();
// var input2 = prompt();
// let arr = input1.split("");
// function countNumber(number1, number2) {
//     let count = 0;
//     for (let i = 0; i < number1.length; i++) {
//         if (number2 == number1[i]) {
//             count++;
//         }
//     }
//     return count;
// }
// console.log(countNumber(input1, input2));






// const { Ask } = require("asfk");
// Ask(["1 ci ededi daxil edin", "2 ci ededi daxil edin:"]).then(([a, b]) => {
//     a = a.split("");

//     let count = 0;
//     for (let i = 0; i < a.length; i++) {
//         if (b == a[i]) {
//             count++;
//         }
//     }
//     console.log(count);
// });







//Task 3
//Bir tamsayının ilk ve son basamağının toplamını bulun.
// 2345
// 7
// 12345689531556215
// 6



// var input = prompt();
// function lastAndFirstSum(number) {
//     for (let i = 0; i < number.length; i++) {
//         return Number(number[0]) + Number(number[number.length - 1]);
//     }
// }
// console.log(lastAndFirstSum(input));




// const { Ask } = require("asfk");
// Ask(["Ededi daxil edin:"]).then(([a]) => {
//     console.log(Number(a[0]) + Number(a[a.length - 1]));

// });







// var input = prompt();
// input = input.split(" ");
// for (let i = 0; i < input.length; i++) {
//     console.log(input[i].length);
// }







// Task 4
//abrakadabra
//3
//6
//abrabra


// This is my lovely beautiful house
//7
//16
// cavab cixsin :  This is beautiful house 



// const { Ask } = require("asfk");
// Ask(["", "", ""]).then(([string, a, b]) => {
//     a = parseInt(a);
//     b = parseInt(b);
//     let newString = "";
//     let newString2 = "";
//     for (let i = 0; i < a; i++) {
//         newString += string[i];
//     }
//     for (let i = b + 1; i < string.length; i++) {
//         newString2 += string[i];
//     }
//     console.log(newString + newString2);
// });








// Task 5
// Programming Principles 1
// 11 10 1

// I like c very much
// 1 4 1 4 4






// const { Ask } = require("asfk");
// Ask(["Cumle daxil edin:"]).then(([a]) => {
//     a = a.split(" ");
//     for (let i = 0; i < a.length; i++) {
//         console.log((a[i].length));
//     }

// });




//Basga bir yolu asagidaki kimidir:

// const { Ask } = require("asfk");
// Ask(["Cumle daxil edin:"]).then(([a]) => {
//     a = a.split(" ");
//     let count=0;
//     for(let i=0;i<a.length;i++){
//         for(let j=0;j<a[i].length;j++){
//             count++;
//         }
//         console.log(count);
//         count=0;
//     }

// });




