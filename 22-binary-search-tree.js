class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

class BinarySearchTree {
  constructor() {
    this.root = null;
  }

  insert(value) {
    let node = new Node(value);

    if (this.root === null) {
      this.root = node;
      return this;
    }

    let current = this.root;

    while (true) {
      if (current.value === value) {
        return undefined;
      }

      if (value < current.value) {
        if (current.left === null) {
          current.left = node;
          return this;
        }
        current = current.left;
      }

      if (value > current.value) {
        if (current.right === null) {
          current.right = node;
          return this;
        }

        current = current.right;
      }
    }
  }

  contains(value) {
    if (this.root === null) {
      return false;
    }

    let current = this.root;

    while (current) {
      if (current.value === value) {
        return true;
      }

      if (value < current.value) {
        current = current.left;
      } else {
        current = current.right;
      }
    }

    return false;
  }

  bfs() {
    if (this.root === null) {
      return null;
    }

    let queue = [];
    let visited = [];

    queue.unshift(this.root);

    while (queue.length !== 0) {
      let next = queue.pop();
      visited.push(next.value);

      if (next.left) {
        queue.unshift(next.left);
      }

      if (next.right) {
        queue.unshift(next.right);
      }
    }

    return visited;
  }

  dfsPreOrder() {
    if (this.root === null) {
      return null;
    }

    let visited = [];

    function traverse(node) {
      visited.push(node.value);

      if (node.left) traverse(node.left);
      if (node.right) traverse(node.right);
    }

    traverse(this.root);
    return visited;
  }

  dfsPostOrder() {
    if (this.root === null) {
      return null;
    }

    let visited = [];

    function traverse(node) {
      if (node.left) traverse(node.left);
      if (node.right) traverse(node.right);

      visited.push(node.value);
    }

    traverse(this.root);
    return visited;
  }

  dfsInOrder() {
    if (this.root === null) {
      return null;
    }

    let visited = [];

    function traverse(node) {
      if (node.left) traverse(node.left);
      visited.push(node.value);
      if (node.right) traverse(node.right);
    }

    traverse(this.root);
    return visited;
  }
}

let bst = new BinarySearchTree();
bst.insert(10);
bst.insert(5);
bst.insert(13);
bst.insert(2);
bst.insert(7);
bst.insert(11);
bst.insert(16);

let result = bst.contains(5);
console.log(result);

let values = bst.bfs();
console.log(values);

values = bst.dfsPreOrder();
console.log(values);

values = bst.dfsPostOrder();
console.log(values);

values = bst.dfsInOrder();
console.log(values);
