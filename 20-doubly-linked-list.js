class Node {
  constructor(val) {
    this.val = val;
    this.prev = null;
    this.next = null;
  }
}

class DoublyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  push(val) {
    let node = new Node(val);

    if (this.length === 0) {
      this.head = node;
      this.tail = node;
    } else {
      this.tail.next = node;
      node.prev = this.tail;
      this.tail = node;
    }

    this.length++;
    return this;
  }

  pop() {
    if (this.length === 0) {
      return null;
    }

    if (this.length === 1) {
      let node = this.head;
      this.head = null;
      this.tail = null;
      this.length = 0;

      return node;
    }

    let prevTail = this.tail;
    this.tail.prev.next = null;
    this.tail = this.tail.prev;

    prevTail.prev = null;
    this.length--;

    return prevTail;
  }

  // Remove and return the node at the beginning of the list
  shift() {
    if (self.length === 0) {
      return null;
    }

    let oldHead = this.head;

    if (self.length === 1) {
      this.head = null;
      this.tail = null;
    } else {
      this.head = oldHead.next;
      this.head.prev = null;
      oldHead.next = null;
    }

    this.length--;
    return oldHead;
  }

  // Add the new node at the beginning of the list
  unshift(val) {
    let newNode = new Node(val);

    if (this.length === 0) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      newNode.next = this.head;
      this.head.prev = newNode;
      this.head = newNode;
    }

    this.length++;
    return this;
  }

  // Return the node at the given index
  // Start from either the head or the tail depending on the index
  get(index) {
    if (index < 0 || index >= this.length) {
      return null;
    }

    if (index <= Math.floor(this.length / 2)) {
      let counter = 0;
      let current = this.head;
      while (counter < index) {
        current = current.next;
        counter++;
      }
      return current;
    } else {
      let counter = this.length - 1;
      let current = this.tail;

      while (counter > index) {
        current = current.prev;
        counter--;
      }

      return current;
    }
  }

  // Set the value of the node at the given index
  set(index, val) {
    let node = this.get(index);

    if (node === null) {
      return false;
    }

    node.val = val;
    return true;
  }

  insert(index, val) {
    if (index < 0 || index > this.length) {
      return false;
    }

    if (index === 0) {
      return !!this.unshift(val);
    } else if (index === this.length) {
      return !!this.push(val);
    } else {
      let prevNode = this.get(index - 1);

      if (!prevNode) {
        return false;
      }

      let newNode = new Node(val);
      let nextNode = prevNode.next;

      prevNode.next = newNode;
      newNode.prev = prevNode;

      newNode.next = nextNode;
      nextNode.prev = newNode;

      this.length++;
      return true;
    }
  }

  remove(index) {
    if (index < 0 || index >= this.length) {
      return null;
    }

    if (index === 0) return this.shift();
    if (index === this.length - 1) return this.pop();

    let removedNode = this.get(index);
    let prevNode = removedNode.prev;
    let nextNode = removedNode.next;

    prevNode.next = nextNode;
    nextNode.prev = prevNode;

    (removedNode.next = null), (removedNode.prev = null);
    this.length--;

    return removedNode;
  }

  reverse() {
    if (this.length <= 0) {
      return null;
    }

    if (this.length === 0) {
      return this;
    }

    // swap head and tail
    let temp = this.head;
    this.head = this.tail;
    this.tail = temp;

    let current = this.head;
    let next = current.prev;

    current.prev = null;

    while (next) {
      let newNext = next.prev;

      current.next = next;
      next.prev = current;

      current = next;
      next = newNext;
    }

    current.next = null;

    return this;
  }

  print() {
    let arr = [];
    let current = this.head;

    while (current) {
      arr.push(current.val);
      current = current.next;
    }
    console.log(arr);
  }
}

let list = new DoublyLinkedList();
list.push(4);
list.push(6);
list.push(9);
list.print();
list.pop();
list.pop();
list.print();
