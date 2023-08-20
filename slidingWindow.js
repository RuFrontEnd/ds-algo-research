// a sliding window is a sub-list that runs over an underlying collection.
// ex:
// [a,b,c,d,e,f]
// [a,b,c]
//   [b,c,d]
//     [c,d,e]
//       [d,e,f]

// max and min sum
// write a function that calculate the max of n consecutive numbers in an array.

// O(N^2)
const maxSum = (numbers, size) => {
  if (size > numbers.length) return null;
  let i = 0,
    sum = 0;

  while (i < numbers.length - size) {
    let currentSum = 0;
    for (let j = i; j < size + i; j++) {
      currentSum += numbers[j];
    }

    if (currentSum > sum) {
      sum = currentSum;
    }

    i++;
  }

  return sum;
};

// console.log(maxSum([2, 7, 3, 0, 6, 1, -5, -12, -11], 3));

// improved O(N)
const maxSum_improved = (numbers, size) => {
  if (size > numbers.length) return null;
  let i = 0,
    sum = 0,
    currentSum = 0,
    removing = undefined,
    adding = undefined;

  for (let j = 0; j < size + i; j++) {
    currentSum += numbers[j];
  }

  while (i < numbers.length - size) {
    if (removing) {
      currentSum -= removing;
    }

    if (adding) {
      currentSum += removing;
    }

    if (currentSum > sum) {
      sum = currentSum;
    }

    removing = numbers[i];
    adding = numbers[i + size];

    i++;
  }

  return sum;
};

console.log(maxSum_improved([2, 7, 3, 0, 6, 1, -5, -12, -11], 3));
