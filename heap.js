// min heap
class MinHeap {
  constructor() {
    this.data = []
  }

  // 取得父子節點索引
  getParentIndex(nodeIndex) {
    return Math.floor((nodeIndex - 1) / 2)
  }

  getLeftChildIndex(parentNodeIndex) {
    return 2 * parentNodeIndex + 1
  }

  getRightChildIndex(parentNodeIndex) {
    return 2 * parentNodeIndex + 2
  }

  // 交換兩個節點
  swap(i, j) {
    [this.data[i], this.data[j]] = [this.data[j], this.data[i]]
  }

  // 插入新值
  insert(value) {
    this.data.push(value)
    this.heapifyUp() // 往上調整
  }

  heapifyUp() {
    let index = this.data.length - 1
    while (index > 0) {
      let parentIndex = this.getParentIndex(index)
      if (this.data[parentIndex] > this.data[index]) {
        this.swap(parentIndex, index)
        index = parentIndex
      } else {
        break
      }
    }
  }

  heapifyDown() {
    let index = 0
    while (this.getLeftChildIndex(index) < this.data.length) {
      let smallerChildIndex = this.getLeftChildIndex(index)
      let rightChildIndex = this.getRightChildIndex(index)

      if (
        rightChildIndex < this.data.length &&
        this.data[rightChildIndex] < this.data[smallerChildIndex]
      ) {
        smallerChildIndex = rightChildIndex
      }

      if (this.data[index] > this.data[smallerChildIndex]) {
        this.swap(index, smallerChildIndex)
        index = smallerChildIndex
      } else {
        break
      }
    }
  }

  // 取出最小值
  extractMin() {
    if (this.data.length === 0) return null
    if (this.data.length === 1) return this.data.pop()

    const min = this.data[0]
    this.data[0] = this.data.pop() // 把最後一個移到根
    this.heapifyDown() // 往下調整
    return min
  }

  // 查看最小值
  peek() {
    return this.data[0] ?? null
  }
}

const heap = new MinHeap()

heap.insert(5)
heap.insert(3)
heap.insert(8)
heap.insert(1)

console.log(heap.data) // [1, 3, 8, 5] (符合 min heap 結構)

console.log(heap.extractMin()) // 1
console.log(heap.extractMin()) // 3
console.log(heap.extractMin()) // 5
console.log(heap.extractMin()) // 8

