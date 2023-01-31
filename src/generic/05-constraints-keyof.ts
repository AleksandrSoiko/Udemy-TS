export {};

// function prop<T>(key: keyof T, obj:T):T[keyof T]
function prop<T, U extends keyof T>(key: U, obj: T): T[U] {
  return obj[key];
}

interface Laptop {
  brand: string;
  case: string;
}

// type F = Laptop["brand"];

const obj1 = { a: 1, b: 3, c: 7 };
prop("a", obj1);
// prop("D", obj1); no
