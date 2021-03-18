// Problem: 1
// const map = (fn, arr) => {
//     const newArr = [];
//     for(let el of arr){
//         newArr.push(fn(el))
//     }
//     return newArr;
// }
// const myArr = [2, 6, 7, 1]
// const newArr = map(square, myArr)
// console.log(newArr)


        //function partial(fn, ...fixArgs){
      //return function(...args){
    //    return fn(...fixArgs, ...args)
  //  }
//}


// problem 2

// function square(x) {
//   return x * x;
// }
// function add(a, b) {
//  return a + b;
// }
// function flap(add, square){
//    console.log(add, square)
// }
//  flap(add(9, 3),square(add(9,3)))

// function pluck(arr, key) {
//   let newarr = [];
//   for(let i = 0; i < arr.length; i++) {
//          for(let keys of Object.keys(arr[i])){
//                  if(key === keys) {
//                       newarr.push(arr[i][key])
//                   }
//           }
//   }
//   return newarr;
//   }
//   let characters11111 = [
//     { 'name': 'barney', 'age': 36 },
//     { 'name': 'fred', 'age': 40 }
//   ];