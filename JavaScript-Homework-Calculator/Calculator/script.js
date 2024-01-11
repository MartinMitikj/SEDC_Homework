//  numbers
const one = document.querySelector('#one');
const two = document.querySelector('#two');
const three = document.querySelector('#three');
const four = document.querySelector('#four');
const five = document.querySelector('#five');
const six = document.querySelector('#six');
const seven = document.querySelector('#seven');
const eight = document.querySelector('#eight');
const nine = document.querySelector('#nine');
const zero = document.querySelector('#zero');

//  operators
const clear = document.querySelector('#clear');
const backspace = document.querySelector('#backspace');
const divide = document.querySelector('#divide');
const multiply = document.querySelector('#multiply');
const subtract = document.querySelector('#subtract');
const sum = document.querySelector('#sum');
const dot = document.querySelector('#dot');
const equal = document.querySelector('#equal');
const display = document.querySelector('#display-container');

let inputArray = [];
let dotClicked = false;

function displayNumber(input) {
  if (display.innerHTML === '0' || display.innerHTML === 'Error') {
    if (input === '.') {
      display.innerHTML = '0.';
      dotClicked = true;
    } else {
      display.innerHTML = input;
    }
  } else if (input === '.' && !dotClicked) {
    display.innerHTML += input;
    dotClicked = true;
  } else if (input !== '.') {
    display.innerHTML += input;
  }

  if (display.innerHTML.length > 14) {
    display.innerHTML = 'Error';
  }
}

function clearDisplay() {
  display.innerHTML = '0';
  inputArray = [];
  dotClicked = false;
}

function backspaceDisplay() {
  if (display.innerHTML.length === 1) {
    display.innerHTML = '0';
    dotClicked = false;
  } else {
    display.innerHTML = display.innerHTML.slice(0, -1);
    dotClicked = display.innerHTML.includes('.');
  }
}

function calculate() {
  for (let j = 0; j < display.innerHTML.length; j++) {
    inputArray.push(display.innerHTML[j]);
  }

  let operand1 = '';
  let operand2 = '';

  let operator = null;

  for (let i = 0; i < inputArray.length; i++) {
    let input = inputArray[i];
    if (
      (input >= '0' && input <= '9') ||
      (input === '.' && !operand1.includes('.'))
    ) {
      if (operator) {
        operand2 += input;
      } else {
        operand1 += input;
      }
    } else {
      operator = input;
    }
  }

  inputArray = [];

  switch (operator) {
    case '+':
      if (+operand1 + +operand2 <= 99999999999999) {
        display.innerHTML = +operand1 + +operand2;
      } else {
        display.innerHTML = 'Error';
      }
      break;
    case '-':
      display.innerHTML = +operand1 - +operand2;
      break;
    case '*':
      if (+operand1 * +operand2 <= 99999999999999) {
        display.innerHTML = +operand1 * +operand2;
      } else {
        display.innerHTML = 'Error';
      }
      break;
    case '/':
      if (operand2 !== '0') {
        display.innerHTML = +operand1 / +operand2;
      } else {
        display.innerHTML = 'Error';
      }
      break;
    default:
      break;
  }

  dotClicked = display.innerHTML.includes('.');
}

one.addEventListener('click', function () {
  displayNumber('1');
})
two.addEventListener('click', function () {
  displayNumber('2');
})
three.addEventListener('click', function () {
  displayNumber('3');
})
four.addEventListener('click', function () {
  displayNumber('4');
})
five.addEventListener('click', function () {
  displayNumber('5');
})
six.addEventListener('click', function () {
  displayNumber('6');
})
seven.addEventListener('click', function () {
  displayNumber('7');
})
eight.addEventListener('click', function () {
  displayNumber('8');
})
nine.addEventListener('click', function () {
  displayNumber('9');
})
zero.addEventListener('click', function () {
  displayNumber('0');
})
clear.addEventListener('click', function () {
  clearDisplay();
})
backspace.addEventListener('click', function () {
  backspaceDisplay();
})
divide.addEventListener('click', function () {
  displayNumber('/');
})
multiply.addEventListener('click', function () {
  displayNumber('*');
})
subtract.addEventListener('click', function () {
  displayNumber('-');
})
sum.addEventListener('click', function () {
  displayNumber('+');
})
dot.addEventListener('click', function () {
  displayNumber('.');
})
equal.addEventListener('click', function () {
  calculate();
})



