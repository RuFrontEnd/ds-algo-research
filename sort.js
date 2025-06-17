// Buble Sort
// compare adjecent elements and swaps them if they are in the wrong order.

const numbers = [99, 44, 6, 2, 1, 5, 63, 87, 283, 4, 0];

// O(N^2)
function bubbleSort_loop(arr) {
  let step = 0;
  for (let i = 0; i <= arr.length - 2; i++) {
    for (let j = arr.length - 1; j >= i + 1; j--) {
      if (arr[j] < arr[j - 1]) {
        // swap arr[j] and arr[j - 1]
        let temp = arr[j];
        arr[j] = arr[j - 1];
        arr[j - 1] = temp;
        step++;
      }
    }
  }
  console.log("It takes " + step + " steps to complete.");
  console.log(arr);
}

// console.log(bubbleSort_loop(numbers));

// Selection Sort

const selectionSort = (nums) => {
  const length = nums.length;

  for (let i = 0; i < length; i++) {
    // n
    let min = i,
      temp = nums[i];

    for (let j = i + 1; j < length; j++) {
      // n
      if (nums[j] < nums[min]) {
        min = j;
      }
    }

    nums[i] = nums[min];
    nums[min] = temp;
  }

  return nums;
};

// console.log(selectionSort(numbers));

// insertion sort
// worst O(N^2)
// best O(N)
// average O(N^2)
// Keeping inserting a new value into a sorted array.
// Insert it to the correct spot so the sorted array remains sorted.
const insertionSort = (arr) => {
  for (let j = 1; j <= arr.length - 1; j++) {
    // j is arr index
    let key = arr[j];
    let i = j - 1;
    while (i >= 0 && arr[i] > key) {
      arr[i + 1] = arr[i];
      i -= 1;
    }
    arr[i + 1] = key;
  }

  return arr;
};

// console.log(insertionSort([14, -4, 17, 6, 22, 1, -5]));
//             i    j
//                  start from here

// Merge Sort
const merge = (leftNums, rightNums) => {
  let l = 0;
  let r = 0;
  const output = [];

  while (l < leftNums.length && r < rightNums.length) {
    output.push(leftNums[l] >= rightNums[r] ? rightNums[r++] : leftNums[l++]);
  }

  while (l < leftNums.length) output.push(leftNums[l++]);
  while (r < rightNums.length) output.push(rightNums[r++]);

  return output;
};

const mergeSort = (nums) => {
  if (nums.length <= 1) return nums; // base case: 長度為1不用排序

  const mid = Math.floor(nums.length / 2);
  const left = mergeSort(nums.slice(0, mid)); // 左半邊排序
  const right = mergeSort(nums.slice(mid)); // 右半邊排序

  return merge(left, right); // 合併左右兩邊
};

// console.log(mergeSort(numbers));
