// This is the implimentaion of basic graph data structure

// Refer to the diagram(Tree.drawio) to visualize the tree

// There are two types of graph representation
// 1.) Adjacent Matrix : Represents graph vertexs and edges as a 2D array refer to Tree.drawio
// 2.) Adjacent List: Represents graps as a object or dictionary where key is the vertex and value is a list of
//     connection with vertex.

// An Adjacent list implimentation:
class Graph {
  constructor() {
    this.list = {};
  }

  addVertex(vertex) {
    if (!this.list[vertex]) {
      this.list[vertex] = new Set();
    }
  }

  addEdge(vertex1, vertex2) {
    if (!this.list[vertex1]) {
      this.addVertex(vertex1);
    }
    if (!this.list[vertex2]) {
      this.addVertex(vertex2);
    }
    this.list[vertex1].add(vertex2);
    this.list[vertex2].add(vertex1);
  }

  pathExists(vertex1, vertex2) {
    if (!this.list[vertex1]) return false;
    if (!this.list[vertex2]) return false;
    return this.list[vertex1].has(vertex2) && this.list[vertex2].has(vertex1);
  }

  removeEdges(vertex1, vertex2) {
    if (!this.list[vertex1]) return;
    if (!this.list[vertex2]) return;
    this.list[vertex1].delete(vertex2);
    this.list[vertex2].delete(vertex1);
  }

  removeVertex(vertex){
    if (!this.list[vertex]) return;
    for(let item in this.list){
      this.list[item].delete(vertex)
    }
    delete this.list[vertex]
  }

  display() {
    for (let item in this.list) {
      console.log(item + "->" + [...this.list[item]]);
    }
  }
}

const graph = new Graph();

graph.addVertex("A");
graph.addVertex("B");
graph.addVertex("C");
graph.addEdge("A", "B");
graph.addEdge("B", "C");
graph.removeVertex("C")
graph.display();
