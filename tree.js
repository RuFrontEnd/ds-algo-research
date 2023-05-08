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
const newNode = new Node(1); // { left: null, right: null, value: value }
// console.log(
//   util.inspect(
//     JSON.parse(JSON.stringify(newNode)),
//     false,
//     null,
//     true /* enable colors */
//   )
// );

// 左節點比父節點小, 右節點比父節點大
class BinarySearchTree {
  constructor() {
    this.root = null;
  }

  insert(value) {
    const newNode = new Node(value); // { left: null, right: null, value: value }

    if (this.root === null) {
      // 如果 tree 還沒有根節點
      this.root = newNode; // 則新 node 成為根節點
    } else {
      let currentNode = this.root; // 有根節點, 則起始 node 為根節點
      while (true) {
        // left
        if (value < currentNode.value) {
          // 新值比當前節點值還小
          if (!currentNode.left) { // 左邊已經沒有節點的話
            currentNode.left = newNode; // 新增新節點至左邊
            return this; // stop whie loop & 回傳整顆樹
          }
          currentNode = currentNode.left; // 當前節點變成前一節點的子左節點
        }

        // right
        if (value >= currentNode.value) {
          // 新值比當前節點值還大
          if (!currentNode.right) { // 右邊已經沒有節點的話
            currentNode.right = newNode; // 新增新節點至右邊
            return this; // stop whie loop & 回傳整顆樹
          }
          currentNode = currentNode.right; // 當前節點變成前一節點的子右節點
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

  bfs() {
    let currentNode = this.root;
    let list = [];
    let queue = [];
    queue.push(currentNode);

    while (queue.length > 0) {
      currentNode = queue.shift();
      list.push(currentNode.value);
      if (currentNode.left) {
        queue.push(currentNode.left);
      }
      if (currentNode.right) {
        queue.push(currentNode.right);
      }

      // console.log(
      //   util.inspect(
      //     JSON.parse(JSON.stringify(queue)),
      //     false,
      //     null,
      //     true /* enable colors */
      //   )
      // );
    }

    return list;
  }
}

const tree = new BinarySearchTree();
tree.insert(9);
tree.insert(4);
tree.insert(6);
tree.insert(20);
tree.insert(170);
tree.insert(15);
tree.insert(1);

// console.log(
//   util.inspect(
//     JSON.parse(JSON.stringify(tree)),
//     false,
//     null,
//     true /* enable colors */
//   )
// );

console.log(tree.bfs());

// console.log("--- lookup ---\n", tree.lookup(20));

// Binary Heap =>

module.exports = { BinarySearchTree };
