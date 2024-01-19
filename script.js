let num1, num2, operator;

function add(num1, num2) {
  return num1+num2;
}

function subtract(num1, num2) {
  return num1-num2;
}

function multiply(num1, num2) {
  return num1*num2;
}

function divide(num1, num2) {
  return num2===0 ? "Infinity" : num1/num2 
}

function operate(num1, num2, operator){
  num1 = Number(num1);
  num2 = Number(num2);

  switch(operator){
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
