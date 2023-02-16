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
let operatorFlag = false;

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

// Event for Number pressing
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