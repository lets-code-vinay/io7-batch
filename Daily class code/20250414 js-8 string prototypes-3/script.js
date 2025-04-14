// 20250414 js-8 string prototypes-3

// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String

/**
 * .subStr()
 * It has been deprecated and not suggested to use
 * It returns a new sub-string after slicing
 */

const dummyString = `This is the complete series for the English dub of  Ultimate Muscle These episodes where cut and remux from Discotek Media SD on Blu-ray release this isn't perfect but it is the highest quality we got hopefully everyone enjoys`;

console.log("--substr -1 -->", dummyString.substr(5, 10));
console.log("--substr -2 -->", dummyString.substr(15, 100));
console.log("--substr -3 -->", dummyString.substr(5));

/**
 * .subString()
 * It returns a new sub-string after slicing
 */

console.log("--substring -1 -->", dummyString.substring(5, 10));
console.log("--substring -2 -->", dummyString.substring(15, 100));
console.log("--substring -3 -->", dummyString.substring(5));

const schoolName = "Cambridge international Foundation School";
/**
 * Create a function to create a substring by index value using .substring()
 *
 */

function getSubString(str, index1, index2) {
  const newString = str.substring(index1, index2);

  return newString;
}

const newString = getSubString(schoolName, 10, 20);
console.log("newString--of school name --1--", newString);

console.log("newString--of school name --2--", getSubString(schoolName, 1, 10));

/**
 * Create a function with slice to make a substring by index value .slice()
 *
 */
function getSlicedString(str, index1, index2) {
  const newString = str.slice(index1, index2);

  return newString;
}

const newString2 = getSlicedString(schoolName, 10, 20);
console.log("newString2--of school name --1--", newString2);

console.log(
  "newString2--of school name --2--",
  getSlicedString(schoolName, 1, 10)
);

// Assignment: What is difference between .slice() and .substring()

//-----------------------------

/**
 * .trim()
 *  It removes blank spaces at starts and ends of string
 */

const string2 = "     hello Chandni   ";

console.log("trimming---1--->", string2, string2.trim());

console.log("trimming--start-2--->", string2, string2.trimStart());

console.log("trimming-end--3--->", string2, string2.trimEnd());

/**
 * Create a function which removes starting and ending blank space
 */

function trimSpaceFromString(str) {
  const trimmedString = str.trim();
  return trimmedString;
}

const thisIsTrimmedString = trimSpaceFromString(string2);
console.log("trimming-thisIsTrimmedString--->", thisIsTrimmedString);

/**
 * .padStart()
 */

const str2 = "Pikachu";

console.log("-->", str2.padStart(9, "$"));
console.log("--2-->", str2.padStart(str2.length + 5, "$"));

/**
 * .padEnd()
 */
console.log("-->", str2.padEnd(9, "$"));
console.log("--2-->", str2.padEnd(str2.length + 5, "$"));

//--

/**
 * Types of operators
 * 1. Arithmetic operator
 * 2. Logical Operator
 * 3.
 */
