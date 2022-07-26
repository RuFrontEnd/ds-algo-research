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

console.log(bubbleSort(numbers));
