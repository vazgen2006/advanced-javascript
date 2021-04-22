class Observer {
    constructor(){
        this.subscribers = new Map();
        this.subId = 0;
    }
    subscribe(func){
        this.subscribers.set(this.subId++, func);
    }
    emitAll(time){
        this.subscribers.forEach(func => {
            func(isNaN(time) ? 1000 : time)
        })
    }
}
class Circle {
    constructor(observer){
        const parentElement = document.querySelector(".circle-wrapper")

        const element = document.createElement("div")
        element.className = "circle"

        observer.subscribe((time) => {
            element.classList.add("animate-circle")
            setTimeout(() => {
                element.classList.remove("animate-circle")
            }, time)
        })

        
        parentElement.append(element)
    }
}
const observer = new Observer();

new Circle(observer)
new Circle(observer)
new Circle(observer)
new Circle(observer)
new Circle(observer)

const emitBtn = document.querySelector(".emit-btn")
emitBtn.addEventListener('click', () => {
    const time = +prompt()
    observer.emitAll(time)
})






// const funcsArray = [
//     (time) => {
//         setTimeout(() => {
//             console.log(time)
//         }, time)
//     },
//     (time) => {
//         setTimeout(() => {
//             console.log(time)
//         }, time)
//     },
//     (time) => {
//         setTimeout(() => {
//             console.log(time)
//         }, time)
//     },
//     (time) => {
//         setTimeout(() => {
//             console.log(time)
//         }, time)
//     }

// ] 
// for(let i = 0; i< funcsArray.length;i++) {
//     funcsArray[i](4000)
// }


























