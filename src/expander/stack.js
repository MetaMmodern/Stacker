module.exports = class Stack {
  #stack;

  constructor() {
    this.#stack = [];
    this.pop = this.pop.bind(this);
    this.push = this.push.bind(this);
  }

  pop() {
    return this.#stack.pop();
  }

  push(arg) {
    this.#stack.push(arg);
  }

  get Length() {
    return this.#stack.length;
  }
};
