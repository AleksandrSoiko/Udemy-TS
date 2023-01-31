/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable prefer-const */
// console.log(typeof "fgh");
export {};
import { average } from "../primitives/02-function";
let str = "hello word";
type x = typeof str;

type fn = typeof average;

const max: fn = (...numbers) => Math.max(...numbers);

max(1, 2, 3);

type ReturnFn = ReturnType<typeof average>;
