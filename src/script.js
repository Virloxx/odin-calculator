let firstNumber = null;
let secondNumber = null;
let operator = null;
let displayValue = 0;

const buttons = document.querySelectorAll("button");

function inputOperand(operand) {
    if (displayValue === 0 || displayValue === '0') {
        displayValue = operand.value;
    } else {
        displayValue += operand.value;
    }
}

function inputOperator(op) {
    firstNumber = Number(displayValue);
    operator = op.value;
    displayValue = 0;
}

function inputEquals() {
    secondNumber = Number(displayValue);
    displayValue = operate(operator, firstNumber, secondNumber);
}

function buttonClick() {
    buttons.forEach((button) => {
        button.addEventListener("click", () => {
            if (button.classList == "operand") {
                inputOperand(button);
                updateDisplay();
            }
            if (button.classList == "operator") {
                inputOperator(button);
            }
            if (button.classList == "equals") {
                inputEquals();
                updateDisplay();
            }
            if (button.classList == "clear") {
                clearDisplay();
                updateDisplay();
            }
            if (button.classList == "sign") {
                displayValue = -displayValue;
                updateDisplay();
            }
            if (button.classList == "percent") {
                displayValue = displayValue / 100;
                updateDisplay();
            }
            if (button.classList == "decimal") {
                if (displayValue.includes(".")) {
                    return;
                }
                else {
                    displayValue = displayValue + ".";
                    updateDisplay();
                }
            }
        });
    });
}

buttonClick();

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

function operate(op, num1, num2) {
    switch(op) {
        case '+':
            return num1 + num2;
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
