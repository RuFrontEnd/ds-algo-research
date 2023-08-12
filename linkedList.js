const util = require("util");
const cloneDeep = require('lodash/cloneDeep')
// 1. nonsequential memory location.
// 2. only contains head & length property.
// 3. consists of nodes, each node has a value point to another node.

// advantages
// 1. elements can be inserted into it indefinitely,compared to array, it does't need to be resized.
// 2. very fast insertion and deletion compared to array.

// disadvantages

class Node {
    constructor(value) {
        this.value = value
        this.next = null
    }
}

class LinkedList {
    constructor() {
        this.head = null;
        this.length = 0
    }

    push(value) {
        let newNode = new Node(value)
        let currentNode = this.head

        if (this.head === null) {
            this.head = newNode
        } else {
            while (true) { // search O(n)
                if (currentNode.next === null) {
                    currentNode.next = newNode
                    break
                    // return：直接跳出函式，不會繼續執行迴圈外的程式。 
                    // break：直接跳出迴圈後，會繼續執行迴圈外的程式
                }
                currentNode = currentNode.next // insert O(1)
            }
        }

        this.length++
    }

    pop() {
        if (this.head === null) { return null }
        else if (this.length === 1) {
            let temp = this.head
            this.head === null
            this.length = 0
            return temp
        } else {
            let currentNode = this.head,
                currentIndex = 1

            while (currentIndex !== this.length - 1) {
                currentNode = currentNode.next
                currentIndex++
            }
            let temp = currentNode.next
            currentNode.next = null
            this.length--
            return temp
        }
    }

    shift() {
        if (this.head === null) {
            return null
        } else if (this.head.length === 1) {
            let temp = this.head
            temp.next = null
            this.head === null
            this.length = 0
            return temp
        } else {
            let temp = cloneDeep(this.head)
            temp.next = null
            this.head = this.head.next
            this.length--
            return temp
        }
    }

    unShift(value) {
        let newNode = new Node(value)
        let createNode = cloneDeep(newNode)
        if (this.head === null) {
            this.head = newNode
        } else {
            let temp = this.head
            this.head = newNode
            this.head.next = temp
        }

        this.length++
        return createNode
    }
}

let myLinkedList = new LinkedList()
myLinkedList.push("Mike")
myLinkedList.push("Harry")
myLinkedList.push("Jenny")
let popValue = myLinkedList.pop()
// console.log('popValue', popValue)
// console.log(
//     util.inspect(
//         JSON.parse(JSON.stringify(myLinkedList)),
//         false,
//         null,
//         true /* enable colors */
//     )
// );

let myLinkedList_2 = new LinkedList()
myLinkedList_2.push("Mike")
myLinkedList_2.push("Harry")
myLinkedList_2.push("Jenny")
let shiftValue = myLinkedList_2.shift()
// console.log('shiftValue', shiftValue)
// console.log(
//     util.inspect(
//         JSON.parse(JSON.stringify(myLinkedList_2)),
//         false,
//         null,
//         true /* enable colors */
//     )
// );

let myLinkedList_3 = new LinkedList()
myLinkedList_3.push("Harry")
myLinkedList_3.push("Jenny")
let unShiftValue = myLinkedList_3.unShift('Mike')
console.log('unShiftValue', unShiftValue)
console.log(
    util.inspect(
        JSON.parse(JSON.stringify(myLinkedList_3)),
        false,
        null,
        true /* enable colors */
    )
);



// extra => object call by reference

const obj_1 = {
    value: 1,
    next: 'next node'
}

let obj1_var = obj_1

obj1_var.next = null

const obj_2 = {
    value: 1,
    next: 'next node'
}

let obj2_var = obj_2

obj_2.next = null

// console.log('obj_1', obj_1)
// console.log('obj2_var', obj2_var)


