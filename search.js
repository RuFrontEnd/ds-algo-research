const util = require("util");
const tree = require("./tree");
// Linear Search (Sequenctial Search) O(n)

let beasts = ["Centaur", "Godzilla", "Mosura", "Minotaur", "Hydra", "Nessie"];

// console.log(beasts.indexOf("Godzilla"));

// console.log(beasts.findIndex((beast) => beast === "Godzilla"));

// console.log(beasts.find((beast) => beast === "Godzilla"));

// console.log(beasts.includes("Godzilla"));

// Binary Search O(LogN)
const numbers = [1, 4, 6, 9, 12, 34, 45, 49]; // have been sorted
// const numbers = [1, 4, 6, 9, 12, 38, 45, 49]; // none of target

let minI = 0, // 4
  maxI = numbers.length - 1,
  found = false,
  target = 34;

while (!found) {
  const middleI = Math.ceil((minI + maxI) / 2);

  if (maxI === middleI || minI === middleI) break;

  if (numbers[middleI] > target) {
    maxI = middleI;
  } else if (numbers[middleI] < target) {
    minI = middleI;
  } else if (numbers[middleI] === target) {
    found = true;
    break;
  }
}

// console.log("found", found);

// Travesal

// Breath Fist Search (BFS)
const numberTree = new tree.BinarySearchTree();
numberTree.insert(9);
numberTree.insert(4);
numberTree.insert(6);
numberTree.insert(20);
numberTree.insert(170);
numberTree.insert(15);
numberTree.insert(1);

console.log(
  util.inspect(JSON.parse(JSON.stringify(numberTree)), false, null, true)
);
