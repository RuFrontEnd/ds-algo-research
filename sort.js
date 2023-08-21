// Buble Sort
// compare adjecent elements and swaps them if they are in the wrong order.

const numbers = [99, 44, 6, 2, 1, 5, 63, 87, 283, 4, 0];

const bubbleSort = (array) => {
  const sort = (array) => {
    const items = [...array];

    let passCount = 0;

    for (i = 0; i < items.length - 2; i++) {
      if (items[i + 1] > items[i]) {
        passCount += 1;
      }
    }

    let isPass = passCount === items.length - 1;

    if (isPass) return items;

    for (i = 0; i < items.length - 1; i++) {
      if (items[i] > items[i + 1]) {
        const temp = items[i];
        items[i] = items[i + 1];
        items[i + 1] = temp;
      }
    }

    return sort(items);
  };

  return sort(array);
};

bubbleSort(numbers);

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
    let min = i, // 1
      temp = nums[i]; // 99

    for (let j = i + 1; j < length; j++) {
      if (nums[j] < nums[min]) {
        // 6 < 44
        min = j; // 2
      }
    }

    nums[i] = nums[min];
    nums[min] = temp;
  }

  return nums;
};

// console.log(selectionSort(numbers));

// Merge Sort

const merge = (left, right) => {
  const result = [];
  let leffIndex = 0;
  let rightIndex = 0;

  // while(leffIndex)
};

const mergeSort = (nums) => {
  if (array.length === 1) {
    return arry;
  }

  const length = array.length;
  const middle = Math.floor(length / 2);
  const left = arrary.slice(0, middle);
  const right = array.slice(middle);

  return merge(mergeSort(left), mergeSort(right));
};



// console.log(mergeSort(numbers));
