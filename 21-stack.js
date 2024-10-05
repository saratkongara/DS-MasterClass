// Use a singly linked list to represent the stack
// Add/Push to the beginning of the list and Remove/Pop from the beginning of the list
// We want O(1) constant time for push and pop operations on a stack
// that's why we are adding and removing from the start of a Singly Linked List
// Stack is an Abstract Data Type (concept) which should support LIFO (Last In First Out)

class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

class Stack {
  constructor() {
    this.first = null;
    this.last = null;
    this.size = 0;
  }

  push(val) {
    let newNode = new Node(val);

    if (this.size === 0) {
      this.first = newNode;
      this.last = newNode;
    } else {
      let oldFirst = this.first;
      newNode.next = oldFirst;
      this.first = newNode;
    }

    return ++this.size;
  }

  pop() {
    if (this.size === 0) {
      return null;
    }

    let currentFirst = this.first;

    if (this.size === 1) {
      this.first = null;
      this.last = null;
    } else {
      this.first = this.first.next;
    }

    this.size--;

    currentFirst.next = null;
    return currentFirst.value;
  }
}
