class MaxBinaryHeap {
  constructor() {
    this.values = [41, 39, 33, 18, 27, 12];
  }

  // Insert the new value at the end and bubble up to the right spot
  insert(value) {
    this.values.push(value);
    this.bubbleUp(this.values.length - 1);
  }

  bubbleUp(idx) {
    let parentIdx = Math.floor((idx - 1) / 2);

    if (parentIdx < 0) return;

    let inserted = this.values[idx];
    let parent = this.values[parentIdx];

    if (inserted > parent) {
      this.values[parentIdx] = inserted;
      this.values[idx] = parent;

      this.bubbleUp(parentIdx);
    } else {
      return;
    }
  }

  extractMax() {
    let max = this.values[0];
    let last = this.values[this.values.length - 1];

    this.values[0] = last;
    this.values.pop();

    this.bubbleDown(0);
    return max;
  }

  bubbleDown(idx) {
    let leftChildIndex = 2 * idx + 1;
    let rightChildIndex = 2 * idx + 2;

    let leftChildValue = this.values[leftChildIndex];
    let rightChildValue = this.values[rightChildIndex];

    if (leftChildValue === undefined && rightChildValue === undefined) {
      return;
    }

    let maxChildIndex;

    if (leftChildValue === undefined) {
      maxChildIndex = rightChildIndex;
    } else if (rightChildValue === undefined) {
      maxChildIndex = leftChildIndex;
    } else if (leftChildValue > rightChildValue) {
      maxChildIndex = leftChildIndex;
    } else {
      maxChildIndex = rightChildIndex;
    }

    let currentValue = this.values[idx];
    if (currentValue < this.values[maxChildIndex]) {
      let maxChildValue = this.values[maxChildIndex];
      this.values[idx] = maxChildValue;
      this.values[maxChildIndex] = currentValue;
      this.bubbleDown(maxChildIndex);
    }
  }
}

let heap = new MaxBinaryHeap();
heap.insert(55);
//heap.insert(45);
console.log(heap.values);

let max = heap.extractMax();
console.log(`max: ${max}`);

max = heap.extractMax();
console.log(`max: ${max}`);

console.log(heap.values);
