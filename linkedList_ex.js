const util = require("util");
const { LinkedList } = require("./linkedList.js");

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
// console.log(
//   util.inspect(
//     JSON.parse(JSON.stringify(myLinkedList_5)),
//     false,
//     null,
//     true /* enable colors */
//   )
// );

let myLinkedList_6 = new LinkedList();
myLinkedList_6.push("Mike");
myLinkedList_6.push("Harry");
myLinkedList_6.push("Jenny");
myLinkedList_6.get(1);
console.log(myLinkedList_6.get(0));


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

module.exports = { LinkedList };
