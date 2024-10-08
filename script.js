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
    button.addEventListener('mousedown', (event) => { // MOUSEDOWN triggers code to update the calculator displayText
        const target = event.target;
        // display.textContent = ''; -----> Trying to initialize display content here so that the 0 disappears upon click. Not working.
        let displayText = display.textContent;
        switch (target.className) {
            case 'opsa':
                if (target.textContent == '.' && display.textContent.includes('.') === false) {
                    display.textContent = display.textContent.concat(button.textContent);
                } else {
                    console.log('I am just here for decoration');
                };
                break;
            case 'ops':
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
                display.textContent = displayText.concat(btnText);
                break;
        };

    });

    let opButtons = document.querySelectorAll('.ops');

    opButtons.forEach(opButton => {
        opButton.addEventListener('mousedown', (event) => {
            const target = event.target;

            switch (target.textContent) {
                case '+':
                    input.operator = '+';
                    console.log(input.operator);
                    break;
                case '-':
                    input.operator = '-';
                    console.log(input.operator);
                    break;
                case 'x':
                    input.operator = 'x';
                    console.log(input.operator);
                    break;
                case '/':
                    input.operator = '/';
                    console.log(input.operator);
                    break;
            };


        });
    });

    button.addEventListener('mouseup', (event) => { // MOUSEUP triggers code to update the input object values for numbers (and decimals)
        let target = event.target;
        let displayText = '';

        switch (target.className) {
            case 'num':
                input.num1 = display.textContent.slice(1);
                break;
            case 'ops':
                let btnText = target.textContent;
                let opsIndex = display.textContent.indexOf(btnText);
                input.num1 = display.textContent.slice(1, opsIndex);
                input.operator = display.textContent[opsIndex];
                let displayTextEnd = display.textContent.charAt(display.textContent.length - 1);
                if (displayTextEnd !== '+'
                    || displayTextEnd !== '-'
                    || displayTextEnd !== 'x'
                    || displayTextEnd !== '/'
                ) { 
                    displayText = display.textContent;
                    input.num1 = displayText.slice(1, opsIndex);
                    input.num2 = '';
                } else {
                    displayText = display.textContent;
                    input.num1 = displayText.slice(1, opsIndex);
                    input.num2 = displayText.slice(opsIndex);
                    
                };

                console.log(input);
                break;
        };

    });
});





// access the variables to perform the correct operation
// return the solution
// update the display to the solution