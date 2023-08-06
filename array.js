// lookup => O(1)
// push   => O(1)
// insert => O(n)
// delete => O(n)

// 實作
class MyArray {
  constructor() {
    this.length = 0;
    this.data = {};
  }

  get(index) {
    return this.data[index];
  }
}

const newArray = new MyArray();
// console.log("newArray", typeof newArray);

const originArray = new Array()
// console.log("originArray", originArray.proto);
