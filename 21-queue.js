// Use a singly linked list to represent the queue
// Enqueue to the end of the list and Dequeue from the beginning of the list
// We want O(1) constant time for enqueue and dequeue operations on a queue
// that's why we are adding and removing from the end and start of a Singly Linked List
// Queue is an Abstract Data Type (concept) which should support FIFO (First In First Out)

class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

class Queue {
  constructor() {
    this.first = null;
    this.last = null;
    this.size = 0;
  }

  // Add at the end of the singly linked list
  enqueue(val) {
    let newNode = new Node(val);

    if (this.size === 0) {
      this.first = newNode;
      this.last = newNode;
    } else {
      this.last.next = newNode;
      this.last = newNode;
    }

    return ++this.size;
  }

  // Remove from the beginning of the singly linked list
  dequeue() {
    if (this.size === 0) {
      return null;
    }

    let removedNode = this.first;

    if (this.size === 1) {
      this.last = null;
    }

    this.first = removedNode.next;
    this.size--;

    return removedNode.val;
  }
}
