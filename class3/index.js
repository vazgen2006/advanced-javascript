let lastY,
  lastX,
  outsideButton = true;
class Button extends Element {
  constructor({ label, type = "primary" }) {
    super();
    const button = document.createElement("button");
    button.innerText = label;
    // --- adding className
    button.classList.add("btn");
    if (type in this.types) {
      button.classList.add(this.types[type]);
    } else {
      console.error(`The ${type} is not in types`);
    }
    // --- initialize properties
    this.button = button;
    this.label = label;
    this.type = type;
    // --- adding events
    button.addEventListener("mousemove", this.mouseHandler);
    button.addEventListener("mouseleave", this.mouseLeaveHandler);
    button.addEventListener("mouseenter", this.mouseEnterHandler);
  }
  mouseHandler(e) {
    lastY = e.offsetY;
    lastX = e.offsetX;
    e.target.style.setProperty("--x", `${e.offsetX}px`);
    e.target.style.setProperty("--y", `${e.offsetY}px`);
  }
  mouseEnterHandler() {
    outsideButton = false;
  }
  mouseLeaveHandler(e) {
    outsideButton = true;
    const { height, width } = e.target.getBoundingClientRect();
    const centerY = height / 2;
    const centerX = width / 2;
    const diffY = centerY - lastY;
    const diffX = centerX - lastX;
    let i = 0;
    function move() {
      if (i <= 1 && outsideButton) {
        i += 0.01;
        const newI = easeOutExpo(i);
        e.target.style.setProperty("--x", `${lastX + diffX * newI}px`);
        e.target.style.setProperty("--y", `${lastY + diffY * newI}px`);
        window.requestAnimationFrame(move);
      } else {
        // code to be executed when animation finishes
      }
    }
    function easeOutExpo(x) {
      return x === 1 ? 1 : 1 - Math.pow(2, -10 * x); // 0.75
    }
    window.requestAnimationFrame(move);
  }
  getElement() {
    return this.button;
  }
  get types() {
    return {
      brand: "btn-brand",
      primary: "btn-primary",
      tertiary: "btn-tertiary",
      secondary: "btn-secondary",
      promotion: "btn-promotion",
    };
  }
  get sizes() {
    return {
      small: "btn-small",
      middle: "btn-middle",
      large: "btn-large",
    };
  }
}
const ToggleMode = new Button({
  label: "Button",
  type: "promotion",
});
ToggleMode.insertTo(document.body);






// class vs constructor function
// function f() {}
// f.prototype.d = function () {};
// f.prototype.a = function () {};
// new f();
// class F {
//   d() {}
//   a() {}
// }
// new F();
// 1. cannot be invoked without 'new'
// 2. prototype methods flag enumerable false
// 3. "use strict" all body
// ------------- Inheritance
// Form; // --- inp1, inp2, inp3, inp4,
// Input; // --- inp1, inp2, inp3, inp4,
// Element; //
// Button; // --- btn1, btn2, btn3, btn4,
// Image; // --- btn1, btn2, btn3, btn4,
class AB {
    f() {}
  }
  class A extends AB {}
  class B extends AB {}
  