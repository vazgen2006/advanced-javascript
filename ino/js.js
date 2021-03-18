Multiply = document.getElementById("Multiply");
ram = document.getElementById("ram");
Multiply.addEventListener("click", function() {
    let num1 = document.getElementById('inp1').value;
    let num2 = document.getElementById('inp2').value;
    const sum = num1 * num2;
    document.getElementById('sum').innerHTML = sum;
});
ram.addEventListener("click", function() {
    let num1 = document.getElementById('inp1').value;
    let num2 = document.getElementById('inp2').value;
    let sum1 = num1 / num2;
    document.getElementById('sum').innerHTML = sum1;
});