function sum (num1, num2) {
  return num1 + num2;
}

function calc(num1, num2, callbackFunction) {
  return callbackFunction(num1, num2);
}

console.log("CALLBACK IS WORKING", calc(2, 2, sum));