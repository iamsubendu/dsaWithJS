// A stack is an abstract data type that serves as a collection of elements,
// with two main operations:

// push: which adds an element to the collection, and
// pop: which removes the most recently added element that
// has not yet been removed.
// The last -in -first - out(LIFO) principle is used, meaning the most
// recently added element is the first one to be removed.

class Stack {
  constructor() {
    this.items = [];
  }

  push(element) {
    this.items.push(element);
  }

  pop() {
    if (this.items.length === 0) {
      return 'Underflow';
    }
    return this.items.pop();
  }

  peek() {
    return this.items[this.items.length - 1];
  }

  isEmpty() {
    return this.items.length === 0;
  }

  size() {
    return this.items.length;
  }

  printStack() {
    let str = '';
    for (let i = 0; i < this.items.length; i++) {
      str += this.items[i] + ' ';
    }
    return str;
  }
}

const stack = new Stack();
stack.push(10);
stack.push(20);
stack.push(30);
console.log(stack.printStack()); // output: 10 20 30
console.log(stack.size()); // output: 3
console.log(stack.pop()); // output: 30
console.log(stack.peek()); // output: 20
console.log(stack.isEmpty()); // output: false
