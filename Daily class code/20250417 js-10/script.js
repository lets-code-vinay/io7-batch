// Daily class code/20250417 js-10

/**
 * Types of operator
 * 1. Arithmetic operator
 *   Additional Operator is used to performed mathematical operations
 *   It has operand and operator
 *          operator +, -, *, /, %, **, ++, --
 *          operand 1,  2 ....
 *
 *      1.1 Additional operator
 *                  It perform addition of two operands or more than two operands
 *                  It is used to add two numbers or more than two numbers
 *                      e.g. 10 +20 + 30 + 40 + 50 = 150
 *                  It is used to concatenate two strings or more than two strings
 *                      e.g. "Hello" + "World" = HelloWorld
 *      1.2 Subtraction operator
 *                  It perform subtraction of two operands or more than two operands
 *                  It is used to subtract two numbers or more than two numbers
 *                      e.g. 100 - 50 - 25 = 25
 *                  When It is used to subtract two strings or more than two strings it will return NaN
 *                      e.g. "Hello" - "World" = NaN
 *      1.3 Multiplication operator
 *                  It perform multiplication of two operands or more than two operands
 *                  It is used to multiply two numbers or more than two numbers
 *                      e.g. 10 * 20 * 30 = 6000
 *                  When It is used to multiply two strings or more than two strings it will return NaN
 *                      e.g. "Hello" * "World" = NaN
 *      1.4 Division operator
 *                  It perform division of two operands or more than two operands
 *                  It is used to divide two numbers or more than two numbers
 *                      e.g. 100 / 50 / 2 = 1
 *                  When It is used to divide two strings or more than two strings it will return NaN
 *                      e.g. "Hello" / "World" = NaN
 *      1.5 Modulus operator
 *                 It perform modulus of two operands or more than two operands
 *                 It is used to find the remainder of two numbers or more than two numbers
 *                      e.g. 10 % 3 = 1
 *                      e.g. 10 % 3 % 2 = 1
 *                    It is used to find the remainder of two strings or more than two strings
 *                     e.g. "Hello" % "World" = NaN
 *      1.6 Exponential operator
 *                 It perform exponential of two operands or more than two operands
 *                 It is used to find the power of two numbers or more than two numbers
 *                     e.g. 2 ** 3 = 8
 *                     e.g. 2 ** 3 ** 2 = 64
 *
 *      1.7 Increment operator
 *                 It is used to increment the value of a variable by 1
 *                 It is used to increase the value of a variable by 1
 *                    e.g. let a = 10
 *                       a++ // 11
 *                      ++a // 12
 *        We have two types of increment operator
 *                 1. Pre increment operator
 *                     It is used to increment the value of a variable by 1 before using it
 *                 2. Post increment operator
 *                    It is used to increment the value of a variable by 1 after using it
 *
 *
 *      1.8 Decrement operator
 *                  It is used to decrement the value of a variable by 1
 *                 It is used to decrease the value of a variable by 1
 *                    e.g. let a = 10
 *                       a-- // 11
 *                      --a // 12
 *
 * 2. Assignment operator
 * 3. Comparison operator
 * 4. Logical operator
 * 5. Bitwise operator
 * 6. Ternary operator
 * 7. Type operator
 * 8. Nullish operator
 * 9. Spread and rest operator
 * 10. Optional chaining operator
 */

/**
 * types of functions
 *  1. Function declaration
 *      not recommended to use in modern js
 *      It is hoisted and can be called before it is defined
 *
 *  2. Function expression
 *     It is not hoisted and can be called after it is defined
 *
 *  3. arrow function (also called fat arrow function or function expression)
 *  4. function with default parameter
 *  5. Strict function
 *  6. function with rest parameter
 *
 */

// arrow function
// Arrow function is a shorter syntax for writing function expressions
// It is not hoisted and can be called after it is defined
// It is feature of ES6

// default parameter
// It is feature of ES6
// We can set default value for the parameter

// strict function

// ---------------- JS default popup ------------------
// 1. alert
// It is used to display a message to the user

// 2. confirm

// It is used to display a message to the user and ask for confirmation
// It returns true or false based on user input

// 3. prompt
// It is used to display a message to the user and ask for input
// It is used to get input from the keyboard
// It returns the input value as a string or null. we can store the value in a variable

/**
 * Create a function which accepts two parameters and performs all arithmetic operations on them
 * This function takes input from keyboard
 */

const getAllArithmeticOperations = (n1, n2) => {
  console.log("--------------------------------------------------");
  console.log(`First number is ${n1} and second number is ${n2}`);
  const sumOfNumbers = n1 + n2;
  console.log(`Sum of ${n1} and ${n2} is ${sumOfNumbers}`);

  const subtractionOfNumbers = n1 - n2;
  console.log(`Subtraction of ${n1} and ${n2} is ${subtractionOfNumbers}`);

  const multiplicationOfNumbers = n1 * n2;
  console.log(
    `Multiplication of ${n1} and ${n2} is ${multiplicationOfNumbers}`
  );

  const divisionOfNumbers = n1 / n2;
  console.log(`Division of ${n1} and ${n2} is ${divisionOfNumbers}`);

  const modulusOfNumbers = n1 % n2;
  console.log(
    `Modulus of ${n1} and ${n2} is ${modulusOfNumbers}. This is the remainder of ${n1} and ${n2}`
  );

  const exponentialOfNumbers = n1 ** n2;
  console.log(`Exponential of ${n1} and ${n2} is ${exponentialOfNumbers}`);

  const preIncrementOfNumbers = ++n1;
  console.log(`Pre Increment of ${n1} is ${preIncrementOfNumbers}`);

  const preDecrementOfNumbers = --n1;
  console.log(`Pre Decrement of ${n1} is ${preDecrementOfNumbers}`);

  const postIncrementOfNumbers = n1++;
  console.log(`Post Increment of ${n1} is ${postIncrementOfNumbers}`);

  const postDecrementOfNumbers = n1--;
  console.log(`Post Decrement of ${n1} is ${postDecrementOfNumbers}`);
};

// const num1 = prompt("Enter first number");
// const num2 = prompt("Enter second number");
// getAllArithmeticOperations(Number(num1), Number(num2));
getAllArithmeticOperations(10, 20);

/**
 * Create a function which find the simplest interest
 * It takes three parameters
 * 1. principal amount`
 * 2. rate of interest
 * 3. time in years
 *
 * It returns the simplest interest
 * It uses the formula SI = (P * R * T) / 100
 */

const getSimpleInterest = ({ principal = 0, roi = 0, years = 0 }) => {
  console.log("--------------------------------------------------");
  console.log(
    `Principal amount is ${principal}, Rate of interest is ${roi}, Time in years is ${years}`
  );

  const simpleInterest = (principal * roi * years) / 100;
  console.log(
    `The simple interest is ${simpleInterest} for the principal amount ${principal} and rate of interest is ${roi} and time in  years is ${years}`
  );
};

// const p = prompt("Please enter principal amount");
// const r = prompt("Please enter rate of interest");
// const t = prompt("Please enter time in years");

// getSimpleInterest({ principal: p, roi: r, years: t });

console.log(
  "----------------Assignment operator----------------------------------"
);
// ## 2. Assignment Operators
// -1 Basic Assignment (`=`)

// -- following assignment operators are used only with let.
// -- It is used to reassign a value to the same variable
// example: let b = 20;
// // b = b + 10;
// b += 10;

// -2 Add and Assign (`+=`)
// -3 Subtract and Assign (`-=`)
// -4 Multiply and Assign (`*=`)
// -5 Divide and Assign (`/=`)
// -6 Modulus and Assign (`%=`)

const a = 105;
let b = 20;
// b = b + 10;
b += 10;

console.log("b---->", b); // 30

let c = 15;
c = b - c; // 15

c -= 10; // c = c -10

console.log("c---->", c);

// --------------------------------------------------------------------
console.log(
  "-----------------------Comparison Operators---------------------------------------------"
);
// Comparison Operators
// - Equal (`==`)
// - Strict Equal (`===`)
// - Not Equal (`!=`)
// - Strict Not Equal (`!==`)
// - Greater Than (`>`)
// - Less Than (`<`)
// - Greater Than or Equal (`>=`)
// - Less Than or Equal (`<=`)

/**
 * Comparison means to compare two values on left hand side to right hand side
 */

// 1. Equal (==)
//      also known as double equal
//      It checks only value not Data-type
//      if values are same but data type are not same --> it will return true
//      eg.  20 == '20' ---> true
// 2. Equal (===)
//      also know as triple equal
//      It checks value and datatype
//      if values are same but data type are not same --> it will return false
//      eg.  20 == '20' ---> false
//

console.log("--comparison two values--1--", 10 == 10); // true
console.log("--comparison two values--2--", 10 == "10"); // true
console.log("--comparison two values--3--", 4 == "10"); // false
console.log("--comparison two values--4--", "4" == "10"); // false
console.log("--comparison two values--5--", "Vinay" == "Vinay"); // true
console.log("--comparison two values--6--", "Vinay" == "vinay"); // false
console.log("--comparison two values--7--", "Vinay" === "vinay"); // false
console.log("--comparison two values--8--", "50" === "50"); // true
console.log("--comparison two values--9--", "501" === "50"); // false
console.log("--comparison two values--10--", true === 1); // false
console.log("--comparison two values--11--", true == 1); // true
console.log("--comparison two values--12--", null == 1); // false
console.log("--comparison two values--13--", null == false); // false
console.log("--comparison two values--14--", null == undefined); // true
console.log("--comparison two values--15--", false == false); // true
console.log("--comparison two values--16--", false == ""); //  true

console.log("--comparison two values--17--", null === 1); // false
console.log("--comparison two values--18--", null === false); //  false
console.log("--comparison two values--19--", null === undefined); // false
console.log("--comparison two values--20--", false === false); // true
console.log("--comparison two values--21--", false === ""); // false

//----------- 20250418 comparison operators -------------------
// not Equal to (!=)
// Strict not Equal to (!==)

console.log("--comparison not equal two values--1--", 50 != 51); // true
console.log("--comparison not equal two values--2--", 50 != 50); // false
console.log("--comparison not equal two values--3--", 50 != "50"); // false
console.log("--comparison not equal two values--4--", "vinay" != "50"); // true
console.log("--comparison not equal two values--5--", "vinay" != "vinay"); // false
console.log("--comparison not equal two values--6--", "vinay" != "vInay"); // true
console.log("--comparison not equal two values--7--", 152 != "152"); // false
console.log("--comparison not equal two values--8--", "152" != "152"); // false
console.log("--comparison not equal two values--9--", 152 !== "152"); // true
console.log("--comparison not equal two values--10--", true != 1); // false
console.log("--comparison not equal two values--11--", true !== 1); // true
console.log("--comparison not equal two values--12--", true !== false); // true
console.log("--comparison not equal two values--13--", 10 + 20 == "10" + "20"); // false
console.log("--comparison not equal two values--14--", 10 + 20 == "10+20"); // false
console.log("--comparison not equal two values--15--", 10 + 20 !== "10+20"); // true
console.log("-------------------------------------------------");

// greater than
console.log("--comparison greater than --1--", 20 > 21); // false
console.log("--comparison greater than --2--", 20 > 20); // false
console.log("--comparison greater than --3--", 20 > "20"); // false
console.log("--comparison greater than --4--", 21 > "20"); // true
console.log("--comparison greater than --5--", 21 > "20Street"); // false
console.log("--comparison greater than --6--", "a" > "b"); // false
console.log("--comparison greater than --7--", "b" > "a"); // a -> ASCII 97 , b -> 98
console.log("--comparison greater than --8--", "chandni" > "vinay"); // false
console.log("--comparison greater than --9--", "vinay" > "chandni"); // true
console.log("--comparison greater than --10--", "vinay" > "vijay"); //  true
console.log("--comparison greater than --11--", 10 + 20 > 31); //  false
console.log("--comparison greater than --12--", 10 + 20 > 31 - 10); //  true
console.log("--comparison greater than --13--", 100 > 12 > 5); // false -- 100 > 12 > 5 --> true > 5 --> 1 > 5

// greater than and equal to
console.log("--comparison greater than equal to--1--", 10 >= 9); //  true
console.log("--comparison greater than equal to--2--", 10 >= 10); //  true
console.log("--comparison greater than equal to--3--", "vinay" >= "vinay"); //  true
console.log("--comparison greater than equal to--4--", "vinay" >= "vijay"); //  true
console.log("--comparison greater than equal to--5--", "vijay" >= "vinay"); //  false
console.log("--comparison greater than equal to--6--", true >= true); //  true
console.log("--comparison greater than equal to--7--", 1 >= true); //  true
console.log("--comparison greater than equal to--8--", 1 >= "1"); //  true
console.log("--comparison greater than equal to--9--", false >= 0); //  true
console.log("--comparison greater than equal to--10--", 10 + 20 >= 10 + 19); //  true
console.log(
  "--comparison greater than equal to--11--",
  10 + 20 >= 10 + 19 > 10 + 21
); //  false

console.log(
  "--comparison greater than equal to--12--",
  10 + 20 >= 10 + 19 == 60 - 1 > 10
); // true

// less than
console.log("--comparison less than --1--", 10 < 9); // false
console.log("--comparison less than --2--", 10 < 10); // false
console.log("--comparison less than --3--", "vinay" < "vinay"); // false
console.log("--comparison less than --4--", "vinay" < "vijay"); // false
console.log("--comparison less than --5--", "vijay" < "vinay"); // true
console.log("--comparison less than --6--", true < true); // false
console.log("--comparison less than --7--", 1 < true); // false
console.log("--comparison less than --8--", 1 < "1"); // false
console.log("--comparison less than --9--", false < 0); // false

// less than and equal to
console.log("--comparison less than equal to--1--", 10 <= 9); // false
console.log("--comparison less than equal to--2--", 10 <= 10); // true
console.log("--comparison less than equal to--3--", "vinay" <= "vinay"); // true
console.log("--comparison less than equal to--4--", "vinay" <= "vijay"); //  false
console.log("--comparison less than equal to--5--", "vijay" <= "vinay"); // true
console.log("--comparison less than equal to--6--", true <= true); //  true
console.log("--comparison less than equal to--7--", 1 <= true); //  true
console.log("--comparison less than equal to--8--", 1 <= "1"); //  true
console.log("--comparison less than equal to--9--", false <= 0); //  true

// ## 4. Logical Operators
// - AND (`&&`)
// - OR (`||`)
// - NOT (`!`)

console.log("logical not--1--", !true); // false
console.log("logical not--2--", !false); // true
console.log("logical not--3--", !"chandni"); // false
console.log("logical not--4--", !Boolean("chandni")); // !true --> false
console.log("logical not--5--", !Boolean("null")); // !true --> false
console.log("logical not--6--", !Boolean(null)); // !false --> true
console.log("logical not--7--", !0); // true

console.log("logical AND--1--", true && true); // true
console.log("logical AND--2--", true && false); // false
console.log("logical AND--3--", false && false); // false
console.log("logical AND--4--", false && true); // false
console.log("logical AND--5--", !false && true); // true && true -> true
console.log("logical AND--6--", null && true); // null
console.log("logical AND--7--", Boolean(null) && true); // false
console.log("logical AND--8--", undefined && true); // undefined
console.log("logical AND--9--", !Boolean(undefined) && true); // !false && true ==> true && true --> true

console.log("logical OR--1--", true || true); // true
console.log("logical OR--2--", true || false); // true
console.log("logical OR--3--", false || false); // false
console.log("logical OR--4--", false || true); // true
console.log("logical OR--5--", !false || true); // true
console.log("logical OR--6--", null || true); // true
console.log("logical OR--7--", Boolean(null) || true); // true
console.log("logical OR--8--", undefined || true); // true
console.log("logical OR--9--", !Boolean(undefined) || true); // true
