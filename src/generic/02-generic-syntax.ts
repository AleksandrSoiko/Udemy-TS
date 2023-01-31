// Array<string>
// string[]
// Promise<number>

type TypeFactory<T> = T;
type XType = TypeFactory<string>;
type XType2 = TypeFactory<number>;
type XType3 = TypeFactory<boolean>;

function toArray<T>(...args: T[]): T[] {
  return args;
}

toArray<number>(1, 2, 3);
toArray("g", "h", "jk");

function head(value: string): string;
function head<T>(value: readonly T[]): T;
function head(value: any): any {
  return value[0];
}

interface ModelData<T> {
  title: string;
  value: T; // number []  boolean
}

const obj1: ModelData<number> = {
  title: "fgh",
  value: 15,
};

const obj2: ModelData<Array<number>> = {
  title: "string",
  value: [1, 2, 3, 3, 4],
};

export {};

const head1 = <T>(value: T[]): T => value[0];
