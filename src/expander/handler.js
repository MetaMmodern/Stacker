/* eslint-disable no-eval */
const Stack = require("./stack");

const argsStack = new Stack();
const operators = ["+", "-", "*", "/", "%"];

function handle(arg) {
  if (operators.includes(arg)) {
    if (argsStack.Length < 2) {
      throw new Error(
        `Can't calculate: ${argsStack.Length} elements are in stack. Check your syntax.`
      );
    }
    const first = argsStack.pop();
    const second = argsStack.pop();
    const result = eval(`${second} ${arg} ${first}`);
    argsStack.push(result);
  }
  if (!Number.isNaN(Number(arg))) {
    argsStack.push(Number(arg));
  }
}

function getResult() {
  const stackLength = argsStack.Length;
  if (stackLength !== 1) {
    throw new Error(`Can't show result: ${stackLength} elements are in stack. Check your syntax.`);
  }
  return argsStack.pop();
}

module.exports = { handle, getResult };
