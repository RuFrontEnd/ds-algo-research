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
    this.value = value;
    this.left = null;
    this.right = null;
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

  treeInsert(node) {
    let y = null;
    let x = this.root;

    while (x !== null) {
      y = x
      if (node.key < x.key) {
        x = x.left
      } else {
        x = x.right
      }
    } // 讓 y 到達這個 tree 的最後一個 root

    if (y === null) {
      this.root = node
    } else if (node.key < y.key) {
      y.left = node
    } else {
      y.right = node
    }

  }

}

let bst = new BinarySearchTree();
bst.treeInsert(new Node(1))
bst.treeInsert(new Node(2))
bst.treeInsert(new Node(3))
bst.treeInsert(new Node(4))
bst.treeInsert(new Node(5))

console.log(
  util.inspect(
    JSON.parse(JSON.stringify(bst)),
    false,
    null,
    true /* enable colors */
  )
);

bst.treeInsert(new Node(5))

console.log(
  util.inspect(
    JSON.parse(JSON.stringify(bst)),
    false,
    null,
    true /* enable colors */
  )
);


module.exports = { BinarySearchTree };
