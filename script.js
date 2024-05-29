// Variables
const screen = document.querySelector("#screen");
const clearAll = document.querySelector(".clear");
const clear = document.querySelector(".clear");
const percent = document.querySelector(".percent");
const divide = document.querySelector(".divide");
const number7 = document.querySelector(".number-7");
const number8 = document.querySelector(".number-8");
const number9 = document.querySelector(".number-9");
const multiply = document.querySelector(".multiply");
const number4 = document.querySelector(".number-4");
const number5 = document.querySelector(".number-5");
const number6 = document.querySelector(".number-6");
const minus = document.querySelector(".minus");
const number1 = document.querySelector(".number-1");
const number2 = document.querySelector(".number-2");
const number3 = document.querySelector(".number-3");
const plus = document.querySelector(".plus");
const number0 = document.querySelector(".number-0");
const dot = document.querySelector(".dot");
const equals = document.querySelector(".equals");

// Operation Functions
function plusOperation(num1, num2) {
  return num1 + num2;
};

function minusOperation(num1, num2) {
  return num1 - num2;
};

function multiplyOperation(num1, num2) {
  return num1 * num2;
};

function divideOperation(num1, num2) {
  return num1 / num2;
};