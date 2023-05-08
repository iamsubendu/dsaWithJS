//  A queue data structure using an array. The basic operations on a queue are:

// enqueue(element): Add an element to the back of the queue.
// dequeue(): Remove and return the element at the front of the queue.
// front(): Return the element at the front of the queue without removing it.
// isEmpty(): Return true if the queue is empty, false otherwise.
// size(): Return the number of elements in the queue.

class Queue {
  constructor() {
    this.items = [];
  }

  enqueue(element) {
    this.items.push(element);
  }

  dequeue() {
    if (this.isEmpty()) {
      return null;
    }
    return this.items.shift();
  }
  // dequeue() {
  //   return this.isEmpty() ? null : this.items.splice(0, 1);
  // }

  front() {
    if (this.isEmpty()) {
      return null;
    }
    return this.items[0];
  }

  isEmpty() {
    return this.items.length === 0;
  }

  size() {
    return this.items.length;
  }
}

const queue = new Queue();
console.log(queue.isEmpty()); // true

queue.enqueue(10);
queue.enqueue(20);
queue.enqueue(30);
console.log(queue.front()); // 10

queue.dequeue();
console.log(queue.front()); // 20

console.log(queue.size()); // 2
console.log(queue.isEmpty()); // false
queue.dequeue();
console.log(queue.front()); // 30
