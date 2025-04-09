/**
 * Function Declaration
 */

console.log("print 1--");
function functionName() {
  console.log("print 2--");
}
console.log("print 3--");

functionName();
console.log("print 4--");

function callCarpenter(param1, param2) {
  console.log("Calling carpenter param1--", param1);
  console.log("Calling carpenter param2--", param2);

  callPlumber("leaking pipes", "bring hammer");
}

callCarpenter("Broken bed", "bring tools");

function callPlumber(param1, param2) {
  console.log("Calling plumber param1--", param1);
  console.log("Calling plumber param2--", param2);

  //   callCarpenter("Broken bed", "bring tools");
}

// callMason("only 50 rs", "new house");

// const callMason = (param1, param2) => {
//   console.log("Calling mason param1--", param1);
// };

const callElectrician = function (param1) {
  console.log("Calling Electrician param1--", param1);
};

callElectrician("electrical appliances not working");

function addTwoNumbers(a, b, c) {
  const d = a + b + c;
  //   console.log(`The sum of ${a}, ${b} and ${c} is ${d}`);
  subTwoNumber(d);
  return d;
}

const abc = addTwoNumbers(56, 89, 10);
console.log("abc--", abc);

function subTwoNumber(d) {
  const b = d - 50;
  const abc = mulTwoNumber(b);
  console.log("abc--->-->", abc);
}

function mulTwoNumber(b) {
  const final = b - 50;
  console.log("final--", final);
  return final;
}

//_____________________________________String_____________________

/**
 *  ----------- String.length --------------
 *   is used to find the length of any string or we can say that it will counts the characters of string
 *
 */
const randomString = `#$#$ #$#$ #$%$%$%`;

const myString = `Strings are useful for holding data that can be represented in text form. Some of the most-used operations on strings are to check their length`;
console.log("myString---", myString.length);

function findTheLengthOfString(check) {
  const lengthOfString = check.length;
  return lengthOfString;
}

const lengthIs = findTheLengthOfString(myString);
console.log("lengthIs--", lengthIs);

const lengthIs2 = findTheLengthOfString(randomString);
console.log("lengthIs2 of random characters--", lengthIs2);

const lengthIs3 = findTheLengthOfString(" ");
console.log("lengthIs3 of characters--", lengthIs3);

/**
 *  ----------- String.toUpperCase() --------------
 *   is used to make string to UpperCase as it name's refer
 *
 */

console.log("myString toUpperCase---", myString.toUpperCase());

function getCapitalString(str) {
  return str.toUpperCase();
}

console.log(
  "myString toUpperCase 2---",
  getCapitalString("myString toUpperCase 2")
);

/**
 *  ----------- String.toLowerCase() --------------
 *   is used to make string to LowerCase as it name's refer
 *
 */

console.log("myString toLowerCase---", myString.toLowerCase());

function getLowerString(str) {
  return str.toLowerCase();
}

console.log(
  "myString getLowerString 2---",
  getLowerString("myString toLowerCase 2")
);
