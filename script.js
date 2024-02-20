let currentInput = '';
let operator = '';
let resultDisplayed = false;

function clearDisplay() {
    document.getElementById('display').innerText = '0';
    currentInput = '';
    operator = '';
    resultDisplayed = false;
}

function appendNumber(number) {
    if (resultDisplayed) {
        clearDisplay();
        resultDisplayed = false;
    }

    currentInput += number;
    updateDisplay();
}

function setOperator(selectedOperator) {
    if (operator !== '') {
        calculateResult();
    }

    operator = selectedOperator;
    currentInput += ` ${operator} `;
    updateDisplay();
}

function calculateResult() {
    const display = document.getElementById('display');
    const result = eval(currentInput);

    display.innerText = result;
    currentInput = result;
    operator = '';
    resultDisplayed = true;
}

function updateDisplay() {
    document.getElementById('display').innerText = currentInput;
}