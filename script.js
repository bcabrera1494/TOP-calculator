function add(a, b) {
    return a + b;
};

function subtract(a, b) {
    return a - b;
};

function multiply(a, b) {
    return a * b;
};

function divide(a, b) {
    return a / b;
};

let num1 = Number;
let num2 = Number;
let op = '';

function operate(operator, a, b) {
    if (operator = '+') {
        return add(a, b);
    };
    if (operator = '-') {
        return subtract(a, b);
    };
    if (operator = '*') {
        return multiply(a, b);
    };
    if (operator = '/') {
        return divide(a, b);
    };
};

function btnClick(button) {
    // click button event listener
    let button = document.querySelectorAll('button');
    let btnContent = btn.textContent;
    button.addEventListener('click', (e) => {
        console.log(hey);
        // store display in variable
        let disp = document.querySelector('.display');
        // change display text content to button text content
        // store display value in a variable
    });
    // store button in variable
    // show number on display
};

