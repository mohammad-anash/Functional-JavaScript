// What is the difference between immutable and mutable data types in JavaScript? Can you provide examples of each?

// A mutable data type can change once  create is called mutable data type.
// A immutable data type cannot change once create is called immutable data type.

// let's see example mutable data type example;
let a = 1;
function incre() {
  a += 5;
  console.log(a);
}
incre(); //  6
console.log(a); //  6 change the original value a is 1 after the increament the value is 6.

// Another Example
let name = "john";
function addName() {
  name += " Anderson";
  return name;
}
console.log(addName());
console.log(name); // change the original value after the create.

// Immutable data type Example;
// let say we have a obj

let obj = { name: "anash", age: 50 };
let obj2 = { ...obj, city: "romania" };

console.log(obj); // {name: 'anash', age: 50} the original value does change after the creat
console.log(obj2); // {name: 'anash', age: 50, city: 'romania'}

// 2 => ⁠How do you create immutable objects in JavaScript?

// answer 2) =>
let person = { name: "anash", age: 50 };
let person2 = { ...obj, city: "romania" };

console.log(person); // {name: 'anash', age: 50} the original value does change after the creat
console.log(person2); // {name: 'anash', age: 50, city: 'romania'}

// 5. ⁠Given the following JavaScript object, how would you update the age property while keeping the object immutable? const person = { name: "Jane", age: 30 };

const user = { name: "jane", age: 40 };
const user2 = { ...user, age: 45 };
console.log(user);
console.log(user2);

// 6 => ⁠Explain how mutable data structures can lead to bugs in a functional programming context. Provide an example involving a common JavaScript scenario.

// 7 => ⁠What makes a function pure in functional programming? Provide the definition and an example of a pure function in JavaScript.

// ans 7) => without this rule does'nt pure function;
// the same input always give same output
// has no side effect

// let's see example
// first Rule => the same input ALWAYS Give same output
const add = (a, b) => a + b;
console.log(add(5, 3));

// Another example
const createName = (first, last) => `${first} ${last}`;
console.log(createName("Michael", "Anderson"));

// pure function cannot =>
// access a databse, API, file system, storage, etc.
// modify the DOM.
// or even log the console]

// 8 => ⁠Look at this JavaScript function. Is it pure or impure? Explain your reasoning. let count = 0;
// function increment() {
// count += 1;
// console.log("Count is now:", count);
//   }

// ans 8) => this function is impure function becuase this take a side effect mean global variable
// in this function has no input as an argument that;s why is impure function

// 9 =>  ⁠Why is it generally advisable to use pure functions in functional programming? Discuss the benefits related to testing and program predictability.

// ans) => 9 beacuase it easy to debug and pure has clean code and easy to debug.

// 10 => ⁠Rewrite the following JavaScript function to be pure: let taxRate = 0.2;
// function calculateTotal(price) {
// return price + (price * taxRate);
//   }

// ans) => 10
// function calculateTotal(price, taxRate){
// return price + (price * taxRate)
// }
// console.log(20, 0.2)

// 11 => ⁠Explain the changes you made and why they were necessary.

// ans) => 11 the taxRate variable is global scope so i change i pass value 0.2 as an argument and then access as input parameter

// 12 => ⁠Describe a scenario in web development where maintaining function purity might be challenging. How would you handle side effects in such cases?

// ans) => i cannot see this type of case as yet.