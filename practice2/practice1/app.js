let num = 42; 

let firstName = 'Lexa';
const isProgrammer = true;
let action;

const resultElement = document.getElementById('result');
const input1 = document.getElementById('input1');
const input2 = document.getElementById('input2');
const submitBtn = document.getElementById('submit');
const plusBtn = document.getElementById('plus');
const minusBtn = document.getElementById('minus');
const divisionBtn = document.getElementById('division');
const multiplyBtn = document.getElementById('multiply');

plusBtn.onclick = () => {
    action = 'plus';
}

minusBtn.onclick = () => {
    action = 'minus';
}

multiplyBtn.onclick = () => {
    action = 'multiply';
}

divisionBtn.onclick = () => {
    action = 'division';
}

const computeNumbersWithAction = (inp1, inp2, actionSymbol) => {
    let number1 = Number(inp1.value);
    let number2 = Number(inp2.value);

    switch (actionSymbol) {
        case "plus":
            return number1 + number2;
        case "minus":
            return number1 - number2;
        case "multiply":
            return number1 * number2;
        case "division":
            return number1 / number2;
        default:
            return 'Error. Please choose an action!';
        }
}

const printResult = result => {
    result >= 0 ? resultElement.style.color = 'green' : resultElement.style.color = 'red';
    resultElement.textContent = result;
}

const clearInputs = (inp) => {
    inp.forEach(input => input.value = '');

} 

submitBtn.onclick = () => {
    const res = computeNumbersWithAction(input1, input2, action);
    printResult(res)
    clearInputs([input1, input2]);
    action = '';
}