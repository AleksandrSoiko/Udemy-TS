export {};

function tuplePairCreator<T>(first: T) {
  return function <U>(second: U): [T, U] {
    return [first, second];
  };
}
const toTupWith1 = tuplePairCreator(1);
const val1 = toTupWith1(2);
const val2 = toTupWith1("sd");
