// Node structure for B+ Tree
class BPlusTreeNode {
  constructor(isLeaf = false) {
    this.isLeaf = isLeaf; // Is this node a leaf node?
    this.keys = []; // Keys in the node
    this.children = []; // Children pointers or data pointers if leaf
    this.next = null; // Pointer to the next leaf node for leaf nodes
  }
}

class BPlusTree {
  constructor(order) {
    this.order = order; // Maximum number of children for non-leaf nodes
    this.root = new BPlusTreeNode(true); // Start with a leaf node
  }

  // Find the correct leaf node to insert a key
  _findLeafNode(node, key) {
    while (!node.isLeaf) {
      let i = 0;
      while (i < node.keys.length && key >= node.keys[i]) {
        i++;
      }
      node = node.children[i];
    }
    return node;
  }

  // Insert a key into the tree
  insert(key) {
    let leaf = this._findLeafNode(this.root, key);

    // Insert the key in the leaf node
    this._insertIntoLeaf(leaf, key);

    // If the leaf node is full, split the leaf node
    if (leaf.keys.length === this.order) {
      this._splitLeafNode(leaf);
    }
  }

  // Insert into leaf node and keep it sorted
  _insertIntoLeaf(node, key) {
    let i = 0;
    while (i < node.keys.length && key > node.keys[i]) {
      i++;
    }
    node.keys.splice(i, 0, key);
  }

  // Split a leaf node when it's full
  _splitLeafNode(node) {
    const newNode = new BPlusTreeNode(true);
    const midIndex = Math.ceil(node.keys.length / 2);

    // Split keys between old and new leaf
    newNode.keys = node.keys.splice(midIndex);

    // Update pointers
    newNode.next = node.next;
    node.next = newNode;

    if (node === this.root) {
      this.root = new BPlusTreeNode(false);
      this.root.keys.push(newNode.keys[0]);
      this.root.children.push(node, newNode);
    } else {
      this._insertIntoParent(node, newNode.keys[0], newNode);
    }
  }

  // Insert a new child into a parent node after a split
  _insertIntoParent(oldNode, key, newNode) {
    let parent = this._findParent(this.root, oldNode);
    let index = parent.children.indexOf(oldNode);

    // Insert key in the parent
    parent.keys.splice(index, 0, key);
    parent.children.splice(index + 1, 0, newNode);

    // If the parent is full, split the parent node
    if (parent.keys.length === this.order) {
      this._splitInternalNode(parent);
    }
  }

  // Find the parent node of a given child node
  _findParent(node, child) {
    // if (node.isLeaf || node.children[0].isLeaf) {
    //   return null;
    // }

    if (node.isLeaf) {
      return null;
    }

    console.log(`Node children: ${node.children}`);

    for (let i = 0; i < node.children.length; i++) {
      if (node.children[i] === child) {
        return node;
      } else {
        const parent = this._findParent(node.children[i], child);
        if (parent) {
          return parent;
        }
      }
    }
    return null;
  }

  // Split an internal node when it's full
  _splitInternalNode(node) {
    const newNode = new BPlusTreeNode(false);
    const midIndex = Math.ceil(node.keys.length / 2);

    // Split keys and children between old and new node
    newNode.keys = node.keys.splice(midIndex + 1);
    newNode.children = node.children.splice(midIndex + 1);

    const upKey = node.keys.pop();

    if (node === this.root) {
      this.root = new BPlusTreeNode(false);
      this.root.keys.push(upKey);
      this.root.children.push(node, newNode);
    } else {
      this._insertIntoParent(node, upKey, newNode);
    }
  }

  // Print the tree (for debugging)
  printTree(node = this.root, level = 0) {
    console.log("Level", level, node.keys);
    if (!node.isLeaf) {
      node.children.forEach((child) => this.printTree(child, level + 1));
    }
  }
}

// Example Usage:
const bptree = new BPlusTree(4); // Order of 4
bptree.insert(10);
bptree.insert(20);
bptree.insert(5);
bptree.insert(6);
bptree.insert(12);
bptree.insert(30);
bptree.insert(7);
bptree.insert(17);
bptree.printTree();
