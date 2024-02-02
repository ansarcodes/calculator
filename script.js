let num1, num2, operator, lastResult;
const display = document.querySelector(".active-display");
const numberBtns = document.querySelectorAll(".number");
const operatorBtns = document.querySelectorAll(".operator");
const clearBtns = document.querySelectorAll(".clear");
clearBtns.forEach((button) => {
  button.addEventListener("click", () => {
    clearDisplay(button.textContent);
  })
})

numberBtns.forEach((button) => {
  button.addEventListener("click", () => {
    if (display.textContent === "0" || display.textContent === "Infinity" || display.textContent === "-Infinity" || display.textContent == lastResult) {
      display.textContent = button.textContent;
      lastResult = "";
      limitNumber();
    } else {
      display.textContent += button.textContent;
      limitNumber();
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
      limitNumber();
    } else {
      display.textContent = "0";
    }
  })
})

function clearDisplay(option) {
  switch (option) {
    case "CE":
      display.textContent = "0";
      break;
    case "C":
      display.textContent = "0";
      num1 = "";
      num2 = "";
      break;
    case "←":
      if (display.textContent !== "0" && display.textContent.length > 1) {
        display.textContent = display.textContent.slice(0, -1);
      } else if (display.textContent.length === 1) {
        display.textContent = "0";
      }
      break;
  }
}

function equals() {
  if (lastResult == "" && num1 !== undefined && num1 !== "") {
    num2 = display.textContent;
    lastResult = operate(num1, num2, operator);
    display.textContent = lastResult;
    num1 = "";
    num2 = "";
    limitNumber();
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
  return num2 === 0 ? "Infinity" : num1 / num2;
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

function limitNumber() {
  if (display.textContent > 999999999999999){
    display.textContent = "Infinity";
  } else if (display.textContent < -999999999999999) {
    display.textContent = "-Infinity";
  }
  else if (display.textContent.includes(".")){
    display.textContent = Math.round((Number(display.textContent)) * Number(("1").padEnd((15-(Number(display.textContent)).toString().indexOf(".")), "0"))) / (Number(("1").padEnd((15-(Number(display.textContent)).toString().indexOf(".")), "0")));
  }
}

function addFloat(){
  if (!display.textContent.includes(".") && !display.textContent.includes("Infinity")){
    display.textContent = display.textContent.concat(".");
  }
}

function plusMinus(){
  display.textContent = Number(display.textContent)*(-1);
}