const buttons = document.querySelectorAll('button');
const display = document.querySelector('.display');


// 1. get the values of the buttons

buttons.forEach(button => {
    button.addEventListener('click', ()=>{
        const value = button.textContent;
        display.textContent = value;
    });
})
// 2. display the values