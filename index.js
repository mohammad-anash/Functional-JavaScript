// Pure Function

// why write pure Function
// 1) clean code
// 2) easy to test
// 3) esay to debug
// 4) decoupled and Independent
// 5) could be added to your Utility functiona

// Rules For Pure Function
// 1) the same input ALWAYS Give same output
// 2) NO SIDE EFFECTS

// Example:
// first Rule => the same input ALWAYS Give same output
const add = (a, b) => a + b;
console.log(add(5, 3));

// Another example
const createName = (first, last) => `${first} ${last}`;
console.log(createName("Michael", "Anderson"));

// pure function cannot =>
// access a databse, API, file system, storage, etc.
// modify the DOM.
// or even log the console

// they said clearly impure function are neccesary but they harder to test debug

// now let's talk about impure function

// 1) impure function take side effect
// 2) modify external state => global scope, mutalbe data

// let's see Example impure function:

let x = 1;
const increament = () => (x += 1);
console.log(increament()); // 2
console.log(x); // 2

// see this example this breaks all the rule of pure function
// has side effect x = 1;
// has no parameter () => empty;
// mutable data mean change the x value after create;
// see my second console.log(x) return a new value and change the original value = 1

// impure example = 2;
let arr = [1, 2, 3];
const addToArray = (arr, data) => {
  arr.push(data);
  return arr;
};
console.log(addToArray(arr, 4)); //  [1, 2, 3, 4]
console.log(arr); //  [1, 2, 3, 4]

// see this example change the original value arr also
// when we create varialble and other element and after create element this called mutalbe data type. we will talk about later

// refactored Example 1:
const pureIncreament = (nums) => (nums += 1);
console.log(pureIncreament(x)); // 3 how it possible because in the previous exmaple we take variable x and increament iinside the function. in this function we take x variable as an argument and the increament that's why the answer is 3
console.log(x); // 2 why is still 2 because in the pureIncreament function we take x variable as an argument and nums parament so the value change is parament not the argument the original value not change.

// i hope you understand the pure and impure function.

// 2 => Now Let's Talk About another concept to related functional programming

// HIGHER ORDER FUNCTION

// what is higher order function

// higher order function is a function that does at least one of the following
// 1) => takes one or more function as an argument
// 2) => return function as the result

// if you are learn about filter map reduce and forEach then this is for you to understand higher order function.

// i explain you with map
// [1, 2, 3, 4] we have array we want calculate the each value of array by 2 and trasnform into new array

//         |
//         |
//         v
// arr.map(() => )
// Rule First => takes one or more function as an argument
// in this function takes another function as an argument is called higher order function

// Rule Second => return function as the result
// arr.map((nums) => nums * 2) => [2, 4, 6, 8]

// 3 => now let's talk about mutalble and immutalbe data type

// A mutable data type can change after the element create is called mutable data type.
// A immutable data type cannot change after the element create is called immutable data type.

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

// 4 => what is currying in Javascript;

// currying in javascript transform a function with mulitplr argument into a nested series of function each take single argument. currying help you to avoid passing the same variable multiple time. and its help you to create higher order function
