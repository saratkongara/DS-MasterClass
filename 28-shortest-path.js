class PriorityQueue {
  constructor() {
    this.values = [];
  }

  enqueue(val, priority) {
    let node = this.values.find((obj) => obj.val === val);

    if (!node) {
      this.values.push({ val, priority });
    } else {
      node.priority = priority;
    }

    this.sort();
  }

  dequeue() {
    return this.values.shift();
  }

  sort() {
    this.values.sort((a, b) => a.priority - b.priority);
  }
}

class WeightedGraph {
  constructor() {
    this.adjacencyList = {};
  }

  addVertex(vertex) {
    if (!this.adjacencyList[vertex]) this.adjacencyList[vertex] = [];
  }

  addEdge(vertex1, vertex2, weight) {
    this.adjacencyList[vertex1].push({ node: vertex2, weight });
    this.adjacencyList[vertex2].push({ node: vertex1, weight });
  }

  shortestPath(start, finish) {
    const nodes = new PriorityQueue();
    const distances = {};
    const previous = {};
    let smallest;
    1;
    let path = [];

    // Build up the initial state
    for (let vertex in this.adjacencyList) {
      if (vertex === start) {
        distances[vertex] = 0;
        nodes.enqueue(vertex, 0);
      } else {
        distances[vertex] = Infinity;
        nodes.enqueue(vertex, Infinity);
      }

      previous[vertex] = null;
    }

    // As long as there is a node to visit
    while (nodes.values.length) {
      smallest = nodes.dequeue().val;

      if (smallest === finish) {
        // We are done and we need to build the path from start to finish
        while (previous[smallest]) {
          path.push(smallest);
          smallest = previous[smallest];
        }
        break;
      }

      for (let nextNode of this.adjacencyList[smallest]) {
        // calculate the distance to the neighboring node
        let candidate = distances[smallest] + nextNode.weight;
        let nextNeighbor = nextNode.node;

        if (candidate < distances[nextNeighbor]) {
          // updating the new smallest distance to neighbor
          distances[nextNeighbor] = candidate;
          // updating previous - how we got to neighbor
          previous[nextNeighbor] = smallest;
          // enqueue in pririty queue
          nodes.enqueue(nextNeighbor, candidate);
        }
      }
    }

    return path.concat(smallest).reverse();
  }
}

let g = new WeightedGraph();
g.addVertex("A");
g.addVertex("B");
g.addVertex("C");
g.addVertex("D");
g.addVertex("E");
g.addVertex("F");

g.addEdge("A", "B", 4);
g.addEdge("A", "C", 2);
g.addEdge("B", "E", 3);
g.addEdge("C", "D", 2);
g.addEdge("C", "F", 4);
g.addEdge("D", "E", 3);
g.addEdge("D", "F", 1);
g.addEdge("E", "F", 1);

let path = g.shortestPath("A", "E");
console.log(path);
