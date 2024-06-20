let firstNumber = null;
let secondNumber = null;
let operator = null;
let displayValue = 0;

const buttons = document.querySelectorAll("button");
buttons.forEach((button) => {
    button.addEventListener("click", () => {
       if(button.classList == "operand"){
        if (displayValue === 0 || displayValue === '0') {
            displayValue = button.value;
        } else {
            displayValue += button.value;
        }
       } 
        updateDisplay();
        if(button.value === "clear") {
            clearDisplay();
            updateDisplay();
        }
    });
});

function updateDisplay() {
    const display = document.getElementById("display");
    display.innerText = displayValue;
    if (displayValue.length > 9) {
        display.innerText = displayValue.substring(0, 9);
    }
}

function clearDisplay() {
    firstNumber = null;
    secondNumber = null;
    operator = null;
    displayValue = 0;
}

const display = document.getElementById("display");
display.innerText = displayValue;

function operate(op, num1, num2) {
    switch(op) {
        case '+':
            return num1 + num1;
            break;
        case '-':
            return num1 - num2;
            break;
        case '*':
            return num1 * num2;
            break;
        case '/':
            if (num2 === 0) {
                return "xD";
            }
            else {
                return num1 / num2;
            }
            break;
    }
}

function myFunction() {
    document.getElementById("result").value = "Johnny Bravo";
}

function inputNumber() {

}

//operate(operator, firstNumber, secondNumber);