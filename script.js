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
        return -a;
    };
    if (a < 0) {
        return Math.abs(a);
    };
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
};

let buttons = document.querySelectorAll('button');
const display = document.querySelector('.display');

buttons.forEach(button => {
    button.addEventListener('mousedown', (event) => { // MOUSEDOWN triggers code to update the calculator displayText. For +/- it has to call operate().
        const target = event.target;
        switch (target.className) {
            case 'opsa':
                if (target.textContent == '.' && display.textContent.includes('.') === false) {
                    display.textContent = display.textContent.concat(button.textContent);
                };
            case 'ops':
                if (display.textContent.includes('+') === true
                    || display.textContent.includes('-') === true
                    || display.textContent.includes('x') === true
                    || display.textContent.includes('/') === true
                    || display.textContent.includes('%') === true) {
                    break;
                }
                if (target.textContent === '+/-') {
                    if (display.textContent.includes('-' === true)) {
                        input.num1 = display.textContent.slice(-1);
                        input.operator = target.textContent
                        let num1 = input.num1;
                        let op = input.operator;
                        let answer = operate(op, num1);
                        display.textContent = answer;
                    } else {
                        input.num1 = display.textContent;
                        input.operator = target.textContent;
                        let num1 = Number(input.num1);
                        let op = input.operator;
                        let answer = operate(op, num1);
                        display.textContent = answer;
                    };
                    break;
                } else {display.textContent = display.textContent.concat(button.textContent) };
                break;
                // // if (target.textContent === '+/-') {
                // //     if (display.textContent.includes('-' === true)) {
                // //         input.num1 = display.textContent.slice(-1);
                // //         input.operator = target.textContent
                // //         let num1 = input.num1;
                // //         let op = input.operator;
                // //         let answer = operate(op, num1);
                // //         display.textContent = answer;
                // //     } else {
                // //         input.num1 = display.textContent;
                // //         input.operator = target.textContent;
                // //         let num1 = Number(input.num1);
                // //         let op = input.operator;
                // //         let answer = operate(op, num1);
                // //         display.textContent = answer;
                // //     };
                //     break;
                // } 
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
                }
                break;
            case 'num':
                let btnText = button.textContent;
                let zeroIndex = display.textContent.indexOf('0');
                display.textContent = display.textContent.concat(btnText);
                display.textContent = display.textContent.slice(zeroIndex + 1);
                break;
        };

    });

    let opButtons = document.querySelectorAll('.ops');
    opButtons.forEach(opButton => { // OPERATIONS buttons trigger assignment of the operator symbol to input.operator
        opButton.addEventListener('mousedown', (event) => {
            const target = event.target;

            switch (target.textContent) {
                case '+':
                    if (input.operator !== "") {
                        break;
                    } else {
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

    button.addEventListener('mouseup', (event) => { // MOUSEUP triggers code to update the input object values for numbers (and decimals). For inputs that are a negative number where +/- is pressed, it will call operate()
        let target = event.target;
        let displayText = '';

        switch (target.className) {
            case 'ops':
                let btnText = target.textContent;
                let opsIndex = display.textContent.indexOf(btnText);
                input.num1 = display.textContent.slice(1, opsIndex);
                let displayTextEnd = display.textContent.charAt(display.textContent.length - 1);
                if (displayTextEnd !== '+'
                    || displayTextEnd !== '-' 
                    || displayTextEnd !== 'x'
                    || displayTextEnd !== '/'
                ) {
                    if (display.textContent[0] === '-' && target.textContent == '+/-'){
                        input.num1 = display.textContent;
                        input.ops = '+/-'
                        num1 = input.num1;
                        op = input.ops;
                        let answer = operate(op, num1);
                        display.textContent = answer;
                        break;
                    };
                    let displayText = display.textContent;
                    input.num1 = displayText.slice(0, opsIndex);
                    input.num2 = '';
                } else {
                    displayText = display.textContent;
                    input.num1 = displayText.slice(0, opsIndex);
                    input.num2 = displayText.slice(opsIndex);
                };
                // ) {
                //     if (display.textContent[0] === '-' && target.textContent == '+/-'){
                //         input.num1 = display.textContent;
                //         input.ops = '+/-'
                //         num1 = input.num1;
                //         op = input.ops;
                //         let answer = operate(op, num1);
                //         display.textContent = answer;
                //         break;
                //     };
                //     let displayText = display.textContent;
                //     input.num1 = displayText.slice(0, opsIndex);
                //     input.num2 = '';
                // } else {

                console.log(input);
                break;
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

    let equals = document.getElementById('equals'); // EQUALS button calls operate()
    equals.addEventListener('click', () => {
        num1 = Number(input.num1);
        num2 = Number(input.num2);
        op = input.operator;
        let answer = operate(op, num1, num2);
        if (op === '/' && num2 === 0) {
            return display.textContent = "ERROR";
        } else {
            console.log(answer);
            display.textContent = answer.toFixed(2);
        };

    });
});




// Only evaluate 1 pair of numbers at a time
// Use the result of a calculation as input.num1 of the next calculation
// Make sure there is no bug if press = before any operator
// Display an error if user tries to divide by 0
// Add keyboard support
// Could shorten the long if __ || statemetnts into array methods for more elegant code
// Fix the bug with the zero button. You can't add more than one '0' to the end of display.textContent.
// Make th % button return the number/100