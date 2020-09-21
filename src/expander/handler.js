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
  return argsStack.pop();
}

module.exports = { handle, getResult };
