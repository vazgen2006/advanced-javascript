const buttonHi = document.querySelector(".hi")
buttonHi.addEventListener('click', () => {
    let func = `you are followed in brad pitt`
    button0.innerHTML = func 
    button1.innerHTML = func 
    button2.innerHTML = func 
    button3.innerHTML = func 
    button4.innerHTML = func 
    
})
const div5 = document.createElement(`div`)
const button0 = document.createElement('button');
const button1 = document.createElement('button');
const button2 = document.createElement('button');
const button3 = document.createElement('button');
const button4 = document.createElement('button');

document.body.appendChild(div5);
document.body.appendChild(button0);
document.body.appendChild(button1);
document.body.appendChild(button2);
document.body.appendChild(button3);
document.body.appendChild(button4);

div5.classList.add("div5")
button0.classList.add("hi2")
button1.classList.add("hi2")
button2.classList.add("hi2")
button3.classList.add("hi2")
button4.classList.add("hi2")

button0.innerHTML = `David 24`
button1.innerHTML = ` Bob35` 
button2.innerHTML = `Jin 22` 
button3.innerHTML = `Karo 16` 
button4.innerHTML = `Jor 11` 

div5.append(button0)
div5.append(button1)
div5.append(button2)
div5.append(button3)
div5.append(button4)

