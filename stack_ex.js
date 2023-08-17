const util = require("util");
const { Stack } = require("./stack.js");

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
