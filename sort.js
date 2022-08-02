// Buble Sort

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

// console.log(bubbleSort(numbers));

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

// Insertion Sort


