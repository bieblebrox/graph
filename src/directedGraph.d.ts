export class DirectedGraph {
  addVertex(key: T, value: U): DirectedGraph<T, U>;
  hasVertex(key: T): boolean;
  removeVertex(key: T): boolean;
  verticesCount(): number;
  addEdge(srcKey: T, destKey: T, weight?: number): DirectedGraph<T, U>;
  hasEdge(srcKey: T, destKey: T): boolean;
  removeEdge(srcKey: T, destKey: T): boolean;
  removeEdges(key: T): number;
  edgesCount(): number;
  traverseDfs(srcKey: T, cb: (key: T, value: U) => void, abortCb?: () => boolean): void;
  traverseBfs(srcKey: T, cb: (key: T, value: U) => void, abortCb?: () => boolean): void;
  constructBfsTree(srcKey: T, cb: (key: T, value: U) => void, abortCb?: () => boolean): void;
  clear(): void;
  _vertices: Map;
  _edges: Map;
  _edgesCount: number;
}