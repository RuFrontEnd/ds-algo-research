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
            while (true) {
                if (currentNode.next === null) {
                    currentNode.next = newNode
                    break
                    // return：直接跳出函式，不會繼續執行迴圈外的程式。 
                    // break：直接跳出迴圈後，會繼續執行迴圈外的程式
                }
                currentNode = currentNode.next
            }
        }

        this.length++
    }
}

let myLinkedList = new LinkedList()
myLinkedList.push("Mike")
myLinkedList.push("Harry")
myLinkedList.push("Jenny")
console.log('myLinkedList', myLinkedList)


