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
// declare empty object
const input = {
    num1: '',
    operator: '',
    num2: '',
};

let buttons = document.querySelectorAll('button');
const display = document.querySelector('.display');

buttons.forEach(button => {
    button.addEventListener('click', (event) => {
        // Write switch case logic to replace if...else... logic. Improve readability of code. 
        // Declare case value to be the button.className
        const target = event.target;

        switch (target.className) {
            case 'opsa':
                console.log('I am just here for decoration');
                break;
            case 'ops':
                input.operator = button.textContent;
                display.textContent = display.textContent.concat(button.textContent)
                console.log(input);
                break;
            case 'clear':
                display.textContent = '';
                input.num1 = '';
                input.num2 = '';
                input.operator = '';
                console.log(input);
                break;
            case 'num':
                input.num1 = display.textContent.concat(button.textContent);
                let displayText = display.textContent;
                display.textContent = '';
                let btnText = button.textContent;
                display.textContent = displayText.concat(btnText);

                console.log(displayText.concat(btnText));
                console.log(input);
                break;
        };


        // BELOW IS THE PSEUDOCODE FOR STEPS TO STORE THE OPERANDS AND OPERATOR INTO VARIABLES
        // store the num1, operator, and num2 into variables
        // a = input.num1
        // b = input.num2
        // o = input.operator

        // access the variables to perform the correct operation
        // return the solution
        // update the display to the solution

    });
});


