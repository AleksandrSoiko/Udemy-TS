export {};
function append<T>(el: T, list: T[]): T[] {
  return list.concat(el);
}
append(5, [1, 4, 5]);
append("fg", ["fg", "gh"]);
