export {};
let word: string | null = null;
const num = 10;

if (num > 5) {
  word = "abc";
}

console.log(word!.toLowerCase());

function printName(name?: string) {
  const fullName: string = name!;
}

interface Person {
  name: string;
  age: number;
  sex: "female" | "male";
}

function printName2(person?: Person) {
  console.log(person!.name);
}

const people: Person[] = [
  {
    name: "Maria",
    age: 20,
    sex: "male",
  },
  {
    name: "Diana",
    age: 30,
    sex: "male",
  },
  {
    name: "Alex",
    age: 25,
    sex: "female",
  },
  {
    name: "Antony",
    age: 41,
    sex: "female",
  },
  {
    name: "John",
    age: 52,
    sex: "female",
  },
  {
    name: "Bill",
    age: 32,
    sex: "female",
  },
  {
    name: "Artur",
    age: 18,
    sex: "female",
  },
];

const femalePeople = people.find((person) => person.sex === "female")!;
