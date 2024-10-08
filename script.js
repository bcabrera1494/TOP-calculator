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
    button.addEventListener('mousedown', (event) => { // MOUSEDOWN triggers code to update the calculator displayText
        const target = event.target;
        // display.textContent = ''; -----> Trying to initialize display content here so that the 0 disappears upon click. Not working.
        // let displayText = display.textContent;
        switch (target.className) {
            case 'opsa':
                if (target.textContent == '.' && display.textContent.includes('.') === false) {
                    display.textContent = display.textContent.concat(button.textContent);
                } else {
                    console.log('I am just here for decoration');
                };
                break;
            case 'ops':
                if (display.textContent.includes('+') === true
                || display.textContent.includes('-') === true
                || display.textContent.includes('x') === true
                || display.textContent.includes('/') === true) {
                    break;
                }
                display.textContent = display.textContent.concat(button.textContent);
                break;
            case 'clear':
                display.textContent = '0';
                input.num1 = '';
                input.num2 = '';
                input.operator = '';
                break;
            case 'num':
                let btnText = button.textContent;
                let zeroIndex = display.textContent.indexOf('0');
                display.textContent = display.textContent.concat(btnText);
                display.textContent = display.textContent.slice(zeroIndex+1);
                break;
        };

    });

    let opButtons = document.querySelectorAll('.ops');
    opButtons.forEach(opButton => { // OPERATIONS buttons trigger assignment of the operator symbol to input.operator
        opButton.addEventListener('mousedown', (event) => {
            const target = event.target;

            switch (target.textContent) {
                case '+':
                    if (input.operator !== "" ){
                        break;
                    } else {
                    input.operator = '+'};
                    break;
                case '-':
                    if (input.operator!== ""){
                        break;
                    } else {input.operator = '-'};
                    break;
                case 'x':
                    if (input.operator !== ""){
                        break;
                    } else {input.operator = 'x'};
                    break;
                case '/':
                    if (input.operator !== ""){
                        break;
                    } else {input.operator = '/'};
                    break;
            };


        });
    });

    button.addEventListener('mouseup', (event) => { // MOUSEUP triggers code to update the input object values for numbers (and decimals)
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
                    let displayText = display.textContent;
                    input.num1 = displayText.slice(0, opsIndex);
                    input.num2 = '';
                } else {
                    displayText = display.textContent;
                    input.num1 = displayText.slice(0, opsIndex);
                    input.num2 = displayText.slice(opsIndex);
                };
                console.log(input);
                break;
            case 'num':
                let displayText = display.textContent;
                if (displayText.includes('+') === true) {
                    let plusIndex = displayText.indexOf('+');
                    input.num2 = displayText.slice(plusIndex+1);
                    console.log(input);
                };
                if (displayText.includes('-') === true) {
                    let minusIndex = displayText.indexOf('-');
                    input.num2 = displayText.slice(minusIndex+1);
                    console.log(input);
                };
                if (displayText.includes('x') === true) {
                    let xIndex = displayText.indexOf('x');
                    input.num2 = displayText.slice(xIndex+1);
                    console.log(input);

                };
                if (displayText.includes('/') === true) {
                    let divideIndex = displayText.indexOf('/');
                    input.num2 = displayText.slice(divideIndex+1);
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
            console.log(answer);
            display.textContent = answer;

    });

    // equals.addEventListener('mouseup', () => {
    //     display.textContent = answer;
    //     input.num1 = answer;
    //     input.num2 = "";
    //     input.operator = ""; 
    // })
});




// Only evaluate 1 pair of numbers at a time
// Use the result of a calculation as input.num1 of the next calculation
// Round long decimal answers to the nearest tenth
// Make sure there is no bug if press = before any operator
// Display an error if user tries to divide by 0
// Add a backspace button
// Add keyboard support
// Could shorten the long if __ || statemetnts into array methods for more elegant code