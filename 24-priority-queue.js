class Node {
  constructor(val, priority) {
    this.val = val;
    this.priority = priority;
  }
}

class PriorityQueue {
  constructor() {
    this.values = [];
  }

  enqueue(val, priority) {
    let newNode = new Node(val, priority);
    this.values.push(newNode);

    this.bubbleUp(this.values.length - 1);
  }

  bubbleUp(idx) {
    let newNode = this.values[idx];
    let parentIdx = Math.floor((idx - 1) / 2);

    if (parentIdx < 0) return;

    let parentNode = this.values[parentIdx];

    if (newNode.priority < parentNode.priority) {
      this.values[parentIdx] = newNode;
      this.values[idx] = parentNode;

      this.bubbleUp(parentIdx);
    } else {
      return;
    }
  }

  dequeue() {
    let topNode = this.values[0];
    let lastIndex = this.values.length - 1;
    let lastNode = this.values[lastIndex];

    this.values[0] = lastNode;
    this.values.pop();

    this.bubbleDown(0);

    return topNode;
  }

  bubbleDown(idx) {
    let leftChildIndex = 2 * idx + 1;
    let rightChildIndex = 2 * idx + 2;

    let leftChild = this.values[leftChildIndex];
    let rightChild = this.values[rightChildIndex];

    if (leftChild === undefined && rightChild === undefined) {
      return;
    }

    // console.log(`Left child: ${JSON.stringify(leftChild)}`);
    // console.log(`Right child: ${JSON.stringify(rightChild)}`);

    let minChildIndex;

    if (leftChild === undefined) {
      return;
    } else if (rightChild === undefined) {
      minChildIndex = leftChildIndex;
    } else if (leftChild.priority < rightChild.priority) {
      minChildIndex = leftChildIndex;
    } else {
      minChildIndex = rightChildIndex;
    }

    //console.log(`MinChildIndex: ${minChildIndex}`);

    let currentValue = this.values[idx].priority;
    let currentNode = this.values[idx];

    if (currentValue > this.values[minChildIndex].priority) {
      let minChild = this.values[minChildIndex];
      this.values[idx] = minChild;
      this.values[minChildIndex] = currentNode;
      this.bubbleDown(minChildIndex);
    }
  }
}

let emr = new PriorityQueue();
emr.enqueue("Common cold", 5);
emr.enqueue("Glass in foot", 3);
emr.enqueue("Low fever", 4);
emr.enqueue("Broken arm", 2);
emr.enqueue("Gunshot wound", 1);
console.log(emr.values);

let job = emr.dequeue();
console.log(`job: ${JSON.stringify(job)}`);
console.log(emr.values);

job = emr.dequeue();
console.log(`job: ${JSON.stringify(job)}`);
console.log(emr.values);

job = emr.dequeue();
console.log(`job: ${JSON.stringify(job)}`);
console.log(emr.values);

job = emr.dequeue();
console.log(`job: ${JSON.stringify(job)}`);
console.log(emr.values);

job = emr.dequeue();
console.log(`job: ${JSON.stringify(job)}`);
console.log(emr.values);

job = emr.dequeue();
console.log(`job: ${JSON.stringify(job)}`);
console.log(emr.values);
