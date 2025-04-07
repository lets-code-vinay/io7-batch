let x = 50;
let y = 20;

// console.log("print ---> ", 50 - 20);

// ------------------------------JS Comments--------------------------------------------

// How to do comment and why do we use comments?

// 1. Single line comment
// 2. Multiline comment

// To disable unnecessary code
// To provide some basic information about code
// To single line comment we use double //
// For multiline comment we use /** */
// To provide information on function and other code so next developer can understand

/** 
let x = 50;
let y = 20;

console.log("print ---> ", 50 - 20);
*/

/**
 * @description following function is used to add two number
 * @param {Number} a
 * @param {Number} b
 * @return {Number} c
 */
function toAddTwoNumber(a, b) {
  let c = a + b;
  return c;
}

function toSubTwoNumber(a, b) {
  let c = b - a;
  return c;
}

// ------------------------------JS output--------------------------------------------
/**
 * We can use 3 types of output
 * 1. console.log()
 * 2. alert()
 * 3. document.write()
 */

// output using console
let a = 10;
let b = 20;
let c = a + b;
console.log("This console is for output--> ", c);
console.log("Adding two number of 50, 75--> ", toAddTwoNumber(50, 75));

// 2. output using alert function
// alert(`Adding two number of 50, 75-->  ${toAddTwoNumber(50, 75)}`);
// alert(`This console is for output-->-->  ${c}`);

// 3. using document.write()
document.write("This document.write is for output-->-->");
document.write("<h1 style='color:red'>This document.write is for output</h1>");
document.write(
  `<h1 style='color:red'>This is total of 10 and 20 is <span style='color:blue'>${c} </span></h1>`
);

// ------------------------------JS Data-type --------------------------------------------
/**
 * 1. Primitive Datatype
 *      Those datatypes which consumes memory and doesn't divide further that memory
 *      a. Number --> 10, 20, 0, -100, 90
 *      b. String --> 'Chandni', 'Vinay', 'Red', '#e5d6d6', 'This is a line'
 *      c. Boolean --> true, false
 *      d. null --> null
 *      e. undefined --> Value not defined yet
 * 2. Non-primitive Datatypes
 *      Those datatypes which consumes memory and can divide further that memory
 *      a. Array --> ['laptop', 'charger', 'mouse', 'notebook', 10, 20]
 *      b. object -->
 *                  {
 *                   rollNo: 45,
 *                   name: 'Chandni',
 *                   age: '6',
 *                  }
 *
 *                  {
 *                      {
 *                          rollNo: 45,
 *                          name: 'Chandni',
 *                          age: '6',
 *                      },
 *                      {
 *                          rollNo: 45,
 *                          name: 'Chandni',
 *                          age: '6',
 *                      },
 *                      {
 *                          rollNo: 45,
 *                          name: 'Chandni',
 *                          age: '6',
 *                      },
 *                  }
 *
 */

// ------------------------------JS Data-type -how to check datatype --------------------------------------------
// typeof 'red', typeof 45, typeof name

// ------------------------------JS Data-type -NUMBER --------------------------------------------
// Number can be positive or negative
// 0,1,2,3,4,5,6,7,8,9,55,45,23,-98,-100

const num1 = 56;

console.log("printing number 1--", num1);
console.log("checking typeof 10--", typeof 10);
console.log("checking typeof num1--", typeof num1);
console.log("checking typeof '10'--", typeof "10");
console.log("checking typeof -10--", typeof -10);

// ------------------------------JS Data-type -String --------------------------------------------
// Anything in between double quotes (" "), single quotes (' '), template literals (` `) and regex /anything/g
// To handle multi line use template literal

const name = "Chandni";
const address = "Lohara, Ludhiana";
const avenger = `Ironman`;
const thor = /Thor/g;

console.log("printing name--> ", name, typeof name);
console.log("printing address--> ", address, typeof address);
console.log("printing avenger--> ", avenger, typeof avenger);
console.log("printing thor--> ", thor, typeof thor);

// i'm a doctor
const line = "i'm a doctor";
const line2 = "i didn't go there";
const line3 = "hello";

const para = `Is it possible to show an alert 
message when
 someone tries to copy text from
  the web page using JavaScript?
   If it's
    possible then how can I do this?`;

console.log("para--", para);

let ab = 10;
let bc = 40;
let cd = ab + bc;

// the total of 10 and 40 is 50
console.log("the total of " + ab + " and " + bc + " is " + cd); // Not recommended
console.log("the total of", ab, "and", bc, "is", cd);
console.log(`the total of ${ab} and ${bc} is ${cd}`);

// ------------------------ 2025-04-07 ----------------------------------------------

// -------------------Assign operator ------------------------------------

let studentName = "Chandni";
var studentAge;

var studentAge = 5;

console.log("studentName--", studentName);
console.log("studentAge--", studentAge);

// -------------------Variable ------------------------------------

/**
 * Types of variable
 * 1. let
 * 2. Const
 * 3. var
 */

/**
 * VAR:
 *  1. Old JS method to declare variable
 *  2. Global scope variables
 *  3. It hoisted the variable
 */

var mark = 10;

console.log("mark first--", mark); // 10

var mark = 50;
console.log("mark above function--", mark); // 50

function updateMark() {
  var mark = 20;
  console.log("mark inside function--", mark); // 20
}

updateMark();
console.log("mark outside function--", mark); // 50/20

function test() {
  var a = 10;
  if (true) {
    var a = 20;
    console.log("inside if testing var--", a);
  }

  console.log("inside if testing var-2--", a);
}

test();

function test2() {
  var a = 10;
  function abc() {
    var a = 20;
    console.log("inside function testing var--", a);
  }
  abc();
  console.log(" inside function  testing var-2--", a);
}

test2();

/**
 * LET:
 *  1. Let introduced in ES6
 *  2. local scope variables
 *  3. It doesn't hoist the variable
 */

let price;
console.log("printing price--", price);

price = 20;
console.log("printing price 2--", price);

price = "Over priced";
console.log("printing price 3--", price);

let penPrice = 55;
function pricing() {
  console.log("printing penPrice inside function---", penPrice);

  let price = 800;
  console.log("printing price inside function 2----", price);

  if (2 + 2 == 4) {
    let price = 500;
    console.log("printing price inside if condition----", price);
  }
  console.log("printing price inside function 2----", price);
}

pricing();

function pricing2() {
  let price = 800;
  console.log("2- printing price inside function scope----", price);

  function abc() {
    let price = 500;
    console.log("2-  printing price inside if condition----", price);
  }
  abc();
  console.log("2- printing price inside function 2----", price);
}

pricing2();

/**
 * const:
 *  1. const introduced in ES6
 *  2. local scope variables
 *  3. It doesn't hoist the variable
 *  4. Can not reassign variable
 */

const mobileSize = "1024*1920";
console.log("printing mobile size--", mobileSize);

// mobileSize = "1024*1800";
// console.log("printing mobile size--", mobileSize);
/**
 * It will throw an error
 *
 * Uncaught TypeError: Assignment to constant variable.
 */

function constPricing() {
  console.log("3.- printing penPrice inside function---", penPrice);

  const price = 800;
  console.log("3.- printing price inside function 2----", price);

  if (2 + 2 == 4) {
    const price = 500;
    console.log("3.- printing price inside if condition----", price);
  }
  console.log("3.- printing price inside function 2----", price);
}

constPricing();

function constPricing2() {
  const price = 800;
  console.log("4.- printing price inside function scope----", price);

  function abc() {
    const price = 500;
    console.log("4.-  printing price inside if condition----", price);
  }
  abc();
  console.log("4.- printing price inside function 2----", price);
}

constPricing2();

// /------------

let bag = ["laptop", "mobile", "camera"];
console.log("printing bag---", bag);

bag = "i don't have bag";
console.log("printing bag--2---", bag);

const bag2 = ["laptop", "mobile", "camera"];
console.log("printing bag-3--", bag2);

// bag2 = "i don't have bag";
// console.log("printing bag--2---", bag2);

const newBag = bag2.with(2, "Light");

console.log("printing bag-4--", newBag, bag2);

/**
 * --- Rules to declare variable
 * 1. in JS variable must be in camelCase --> thisIsVariableExample
 * 2. Variable shouldn't be start from any special character and number -->  #price, @price, =price, 56price, 34age
 *      But we can use _variableName, $variableName
 * 3. Variables must be self explanatory - price, sumOfNum, age, dob,
 * 4. Do not use reserved keywords for variables-> function, for, if, this, class, let, const, var, console.
 * 5. never declare variable with same names
 * 6. Never use space in between variable name --> new bag
 * 7. Never use - (hyphen) in variable , new-bag
 * 8. Never use any special character inside Variable --> new$bag,
 * 9. JS is case-sensitive language --> NewBag !== newBag
 *
 *
 */

const fortKnight = "class is going on";

console.log("fort---", fortKnight, typeof fortKnight);

const COLOR_RED = "#f00";
const color_red_light = "f01";
const COLOR_BLACK = "#000";
console.log("COLOR_RED---", COLOR_RED, typeof COLOR_RED);
console.log("color_red_light---", color_red_light, typeof color_red_light);
console.log("COLOR_BLACK---", COLOR_BLACK, typeof COLOR_BLACK);

// ---------------------- typeof -----------
/**
 * typeof will provide the datatype of variable or value
 * number, string, boolean, undefined, object
 */
const age = 50;
const age2 = "50";

console.log("age--->", age, typeof age); // 50 , number
console.log("age2--->", age2, typeof age2); // 50 , string

const isRaining = true;
const isRainingToday = "false";

console.log("isRaining--->", isRaining, typeof isRaining); // true, boolean
console.log("isRainingToday--->", isRainingToday, typeof isRainingToday); //  false, string

let section = null;
const section2 = undefined;

console.log("datatype of section ---> ", section, typeof section); // null, object
console.log("datatype of section2 ---> ", section, typeof section2); // null/undefined  , undefined

section = "null";
console.log("datatype of section ---> ", section, typeof section); // null, object
