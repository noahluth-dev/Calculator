const buttons = document.querySelectorAll('button');
const display = document.querySelector('.display');

let expression = '';
let currentInput = '';
const operators = ['±', '%','÷','×','−','+','.','='];
const show = () => {
    display.textContent = expression || currentInput;
}

buttons.forEach(button => {
    button.addEventListener('click', () => {
        const value = button.textContent;
        if(value != '−' && expression.length == 0 && operators.includes(value)) return;

        currentInput = value;
        expression += currentInput;
        show();

        if (currentInput == "C") {
            expression = ''
            currentInput = '0'
            show();
        }
    });
})
