export const compose = (...fs) => {
    return (...args) => { 
        return fs.reduce((acc, fn) => fn(acc), args)
    }
}
export const log = (...args) => console.log(...args);



export function sayHi(user) {
    console.log(`Hello, ${user}!`);
  }



  export let admin = {
    name: "John"
  };