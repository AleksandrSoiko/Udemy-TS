function printPoint(point: { x: string; y: string }): void {
  console.log(`Coordinate of the point is x: ${point.x} and y: ${point.y}`);
}

const obj1 = {
  x: "1",
  y: "2",
};
printPoint(obj1);

const obj2 = {
  x: "1",
  y: "2",
  z: "4",
};
printPoint(obj2);

function printName(user: { firstName: string; lastName?: string }) {
  console.log("hello", user.firstName.toUpperCase());
  if (user.lastName) {
    console.log("nice to meet you Mr.", user.lastName.toUpperCase());
  }
}

printName({ firstName: "Alex" });
printName({ firstName: "Alex", lastName: "Soiko" });
