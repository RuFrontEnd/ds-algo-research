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

        if (this.head === null) {
            this.head = newNode
        } else {

        }

        this.length++
    }
}

let myLinkedList = new LinkedList()
// myLinkedList.push("Mike")


