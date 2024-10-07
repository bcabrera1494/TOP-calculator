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
        // declare empty array
        const input = [];
        if (button.className == 'opsa') {
            console.log('I am just here for decoration');
        } else {
            const display = document.querySelector('.display');
            const btnText = button.textContent;
            display.textContent = btnText;
            let displayText = display.textContent;
            // store the first number input into the calculator into the array[0]
            // store the operator input into the calculator into the array [1]
            // store the 2nd number input into the calculator[2]
        }

        // iterate through the array to:
        // declare an empty variable
        // call the 3 elements into the variable in order
        // have the variable perform the correct operation
        // return the solution
        // update the display to the solution
    });
});


