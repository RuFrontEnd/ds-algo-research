const util = require("util");
const { LinkedList } = require("./linkedList.js");
// stack
// add / remove something in the top.
// last in, first out (LIFO).
// elements have no index.
// could be implement by LinkedList or Array

class Stack extends LinkedList {
  constructor() {
    super();
  }
  // disabled methods
  shift() {}
  unShift() {}
  insertAt() {}
  removeAt() {}
  // replaced methods
  get() {
    let currentNode = this.head;
    while (currentNode.next !== null) {
      currentNode = currentNode.next;
    }

    return currentNode.value;
  }
}

let myStack = new Stack();
myStack.push("Mike");
myStack.push("Harry");
myStack.push("Jenny");
myStack.pop();
console.log("myStack.get()", myStack.get());
console.log(
  util.inspect(
    JSON.parse(JSON.stringify(myStack)),
    false,
    null,
    true /* enable colors */
  )
);

module.exports = { Stack };
