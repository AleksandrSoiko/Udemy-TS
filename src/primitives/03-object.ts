export interface Car {
  wheels: number;
  brand: string;
  type: string;
  isNew?: boolean;
  name?: string;
  [key: string]: unknown;
}

const car: Car = {
  wheels: 4,
  brand: "bmw",
  type: "sedan",
  isNew: false,
};
const car2: Car = {
  brand: "AUDI",
  type: "sedan",
  wheels: 4,
  isNew: true,
  name: "trade",
};
car2["go"] = true;
