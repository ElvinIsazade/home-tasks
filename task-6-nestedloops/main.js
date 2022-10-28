// Nested loops Task 1
//1   *
//3    ***
//     ***
//     ***



// let input = Number(prompt("Ededi daxil edin:"));
// let star = "";
// for (let i = 0; i < input; i++) {
//     for (let j = 0; j < input; j++) {
//         star += "*";
//     }
//     star += "\n";
// }
// console.log(star);





// const { Ask } = require('asfk');

// Ask(["", ""]).then(([n, arr]) => {
//     n = parseInt(n);
//     arr = arr.split(" ").map(Number);
//     let star="";
//     for(let i=0;i<n;i++){
//         for(let j=0;j<n;j++){
//             star+="*";
//         }
//         star+="\n";
//     }
//     console.log(star);
// });








// task 2
//5
//*
//**
//***
//****
//*****



// let input = Number(prompt("Eded daxil edin:"));
// let star = "";
// for (let i = 0; i < input; i++) {
//     for (let j = 0; j <= i; j++) {
//         star += "*";
//     }
//     star += "\n";
// }
// console.log(star);







// const { Ask } = require('asfk');

// Ask(["", ""]).then(([n, arr]) => {
//     n = parseInt(n);
//     arr = arr.split(" ").map(Number);
//     for(let i=1;i<=n;i++){
//         let newArr=[];
//         for(let j=1;j<=i;j++){
//             newArr.push("*");
//         }
//         console.log(newArr.join(" "));
//     }
// });








// Task 3
// n × n dizisini şu şekilde dolduran bir program yazın: ikincil köşegen sıfır içerir, üstündeki tüm hücreler ikişer içerir ve altındaki tüm hücreler bir içerir.
// Köməkçi dioqonalda yerləşən elementləri 0-lar, köməkçi dioqonaldan yuxarıda yerləşən elementləri 2-lər, köməkçi dioqonaldan aşağıda yerləşən elementləri 1-lər olan nxn ölçülü matrix yaratmalısınız:
// Input example 1
// 3
// Output example 1
// 220
// 201
// 011
// Input example 2
// 5
// Output example 2
// 22220
// 22201
// 22011
// 20111
// 01111






// let input = Number(prompt("Eded daxil edin:"));
// let matrix = [];
// for (let i = 0; i < input; i++) {
//     matrix.push(new Array(input).fill(0));
// }
// for (let i = 0; i < matrix.length; i++) {
//     for (let j = 0; j < matrix.length; j++) {
//         if (i + j > input - 1) {
//             matrix[i][j] = 1;
//         } else if (i + j < input - 1) {
//             matrix[i][j] = 2;
//         }
//     }
// }
// her bir elementini cixarmaq ucun:
// for(let i=0;i<matrix.length;i++){
//     for(let j=0;j<matrix[i].length;j++){
//         console.log(matrix[i][j]);
//     }
// }

// ve yaxud

// for(let element of matrix){
//     console.log(element.join(" "));
// }


// for(let i=0;i<matrix.length;i++){
//     console.log(matrix[i].join(" "));
// }








// 0 la doldurmaq
// const { Ask } = require('asfk');

// Ask([""]).then(([n]) => {

//     n = parseInt(n);
//     let matrix = [];
//     for (let i = 0; i < n; i++) {
//         matrix.push(new Array(n).fill(0));
//     }
//         for(let i=0;i<n;i++){
//             for(let j=0;j<n;j++){
//                 if(i+j==0){
//                     matrix[i][j]=0;
//                 }else if(i+j<n-1){
//                     matrix[i][j]=2
//                 }else{
//                     matrix[i][j]=1
//                 }
//             }
//         }
//         for(setir of matrix){
//             console.log(...setir);
//         }

// });








// Task 4
// Elementləri 0-dan başlayaraq artan ardıcıllıqla ilanvari şəkildə n × m ölçülü matrix yaradılmalı daha sonra isə x sətirində və y sütünunda yerləşən elementi çap etməlisiniz.
// Input example 1
// n=3 m=4 x=3 y=3
// Output example 1
// 10
// 3x4 ölüçü ilanvari matrix bu formada olmalıdır:
// 0 1  2  3
// 7 6  5  4
// 8 9 10 11
// x və y isə 3-cü sətir 3-cü sütünda yerləşən elementin indeksləridir. Biz kodda indeksləməni 0-dan başladırıq amma burada riyazi olaraq verildiyi üçün indeklər siz verilən x və y indekslərindən 1 çıxmaqla düzgün şəkildə tapa bilərsiniz.
// -----------------------------------------------------
// Input example 2
// n=5 m=2 x=3 y=1
// Output example 1
// 4
// 5x2 ölüçü ilanvari matrix bu formada olmalıdır:
// 0 1
// 3 2
// 4 5
// 7 6
// 8 9 





// let n = Number(prompt("1 ci ededi daxil edin:"));
// let m = Number(prompt("2 ci ededi daxil edin:"));
// let x = Number(prompt("3 ci ededi daxil edin:"));
// let y = Number(prompt("4 ci ededi daxil edin:"));


// let matrix = [];
// for (let i = 0; i < n; i++) {
//     matrix.push(new Array(m).fill(0));
// }
// let element = 0;
// for (let i = 0; i < n; i++) {

//     if (i % 2 == 0) {
//         for (let j = 0; j < m; j++) {
//             matrix[i][j] = element;
//             element++;
//         }
//     } else {
//         for (let j = m - 1; j > -1; j--) {
//             matrix[i][j] = element;
//             element++;
//         }
//     }
// }
// console.log(matrix[x - 1][y - 1]);






// const { Ask } = require("asfk");
// Ask(["", "", "", ""]).then(([n, m, r,c]) => {
//     n = parseInt(n);
//     m = parseInt(m);
//     r = parseInt(r);
//     c = parseInt(c);

//     let matrix = [];
//     for (let i = 0; i < n; i++) {
//         matrix.push(Array(m).fill(0));
//     };

//     let element = 0;

//     for (let i = 0; i < n; i++) {
//         if (i % 2 == 0) {
//             for (let j = 0; j < m; j++) {
//                 matrix[i][j] = element;
//                 element++;
//             };
//         } else {
//             for (let j = m - 1; j > -1; j--) {
//                 matrix[i][j] = element;
//                 element++;
//             };
//         };
//     };

//     console.log(matrix[r-1][c-1]);
// });