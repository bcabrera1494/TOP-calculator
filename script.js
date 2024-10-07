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
        const target = event.target;
        // display.textContent = ''; -----> Trying to initialize display content here so that the 0 disappears upon click. Not working.
        // let displayText = display.textContent;
        switch (target.className) {
            case 'opsa':
                if (button.textContent == ' . ' && display.textContent.includes(' . ') === false){
                display.textContent = display.textContent.concat(button.textContent);
                input.num1 = display.textContent;
                } else {
                    console.log('I am just here for decoration');
                };
                break;
            case 'ops':
                input.operator = button.textContent;
                display.textContent = display.textContent.concat(button.textContent)
                console.log(input);
                break;
            case 'clear':
                display.textContent = '0';
                input.num1 = '';
                input.num2 = '';
                input.operator = '';
                console.log(input);
                break;
            case 'num':
                let btnText = button.textContent;
                display.textContent = display.textContent.concat(btnText);
                let displayText = display.textContent;
                input.num1 = displayText;
                // conditional logic for operators
                if (displayText.includes(' + ') === true || displayText.includes(' - ') === true || displayText.includes(' x ') === true || displayText.includes(' / ') === true) {
                    // if there is an operator, begin assigning numbers to num2
                    input.num2 = btnText;
                    //call operate(input.operator, num1, num2);
                    
                };

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


