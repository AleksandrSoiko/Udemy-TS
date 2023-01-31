function sum(a: number, b: number): number {
  return a + b;
}

const sum2 = (a: number, b: number): number => {
  return a + b;
};
const sum3 = function (a: number, b: number): number {
  return a + b;
};

function log(name: string, userId?: string): void {
  console.log("hello,", name, "with Id", userId || "anonim");
}
log("dfghh", "2345");

function crash(): never {
  throw new Error("crash");
}

export function average(...nums: number[]) {
  const sum = nums.reduce((current, total) => current + total, 0);
  return sum / nums.length;
}
