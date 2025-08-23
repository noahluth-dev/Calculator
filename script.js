const buttons = document.querySelectorAll('button');
const display = document.querySelector('.display');

let expression = '';
let currentInput = '';

// 1. get the values of the buttons

const show = () => {
    display.textContent = expression || currentInput;
}

buttons.forEach(button => {
    button.addEventListener('click', () => {
        const value = button.textContent;
        currentInput = value;
        expression += currentInput;
        show();

        if (currentInput == "C") {
            expression = '0'
            show();
        }
    });
})
// 2. display the values