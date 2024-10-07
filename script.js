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

let buttons = document.querySelectorAll('button');

buttons.forEach(button => {
    button.addEventListener('click', () => {
        if (button.className == 'ops' || button.className == 'opsa') {
            console.log('hey');
            } else {
                const display = document.querySelector('.display');
                const btnText = button.textContent;
                display.textContent = btnText;
                let displayText = display.textContent;
            }

    });
});