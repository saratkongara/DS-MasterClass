// Node represents a piece of data (val)
// and has a reference to the next node (next)

class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

class SinglyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  // Add a new node at the end of the list
  push(val) {
    const node = new Node(val);

    if (this.length === 0) {
      this.head = node;
      this.tail = node;
    } else {
      this.tail.next = node;
      this.tail = node;
    }

    this.length++;
    return this;
  }

  // Remove the node at the end of the list
  pop() {
    if (this.length === 0) {
      return undefined;
    }

    let temp;

    if (this.length === 1) {
      temp = this.tail;
      this.head = null;
      this.tail = null;
    } else {
      let prev = this.head;
      temp = this.head.next;

      while (temp.next) {
        prev = temp;
        temp = temp.next;
      }

      this.tail = prev;
      this.tail.next = null;
    }

    this.length--;
    return temp;
  }

  traverse() {
    let current = this.head;

    while (current) {
      console.log(current.val);
      current = current.next;
    }
  }

  // Remove the node at the beginning of the list
  shift() {
    if (this.length === 0) {
      return undefined;
    }

    let popedNode = this.head;

    if (this.length === 1) {
      this.head = null;
      this.tail = null;
    } else {
      this.head = popedNode.next;
    }

    this.length--;
    return popedNode;
  }

  // Add a new node at the beginning of the list
  unshift(val) {
    const node = new Node(val);
    node.next = this.head;
    this.head = node;

    this.length++;

    if (this.length === 1) {
      this.tail = node;
    }
  }

  // Return the node at the given index
  get(index) {
    if (index < 0 || index > this.length - 1) {
      return null;
    }

    if (this.length === 0) {
      return null;
    }

    let counter = 0;
    let current = this.head;

    while (counter !== index) {
      current = current.next;
      counter++;
    }

    return current;
  }

  // Set the value of the node at the given index
  // Return true on success and false on failure
  set(index, newVal) {
    let node = this.get(index);

    if (node === null) {
      return false;
    }

    node.val = newVal;
    return true;
  }

  // Insert a new node with the value at the given index
  insert(index, val) {
    if (index < 0 || index > this.length) return false;
    if (index === this.length) return !!this.push(val);
    if (index === 0) return !!this.unshift(val);

    var newNode = new Node(val);
    var prev = this.get(index - 1);
    newNode.next = prev.next;
    prev.next = newNode;

    this.length++;
    return true;
  }

  // Remove a node at the given index
  remove(index) {
    if (index < 0 || index >= this.length) {
      return null;
    }

    if (index === 0) {
      return this.shift();
    } else if (index === this.length - 1) {
      return this.pop();
    } else {
      let prevNode = this.get(index - 1);
      let nodeToRemove = prevNode.next;
      prevNode.next = nodeToRemove.next;

      this.length--;
      return nodeToRemove;
    }
  }

  // Reverse the order of the elements in the singly linked list
  // Swap the head and tail, traverse the list and,
  // For the next node set its next pointer to the previous node
  // While preserving the next node for further traversal
  reverse() {
    if (this.length === 1) {
      return this;
    }

    let temp = this.head;
    this.head = this.tail;
    this.tail = temp;

    let previousNode = this.tail;
    let nextNode = this.tail.next;
    this.tail.next = null;
    //console.log(`nextNode: ${nextNode.val}`);

    while (nextNode) {
      let nodeToPrepend = nextNode;
      nextNode = nextNode.next;

      // console.log(`nodeToPrepend: ${nodeToPrepend.val}`);

      // if (nextNode) {
      //   console.log(`nextNode: ${nextNode.val}`);
      // }

      nodeToPrepend.next = previousNode;
      previousNode = nodeToPrepend;

      // console.log(
      //   `nodeToPrepend.next: ${nodeToPrepend.next.val}, previousNode: ${previousNode.val}`
      // );
    }
  }
}

const list = new SinglyLinkedList();
list.push("A");
list.push("B");
list.push("C");
list.push("D");

list.traverse();

console.log("*************");
list.reverse();
list.traverse();
