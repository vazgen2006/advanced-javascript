// class Stack {
//   constructor() {
//     this.stack = [];
//   }
//   push(data) {
//     this.stack.push(data);
//   }
//   pop() {
//     this.stack.pop();
//   }
//   top() {
//     return this.stack[this.stack.length - 1];
//   }
//   size() {
//     return this.stack.length;
//   }
//   isEmpty() {
//     return this.stack.length === 0;
//   }
//   registerFromArray(arr) {
//     this.stack = arr;
//   }
//   registerFromHTMLCollection(collection) {
//     this.stack = Array.from(collection);
//   }
//   unRegister() {
//     this.stack = [];
//   }
// }
// function reverse(arr) {
//   const stack = new Stack();
//   stack.registerFromArray(arr);
//   const reversedArr = [];
//   while (!stack.isEmpty()) {
//     reversedArr.push(stack.top());
//     stack.pop();
//   }
//   return reversedArr;
// }
// const reversedArr = reverse([4, 1, 8, 5, 9]);
// console.log(reversedArr);

// tnayin
// input 45
// stack [1, 0, 1, 1, 0, 1]
// => loop
// 45
// 22 mn(1)
// 11 mn(0)
// 5 mn(1)
// 2 mn(1)
// 1 mn(0)

// stack [1, 0, 1, 1, 0, 1]
// newArr []
// stack [1, 0, 1, 1, 0]
// newArr [1]
// stack [1, 0, 1, 1]
// newArr [1, 0]
// stack [1, 0, 1]
// newArr [1, 0, 1]
// ...
// stack []
// newArr [1, 0, 1, 1, 0, 1]
// join "101101"



///////////////////////////////////////// first problem add delete node////

// class Stack2 {
//   constructor() {
//     this.Stack2 = 0;
//   }
//   push(data) {
//     this.Stack2++
//   }
  
//   pop() {
//     this.Stack2--;
//  }
// }
// const obj = new Stack2()

// const div = document.createElement("div")
// const buttonAdd = document.querySelector(".add")
// const buttonDel = document.querySelector(".del")


// buttonAdd.addEventListener('click', () => {
//   obj.Stack2++;
//   generateDivs(obj.Stack2);
// })

// buttonDel.addEventListener('click', () => {
//   obj.Stack2--;
//   generateDivs(obj.Stack2);
// })

// function generateDivs(count) {
//   document.getElementById('container').innerHTML = "";\
  
//   const cont = document.getElementById('container');
//   for (let i = 0; i < count; i++) {
//       const div  = document.createElement("div");
//       div.innerText = i
//       cont.appendChild(div);
//   }   
// }


// class Stack {
//   constructor() {
//     this.stack = [];
//   }
//   push(data) {
//     this.stack.push(data);
//   }
//   pop() {
//     this.stack.pop();
//   }
//   top() {
//     return this.stack[this.stack.length - 1];
//   }
// }




// let arr = [1,5,3,4,7,8,5]
// newArr = []
// let count = arr.length
// for(let i = 0; i < count; i++){
//   let last = arr.pop() 
//   newArr.push(last)
  

// }
// console.log(newArr)