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


    // declare variable for row containers
    const rows = document.querySelectorAll('.row');

    // iterate through node list of rows
    rows.forEach(row => {
        // add click listener for the row 
        // declare variable for buttons
        const buttons = document.querySelectorAll('button')
        buttons.forEach(button => {
            button.addEventListener('click', () => {
                // // select button text content
                // let content = button.textContent();
                // // assign display text content variable
                // let displayCont = '';
                // // assign button text content to display text content
                // displayCont.textContent((`${content}`));
                console.log('hello');
            });
        });
    });

    // store button in variable
    // show number on display
