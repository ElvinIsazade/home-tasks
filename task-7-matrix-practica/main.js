// Task 1
//n * n ölçülü matris verilmişdir. Onun mənfi cüt elementlərinin sayını və cəmini tapın.
//3
// 4 -2 5
// 1 -4 -12
// 0 1 -3
// 3 -18 cixsin



// const { Ask } = require('asfk');

// Ask(["", ""]).then(([n, arr]) => {
//     n = parseInt(n);
//     arr = arr.split(" ").map(Number);
//     let matrix = [];
//     for (let i = 0; i < n; i++) {
//        matrix.push(arr.splice(0,n));
//     };
//     let cem=0;
//     let count=0;
//     for(let i=0;i<matrix.length;i++){
//         for(let j=0;j<matrix.length;j++){
//             if(matrix[i][j]<0 && matrix[i][j]%2==0){
//                 cem+=matrix[i][j];
//                 count++;
//             }
//         }
//     }
//     console.log(count,cem);
// });






// task 2
//nxn ölçülü massiv verilir - bu massivi [1..n] * [1..n] massivi adlandıraq. Verilən r və c dəyərlərinə uyğun [1..r] * [1..c] massivini çapa verin (verilən massivin r sayda sətrini və c sayda sütununu).
//4
// 1 2 3 4
// 5 6 7 8
// 9 1 2 3
// 4 5 6 7
// 3 2
// cavab asagidaki kimi olsun:
// 1 2
// 5 6
// 9 1





// 5
// 1 5 -3 2 6
// 6 3 34 5 8
// 10 12 3 18 -25
// 13 22 11 9 45
// 23 39 20 15 -49
// 4 3


//cavab asagidaki kimi cixsin:
//1 5 -3
// 6 3 34
// 10 12 3
// 13 22 11






// const { Ask } = require('asfk');

// Ask(["", "","",""]).then(([n,r,c,arr]) => {
//     n = parseInt(n);
//     r=parseInt(r);
//     c=parseInt(c);
//     arr = arr.split(" ").map(Number);
//     let matrix = [];
//     for (let i = 0; i < n; i++) {
//        matrix.push(arr.splice(0,n));
//     };
//     for(let i=0;i<r;i++){
//         let matrix2=[];
//         for(let j=0;j<c;j++){
//             matrix2.push(matrix[i][j]);
//         }
//         console.log(matrix2.join(" "));
//     }
// });





// Task 3
//n * m ölçülü ikiölçülü masiv görüşmedir. Minimal elementin olduğu sətirləri tapın.
//4
//5
// 2 5 3 1 4
// 3 5 2 3 4
// 4 6 1 2 3
// 4 5 6 7 7
// cavab cixsin 1 3


// const { Ask } = require("asfk");
// Ask(["Setirlerin sayini daxil edin:", "Sutunlarin sayini daxil edin:", "Ededleri daxil edin:"]).then(([n, m, arr]) => {
//     n = parseInt(n);
//     m = parseInt(m);
//     arr = arr.split(" ").map(Number);
//     let matrix = [];
//     for (let i = 0; i < n; i++) {
//         matrix.push(arr.splice(0, m));
//     }
//     let min = matrix[0][0];
//     for (let i = 0; i < matrix.length; i++) {
//         for (let j = 0; j < matrix[i].length; j++) {
//             if (matrix[i][j] < min) {
//                 min = matrix[i][j];
//             }
//         }
//     }
//     for (let a = 0; a < n; a++) {
//         for (let b = 0; b < m; b++) {
//             if (matrix[a][b] == min) {
//                 console.log(a + 1);
//                 break;
//             }
//         }
//     }
// });






// Task 4
//Print the chessboard
// You are given a chessboard of size n * n. It is filled with numbers from 1 to n2 in the following way: the first ceil(n2 / 2) numbers from 1 to ceil(n2 / 2) are written in the cells with even sum of coordinates from left to right from top to bottom. The rest n2 - ceil(n2 / 2) numbers from ceil(n2 / 2) + 1 to n**2 are written in the cells with odd sum of coordinates from left to right from top to bottom. The operation ceil(x / y) means division x by y rounded up.
// 5
// 1 14  2 15  3
// 16  4 17  5 18
//  6 19  7 20  8
// 21  9 22 10 23
// 11 24 12 25 13




// 6
// 1 19  2 20  3 21
// 22  4 23  5 24  6
//  7 25  8 26  9 27
// 28 10 29 11 30 12
// 13 31 14 32 15 33
// 34 16 35 17 36 18



// const { Ask } = require("asfk");
// Ask([""]).then(([n]) => {
//     n = parseInt(n);
//     let matrix = [];

//     for (let k = 0; k < n; k++) {
//         matrix.push(Array(n).fill(0));
//     }

// matrixi 0 la doldurmag ucun basga yol:
// let matrix =[];
// for(let i=0;i<n;i++){
//     let arr=[];
//     for(let j=0;j<n;j++){
//         arr.push(0);
//     }
//     matrix.push(arr);
// }


//     let white = 1;
//     let black = Math.ceil(n*n / 2) + 1;
//     for(let i= 0; i<matrix.length; i++){
//         for(let j=0; j<matrix[i].length; j++){
//             if ((i+j) % 2 == 0) {
//                 matrix[i][j] = white;
//                 white++;
//             }else{
//                 matrix[i][j] = black;
//                 black++;
//             }
//         }
//     };

//     for (const setir of matrix) {
//         console.log(...setir);
//     }
// });
