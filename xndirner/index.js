// // [5, 4, 15, 6, 9]
// // pakasox elementneri zangvac stanal
// const arr = [5, 4, 15, 6, 9];
// arr.sort((a, b) => a - b); // [4, 5, 6, 9, 15, 16, 18]
// const pakasoxElementner = []; // [7, 8, 10, 11, 12, 13, 14, 17]
// for(let i = 1; i < arr.length; i++){
//     if(arr[i] - arr[i - 1] !== 1){
//         for(let j = arr[i - 1] + 1; j < arr[i]; j++ ){
//             pakasoxElementner.push(j)
//         }
//     }
// }

// // gtnel bacakayox elementy
// function f(arr){
//     const lastNumber = arr.length + 1;
//     // [1, n] SUM
//     // n * (n + 1) / 2
//     const normalSum = lastNumber * (lastNumber + 1) / 2;
//     let sum = 0;
//     for(let i = 0; i < arr.length; i++){
//         sum += arr[i] // 1
//     }
//     return normalSum - sum;
//  }
//  function f1(arr){
//      for(let i = 1; i < arr.length; i++){
//          if(arr[i] - arr[i - 1] !== 1){ // 3
//              return arr[i] - 1;
//          }
//      }
//  }
//  // [1, 2, 3, 5, ........... 6999999999999, 7000000000000]
//  // [1, 2, 3, 5, 6]




// const array = [1,2,3,4,5]

// Array.prototype.multiBy = function (n) {
//         return this.map(function (i) {
//             return i * n
//         })
// }

// console.log(array.multiBy(20))