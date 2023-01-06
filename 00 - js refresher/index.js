import person from "./person.js";
console.log(person.name);

// old way of creating a class
class Human {
  constructor() {
    this.gender = "male";
  }

  printGender() {
    console.log(this.gender);
  }
}

// old way of creating a class
class Player extends Human {
  constructor(name, age) {
    super();
    this.name = name;
    this.age = age;
  }

  printPlayer() {
    console.log(`${this.name} ${this.age}`);
  }
}

// new way of creating a class
class ModernClass {
  myProp = "some prop";

  printProperty = () => {
    console.log(this.myProp);
  };
}

// old way of creating a class
const player = new Player("Luka Modric", 37);
player.printPlayer();
player.printGender();

// new way of creating a class
const modern = new ModernClass();
modern.printProperty();

// spread operator
const nums = [1, 2, 3];
const newNums = [...nums, 4, 5];
console.log(newNums);

// spread operator
const obj = {
  name: "mike",
  year: 71,
  age: 44,
};
const newObj = { ...obj, admin: true };
console.log(newObj);

// rest operator
const filter = (...args) => {
  return args.filter((elem) => elem % 2 === 0);
};
console.log(filter(2, 3, 4, 5, 6, 7, 8));

// array destructuring
let [a, , b] = ["hey", "svijete", "bok"];
console.log(a);
console.log(b);

// object destructuring
let { drink } = { name: "Johhny", drink: "Walker", year: 23 };
console.log(drink);

// primitive and reference types
const mate = {
  name: "bob",
};
// const mate2 = mate; // not working
const mate2 = { ...mate }; // working
mate2.name = "john";
console.log(mate);
console.log(mate2);

// multiply even nums by themselves
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const filteredNumbers = numbers
  .filter((elem) => elem % 2 === 0)
  .map((elem) => elem * elem);
console.log(filteredNumbers);
