var button = document.querySelector("button");
var input1 = document.querySelector("num1");
var input2 = document.querySelector("num2");
function add(num1, num2) {
    return num1 + num2;
}
console.log(add(+input1.value, +input2.value));
