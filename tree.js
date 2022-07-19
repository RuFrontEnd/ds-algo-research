const util = require("util");
// binary tree => each node can only have zero or one or two tree node

// level 0: 2^0 = 1;
// level 1: 2^1 = 2;
// level 2: 2^2 = 4;
// level 3: 2^3 = 8;

// # of nodes = 2^n - 1
// log nodes = n

// binary search tree => any parent node which left child node is smaller than it's parent node, and right child node is bigger
// lookup O(log n)
// insert O(log n)
// delete O(log n)

class Node {
  constructor(value) {
    this.left = null;
    this.right = null;
    this.value = value;
  }
}

class BinarySearchTree {
  constructor() {
    this.root = null;
  }

  insert(value) {
    const newNode = new Node(value);

    if (this.root === null) {
      this.root = newNode;
    } else {
      let currentNode = this.root;
      while (true) {
        // left
        if (value < currentNode.value) {
          if (!currentNode.left) {
            currentNode.left = newNode;
            return this; // stop whie loop
          }
          currentNode = currentNode.left;
        }

        // right
        if (value >= currentNode.value) {
          if (!currentNode.right) {
            currentNode.right = newNode;
            return this; // stop whie loop
          }
          currentNode = currentNode.right;
        }
      }
    }
  }
  lookup(value) {
    if (!this.root) {
      return false;
    }
    let currentNode = this.root;

    while (currentNode) {
      if (value < currentNode.value) {
        currentNode = currentNode.left;
      } else if (value > currentNode.value) {
        currentNode = currentNode.right;
      } else if (currentNode.value === value) {
        return currentNode;
      }
    }
    return false;
  }
  remove(value) {}
}

const tree = new BinarySearchTree();
tree.insert(9);
tree.insert(4);
tree.insert(6);
tree.insert(20);
tree.insert(170);
tree.insert(15);
tree.insert(1);

console.log(
  util.inspect(
    JSON.parse(JSON.stringify(tree)),
    false,
    null,
    true /* enable colors */
  )
);

console.log("--- lookup ---\n", tree.lookup(20));


// Binary Heap => 

