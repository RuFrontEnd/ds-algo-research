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

// console.log(maxSum_improved([2, 7, 3, 0, 6, 1, -5, -12, -11], 3));

// pointer + sliding window
// Write a function called minSubLength which accepts two parameters, an array of positive integers and a positive interger.
// This function should return the minimal length of a continuous subarray - the sum of elements inside this subarray has to be greater than or equal to the positive integer parameter.
// If subarray not found, then return 0

// TODO: 待整理
// function minSubLength(arr, sum) {
//   let start = 0,
//     end = 0,
//     total = 0,
//     minLength = Infinity;

//   while (start < arr.length) {
//     if (total < sum && end < arr.length) {
//       total += arr[end];
//       end++;
//     } else if (total >= sum) {
//       let currentLength = end - start;
//       if (minLength > currentLength) {
//         minLength = currentLength;
//       }
//       total -= arr[start];
//       start++;
//     } else if (end > arr.length) {
//       break;
//     }
//   }

//   if (minLength === Infinity) {
//     return -1;
//   } else {
//     return minLength;
//   }
// }

// console.log(minSubLength([9, 8, 1, 4, 9, 5, 1, 2], 11));
// console.log(minSubLength([8, 1, 6, 15, 3, 16, 5, 7, 14, 30, 12], 60));

// counter + pointer + sliding window
// unique letters string
// write a function called uniqueLetterString, which accepts a string and returns the length of the longest substring with all distinct characters.
function uniqueLetterString(string) {
  if (string.length === 0) return 0;
  let start = 0,
    end = 0,
    letters = {},
    size = 0;

  while (end < string.length) {
    if (letters[string[end]]) {
      start = end;
      letters = {};
    } else {
      letters[string[end]] = true;
      end++;
    }

    if (end - start >= size) {
      size = end - start;
    }
  }

  return size;
}

// console.log(uniqueLetterString("thisishowwedoit"));
// console.log(uniqueLetterString("aaaaa"));
// console.log(uniqueLetterString(""));

// largest product
// the four adjacnet digits in the 1000-digit number that hava the greatest product are 9*9*8*9
let thousandDigits = [
  7,
  3,
  1,
  6,
  7,
  1,
  7,
  6,
  5,
  3,
  1,
  3,
  3,
  0,
  6,
  2,
  4,
  9,
  1,
  9,
  2,
  2,
  5,
  1,
  1,
  9,
  6,
  7,
  4,
  4,
  2,
  6,
  5,
  7,
  4,
  7,
  4,
  2,
  3,
  5,
  5,
  3,
  4,
  9,
  1,
  9,
  4,
  9,
  3,
  4,
  9,
  6,
  9,
  8,
  3,
  5,
  2,
  0,
  3,
  1,
  2,
  7,
  7,
  4,
  5,
  0,
  6,
  3,
  2,
  6,
  2,
  3,
  9,
  5,
  7,
  8,
  3,
  1,
  8,
  0,
  1,
  6,
  9,
  8,
  4,
  8,
  0,
  1,
  8,
  6,
  9,
  4,
  7,
  8,
  8,
  5,
  1,
  8,
  4,
  3,
  8,
  5,
  8,
  6,
  1,
  5,
  6,
  0,
  7,
  8,
  9,
  1,
  1,
  2,
  9,
  4,
  9,
  4,
  9,
  5,
  4,
  5,
  9,
  5,
  0,
  1,
  7,
  3,
  7,
  9,
  5,
  8,
  3,
  3,
  1,
  9,
  5,
  2,
  8,
  5,
  3,
  2,
  0,
  8,
  8,
  0,
  5,
  5,
  1,
  1,
  1,
  2,
  5,
  4,
  0,
  6,
  9,
  8,
  7,
  4,
  7,
  1,
  5,
  8,
  5,
  2,
  3,
  8,
  6,
  3,
  0,
  5,
  0,
  7,
  1,
  5,
  6,
  9,
  3,
  2,
  9,
  0,
  9,
  6,
  3,
  2,
  9,
  5,
  2,
  2,
  7,
  4,
  4,
  3,
  0,
  4,
  3,
  5,
  5,
  7,
  6,
  6,
  8,
  9,
  6,
  6,
  4,
  8,
  9,
  5,
  0,
  4,
  4,
  5,
  2,
  4,
  4,
  5,
  2,
  3,
  1,
  6,
  1,
  7,
  3,
  1,
  8,
  5,
  6,
  4,
  0,
  3,
  0,
  9,
  8,
  7,
  1,
  1,
  1,
  2,
  1,
  7,
  2,
  2,
  3,
  8,
  3,
  1,
  1,
  3,
  6,
  2,
  2,
  2,
  9,
  8,
  9,
  3,
  4,
  2,
  3,
  3,
  8,
  0,
  3,
  0,
  8,
  1,
  3,
  5,
  3,
  3,
  6,
  2,
  7,
  6,
  6,
  1,
  4,
  2,
  8,
  2,
  8,
  0,
  6,
  4,
  4,
  4,
  4,
  8,
  6,
  6,
  4,
  5,
  2,
  3,
  8,
  7,
  4,
  9,
  3,
  0,
  3,
  5,
  8,
  9,
  0,
  7,
  2,
  9,
  6,
  2,
  9,
  0,
  4,
  9,
  1,
  5,
  6,
  0,
  4,
  4,
  0,
  7,
  7,
  2,
  3,
  9,
  0,
  7,
  1,
  3,
  8,
  1,
  0,
  5,
  1,
  5,
  8,
  5,
  9,
  3,
  0,
  7,
  9,
  6,
  0,
  8,
  6,
  6,
  7,
  0,
  1,
  7,
  2,
  4,
  2,
  7,
  1,
  2,
  1,
  8,
  8,
  3,
  9,
  9,
  8,
  7,
  9,
  7,
  9,
  0,
  8,
  7,
  9,
  2,
  2,
  7,
  4,
  9,
  2,
  1,
  9,
  0,
  1,
  6,
  9,
  9,
  7,
  2,
  0,
  8,
  8,
  8,
  0,
  9,
  3,
  7,
  7,
  6,
  6,
  5,
  7,
  2,
  7,
  3,
  3,
  3,
  0,
  0,
  1,
  0,
  5,
  3,
  3,
  6,
  7,
  8,
  8,
  1,
  2,
  2,
  0,
  2,
  3,
  5,
  4,
  2,
  1,
  8,
  0,
  9,
  7,
  5,
  1,
  2,
  5,
  4,
  5,
  4,
  0,
  5,
  9,
  4,
  7,
  5,
  2,
  2,
  4,
  3,
  5,
  2,
  5,
  8,
  4,
  9,
  0,
  7,
  7,
  1,
  1,
  6,
  7,
  0,
  5,
  5,
  6,
  0,
  1,
  3,
  6,
  0,
  4,
  8,
  3,
  9,
  5,
  8,
  6,
  4,
  4,
  6,
  7,
  0,
  6,
  3,
  2,
  4,
  4,
  1,
  5,
  7,
  2,
  2,
  1,
  5,
  5,
  3,
  9,
  7,
  5,
  3,
  6,
  9,
  7,
  8,
  1,
  7,
  9,
  7,
  7,
  8,
  4,
  6,
  1,
  7,
  4,
  0,
  6,
  4,
  9,
  5,
  5,
  1,
  4,
  9,
  2,
  9,
  0,
  8,
  6,
  2,
  5,
  6,
  9,
  3,
  2,
  1,
  9,
  7,
  8,
  4,
  6,
  8,
  6,
  2,
  2,
  4,
  8,
  2,
  8,
  3,
  9,
  7,
  2,
  2,
  4,
  1,
  3,
  7,
  5,
  6,
  5,
  7,
  0,
  5,
  6,
  0,
  5,
  7,
  4,
  9,
  0,
  2,
  6,
  1,
  4,
  0,
  7,
  9,
  7,
  2,
  9,
  6,
  8,
  6,
  5,
  2,
  4,
  1,
  4,
  5,
  3,
  5,
  1,
  0,
  0,
  4,
  7,
  4,
  8,
  2,
  1,
  6,
  6,
  3,
  7,
  0,
  4,
  8,
  4,
  4,
  0,
  3,
  1,
  9,
  9,
  8,
  9,
  0,
  0,
  0,
  8,
  8,
  9,
  5,
  2,
  4,
  3,
  4,
  5,
  0,
  6,
  5,
  8,
  5,
  4,
  1,
  2,
  2,
  7,
  5,
  8,
  8,
  6,
  6,
  6,
  8,
  8,
  1,
  1,
  6,
  4,
  2,
  7,
  1,
  7,
  1,
  4,
  7,
  9,
  9,
  2,
  4,
  4,
  4,
  2,
  9,
  2,
  8,
  2,
  3,
  0,
  8,
  6,
  3,
  4,
  6,
  5,
  6,
  7,
  4,
  8,
  1,
  3,
  9,
  1,
  9,
  1,
  2,
  3,
  1,
  6,
  2,
  8,
  2,
  4,
  5,
  8,
  6,
  1,
  7,
  8,
  6,
  6,
  4,
  5,
  8,
  3,
  5,
  9,
  1,
  2,
  4,
  5,
  6,
  6,
  5,
  2,
  9,
  4,
  7,
  6,
  5,
  4,
  5,
  6,
  8,
  2,
  8,
  4,
  8,
  9,
  1,
  2,
  8,
  8,
  3,
  1,
  4,
  2,
  6,
  0,
  7,
  6,
  9,
  0,
  0,
  4,
  2,
  2,
  4,
  2,
  1,
  9,
  0,
  2,
  2,
  6,
  7,
  1,
  0,
  5,
  5,
  6,
  2,
  6,
  3,
  2,
  1,
  1,
  1,
  1,
  1,
  0,
  9,
  3,
  7,
  0,
  5,
  4,
  4,
  2,
  1,
  7,
  5,
  0,
  6,
  9,
  4,
  1,
  6,
  5,
  8,
  9,
  6,
  0,
  4,
  0,
  8,
  0,
  7,
  1,
  9,
  8,
  4,
  0,
  3,
  8,
  5,
  0,
  9,
  6,
  2,
  4,
  5,
  5,
  4,
  4,
  4,
  3,
  6,
  2,
  9,
  8,
  1,
  2,
  3,
  0,
  9,
  8,
  7,
  8,
  7,
  9,
  9,
  2,
  7,
  2,
  4,
  4,
  2,
  8,
  4,
  9,
  0,
  9,
  1,
  8,
  8,
  8,
  4,
  5,
  8,
  0,
  1,
  5,
  6,
  1,
  6,
  6,
  0,
  9,
  7,
  9,
  1,
  9,
  1,
  3,
  3,
  8,
  7,
  5,
  4,
  9,
  9,
  2,
  0,
  0,
  5,
  2,
  4,
  0,
  6,
  3,
  6,
  8,
  9,
  9,
  1,
  2,
  5,
  6,
  0,
  7,
  1,
  7,
  6,
  0,
  6,
  0,
  5,
  8,
  8,
  6,
  1,
  1,
  6,
  4,
  6,
  7,
  1,
  0,
  9,
  4,
  0,
  5,
  0,
  7,
  7,
  5,
  4,
  1,
  0,
  0,
  2,
  2,
  5,
  6,
  9,
  8,
  3,
  1,
  5,
  5,
  2,
  0,
  0,
  0,
  5,
  5,
  9,
  3,
  5,
  7,
  2,
  9,
  7,
  2,
  5,
  7,
  1,
  6,
  3,
  6,
  2,
  6,
  9,
  5,
  6,
  1,
  8,
  8,
  2,
  6,
  7,
  0,
  4,
  2,
  8,
  2,
  5,
  2,
  4,
  8,
  3,
  6,
  0,
  0,
  8,
  2,
  3,
  2,
  5,
  7,
  5,
  3,
  0,
  4,
  2,
  0,
  7,
  5,
  2,
  9,
  6,
  3,
  4,
  5,
  0,
];

function getLargestProduct(n, digits) {
  let i = 0,
    j = i + n,
    product = 1;

  while (j < digits.length) {
    let currentProduct = 1;
    for (let k = i; k < j; k++) {
      if (i === 4) {
      }
      currentProduct *= digits[k];
    }

    if (currentProduct > product) {
      product = currentProduct;
    }

    i++;
    j = i + n;
  }

  return product;
}

console.log(getLargestProduct(4, [2, 5, 8, 0, 11, 9, 6, 5, 12, 1]));
console.log(getLargestProduct(4, thousandDigits));
