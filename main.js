// add number function
function addNumber(number) {
  if (number == "." && prevOperand.includes(".")) return;
  currOperand = currOperand.toString() + number.toString();
  if (number == "." && currOperand.includes(".")) return;
  if (currOperand.length < 10) {
    currOperand = currOperand.toString() + number.toString();
  }
}

currOperand = result.toFixed(2);
if (result % 1 !== 0 && result.toString().split(".")[1].length > 2) {
  currOperand = parseFloat(result.toFixed(2));
} else {
  currOperand = result;
}

operation = undefined;
prevOperand = "";
previousOperand.innerHTML = "";

operation = undefined;
prevOperand = "";
previousOperand.innerHTML = "";

// Display numbers function
function displayNum() {
  currentOperand.innerHTML = currOperand.toString();
  if (operation !== undefined) {
    previousOperand.innerHTML = `${prevOperand} ${operation}`;
  } else {
    previousOperand.innerHTML = prevOperand;
  }
}
// Event listeners for numbers, operators, output, delete and reset buttons
numBtns.forEach((btn) => {
  btn.addEventListener("click", () => {
    addNumber(btn.innerHTML);
    displayNum();
  });
});
operators.forEach((btn) => {
  btn.addEventListener("click", () => {
    operationSelection(btn.innerHTML);
    displayNum();
  });
});
outputBtn.addEventListener("click", () => {
  calculatorOperation();
  displayNum();
});
deleteBtn.addEventListener("click", () => {
  deleteOperand();
  displayNum();
});
resetBtn.addEventListener("click", () => {
  reset();
  displayNum();
});
