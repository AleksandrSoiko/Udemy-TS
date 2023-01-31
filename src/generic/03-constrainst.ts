function printLength<T extends { length: number }>(arg: T): number {
  return arg.length;
}

printLength("asd");
printLength(["ads"]);
printLength({ length: 12 });

// object
