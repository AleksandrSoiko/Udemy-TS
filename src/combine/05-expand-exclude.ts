/* eslint-disable no-prototype-builtins */
/* eslint-disable @typescript-eslint/ban-types */
/* eslint-disable @typescript-eslint/no-unused-vars */
export {};

type T0 = Exclude<"a" | "b" | "c", "a">;
type T1 = Exclude<"a" | "b" | "c", "a" | "c">;
type T2 = Exclude<string | number | (() => void), Function>;

type Status = "success" | "clientError" | "serverError" | 200 | 401 | 504;

type NumericStatus = Exclude<Status, string>;
type TextStatus = Exclude<Status, number>;

type T00 = Extract<"a" | "b" | "c", "a">;
type T01 = Extract<"a" | "b" | "c", "a" | "c">;
type T02 = Extract<string | number | (() => void), Function>;

interface Person {
  age: number;
  firstName: string;
  lastName: string;
  sex: "male" | "female";
  country: string;
  education: string;
  skills: string[];
}

type PersonName = Extract<keyof Person, "firstName" | "lastName" | "fullName">;

type T10 = NonNullable<string | number | undefined>;
type T11 = NonNullable<string[] | null | undefined>;

function keys<T extends object>(obj: T): Extract<keyof T, string>[] {
  const currentKeys = [];

  for (const key in obj) {
    if (obj.hasOwnProperty(key)) {
      currentKeys.push(key);
    }
  }

  return currentKeys;
}

type Computer1 = {
  brand: string;
  year: number;
  isAvailable: boolean;
};

type T80 = Extract<keyof Computer1, string>;

type Computer = {
  brand: string;
  year: number;
  isAvailable: boolean;
};

type T1k = Exclude<keyof Computer, string>;
