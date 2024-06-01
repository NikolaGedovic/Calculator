// Variables
const screen = document.querySelector("#screen");
const clearAll = document.querySelector(".clear-all");
const clearOne = document.querySelector(".clear");
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

let currentInput = "";
let expression = "";

// Update Screen
function updateScreen(value) {
  if (screen.textContent === "0") {
    screen.textContent = value;
  } else {
    screen.textContent += value;
  }
}

// Event listeners for number buttons
number0.addEventListener("click", () => appendToExpression("0"));
number1.addEventListener("click", () => appendToExpression("1"));
number2.addEventListener("click", () => appendToExpression("2"));
number3.addEventListener("click", () => appendToExpression("3"));
number4.addEventListener("click", () => appendToExpression("4"));
number5.addEventListener("click", () => appendToExpression("5"));
number6.addEventListener("click", () => appendToExpression("6"));
number7.addEventListener("click", () => appendToExpression("7"));
number8.addEventListener("click", () => appendToExpression("8"));
number9.addEventListener("click", () => appendToExpression("9"));
dot.addEventListener("click", () => appendToExpression("."));

// Event listeners for operation buttons
plus.addEventListener("click", () => appendToExpression('+'));
minus.addEventListener("click", () => appendToExpression('-'));
multiply.addEventListener("click", () => appendToExpression('*'));
divide.addEventListener("click", () => appendToExpression('/'));

// Append to Expression
function appendToExpression(value) {
  if (screen.textContent === "0" && value !== '.') {
    screen.textContent = "";
  }
  expression += value;
  updateScreen(value);
}

// Clear All from Display
clearAll.addEventListener("click", () => {
  screen.textContent = "0";
  expression = "";
});

// Clear One character from Display
clearOne.addEventListener("click", () => {
  if (screen.textContent.length > 0) {
    screen.textContent = screen.textContent.slice(0, -1);
    expression = expression.slice(0, -1);
    if (screen.textContent === "") {
      screen.textContent = "0";
    }
  }
});

// Calculate Result
function calculate() {
  const result = parseExpression(expression);
  screen.textContent = result.toString();
  expression = result.toString();
}

// Function to parse and evaluate expression
function parseExpression(expr) {
  const tokens = expr.match(/(\d+(\.\d+)?|[+\-*/])/g);
  if (!tokens) return 0;

  let operators = [];
  let values = [];

  for (let token of tokens) {
    if (!isNaN(token)) {
      values.push(parseFloat(token));
    } else {
      while (operators.length && precedence(operators[operators.length - 1]) >= precedence(token)) {
        values.push(applyOperator(operators.pop(), values.pop(), values.pop()));
      }
      operators.push(token);
    }
  }

  while (operators.length) {
    values.push(applyOperator(operators.pop(), values.pop(), values.pop()));
  }

  return values[0];
}

// Helper functions for parsing
function precedence(op) {
  if (op === '+' || op === '-') return 1;
  if (op === '*' || op === '/') return 2;
  return 0;
}

function applyOperator(op, b, a) {
  switch (op) {
    case '+': return a + b;
    case '-': return a - b;
    case '*': return a * b;
    case '/': return a / b;
    default: return 0;
  }
}

// Event listener for equals button
equals.addEventListener("click", () => calculate());

// Initialize screen with 0
screen.textContent = "0";
