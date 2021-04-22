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



// function duplicate(numb) {
//  let   tortoise = numb[0]
//    let  here = numb[0]
//      tortoise = numb[tortoise] 
//     here = numb[numb[here]]
//     if(tortoise == here){
//         break
//     }
    
//   let  prt1 = numb[0]
//    let  prt2 = tortoise
//     ptr1  != ptr2 
//     ptr1  = numb[ptr1]
//     ptr2  = numb[ptr2]
    
//     return ptr1
// }


// duplicate([3,5,3,6,4,8,])




// xndiry pahanjum e miacnel erku zangvacner irar //

    // im tvac lucumy //

// let arr  = [`a`,`b`,`c`]
// let arr2  = [1,2,3]

// arr.push(arr2[0],arr2[1],arr2[2])

    //                  // 

    // let a = ['a', 'b', 'c'];
    // let b = [1, 2, 3];
    
    // //tarberak 1:
    // let c = a.concat(b);
    // console.log(c); //stanum enq -> ['a', 'b', 'c', 1, 2, 3]
    
    // //tarberak 2:
    // let c = b.concat(a);
    // console.log(c); //stanum enq -> [1, 2, 3, 'a', 'b', 'c']    



 // verjin element//
// let  arr = [1,6,7,4,5]
// arr[length - 1 ]


//////////////////////////////////davoi harcazruyci xndir//////////////////////////////////////////


// function g(n){
    
//     return 3 - n  
//  } 
 
//  g(1)





    ////////////////////////////////// drakan-bacasakan//////////////////////////////////

// let arr = [16, -9, 25, -625]


// function isPositive(num) {
// 	if (num >=0) {
// 		return true;
// 	} else {
// 		return false;
// 	}
// }


// let  arr1  = []
// for(let i = 0; i < arr.length; i++){
//     	if (isPositive(arr[i])) {
// 		arr1.push(arr[i]);
// 	}
// }

// function isNumberInRange(num){
//     if(num > 0 && num < 10){
//     return true
// } 
//     else{
//     return false
// }
// }
// let newarr = []
//    let arr = [1,2,35,45,5,6,73,8,95,10]
//     for(let i = 0; i < arr.length; i++){
//         if (isNumberInRange(arr[i])) {
//  		newarr.push(arr[i]);
//  	}
// }

 
/////////////////////////////////////////////////////////////////// SORTS///////////////////

// function bubbleSort(arr){
//     for(let i = 0; i < arr.length - 1; i++){
//         let isSorted = true;
//         for(let j = 0; j < arr.length - i - 1; j++){
//             if(arr[j] > arr[j + 1]){
//                 isSorted = false;
//                 swap(arr, j, j + 1);
//             }
//         }
//         if(isSorted) return arr;
//     }
//     return arr;
// }
// function swap(arr, i, j){
//     let temp = arr[i];
//     arr[i] = arr[j];
//     arr[j] = temp;
// }


///////////////////////////////////////////////////

// function selectionSort(arr){
//     for(let i = 0; i < arr.length; i++){
//         const minValueIndex = minIndex(arr, i)
//         swap(arr, i, minValueIndex)
//     }
//     return arr
// }
// function minIndex(arr, startIndex){
//     //    or this variant
//     //    let minValue = arr[startIndex];
//     //
//     //    for(let i = startIndex + 1; i < arr.length; i++){
//     //        if(arr[i] < minValue){
//     //            minValue = arr[i];
//     //        }
//     //    }
//     //    or this variant
//     const minValue = Math.min(...arr.slice(startIndex))
//     return arr.indexOf(minValue, startIndex)
// }

////////////////////////////////////////////////////////// insershon


// function insertionSort(arr){
//     for(let i = 1; i < arr.length; i++){
//         let el = arr[i];
//         for(let j = 0; j < i; j++){
//             if(arr[j] > el){
//                 for(let l = i; l > j; l--){
//                     arr[l] = arr[l - 1];
//                 }
//                 arr[j] = el;
//                 break;
//             }
//         }
//     }
//     return arr;
// }

/////////////////////////////////////////////////////////////////////////////////////////////


////////////////////////////////////////////////////////////////
                                                                //
                                                                  //      
                                                                    //
                                                                      //              
                                                                     //
                                                                   //             
                                                                  //     
//////////////////////////////////////////////////////////////////
// function mergeSort(array) { 
//     const half = array.length / 2
    
//     if(array.length < 2){
//       return array 
//     }
    
//     const left = array.splice(0, half)
//     const right = array.splice(0, 9)
//     console.log(right)
//     console.log(left)
//     const left_half = left.length / 2
//     const right_half = right.length / 2
//     const spl_left = left.splice(0, left_half)
//     const spl_right = right.splice(0, right_half)
//     const spl_left_half = left.splice(0, 9)
//     const spl_right_half = right.splice(0, 9)
//     console.log(left_half, "1")
//     console.log(right_half, "2")
//     console.log(spl_left, "3")
//     console.log(spl_right, "4" )
//     console.log(spl_left_half, "5" )
//     console.log(spl_right_half, "6" )
//     //1

//     if(spl_left[0] < spl_left[1]){
//         console.log(spl_left)
//     } 

//     //2

//     if(spl_right[0] < spl_right[1]){
//         console.log(spl_left)
//     } 
//     else{
//         let tooArr = []
//         temp2 = spl_left[0];
//         spl_left[0] = spl_left[1];
//         spl_left[1] = temp2;
//         tooArr.push(spl_left) 
        
//     }
    
//     //3

//     if(spl_left_half[0] < spl_left_half[1]){
//         console.log(spl_left_half)
//     } 
//     else{
//         let threeArr = []
//         temp3 = spl_left_half[0];
//         spl_left_half[0] = spl_left_half[1];
//         spl_left_half[1] = temp3;
//         threeArr.push(spl_left_half) 
//         console.log(threeArr)
//     }

//     //4

//     if(spl_right_half[0] < spl_right_half[1]){
//         console.log(spl_right_half)
//     } 
//     else{
//         let fourArr = []
//         temp4 = spl_right_half[0];
//         spl_right_half[0] = spl_right_half[1];
//         spl_right_half[1] = temp4;
//         fourArr.push(spl_right_half) 
//         console.log(fourArr)
//         }
        
        
        
//        let finishArr = []
//         console.log(finishArr)

//     }
  

  
//   mergeSort([4, 8, 7, 2, 11, 1, 3, 13])


//////////////////////////////////////////////////////////////////////////////////////////////////////////

//   function mergeSort(array) {
//     const half = array.length / 2
    
//     if(array.length < 2){
//       return array 
//     }
    
//     const left = array.splice(0, half)
//     const right = array.splice(0, 9)
//     console.log(right)
//     console.log(left)
//     const left_half = left.length / 2
//     const right_half = right.length / 2
//     const spl_left = left.splice(0, left_half)
//     const spl_right = right.splice(0, right_half)
//     const spl_left_half = left.splice(0, 9)
//     const spl_right_half = right.splice(0, 9)
//     console.log(left_half, "1")
//     console.log(right_half, "2")
//     console.log(spl_left, "3")
//     console.log(spl_right, "4" )
//     console.log(spl_left_half, "5" )
//     console.log(spl_right_half, "6" )
//     console.log(spl_left)
    
//     let finishArr = []
//     oneArr =  spl_left
//     tooArr =  spl_right.sort()
//     treeArr = spl_left_half.sort()
//     fourArr = spl_right_half.sort()
//     finishArr.push(tooArr[0],treeArr[0],fourArr[1],oneArr[0],treeArr[1],oneArr[1],tooArr[1],fourArr[0])
    

//         console.log(finishArr)

//     }
  

  
//   mergeSort([4, 8, 7, 2, 11, 1, 3, 13])



///////////////////////////////////////////////



// function mergeSort(array) {
//     if(array.length == 1) {
//         if(array[0] < array[1]) {
//             return array
//         }
//         return [ array[1], array[0] ]
//     }

//     const half = array.length / 2;
//     const left = array.slice(0, half)
//     const right = array.slice(half)

//     const first = mergeSort(left)
//     const second = mergeSort(right)
    
//     return [ ...first, ...second ] 
// }

// mergeSort([4, 8, 7, 2, 11, 1, 3, 13])


/////////////////////////////////////////////////////////////////////////////////
                                                                

// function mergeSort(array) {
//     const half = array.length / 2
    
//     // Base case or terminating case
//     if(array.length < 2){
//       return array 
//     }
    
//     const left = array.splice(0, half)   
//     const leftArr = mergeSort(left);
//     const rightArr = mergeSort(array);

    
//     return merge(leftArr, rightArr)
// }

// function merge(left, right) {
//     let arr = []
//     console.log(left,right)
//     // Break out of loop if any one of the array gets empty
//     while (left.length && right.length) {
//         // Pick the smaller among the smallest element of left and right sub arrays 
//         if (left[0] < right[0]) {
//             arr.push(left.shift())  
//         } else {
//             arr.push(right.shift()) 
//         }
//     }
    
//     // Concatenating the leftover elements
//     // (in case we didn't go through the entire left or right array)

//     return [ ...arr, ...left, ...right ]
// }

//   console.log(mergeSort([ -1,8,56,2,4,5,3,4,7,5,2]));


// function merge(left, right) {
//   let arr = []
//    console.log(left,right)
  
//    while (left.length && right.length) {

//        if (left[0] < right[0]) {
//             arr.push(left.shift())  
//        } else {
//            arr.push(right.shift()) 
//       }
//    }
   
 

//     return [ ...arr, ...left, ...right ]
// }

//  console.log(mergeSort([ -1,8,56,2,4,5,3,4,7,5,2]));

//////////////////////////////////////////////////////////////Search/////////////////////////////////////////////////////////////

///////////////////////////////////////////////////////////////////////////////////////////////////// binarySearch

// function binarySearch(arr, value){
//   let firstIndex = 0;
//   let lastIndex = arr.length - 1;
//   while(firstIndex !== lastIndex){
//       const middle = firstIndex + Math.floor((lastIndex - firstIndex  + 1) / 2);
//       if(arr[middle] === value) return middle;
//       if(value < arr[middle]){
//           lastIndex = middle - 1;
//       } else {
//           firstIndex = middle + 1;
//       }
//    }
//    return firstIndex
// }



////////////////////////////////////////yes or no///////////////////////////////

// function el(number) {

//   let arr = [1,6,7,2,8,9,67,63]

//   for(let i = 0; i < arr.length; i++){

//     if (number === arr[i] ){

//       return number
//     } 
   
//   }
// }
// console.log(el(9))

///////////////////////////////numberOfSteps without function///////////////////////////////////////

// let arr = [13,119,422,266,1333,765,665,149,844,3444,215,155,255,545,562]
// let numberOfSteps = 0;
// let number = 155;
// for(let i = 0; i < arr.length; i++){
//   if(number == arr[i]){
//     numberOfSteps = i 
//   }
// }

// console.log(numberOfSteps)

/////////////////////////////////////////////numberOfSteps using the function///////////////////////////////

// function Search(number) {
//   let arr = [13,119,422,266,1333,765,665,149,844,3444,215,155,255,545,562]
//   let numberOfSteps = 0 
//   for(let i = 0; i < arr.length; i++){
//       if(number == arr[i]){
//         numberOfSteps = i 
//       }
//     } 
//     return numberOfSteps
// }

// console.log(Search(155))