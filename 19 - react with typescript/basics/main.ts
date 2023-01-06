// Primitives: numbers, strings, booleans
// complex types: arrays, objects
// function types, parameters

// Primitives

let age: number = 24.25;

let username: string;
username = "Lux";

let isHere: boolean = true;

// complex types

let hobbies: string[];
hobbies = ["coding", "sport", "music"];

type Person = { name: string; age: number };

// let person: { name: string; age: number };
let person: Person;
person = {
  name: "Lux",
  age: 24,
};

// let people: { name: string; age: number }[];
let people: Person[];

// type inference

let course: string | number = "React Course";
course = 1234;

// functions & types

function add(a: number, b: number): number {
  return a + b;
}

function printFn(value: any): void {
  console.log(value);
}

// generics

function insertAtBeginning<T>(array: T[], value: T) {
  const newArray = [value, ...array];
  return newArray;
}

const demoArray = [1, 2, 3];
const updatedArray = insertAtBeginning(demoArray, -1);

const secondDemoArray = ["hey", "whats", "up"];
const secondUpdatedArray = insertAtBeginning(secondDemoArray, "ay,");
