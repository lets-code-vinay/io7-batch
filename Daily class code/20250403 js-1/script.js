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
