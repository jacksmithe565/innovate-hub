/*
Filename: ComplexCode.js

Description: 

This JavaScript code implements a complex algorithm for finding the shortest path in a weighted directed graph using the Dijkstra's algorithm. The algorithm is implemented using classes and data structures to ensure a more organized and maintainable codebase. The code is extensively commented to provide a clear understanding of its functionality.

Please note that this code is a simplified implementation and may not handle all edge cases or exception handling scenarios.

*/

// Vertex class represents a vertex/node in the graph
class Vertex {
  constructor(id) {
    this.id = id;
    this.edges = [];
    this.distance = Infinity;
    this.visited = false;
    this.previous = null;
  }

  // Add an edge to the vertex
  addEdge(edge) {
    this.edges.push(edge);
  }
}

// Edge class represents a directed edge between two vertices
class Edge {
  constructor(target, weight) {
    this.target = target;
    this.weight = weight;
  }
}

// Graph class represents a weighted directed graph
class Graph {
  constructor() {
    this.vertices = [];
  }

  // Add a vertex to the graph
  addVertex(id) {
    this.vertices.push(new Vertex(id));
  }

  // Get a vertex by its id
  getVertex(id) {
    return this.vertices.find(vertex => vertex.id === id);
  }

  // Add a directed edge between two vertices
  addEdge(sourceId, targetId, weight) {
    const source = this.getVertex(sourceId);
    const target = this.getVertex(targetId);
    source.addEdge(new Edge(target, weight));
  }

  // Dijkstra's algorithm implementation to find the shortest path
  shortestPath(startId, endId) {
    const start = this.getVertex(startId);
    start.distance = 0;
    const queue = [...this.vertices];

    while (queue.length > 0) {
      queue.sort((a, b) => a.distance - b.distance);
      const current = queue.shift();
      current.visited = true;

      if (current.id === endId) {
        return this.buildPath(endId);
      }

      for (const edge of current.edges) {
        const { target, weight } = edge;
        const distance = current.distance + weight;

        if (distance < target.distance) {
          target.distance = distance;
          target.previous = current;
        }
      }
    }

    // No path found
    return null;
  }

  // Helper function to build the shortest path
  buildPath(endId) {
    const path = [];
    let current = this.getVertex(endId);

    while (current !== null) {
      path.unshift(current.id);
      current = current.previous;
    }

    return path;
  }
}

// Create an instance of the graph
const graph = new Graph();

// Add vertices to the graph
graph.addVertex('A');
graph.addVertex('B');
graph.addVertex('C');
graph.addVertex('D');
graph.addVertex('E');
graph.addVertex('F');

// Add edges between vertices
graph.addEdge('A', 'B', 4);
graph.addEdge('A', 'C', 2);
graph.addEdge('B', 'E', 3);
graph.addEdge('C', 'D', 2);
graph.addEdge('C', 'F', 4);
graph.addEdge('D', 'E', 3);
graph.addEdge('D', 'F', 1);
graph.addEdge('E', 'F', 1);

// Find the shortest path from vertex 'A' to vertex 'E'
const shortestPath = graph.shortestPath('A', 'E');

// Output the shortest path
console.log('Shortest Path:', shortestPath);