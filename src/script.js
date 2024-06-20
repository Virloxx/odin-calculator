let firstNumber = null;
let secondNumber = null;
let operator = null;
let displayValue = 0;
const DISPLAY_LENGTH = 9;
const buttons = document.querySelectorAll("button");

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
                inputSign();
                updateDisplay();
            }
            if (button.classList == "percent") {
                inputPercent();
                updateDisplay();
            }
            if (button.classList == "decimal") {
                inputDecimal();
                updateDisplay();
            }
        });
    });
}

buttonClick();

function inputOperand(operand) {
    if (displayValue === 0 || displayValue === '0') {
        displayValue = operand.value;
    } else {
        displayValue += operand.value;
    }
}

function inputOperator(op) {
    if (firstNumber === null) {
        firstNumber = Number(displayValue);
        operator = op.value;
        displayValue = 0;
    }
    else {
        secondNumber = Number(displayValue);
        displayValue = operate(operator, firstNumber, secondNumber);
        firstNumber = displayValue;
        updateDisplay();
        operator = op.value;
        displayValue = 0;
    }
}

function inputEquals() {
    if (firstNumber === null) {
        return;
    }
    else if (displayValue === 0) {
        secondNumber = firstNumber;
        displayValue = operate(operator, firstNumber, secondNumber);
    }
    else {
        secondNumber = Number(displayValue);
        displayValue = operate(operator, firstNumber, secondNumber);
    }
}

function inputDecimal() {
    if (displayValue.includes(".")) {
        return;
    }
    else {
        displayValue = displayValue + ".";
    }
}

function inputPercent() {
    displayValue = displayValue / 100;
}

function inputSign() {
    displayValue = -displayValue;
}

function updateDisplay() {
    const display = document.getElementById("display");
    display.innerText = displayValue;

    if (displayValue.length > DISPLAY_LENGTH) {
        display.innerText = displayValue.substring(0, DISPLAY_LENGTH);
    }
}

function clearDisplay() {
    firstNumber = null;
    secondNumber = null;
    operator = null;
    displayValue = 0;
}

function operate(op, num1, num2) {
    if (op === '+') {
        return num1 + num2;
    } else if (op === '-') {
        return num1 - num2;
    } else if (op === '*') {
        return num1 * num2;
    } else if (op === '/') {
        if (num2 === 0) {
            return "ERROR!";
        } else {
            return (num1 / num2).toFixed(DISPLAY_LENGTH - 2);
        }
    }
}