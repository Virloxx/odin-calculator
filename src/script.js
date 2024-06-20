var firstNumber = null;
let secondNumber = null;
let operator = null;
let displayValue = 0;

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
                break;
            }
    }
}

function myFunction() {
    document.getElementById("result").value = "Johnny Bravo";
}

function inputNumber() {

}

//operate(operator, firstNumber, secondNumber);