export {};
function keys<T extends object>(obj: T): Array<keyof T> {
  const currentKeys = [];

  for (const key in obj) {
    // eslint-disable-next-line no-prototype-builtins
    if (obj.hasOwnProperty(key)) {
      currentKeys.push(key);
    }
  }

  return currentKeys;
}

function values<T extends object>(obj: T): Array<T[keyof T]> {
  const currentValues = [];

  for (const key in obj) {
    currentValues.push(obj[key]);
  }

  return currentValues;
}
