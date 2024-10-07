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
    // click button
    let btn = document.querySelector('button');
    let btnContent = btn.textContent;
    btn.addEventListener(click => {
        let disp = document.querySelector('.display');
        disp.textContent = btnContent.toString();
    });
    // store button in variable
    // show number on display
};