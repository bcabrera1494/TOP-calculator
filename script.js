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

buttons.forEach(button => {
    button.addEventListener('click', () => {

        if (button.className == 'opsa') {
            console.log('I am just here for decoration');
        } else {

            const display = document.querySelector('.display');
            const btnText = button.textContent;
            display.textContent = btnText;
            let displayText = display.textContent;
            // store the first number input into the calculator into the object[0]
            // store the operator input into the calculator into the array [1]
            // store the 2nd number input into the calculator[2]
            input.push(btnText);
            console.log(input);
        };

        // iterate through the array to get the elements into a variable
        // declare an empty variable
                let num1 = '';
                let operator = '';
                let num2 = '';

        // transfer the array elements to the variable
        input.map(item => {})

            // transform the array elements into numbers instead of strings
            // have the variable perform the correct operation
            // return the solution
            // update the display to the solution

    });
});


