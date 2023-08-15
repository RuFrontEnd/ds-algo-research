const util = require("util");
const cloneDeep = require("lodash/cloneDeep");
// 1. nonsequential memory location.
// 2. only contains head & length property.
// 3. consists of nodes, each node has a value point to another node.

// advantages
// 1. elements can be inserted into it indefinitely,compared to array, it does't need to be resized.
// 2. very fast insertion and deletion compared to array.

// disadvantages

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
}

let myLinkedList = new LinkedList();
myLinkedList.push("Mike");
myLinkedList.push("Harry");
myLinkedList.push("Jenny");
let popValue = myLinkedList.pop();
// console.log('popValue', popValue)
// console.log(
//     util.inspect(
//         JSON.parse(JSON.stringify(myLinkedList)),
//         false,
//         null,
//         true /* enable colors */
//     )
// );

let myLinkedList_2 = new LinkedList();
myLinkedList_2.push("Mike");
myLinkedList_2.push("Harry");
myLinkedList_2.push("Jenny");
let shiftValue = myLinkedList_2.shift();
// console.log('shiftValue', shiftValue)
// console.log(
//     util.inspect(
//         JSON.parse(JSON.stringify(myLinkedList_2)),
//         false,
//         null,
//         true /* enable colors */
//     )
// );

let myLinkedList_3 = new LinkedList();
myLinkedList_3.push("Harry");
myLinkedList_3.push("Jenny");
let unShiftValue = myLinkedList_3.unShift("Mike");
// console.log("unShiftValue", unShiftValue);
// console.log(
//   util.inspect(
//     JSON.parse(JSON.stringify(myLinkedList_3)),
//     false,
//     null,
//     true /* enable colors */
//   )
// );

let myLinkedList_4 = new LinkedList();
myLinkedList_4.push("Mike");
myLinkedList_4.push("Harry");
myLinkedList_4.push("Jenny");
myLinkedList_4.insertAt(0, "Rayne");
// console.log(
//   util.inspect(
//     JSON.parse(JSON.stringify(myLinkedList_4)),
//     false,
//     null,
//     true /* enable colors */
//   )
// );

let myLinkedList_5 = new LinkedList();
myLinkedList_5.push("Mike");
myLinkedList_5.push("Harry");
myLinkedList_5.push("Jenny");
myLinkedList_5.removeAt(1);
console.log(
  util.inspect(
    JSON.parse(JSON.stringify(myLinkedList_5)),
    false,
    null,
    true /* enable colors */
  )
);

// extra => object call by reference

const obj_1 = {
  value: 1,
  next: {
    value: 2,
    next: null,
  },
};

let obj_1_var = obj_1;

obj_1_var.next = null;

// console.log("obj_1", obj_1);

const obj_2 = {
  value: 1,
  next: {
    value: 2,
    next: null,
  },
};

let obj_2_var = obj_2;

obj_2.next = null;

// console.log("obj_2_var", obj_2_var);
