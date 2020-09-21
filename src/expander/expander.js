// eslint-disable-next-line no-unused-vars
const { handle, getResult } = require("./handler");
// const Stack = require("./stack");

// const argsStack = new Stack();
// const operators = ["+", "-", "*", "/", "%"];

module.exports = function expander(evaluatable) {
  // eslint-disable-next-line no-eval
  return eval(evaluatable);
};
