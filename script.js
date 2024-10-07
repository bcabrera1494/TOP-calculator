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
    button.addEventListener('click', () => {

        if (button.className == 'opsa' && button.id !== 'clear') {
            console.log('I am just here for decoration');
        } 
        if (button.className == 'ops') {
            input.operator = button.textContent;
            console.log(input.operator);
        }
        if (button.id == 'clear') {
            display.textContent = '  ';
            input.num1 = '';
            input.num2 = '';
            input.operator = '';
            console.log(input);
        } 
        // BELOW IS EXPERIEMENTAL LOGIC TO APPEND BUTTON TEXT CONTENT TO CREATE MULTI-DIGIT OPERANDS
        // if (button.className == 'num') {
        //     const btnText = button.textContent;
        //     let displayText = display.textContent = '';
        //     input.num1 = displayText.concat(btnText);
        //     display.textContent = input.num1;
        //     console.log(`displayText ${displayText}`);
        //     console.log(`btnText = ${btnText}`);
        //     console.log(input);
        //     // if(input.num1 !== '') {
        //     //     let multiDigit = displayText.concat(btnText);
        //     //     input.num1 = multiDigit;
        //     //     console.log(input);
        //     // };
        // }; 
        
        
        // BELOW IS THE LOGIC THAT WORKS TO STORE SINGLE DIGITS IN THE OBJECT INPUT AND DISPLAY THE DIGIT ON THE CALC DISPLAY
        else {
            const btnText = button.textContent;
            display.textContent = btnText;
            const displayText = display.textContent;
            // add logic to append digits if 2nd button press is not an operator (need it for first and second number inputs)

            // if the button pressed is an operator, assign it to input.operator
            // store the first number input into the calculator into the input.num1
                // need to account for multiple digits
            // store the operator input into the calculator into the input.operator
            // store the 2nd number input into the calculator input.num2
                // need to account for multiple digits
                        // if the button pressed is a number add it to the string of num 1
            input.num1 = displayText;
            console.log(input.num1);
            console.log(input);
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


