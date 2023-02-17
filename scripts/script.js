'use strict'

// Arithmetic Operations
const add = (a, b) => {
  return a + b;
}

const subtract = (a, b) => {
  return a - b;
}

const multiply = (a, b) => {
  return a * b;
}

const divide = (a, b) => {
  return a / b;
}

// Taking an operator and two numbers and make an arithmetic operation
const operate = function (operator, a, b) {
  if (operator === '+') return add(a, b)
  if (operator === '-') return subtract(a, b)
  if (operator === '×') return multiply(a, b)
  if (operator === '÷' && b === 0) {
    return alert(`It's not possible a division by zero`);
  } else {
    return divide(a, b);
  }
}

// Display numbers on the screen
const $number = document.querySelectorAll('.number');
let $screen = document.querySelector('#screen');
let operatorFlag = true;

const populateScreen = function (number) {
  if (operatorFlag === false) {
    if ($screen.innerHTML === '0') {
      $screen.innerHTML = number;
    } else {
      $screen.innerHTML = $screen.innerHTML + number;
    }
  } else {
    $screen.innerHTML = number;
  }
}

// Event for Number button pressing
$number.forEach((number) => {
  number.addEventListener('click', () => {
    populateScreen(number.innerHTML);
    operatorFlag = false;
  });  
});

// Event for AC Button pressing
const btnAC = document.querySelector('#buttonAC');

btnAC.addEventListener('click', () => {
  $screen.innerHTML = '0';
  a=0;
  b=0;
  lastOperatorPressed = '+';
});

// Event for Operation button pressing
let a = 0;
let b = 0;
let lastKeyPressed; 
let lastOperatorPressed = '+'
const $operator = document.querySelectorAll('.operation');

const makeOperationCall = function () {
  operatorFlag = true;
  b = Number($screen.innerHTML);
  let result = operate(lastOperatorPressed, a, b);
  a = result;
  $screen.innerHTML = a;
}

$operator.forEach((operation) => {
  operation.addEventListener('click', () => {
    if (!operatorFlag) makeOperationCall();
    lastOperatorPressed = operation.innerHTML;
  });
});