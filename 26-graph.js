/*
 * We are representing the graph using adjacency list (map of keys and values)
 * The keys are the vertices and values are the list/set of vertices this vertex has connection/edge to.
 * This is an undirected graph
 */

class Graph {
  constructor() {
    this.adjacencyList = {};
  }

  addVertex(vertex) {
    if (!this.adjacencyList[vertex]) this.adjacencyList[vertex] = [];
  }

  addEdge(vertex1, vertex2) {
    this.adjacencyList[vertex1].push(vertex2);
    this.adjacencyList[vertex2].push(vertex1);
  }

  removeEdge(vertex1, vertex2) {
    this.adjacencyList[vertex1] = this.adjacencyList[vertex1].filter(
      (vertex) => vertex !== vertex2
    );

    this.adjacencyList[vertex2] = this.adjacencyList[vertex2].filter(
      (vertex) => vertex !== vertex1
    );
  }

  removeVertex(vertex) {
    for (let neighbour of this.adjacencyList[vertex]) {
      this.removeEdge(vertex, neighbour);
    }

    delete this.adjacencyList[vertex];
  }

  depthFirstTraversalRecursive(vertex) {
    let results = [];
    let visited = {};
    let neighboursList = this.adjacencyList;

    function dft(vertex) {
      if (!vertex) {
        return;
      }

      visited[vertex] = true;
      results.push(vertex);
      let neighbours = neighboursList[vertex];
      console.log(`neighbours: ${neighbours}`);

      for (let neighbour of neighbours) {
        if (!visited[neighbour]) dft(neighbour);
      }
    }

    dft("A");
    return results;
  }

  depthFirstTraversalIterative(vertex) {
    const results = [];
    const stack = [];
    const visited = {};

    stack.push(vertex);

    while (stack.length > 0) {
      let node = stack.pop();

      if (!visited[node]) {
        results.push(node);
        visited[node] = true;

        let neighbours = this.adjacencyList[node];
        neighbours.forEach((neighbour) => {
          stack.push(neighbour);
        });
      }
    }

    return results;
  }

  breadthFirstTraversal(vertex) {
    const visited = {};
    const results = [];
    const queue = [];

    queue.push(vertex);

    while (queue.length) {
      let node = queue.shift();
      results.push(node);
      visited[node] = true;

      this.adjacencyList[node].forEach((neighbour) => {
        if (!visited[neighbour]) {
          visited[neighbour] = true;
          queue.push(neighbour);
        }
      });
    }

    return results;
  }
}

let g = new Graph();
g.addVertex("A");
g.addVertex("B");
g.addVertex("C");
g.addVertex("D");
g.addVertex("E");
g.addVertex("F");

g.addEdge("A", "B");
g.addEdge("A", "C");
g.addEdge("B", "D");
g.addEdge("C", "E");
g.addEdge("D", "E");
g.addEdge("D", "F");
g.addEdge("E", "F");

console.log(g.adjacencyList);

let result = g.depthFirstTraversalRecursive("A");
console.log(result);

let result2 = g.depthFirstTraversalIterative("A");
console.log(result2);

let result3 = g.breadthFirstTraversal("A");
console.log(result3);
