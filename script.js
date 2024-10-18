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
    num3: '',
};

let buttons = document.querySelectorAll('button');
const display = document.querySelector('.display');

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
                if (display.textContent.includes('+') === true && input.num2 === ""
                    || display.textContent.includes('-') === true && input.num2 === ""
                    || display.textContent.includes('x') === true && input.num2 === ""
                    || display.textContent.includes('/') === true
                    || display.textContent.includes('%') === true
                    || target.textContent === '+/-'
                    || display.textContent.includes('.') === true && input.operator !== button.textContent && display.textContent.includes(button.textContent) === true) {
                    break;
                }
                else {display.textContent = display.textContent.concat(button.textContent) };
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
                // If the display text DOES have an operator, assign input.operator2
                if (display.textContent.includes('+') === true
                    || display.textContent.includes('-') === true
                    || display.textContent.includes('*') === true
                    || display.textContent.includes('/') === true) {
                        input.operator2 = button.textContent; // Assigns the last pressed ops button to input.operator2
                    } else {
                    // If the display text does not have an operator, assign input.operator
                    input.operator = button.textContent;
                        let displayArray = displayText.split(`${input.operator}`); // turn the displayText into an array split by the operator
                        input.num1 = displayArray[0];
                        input.num2 = displayArray[1];
                        console.log(displayArray);
                        console.log(input);
                    };
                // let btnText = target.textContent;
                // input.operator = btnText;
                // let displayArr = display.textContent.split(`${btnText}`);
                // input.num1 = displayArr[0];
                // console.log(displayArr);
                // console.log(input);
                // if (btnText = '+/-') {break};
                // let displayTextEnd = display.textContent.charAt(display.textContent.length - 1);
                // if ((displayTextEnd !== '+' && input.operator2 === '') // This series of statements deal with if the last character of the display string is an operator
                //     || (displayTextEnd !== '-' && input.operator2 === '')
                //     || (displayTextEnd !== 'x' && input.operator2 === '')
                //     || (displayTextEnd !== '/' && input.operator2 === '')
                // ) {
                //     let displayText = display.textContent;
                //     if (input.num2 !== "") { // If the input.num2 is DECLARED
                //         input.operator = button.textContent; // assign input.operator 
                //         let displayArray = displayText.split(`${input.operator}`); // turn the displayText into an array split by the operator
                //         input.num1 = displayArray[0]; // assign input.num1
                //         input.num2 = displayArray[1]; // assign input.num2
                        
                //         console.log(displayArray);
                //         console.log(input);
                //     }
                // }
                
            case 'num':
                let displayText = display.textContent;
                if (displayText.includes('+') === true) {
                    let plusIndex = displayText.indexOf('+');
                    input.num2 = displayText.slice(plusIndex + 1);
                    console.log(input);
                };
                if (displayText.includes('-') === true) {
                    let minusIndex = displayText.indexOf('-');
                    input.num2 = displayText.slice(minusIndex + 1);
                    console.log(input);
                };
                if (displayText.includes('x') === true) {
                    let xIndex = displayText.indexOf('x');
                    input.num2 = displayText.slice(xIndex + 1);
                    console.log(input);

                };
                if (displayText.includes('/') === true) {
                    let divideIndex = displayText.indexOf('/');
                    input.num2 = displayText.slice(divideIndex + 1);
                    console.log(input);
                };
                break;

        };

    });
});

let opButtons = document.querySelectorAll('.ops');
opButtons.forEach(opButton => { // OPERATIONS buttons trigger assignment of the operator symbol to input.operator
    opButton.addEventListener('mousedown', (event) => {
        const target = event.target;

        switch (target.textContent) {
            case '+':
                if (input.operator !== "") {
                    break;
                }
                else {
                    input.operator = '+'
                };
                break;
            case '-':
                if (input.operator !== "") {
                    break;
                } else { input.operator = '-' };
                break;
            case 'x':
                if (input.operator !== "") {
                    break;
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
