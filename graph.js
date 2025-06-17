const util = require("util");

// a graph data structure consists of a finite set of vertices(also called nodes or points).
// lines between nodes are known as edges(also called links or lines), directed graph are also known as arrows.


// three ways to represent graph
// Edge list
const graph_edge = [
  [0, 2],
  [2, 3],
  [2, 1],
  [1, 3],
];

// Adjacent List
const graph_adjacent = [[2], [2, 3], [0, 1, 3], [1, 2]]; // the index of the array is the value of the actual Graph node

// Adjacent Matrix
const graph_matrix = {
  0: [0, 0, 1, 0],
  1: [0, 0, 1, 1],
  2: [1, 1, 0, 1],
  3: [0, 1, 1, 0],
};

// graph constructor function
class Graph {
  constructor() {
    this.numberOfNodes = 0; // how many nodes in this graph
    this.adjacentList = {};
  }

  addVertex(node) {
    this.adjacentList[node] = [];
    this.numberOfNodes++;
  }

  addEdge(node1, node2) {
    if (
      !this.adjacentList.hasOwnProperty(node1) ||
      !this.adjacentList.hasOwnProperty(node2)
    )
      return;
    this.adjacentList[node1].push(node2);
    this.adjacentList[node2].push(node1);
  }

  showConnections() {
    let connection = "\n";

    Object.keys(this.adjacentList).forEach((key, keyI, keys) => {
      let singleConnection = `${key}-->`;

      this.adjacentList[key].forEach((node, nodeI, nodes) => {
        singleConnection += nodeI === nodes.length - 1 ? `${node}` : `${node} `;
      });

      connection +=
        keyI === keys.length - 1
          ? `${singleConnection}`
          : `${singleConnection}\n`;
    });

    return connection;
  }
}

const graph_1 = new Graph();
graph_1.addVertex("0");
graph_1.addVertex("1");
graph_1.addVertex("2");
graph_1.addVertex("3");
graph_1.addVertex("4");
graph_1.addVertex("5");
graph_1.addVertex("6");
graph_1.addEdge("3", "1");
graph_1.addEdge("3", "4");
graph_1.addEdge("4", "2");
graph_1.addEdge("4", "5");
graph_1.addEdge("1", "2");
graph_1.addEdge("1", "0");
graph_1.addEdge("0", "2");
graph_1.addEdge("6", "5");

console.log("graph_1", graph_1);
console.log("graph_1.showConnections();", graph_1.showConnections());
