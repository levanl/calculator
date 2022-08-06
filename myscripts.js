let firstNumString = '';
let secondNumString = '';
let operator;

const onNumberInput = (num) => {
    if(operator) {
        firstNumString += num;
    } else {
        secondNumString += num;
    }
    console.log(firstNumString, operator, secondNumString)
}

const operatorInput = (op) => {
    operator = op;
    if(operator){
        onEquals();

    }
    
    // if operator null
        //store in operator
    //else
        //call onEquals()
        //store result in firstNumber
        //store new op
}

const onEquals = () => {
    if(firstNumString && operator && secondNumString){
        let firstNum = +firstNumString;
        let secondNum = +secondNumString;
        console.log(firstNum, operator, secondNum);
        let result;
        switch(operator) {
            case 'x':
                result = multiply(firstNum,secondNum);
                break;
            case '/': 
                result = divide(firstNum,secondNum);
                break;
            case '+': 
                result = add(firstNum,secondNum);
                break;
            case '-':
                result = minus(firstNum,secondNum);
                break;
        }
        console.log(result);
    }else {
            
    }

}

function reset(a,b) {
    a = "";
    b = "";
}



function add(a,b) {
    return a + b;
}

function divide(a,b) {
    return a / b;
}

function minus(a,b) {
    return a - b;
}

function multiply(a,b) {
    return a * b;
}