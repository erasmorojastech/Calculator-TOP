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

// This function takes an operator and two numbers ank make an arithmetic operation
const operate = function (operator, a, b) {
  let result;

  if (operator === '+') return add(a,b)
  if (operator === '-') return subtract(a,b)
  if (operator === '*') return multiply(a,b)
  if (operator === '/' && b === 0) {
    return alert(`It's not possible a division by zero`);
  } else {
    return divide(a,b);
  }
}