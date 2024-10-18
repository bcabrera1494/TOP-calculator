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
        return (a*-1);
    }
    if (a === 0) {
        return 0;
    };
};

let num1 = '';
let num2 = '';
let op = '';

function operate(operator, a, b) {
    if (input.operator === '+') {
        return add(a, b);
    };
    if (input.operator === '-') {
        return subtract(a, b);
    };
    if (input.operator === 'x') {
        return multiply(a, b);
    };
    if (input.operator === '/') {
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
    num4: '',
};

let buttons = document.querySelectorAll('button');
const display = document.querySelector('.display');

// Event listener to add keyboard input
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
                   event.stopImmediatePropagation;
                };
            case 'ops':
                display.textContent = display.textContent.concat(button.textContent)
                break;
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
                    input.num3 = '';
                    input.operator2 = '';
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

    button.addEventListener('mouseup', (event) => { // MOUSEUP triggers code to update the input object values for numbers
        let target = event.target;

        switch (target.className) {
            case 'ops':
                break; 
                
            case 'num':
                let displayArr = Array.from(display.textContent);
                console.log(displayArr);
                // Check if the display has operators
                // If the display does not have any operators, assign to num1
                // If the display has one operator, assign num1 and num2
                // If the display has 2 operators, assign num 1, num 2, num 3 operator 1, operator 2
                // If the display has more then 2 operators, clear
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
                }
                if (input.operator !== "" && input.operator2 === "") {
                    input.operator2 = '+';
                    break;
                }
                else {
                    input.operator = '+'
                };
                break;
            case '-':
                if (input.operator !== "" && input.operator2 !== "") {
                    break;
                }
                if (input.operator !== "" && input.operator2 === "") {
                    input.operator2 = '-'
                }
                else { input.operator = '-' };
                break;
            case 'x':
                if (input.operator !== "" && input.operator2 !== "") {
                    break;
                }
                if (input.operator !== "" && input.operator2 === "") {
                    input.operator2 = 'x'
                } else { input.operator = 'x' };
                break;
            case '/':
                if (input.operator !== "") {
                    break;
                } else { input.operator = '/' };
                break;
            case '%':
                if (input.operator !== "") {
                    break;
                } else { input.operator = '%' };
                break;
            case '+/-':
                if (input.operator !== "") {
                    break;
                } else { input.operator = '+/-' };
                break;
        };
console.log(input);

    });
});
let equals = document.getElementById('equals'); // EQUALS button calls operate()
equals.addEventListener('click', () => {
    num1 = Number(input.num1);
    num2 = Number(input.num2);
    op = input.operator;
    let answer = operate(op, num1, num2);
    if (op === '/' && num2 === 0) {
        return display.textContent = "ERROR";
    }
    if (input.operator === "") {
        return display.textContent = "ERROR"
    } else {
        console.log(answer);
        display.textContent = answer.toFixed(2);
    };

});
let signChange = document.getElementById('posneg'); // Click event listener for +/-

signChange.addEventListener('click', (event) => {
    input.num1 = display.textContent;
    input.operator = '+/-'
    num1 = input.num1;
    op = input.operator;
    let answer = operate(op, num1);
    console.log(input);
    console.log(answer);
    display.textContent = answer;
    input.operator = '';
});

// Evaluate only 1 pair of numbers at a time
    // Could trigger an addition of new keyed items to the input and assign a num3, op2, num4? 
// Bugs with +/- 
    //operation/expression after this button is pressed is incorrectly assigned to input and the display
    //+/- should function like the "clear" buttons if pressed w/o a number in the display
// Add keyboard support
