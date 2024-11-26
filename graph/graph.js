class Graph{
    constructor(){
        this.adjacencyList = new Map();
    }
    addVertex(vertex){
        if(!this.adjacencyList.has(vertex)){
            this.adjacencyList.set(vertex, []);
        }
    }
    addEdge(vertex1, vertex2) {
        if (this.adjacencyList.has(vertex1) && this.adjacencyList.has(vertex2)) {
            this.adjacencyList.get(vertex1).push(vertex2);
            this.adjacencyList.get(vertex2).push(vertex1); // For undirected graphs
        }
    }
    printGraph() {
        for (const [vertex, edges] of this.adjacencyList) {
            console.log(`${vertex} -> ${edges.join(", ")}`);
        }
    }
}
const g = new Graph();
g.addVertex(12);
g.addVertex(10);
g.addVertex(13);

g.addEdge(12, 13);
g.addEdge(10, 13);

g.printGraph();