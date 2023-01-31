type WindowProp = keyof Window;

const myValue: WindowProp = "releaseEvents";

interface PC {
  brand: string;
  year: string;
}

type Typ1 = keyof PC;

const val1: Typ1 = "brand";

type Tup1 = keyof [string, number];

const val2: Tup1 = "0";
