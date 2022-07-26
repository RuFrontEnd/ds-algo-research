function inception() {
  console.log("I am recursive");
  inception();
}

// inception() // stop until stack overflow

let counter = 0;
function recursion() {
  console.log("counter", counter);
  if (counter > 3) return "done";
  counter++;
  recursion();
}

recursion();
// 同執行 recursion(recursion(recursion(recursion(recursion()))))
// 結果為 => recursion(recursion(recursion(recursion('done'))))
// recursion('done') 不回傳任何值 => 所以回傳值為 undefined

let count = 0;
function returnRecursion() {
  console.log("count", count);
  if (count > 3) return "done";
  count++;
  return returnRecursion();
}

console.log("returnRecursion()", returnRecursion());
// 同執行 returnRecursion(returnRecursion(returnRecursion(returnRecursion(returnRecursion()))))
// 結果為 => returnRecursion(returnRecursion(returnRecursion(returnRecursion('done'))))
// returnRecursion('done') 回傳最後一次 returnRecursion() 的值 => 所以回傳值為 'done'

// 1. identify the base case.
// 2. identify the recurse case.
// 3. Get closer and closer and return when needed. Usually you have 2 returns.

// 階層
const factorial_recursive = (number) => {
  if (number === 1) {
    return number;
  }

  return number * factorial_recursive(number - 1);
};

const factorial_loop = (number) => {
  let n = 1;

  for (let i = number; i > 0; i--) {
    n *= i;
  }

  return n;
};

console.log("factorial_recursive(5)", factorial_recursive(5));
console.log("factorial_loop(5)", factorial_loop(5));

// 費氏數列

const fibonacci_recursive = (step) => {
  if (step < 2) {
    return step;
  }
  return fibonacci_recursive(step - 1) + fibonacci_recursive(step - 2);
}; // time complexity O(n)

const fibonacci_loop = (step) => {
  let arr = [0, 1];

  for (let i = 2; i < step + 1; i++) {
    arr.push(arr[i - 2] + arr[i - 1]);
  }

  return arr[step];
}; // time complexity O(n)

console.log("fibonacci_recursive(3)", fibonacci_recursive(3));
console.log("fibonacci_loop(3)", fibonacci_loop(3));
