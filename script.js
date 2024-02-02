let num1, num2, operator, lastResult;
const display = document.querySelector(".active-display");
const numberBtns = document.querySelectorAll(".number");
const operatorBtns = document.querySelectorAll(".operator");

numberBtns.forEach((button) => {
  button.addEventListener("click", () => {
    if (display.textContent === "0" || display.textContent === "Infinity" || display.textContent == lastResult) {
      display.textContent = button.textContent;
      lastResult = "";
    } else {
      display.textContent += button.textContent;
    }
  })
})

operatorBtns.forEach((button) => {
  button.addEventListener("click", () => {
    if (num1 === undefined || num1 === "") {
      operator = button.textContent;
      num1 = display.textContent;
      display.textContent = "0";
    } else if (num2 === undefined || num2 === "") {
      num2 = display.textContent;
      lastResult = operate(num1, num2, operator);
      display.textContent = lastResult;
      num1 = display.textContent;
      num2 = "";
      operator = button.textContent;
      // lastResult = "";
    } else {
      display.textContent = "0";
    }
  })
})

function equals() {
  if (lastResult == "" && num1 !== undefined && num1 !== "") {
    num2 = display.textContent;
    lastResult = operate(num1, num2, operator);
    display.textContent = lastResult;
    num1 = "";
    num2 = "";
  }
}

function add(num1, num2) {
  return num1 + num2;
}

function subtract(num1, num2) {
  return num1 - num2;
}

function multiply(num1, num2) {
  return num1 * num2;
}

function divide(num1, num2) {
  return num2 === 0 ? "Infinity" : num1 / num2
}

function operate(num1, num2, operator) {
  num1 = Number(num1);
  num2 = Number(num2);

  switch (operator) {
    case "+":
      return add(num1, num2);
    case "-":
      return subtract(num1, num2);
    case "*":
      return multiply(num1, num2);
    case "/":
      return divide(num1, num2);
  }
}

