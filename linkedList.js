const cloneDeep = require("lodash/cloneDeep");
// 1. nonsequential memory location.
// 2. only contains head & length property.
// 3. consists of nodes, each node has a value point to another node.

// advantages
// 1. elements can be inserted into it indefinitely,compared to array, it does't need to be resized.
// 2. very fast insertion and deletion compared to array.

// disadvantages
// 1. take more memory to store because of their pointer(point to next value).
// 2. nodes must read in order from beginning, because it is a sequential access.
// 3. nodes are stored noncontiguos, it requires more time to access individual elements.
// 4. hard to reverse.

// linkedList v.s. array
// linkedList
//  1. does not have indices(index numbers).
//  2. connection between nodes are a "next" pointer.
//  3. random access is not allowed. (must go throw each node)
// array
//  1. items are indexed in order.
//  2. insertion and deletion are expensive.
//  3. elements can quickly be accessed with a specific index.

class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
    this.length = 0;
  }

  push(value) {
    let newNode = new Node(value);
    let currentNode = this.head;

    if (this.head === null) {
      this.head = newNode;
    } else {
      while (true) {
        // search O(n)
        if (currentNode.next === null) {
          currentNode.next = newNode;
          break;
          // return：直接跳出函式，不會繼續執行迴圈外的程式。
          // break：直接跳出迴圈後，會繼續執行迴圈外的程式
        }
        currentNode = currentNode.next; // insert O(1)
      }
    }

    this.length++;
  }

  pop() {
    if (this.head === null) {
      return null;
    } else if (this.length === 1) {
      let temp = this.head;
      this.head === null;
      this.length = 0;
      return temp;
    } else {
      let currentNode = this.head,
        currentIndex = 1;

      while (currentIndex !== this.length - 1) {
        currentNode = currentNode.next;
        currentIndex++;
      }
      let temp = currentNode.next;
      currentNode.next = null;
      this.length--;
      return temp;
    }
  }

  shift() {
    if (this.head === null) {
      return null;
    } else if (this.head.length === 1) {
      let temp = this.head;
      temp.next = null;
      this.head === null;
      this.length = 0;
      return temp;
    } else {
      let temp = cloneDeep(this.head);
      temp.next = null;
      this.head = this.head.next;
      this.length--;
      return temp;
    }
  }

  unShift(value) {
    let newNode = new Node(value);
    let createNode = cloneDeep(newNode);
    if (this.head === null) {
      this.head = newNode;
    } else {
      let temp = this.head;
      this.head = newNode;
      this.head.next = temp;
    }

    this.length++;
    return createNode;
  }

  insertAt(index, value) {
    if (index > this.length || index < 0) return;
    if (index === 0) {
      this.unShift(value);
      return;
    }

    let currentNode = this.head,
      currentNodeI = 0,
      newNode = new Node(value);

    while (currentNodeI !== index - 1) {
      currentNode = currentNode.next;
      currentNodeI++;
    }

    newNode.next = currentNode.next;
    currentNode.next = newNode;
    this.length++;
  }

  removeAt(index) {
    if (this.head === null || index < 0) {
      return null;
    } else if (index === 0) {
      return this.shift();
    } else if (index === this.length) {
      return this.pop();
    }

    let currentNode = this.head,
      currentI = 0;

    while (currentI !== index) {
      currentNode = currentNode.next;
      currentI++;
    }

    let temp = currentNode.next;
    currentNode.next = currentNode.next.next;
    this.length--;
    return temp;
  }

  get(index) {
    if (index > this.length || index < 0) return null;
    let currentNode = this.head,
      currentI = 0;

    while (currentI !== index) {
      currentNode = currentNode.next;
      currentI++;
    }

    return currentNode.value;
  }
}

module.exports = { LinkedList };
