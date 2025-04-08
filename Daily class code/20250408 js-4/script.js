/**
 * NaN --> Not a Number
 */
/**
 * isNaN()
 * isNaN is used to check if number is a non number datatype
 * it will return true if any value is a non-number
 * EG. 45 -> false
 *      '45' -> false
 *      '45red' -> true
 *
 */

const num1 = 45;
const num2 = "45";
const num3 = "45a";
const num4 = "red";

console.log("---> testing nan--", isNaN(num1));
console.log("---> testing nan 1--", isNaN(num2));
console.log("---> testing nan 2--", isNaN(num3));

/**
 * Check datatype is number (true/false)
 * 1. typeof variable === 'number'
 * 2. Number.isInteger(value, variable)
 */

console.log(
  "--check data-type - using typeof-- 1--",
  typeof num1,
  typeof num1 === "number"
);

console.log(
  "--check data-type - using typeof-- 2--",
  typeof num2,
  typeof num2 === "number"
);

console.log(
  "--check data-type - using typeof-- 3--",
  typeof num3,
  typeof num3 === "number"
);

console.log(
  "--check data-type - using typeof-- 4--",
  typeof num4, // string
  typeof num4 === "number" // false
);
console.log("Number.isInteger(45)--", Number.isInteger("45red"));
console.log("---> isInteger num1 --", Number.isInteger(num1)); // true
console.log("---> isInteger num2--", Number.isInteger(num2)); // false
console.log("---> isInteger num3 --", Number.isInteger(num3)); //false
console.log("---> isInteger num4 --", Number.isInteger(num4)); // false

// 78 --> '78'
// '10' --> 10
// 'red' -->
// '50apples' -->

// Number !== number
// String !== string

console.log(
  "--->",
  Number(10),
  Number("10"),
  Number("10cherries"),
  Number("red")
);

const variable1 = 78;
const variable2 = "781";
const variable3 = "78rupees";
const variable4 = "India Gate";
const variable5 = "true";
const variable6 = true;
const variable7 = undefined;
const variable8 = false;

/**
 *  convert any string datatype to number datatype
 */

console.log("variable--1--", Number(variable1)); // 78
console.log("variable--2--", Number(variable2)); // 781
console.log("variable--3--", Number(variable3)); // NaN
console.log("variable--4--", Number(variable4)); // NaN
console.log("variable--5--", Number(variable5)); // NaN
console.log("variable--6--", Number(variable6)); // 1
console.log("variable--7--", Number(variable7)); // NaN
console.log("variable--8--", Number(variable8)); // 0

/**
 * Convert any number datatype to string datatype
 */
console.log("string- variable--1--", String(variable1)); // '78'
console.log("string- variable--2--", String(variable2)); // '781'
console.log("string- variable--3--", String(variable3)); // "78rupees"
console.log("string- variable--4--", String(variable4)); // "India Gate"
console.log("string- variable--5--", String(variable5)); // "true"
console.log("string- variable--6--", String(variable6)); // 'true'
console.log("string- variable--7--", String(variable7)); // 'undefined'
console.log("string- variable--8--", String(variable8)); // 'false'

/**
 * Convert any datatype  to Boolean datatype
 * Boolean()
 * Falsy values
 *      false
 *      0
 *      null
 *      undefined
 *      ''
 *
 *      [] -- no
 *      {} -- no
 */

let variable9;
const variable10 = "";
const variable11 = "null";
const variable12 = "undefined";
const variable13 = 0;
const variable14 = 1;
const variable15 = [];
const variable16 = {};
const variable17 = "{}";
const variable18 = ["red", "blue", "bike"];

console.log("Boolean- variable--1--", Boolean(variable1)); // true
console.log("Boolean- variable--2--", Boolean(variable2)); // true
console.log("Boolean- variable--3--", Boolean(variable3)); // true
console.log("Boolean- variable--4--", Boolean(variable4)); // true
console.log("Boolean- variable--5--", Boolean(variable5)); // true
console.log("Boolean- variable--6--", Boolean(variable6)); // true
console.log("Boolean- variable--7--", Boolean(variable7)); // false
console.log("Boolean- variable--8--", Boolean(variable8)); // false

console.log("Boolean- variable--9--", Boolean(variable9)); // false
console.log("Boolean- variable--10--", Boolean(variable10)); // false
console.log("Boolean- variable--11--", Boolean(variable11)); // true
console.log("Boolean- variable--12--", Boolean(variable12)); // true
console.log("Boolean- variable--13--", Boolean(variable13)); // false
console.log("Boolean- variable--14--", Boolean(variable14)); // true
console.log("Boolean- variable--15--", Boolean(variable15)); // true
console.log("Boolean- variable--16--", Boolean(variable16)); // true
console.log("Boolean- variable--17--", Boolean(variable17)); // true
console.log("Boolean- variable--18--", Boolean(variable18)); // true

/**
 *  ------------Math Library -----------------
 *  Math library is used to perform mathematical operations, like, square root, absolute value, min, max
 *  https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math
 */

// ---------- Math.abs() ---
// It will always return non negative values

console.log("-- Math.abs 1--", Math.abs(-90));
console.log("-- Math.abs 2--", Math.abs(900));
console.log("-- Math.abs 3--", Math.abs(0));
console.log("-- Math.abs 4--", Math.abs(true));
console.log("-- Math.abs 5--", Math.abs("true"));

const numbers = [45, 784, 451, 654, 52, 26, 35, 65, 23, 64, 1, 285, 454, 5, 0];

// ---------- Math.max() ---
// It will always return the maximum value from given numbers

const mathVar1 = Math.max(45, 85, 23, -4, 78, 35, 65, 281);

const mathVar2 = Math.max(...numbers);
console.log("mathVar1-- max--", mathVar1);
console.log("mathVar2-- max--", mathVar2);

// ---------- Math.min() ---
// It will always return the minimum value from given numbers

const mathVar3 = Math.min(45, 85, 23, -4, 78, 35, 65, 281);
const mathVar4 = Math.min(...numbers);
console.log("mathVar3-- min--", mathVar3); // -4
console.log("mathVar4-- min--", mathVar4); // 0

// ---------- Math.pow() ---
// It is use to calculate values of power
// Math.pow(56, 10) --> 56^10

console.log("--> MAth.pow -1-->", Math.pow(4, 2)); // -- 4 * 4 -- 16
console.log("--> MAth.pow -2-->", Math.pow(10, 3)); // -- 10 * 10 * 10 -- 1000
console.log("--> MAth.pow -3-->", Math.pow(78, 9)); // --

// ---------- Math.random() ---
// It is use to generate some random numbers
// Math.random()

console.log("--> MAth.random -1-->", Math.random()); // --
console.log("--> MAth.random -2-->", Math.random() * 10); // --
console.log("--> MAth.random -2-->", (Math.random() * 10000).toFixed(0)); // --

// ---------- Math.sqrt() ---
// It is use to find square root of any number
// Math.sqrt(number)

console.log("--> MAth.sqrt -1-->", Math.sqrt(4)); // -- 2
console.log("--> MAth.sqrt -2-->", Math.sqrt(25)); // -- 5
console.log("--> MAth.sqrt -3-->", Math.sqrt(121)); // -- 11
console.log("--> MAth.sqrt -4-->", Math.sqrt(256)); // -- 16
console.log("--> MAth.sqrt -5-->", Math.sqrt(2561)); // --
console.log("--> MAth.sqrt -6-->", Math.sqrt((Math.random() * 100).toFixed(0))); // --

// to deal with decimal values
// value.toFixed()
// Math.round()
// Math.ceil()
// Math.floor()
// Math.trunc()

const decimal1 = 3.605551275463989;
const decimal2 = 50.40632371551998;
const decimal3 = 8.845255336890977;

// ---- .toFixed() --
// It will add decimal place values as per requirement
console.log("toFixed decimal1--", decimal1.toFixed(2));
console.log("toFixed decimal2--", decimal2.toFixed(5));
console.log("toFixed decimal3--", decimal3.toFixed(0));

// ---- Math.round() --
// It will remove decimals and adjusts numbers as per >5 or <5
console.log("Math.round decimal1--", Math.round(decimal1));
console.log("Math.round decimal2--", Math.round(decimal2));
console.log("Math.round decimal3--", Math.round(decimal3));

// ---- Math.ceil() --
// It will remove decimals and adjusts increments the number if decimal place value if greater
console.log("Math.ceil decimal1--", Math.ceil(decimal1)); // 4
console.log("Math.ceil decimal2--", Math.ceil(decimal2)); // 51
console.log("Math.ceil decimal3--", Math.ceil(decimal3)); // 9
console.log("Math.ceil --", Math.ceil(1.00001)); // 2

// ---- Math.floor() --
// It will remove decimals and return original number
console.log("Math.floor decimal1--", Math.floor(decimal1)); // 3
console.log("Math.floor decimal2--", Math.floor(decimal2)); // 50
console.log("Math.floor decimal3--", Math.floor(decimal3)); // 8
console.log("Math.floor --", Math.floor(1.00001)); // 1

// ---- Math.trunc() --
// It will remove/truncate decimals and return original number, it is similar to Math.floor()
console.log("Math.trunc decimal1--", Math.trunc(decimal1)); // 3
console.log("Math.trunc decimal2--", Math.trunc(decimal2)); // 50
console.log("Math.trunc decimal3--", Math.trunc(decimal3)); // 8
console.log("Math.trunc --", Math.trunc(1.00001)); // 1

/**
 * Basic calculation operations
 */

console.log("calculate-- 1-- ", 10 + 10); // 20
console.log("calculate-- 2-- ", "10" + 10); // 1010
console.log("calculate-- 2-- ", "10" + "10"); // 1010
console.log("calculate-- 3-- ", "10" - 5); // 5
console.log("calculate-- 4-- ", "10" + 5); // 105
console.log("calculate-- 5-- ", "10red" + 5); // 10red5
console.log("calculate-- 6-- ", "10red" - 5); // NaN
console.log("calculate-- 7-- ", "10red" * 5); // NaN
console.log("calculate-- 8-- ", "10red" + "blue"); // 10redblue
console.log("calculate-- 9-- ", "10red" - "blue"); // Nan

console.log("calculate-- 10-- ", Number(10) + 10); // 10 + 10 --> 20
console.log("calculate-- 11-- ", String(10) + String(10)); // '10' + '10' --> 1010 S
console.log("calculate-- 12-- ", Number("10") + 10); // 1010 S XXX --> 10 + 10 --> 20
console.log("calculate-- 13-- ", Boolean("10") - 5); // 5 XXX --> true - 5 --> 1 - 5 --> -4
console.log("calculate-- 14-- ", "10" + String(5)); // 105 OK --> '10' + '5' --> '105'
console.log("calculate-- 15-- ", Number("10red") + 5); // NaN   --> NaN + 5 --> NaN
console.log("calculate-- 16-- ", Number("10red") - 5); // NaN --> NaN - 5 --> NaN
console.log("calculate-- 17-- ", Boolean("10red") * 5); // NaN --> 1 * 5 --> 5
console.log("calculate-- 18-- ", Boolean("10red") + Boolean("blue")); // 10redblue XXX --> true + true  --> 1 + 1 --> 2
console.log("calculate-- 19-- ", Boolean("10red") - Boolean("blue")); //NaN XXX --> true - true --> 0
console.log("calculate-- 20-- ", Number("10") + Boolean("10")); // 20 XXX --> 10 + 1 --> 11
