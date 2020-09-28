const Stack = require("./stack");

const argsStack = new Stack();
const operators = ["+", "-", "*", "/", "%"];

function handle(arg) {
  if (operators.includes(arg)) {
    const first = argsStack.pop();
    const second = argsStack.pop();
    // eslint-disable-next-line no-eval
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
