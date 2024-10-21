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

function percent(a) {
    return a / 100;
};

function posNeg(a) {
    if (a > 0) {
        return -a
    };
    if (a < 0) {
        return (a * -1);
    }
    if (a === 0) {
        return 0;
    };
};

let num1 = '';
let num2 = '';
let num3 = '';
let op = '';

function operate(operator, a, b) {
    if (op === '+') {
        return add(a, b);
    };
    if (op === '-') {
        return subtract(a, b);
    };
    if (op === 'x') {
        return multiply(a, b);
    };
    if (op === '/') {
        return divide(a, b);
    };
    if (input.operator === '%') {
        return percent(a);
    };
    if (input.operator === '+/-') {
        return posNeg(a);
    };
};
// declare empty object
const input = {
    num1: '',
    operator: '',
    num2: '',
    num3: '',
    operator2: '',
};

let buttons = document.querySelectorAll('button');
const display = document.querySelector('.display');

// Event listener to add keyboard input * not yet functional, honestly just copied off of an example calculator from another student 
// window.addEventListener("keydown", () => {
// const key = document.querySelector('button');
// key.click();
// });

buttons.forEach(button => {
    button.addEventListener('mousedown', (event) => { // MOUSEDOWN triggers code to update the calculator displayText. 
        const target = event.target;
        switch (target.className) {
            case 'opsa':
                if (target.textContent == '.' && display.textContent.includes('.') === false) {
                    display.textContent = display.textContent.concat(button.textContent);
                    break;
                }
                else if (target.textContent == '.' && display.textContent.includes('.') === true) {
                    alert('Only one decimal point sista Mary.');
                    break;
                }
            case 'ops':
                if (display.textContent[display.textContent.length - 1] === '+'
                    || display.textContent[display.textContent.length - 1] === '-'
                    || display.textContent[display.textContent.length - 1] === 'x'
                    || display.textContent[display.textContent.length - 1] === '/'
                ) {
                    display.textContent = '0';
                    alert('Too many operators pls chill and try again.');
                    input.num1 = '';
                    input.num2 = '';
                    input.operator = '';
                    input.num3 = '';
                    break;
                }
                if (target.textContent === '+/-'
                    || target.textContent === '%') {
                    break;
                }
                else {
                    display.textContent = display.textContent.concat(button.textContent);
                    break;
                }
            case 'clear':
                if (target.id === 'backspace' && display.textContent.length > 1) {
                    display.textContent = display.textContent.slice(0, -1);
                }
                else if (target.id === 'backspace' && display.textContent.length === 1) {
                    display.textContent = '0';
                } else {
                    display.textContent = '0';
                    input.num1 = '';
                    input.num2 = '';
                    input.operator = '';
                    input.operator2 = '';
                    input.num3 = '';
                }
                break;
            case 'num':
                // If the current display value is 0 or 0.00, do the original method to splice the 0 off the beginning
                if (display.textContent === '0' || display.textContent === '0.00') {
                    let btnText = button.textContent;
                    let zeroIndex = display.textContent.indexOf('0');
                    display.textContent = display.textContent.concat(btnText);
                    display.textContent = display.textContent.slice(zeroIndex + 1)
                } else {
                    display.textContent = display.textContent.concat(button.textContent);
                };
                // Else, just append the current number to the existing display
                break;
        };

    });
});

let opButtons = document.querySelectorAll('.ops');
opButtons.forEach(opButton => { // OPERATIONS buttons trigger assignment of the operator symbol to input.operator and input.operator2
    opButton.addEventListener('mouseup', (event) => {
        const target = event.target;

        switch (target.textContent) {
            case '+':
                if (input.operator !== "" && input.operator2 !== "") {
                    break;
                };
                if (input.operator !== "" && input.operator2 === "") {
                    input.operator2 = '+';
                    break;
                }
                else {
                    input.operator = '+';
                    input.operator2 = '';
                };
                break;
            case '-':
                if (input.operator !== "" && input.operator2 !== "") {
                    break;
                };
                if (input.operator !== "" && input.operator2 === "") {
                    input.operator2 = '-';
                    break;
                }
                else {
                    input.operator = '-';
                    input.operator2 = '';
                };
                break;
            case 'x':
                if (input.operator !== "" && input.operator2 !== "") {
                    break;
                };
                if (input.operator !== "" && input.operator2 === "") {
                    input.operator2 = 'x';
                    break;
                } else {
                    input.operator = 'x';
                    input.operator2 = '';
                };
                break;
            case '/':
                if (input.operator !== "" && input.operator2 !== "") {
                    break;
                };
                if (input.operator !== "" && input.operator2 === ""){
                    input.operator2 = '/';
                    break;
                } else {
                    input.operator = '/'
                    input.operator2 = '';
                };
                break;
        };
        console.log(input);

    });
});

let numButtons = document.querySelectorAll('.num');
numButtons.forEach(numButton => { // NUMBER buttons trigger assignment of input.num1, input.num2, input.num3;
    numButton.addEventListener('mouseup', (event) => {
        // declare display array 
        let displayArr = Array.from(display.textContent);
        // If there is no operator
        if (input.operator === "") {
            input.num1 = displayArr.join('');
            input.num2 = '';
            input.num3 = '';
        }
        // If there is 1 operator
        else if (input.operator !== "" && input.operator2 === "") {
            input.num1 = displayArr.slice(0, displayArr.indexOf(input.operator)).join('');
            input.num2 = displayArr.slice(displayArr.indexOf(input.operator) + 1).join('');
        }
        // If there are 2 operators
        else if (input.operator !== "" && input.operator2 !== "") {
            input.num1 = displayArr.slice(0, displayArr.indexOf(input.operator)).join('');
            input.num2 = displayArr.slice(displayArr.indexOf(input.operator) + 1, displayArr.lastIndexOf(input.operator2)).join('');
            input.num3 = displayArr.slice(displayArr.lastIndexOf(input.operator2) + 1).join('');
        };

    })
})

let equals = document.getElementById('equals'); // EQUALS references num1, num2, num3 and op from input object, then calls operate() and updates the answer display as well as the input object
equals.addEventListener('click', () => {
    // declare an array from display.textContent
    let displayArr = Array.from(display.textContent);

    if (input.operator === "") { // Error instance
        return display.textContent = "ERROR"
    };

    // if input.operator2 === "" , only use num1, num2, and operator
    if (input.operator2 === "") {
        op = input.operator;
        num1 = Number(input.num1);
        num2 = Number(input.num2);
        let answer = operate(op, num1, num2);
        if (op === '/' && num2 === 0) { // Error instance if user tries to divide by 0
            return display.textContent = "ERROR";
        }
        else {
            display.textContent = answer.toFixed(2);
            input.num1 = answer;
            input.num2 = '';
            input.operator = '';
            input.operator2 = '';
        };
    };
    // if input.operator2 !== "" && input.num3 !== "", operate on 1st pair, then operate using answer and num3
    if (input.operator2 !== "") {
        op = input.operator;
        num1 = Number(input.num1);
        num2 = Number(input.num2);
        let answer1 = operate(op, num1, num2);
        if (op === '/' && num2 === 0) { // Error instance
            return display.textContent = "ERROR";
        }
        else {
            op = input.operator2;
            num3 = Number(input.num3);
            let finalAnswer = operate(op, answer1, num3);
            if (op === '/' && num3 === 0) {
                return display.textContent = "ERROR";
            } else {
                input.num1 = finalAnswer;
                input.num2 = '';
                input.num3 = '';
                input.operator = '';
                input.operator2 = '';
                return display.textContent = finalAnswer.toFixed(2);
            };
        };
    };
    // if input.operator 2 !== "" && input.num3 == "", break;
    if (input.operator2 !== "" && input.num3 === "") {
        console.log('break')
        return;
    }
    // if input.operator === "" 
    if (input.operator === "") {
        return;
    }

});
let signChange = document.getElementById('posneg'); // Click event listener for +/-

signChange.addEventListener('click', (event) => {
    input.num1 = display.textContent;
    input.operator = '+/-';
    num1 = input.num1;
    op = input.operator;
    let answer = operate(op, num1);
    console.log(input);
    console.log(answer);
    display.textContent = answer;
    input.operator = '';
    input.num1 = display.textContent;
});

let percentBtn = document.getElementById('percent'); // Click event listener for %

percentBtn.addEventListener('click', (event) => {
    input.num1 = display.textContent;
    input.operator = '%';
    num1 = input.num1;
    op = input.operator;
    let answer = operate(op, num1);
    console.log(input);
    console.log(answer);
    display.textContent = answer.toFixed(2);
    input.operator = '';
    input.num1 = display.textContent;
});

// Evaluate only 1 pair of numbers at a time
// Could trigger an addition of new keyed items to the input and assign a num3, op2, num4?
// Bugs with +/- 
//operation/expression after this button is pressed is incorrectly assigned to input and the display
//+/- should function like the "clear" buttons if pressed w/o a number in the display
// Add keyboard support
