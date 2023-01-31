const numbers: number[] = [1, 2, 3, 4];

const strs: string[] = [];

const strs2: Array<string> = [];

interface Cars {
  wheels: number;
  brand: string;
}

const cars: Cars[] = [];

cars.push({
  wheels: 2,
  brand: "ducati",
});
const arrOfArr: string[][] = [];

arrOfArr.push(["", ""]);

function printArr(arr: unknown[]): void {
  arr.forEach((el, index) => {
    console.log(el, index);
  });
}
