
let firstNumString = '';
let secondNumString = '';
let operator;
let resultElement = document.getElementById('result');

const onNumberInput = (num) => {
    if (operator) {
        secondNumString += num;
        drawResult(secondNumString)
    } else {
        firstNumString += num;
        drawResult(firstNumString)
    }
}

const operatorInput = (op) => {
    drawResult(op);
    if (operator) {
        onEquals();
    }
    operator = op;
}

const drawResult = (res) => {
    resultElement.innerText = res;
}

const onEquals = () => {
    if (firstNumString && operator && secondNumString) {
        let firstNum = +firstNumString;
        let secondNum = +secondNumString;
        console.log(firstNum, operator, secondNum);
        let result;
        switch (operator) {
            case 'x':
                result = multiply(firstNum, secondNum);
                break;
            case '/':
                result = divide(firstNum, secondNum);
                break;
            case '+':
                result = add(firstNum, secondNum);
                break;
            case '-':
                result = minus(firstNum, secondNum);
                break;
        }
        firstNumString = result + '';
        secondNumString = '';
        operator = null;
        drawResult(firstNumString)
    } else {

    }

}

function add(a, b) {
    return a + b;
}

function divide(a, b) {
    return a / b;
}

function minus(a, b) {
    return a - b;
}

function multiply(a, b) {
    return a * b;
}

function clearBoard() {
    drawResult("0");
    firstNumString = '';
    secondNumString = '';
}