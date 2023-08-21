// write a function that given a sorted array of integers and a number.
// Find it there's any pair in the array that has average of the given number.
// Find all of them. There might be multiple pairs fit the condition.
// EX:
// averagePair([-11,0,1,2,3,9,14,17,21], 1.5)
// the number pair is -11 & 4, 0 & 3, 1 & 2

const numbers = [-11, 0, 1, 2, 3, 9, 14, 17, 21],
  average = 1.5;

// counter
function averagePair_counter(arr, avg) {
  let number = avg * 2;
  let table = {};
  let pairs = [];

  arr.forEach((arrItem) => {
    table[arrItem] = true;
  });

  arr.forEach((arrItem) => {
    if (table[number - arrItem]) {
      pairs.push([arrItem, number - arrItem]);
      table[number - arrItem] = false;
      table[arrItem] = false;
    }
  });

  return pairs;
}

console.log(averagePair_counter(numbers, average));

// pointer
function averagePair_pointer(arr, avg) {
  // the arra must be sorted
  let left = 0,
    right = arr.length - 1,
    pairs = [];

  while (right > left) {
    let temp_avg = (arr[right] + arr[left]) / 2;
    if (temp_avg > avg) {
      right--;
    } else if (temp_avg < avg) {
      left++;
    } else if (temp_avg === avg) {
      pairs.push([arr[right], arr[left]]);
      right--;
      left++;
    }
  }

  return pairs;
}

// console.log(averagePair_pointer(numbers, average));

//   *                          *
// [-11, 0, 1, 2, 3, 9, 14, 17, 21] // (-11 + 21) / 2 > 1.5
//   *                      *
// [-11, 0, 1, 2, 3, 9, 14, 17, 21] // (-11 + 17) / 2 > 1.5
//   *                  *
// [-11, 0, 1, 2, 3, 9, 14, 17, 21] // (-11 + 14) / 2 === 1.5
//       *           *
// [-11, 0, 1, 2, 3, 9, 14, 17, 21] // (0 + 9) / 2 > 1.5
//       *        *
// [-11, 0, 1, 2, 3, 9, 14, 17, 21] // (0 + 3) / 2 === 1.5
//          *  *
// [-11, 0, 1, 2, 3, 9, 14, 17, 21] // (1 + 2) / 2 === 1.5
//          *R *L
// [-11, 0, 1, 2, 3, 9, 14, 17, 21] // left > right stop while loop

// write a function that checks if the input string is a palindrome. Palindrome is a word that can be read forwards and backwards.

function palindrome(string) {
  let i = 0,
    j = string.length - 1;

  while (i < j) {
    if (string[i] !== string[j]) return false;
    i++;
    j--;
  }

  return true;
}

// console.log(palindrome("tacocat"));
// console.log(palindrome("foobar"));

// subsepqunce problem
// A subsequnece of a string is a new string that is formed from the original string by deleting some(can be none) of the characters without disturbing the relative positions of the remaning characters.

function isSubsepqunce(string, sentence) {
  if (string.length > sentence || string.length === 0) return false;
  let i = 0,
    j = 0;

  while (j < sentence.length) {
    if (i === string.length) return true;
    if (string[i] === sentence[j]) {
      i++;
    }

    j++;
  }

  return false;
}

// console.log(isSubsepqunce("hello", "hello Dear"));
// console.log(isSubsepqunce("book", "brooklyn"));
// console.log(isSubsepqunce("abc", "bac"));
// console.log(isSubsepqunce("abcdef", "abc"));
// console.log(isSubsepqunce("", "abc"));
