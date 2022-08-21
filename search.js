const util = require("util");
const tree = require("./tree");
// Linear Search

let beasts = ["Centaur", "Godzilla", "Mosura", "Minotaur", "Hydra", "Nessie"];

// console.log(beasts.indexOf("Godzilla"));

// console.log(beasts.findIndex((beast) => beast === "Godzilla"));

// console.log(beasts.find((beast) => beast === "Godzilla"));

// console.log(beasts.includes("Godzilla"));

// Binary Search

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
