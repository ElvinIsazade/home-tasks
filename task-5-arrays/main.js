//Arrays Extra
//Task 1
//N sayda tam ədədlərdən ibarət massivdəki müxtəlif elementlərin sayını tapmaq lazımdır.
// 3 5 -7 7 5 -9 -4
// 6
// let input = prompt("Ededleri daxil edin:");
// let arr = input.split(" ").map(Number);
// let count = 0;
// let newArr = [];
// for (let i = 0; i < arr.length; i++) {
//     if (!newArr.includes(arr[i])) {
//         newArr.push(arr[i]);
//         count++;
//     }
// }
// console.log(count);





// const { Ask } = require('asfk');

// Ask(["", ""]).then(([n, arr]) => {
//     n = parseInt(n);
//     arr = arr.split(" ").map(Number);
//     let arr1=[];
//     for(let i=0;i<arr.length;i++){
//         if(!arr1.includes(arr[i])){
//             arr1.push(arr[i]);
//         }
//     }
//     console.log(arr1.length);
// });





// Task 2
// n tamsayı dizisi verilir. Dizideki maksimum öğenin değerini ve dizinini bulun. İndeksleme 1'den başlar. Çok sayıda maksimum eleman varsa, ilkinin indeksini yazdırın.
// 3 5 -7 7 5 -9 -4
//7 4
// let input = prompt("Ededleri daxil edin:");
// let arr = input.split(" ").map(Number);
// let max = arr[0];
// let index;
// for (let i = 0; i < arr.length; i++) {
//     if (arr[i] > max) {
//         max = arr[i];
//         index = i;
//     }
// }
// console.log(max, index + 1);




// const { Ask } = require('asfk');

// Ask(["", ""]).then(([n, arr]) => {
//     n = parseInt(n);
//     arr = arr.split(" ").map(Number);
//     let max=arr[0];
//     let index;
//     for(let i=0;i<arr.length;i++){
//         if(arr[i]>max){
//             max=arr[i];
//             index=i;
//         }
//     }
//     console.log(max,index+1);
// });





// Task 3
//n sayda tam ədəddən ibarət massiv verilir. Cüt indeksleri elementleri tapın. İndeksləmə 0 -dan başlayır.
//14 16 3 7 17 19 9
//14 3 17 9



// let input = prompt("Ededleri daxil edin:");
// let arr = input.split(" ").map(Number);
// let newArr = [];
// for (let i = 0; i < arr.length; i++) {
//     if (i % 2 == 0) {
//         newArr.push(arr[i]);
//     }
// }
// console.log(...newArr);





// const { Ask } = require('asfk');

// Ask(["", ""]).then(([n, arr]) => {
//     n = parseInt(n);
//     arr = arr.split(" ").map(Number);
//     let arr1=[];
//     for(let i=0;i<arr.length;i++){
//         if(i%2==0){
//             arr1.push(arr[i]);
//         }
//     }
//     console.log(arr1);
// });




// Task 4
//Tam ədədlərdən ibarət massiv verilir. Bu massivin özündən bir əvəlki elementdən böyük olan elementlərini tapın.
// 14 16 3 7 17 19 9
//16 7 17 19

// let input = prompt("Ededleri daxil edin:");
// let arr = input.split(" ").map(Number);
// let newArr = [];
// for (let i = 0; i < arr.length; i++) {
//     if (arr[i] < arr[i + 1]) {
//         newArr.push(arr[i + 1]);
//     }
// }
// console.log(newArr);





// const { Ask } = require('asfk');

// Ask(["", ""]).then(([n, arr]) => {
//     n = parseInt(n);
//     arr = arr.split(" ").map(Number);
//     let arr1=[];
//     for(let i=0;i<arr.length;i++){
//         if(arr[i]<arr[i+1]){
//             arr1.push(arr[i+1]);
//         }
//     }
//     console.log(arr1);
// });





// Task 6
// n sayda tam ədədlərdən ibarət massiv verilir. Bu massivdə ilk ən kiçik elementi tapıb birinci elementlə yerlərini dəyişin. Digər elementləri olduğu kimi saxlayın.
//6 -3 5 -5 -4 7 -5
//-5 -3 5 6 -4 7 -5



// let input = prompt("Ededleri daxil edin:");
// let arr = input.split(" ").map(Number);
// let min = arr[0];
// let index;
// for (let i = 0; i < arr.length; i++) {
//     if (arr[i] < min) {
//         min = arr[i];
//         index = i;
//     }
// }
// let temp = arr[0];
// arr[0] = arr[index];
// arr[index] = temp;
// console.log(arr.join(" "));








// const { Ask } = require('asfk');

// Ask(["", ""]).then(([n, arr]) => {
//     n = parseInt(n);
//     arr = arr.split(" ").map(Number);
//     let min=arr[0];
//     let index;
//     for(let i=1;i<arr.length;i++){
//         if(arr[i]<min){
//             min=arr[i];
//             index=i;
//         }
//     }
//     let temp=arr[0];
//     arr[0]=arr[index];
//     arr[index]=temp;

//     console.log(arr);
// });



