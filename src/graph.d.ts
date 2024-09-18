import { DirectedGraph } from '../src/directedGraph';

export class Graph extends DirectedGraph {
  addEdge(srcKey: T, destKey: T, weight?: number): Graph<T, U>;
  edgesCount(): number;
  removeEdge(srcKey: T, destKey: T): boolean;
  removeEdges(key: T): number;
}