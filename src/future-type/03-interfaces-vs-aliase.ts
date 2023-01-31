// Product: price, isNew, isSale, title;
// Vehicle: wheels, year, brand;
// Car: type, model + Product, +Vehicle;

type Product = {
  price: string;
  isNew: boolean;
  isSale?: boolean;
  title?: string;
};

type Vehicle = {
  wheels: number;
  year: number;
  brand: string;
};

type Car = {
  type: string;
  model: string;
} & Product &
  Vehicle;

const car: Car = {
  brand: "BMW",
  isNew: true,
  model: "e39",
  price: "1200$",
  type: "sedan",
  wheels: 4,
  year: 2012,
  isSale: false,
  title: "new car",
};

// Product: price, isNew, isSale, title;
// Vehicle: wheels, year, brand;
// Car: type, model + Product, +Vehicle;

interface IProduct {
  price: string;
  isNew: boolean;
  isSale: boolean;
  title?: string;
}

interface IVehicle {
  wheels: number;
  year: number;
  brand: string;
}

interface ICar extends IProduct, IVehicle {
  type: string;
  model: string;
}

const car1: ICar = {
  brand: "BMW",
  isNew: true,
  model: "e39",
  price: "1200$",
  type: "sedan",
  wheels: 4,
  year: 2012,
  isSale: false,
  title: "new car",
};
