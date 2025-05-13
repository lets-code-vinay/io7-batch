// Array-1

/**
 * datatypes
 *  1.  Primitive datatype
 *        Boolean
 *        undefined
 *        Number
 *        string
 *        null
 *  2. Non primitive datatypes
 *        Array
 *        Object
 */

// What is Array?
/**
 * Array is a non primitive data-type
 * It consumes memory and can sub-divide memory to sub-memory
 * It works like a container and can contains any kind of data
 * like number, boolean, string, variable, undefined,object, array
 */

const paise = [100, 200, 50, 50];
const idCards = { card1: "SBI", card2: "Indian Bank" };
const bag = [
  "mouse",
  "laptop",
  "charger",
  "notebooks",
  "pen",
  paise,
  idCards,
  undefined,
  true,
  null,
  [
    "red",
    "green",
    ["Iron", "sword", "Shield", "knife"],
    [],
    [
      1,
      "hello",
      true,
      [
        "name:",
        "John",
        "age:",
        30,
        [
          "maria",
          "julia",
          ["rose", "blossom", "tulip", ["red lotus", "white lotus"]],
          "david",
          "kevin",
        ],
      ],
      [10, ["apple", "banana", "cherry"], 20, "world", false],
    ],
    "yellow",
  ],
];

console.log("bag--", bag, bag[2], bag[4]);

console.log("array-print--->", bag[10][3]);
console.log("array-print-2-->", bag[5][2]);
// 2
// 1
// 4
// 10

console.log("print cherry--", bag[10][4][4][1][2]);

/**
 * Print
 * 1. white lotus
 * 2. age:
 * 3. 20
 * 4. null
 * 5. true,
 * 6. shield
 * 7. rose
 *
 */

const fruits = ["apple", "banana", "cherry"];
//                0         1        2
// index -- counting start from 0
// element

/**
 * @description for loop is being used to print values from arrays
 * one by one
 */
for (let i = 0; i <= 2; i++) {
  console.log(`Fruit at ${i + 1} is ${fruits[i]}`);
}

const weapons = ["Iron", "sword", "Shield", "knife", "gun", "warship"];

for (let i = 0; i < weapons.length; i++) {
  if (i % 2 == 0) {
    console.log(`-${i + 1}- Weapons is ${weapons[i]}`);
  }
}

for (let i = 0; i < weapons.length; i++) {
  console.log(`When i will go on war i will carry ${weapons[i].toUpperCase()}`);
}
const veges = [
  "potatoes",
  "brinjal",
  "cabbage",
  "chillies",
  "capsicum",
  "onion",
];

/**
 * @description array.length
 * to find the length of array or the counts of elements inside
 * we use array.length
 */
console.log(`the length of weapons array is --> ${weapons.length}`);
console.log(`the length of fruits array is --> ${fruits.length}`);

/**
 * @description to check if any variable is array or not
 * 1. Array.isArray(variable)
 */

console.log(`checking array of weapons-->`, Array.isArray(weapons));
console.log(`checking array of iCards-->`, Array.isArray(idCards));

const a = 10;
const str = "10 rupees";

console.log(`checking array of variable a-->`, Array.isArray(a));
console.log(
  `checking array of variable str with string-->`,
  Array.isArray(str)
);
console.log(`checking array of fruits-->`, Array.isArray(fruits));

/**
 * @description To convert any string to array of string
 * Array.from(string)
 */
console.log("Array from-", Array.from(str));

/**
 * @description to convert any given value to array
 * 1. Array.of(value1, value2)
 * 2. [value1, value2]
 */
console.log("Array.of()---", Array.of(null, true, 20, "Hello", str, weapons));
console.log("method 2--", [null, true, 20, "Hello", str, weapons]);

/**
 * @description to find the value at given index
 * 1. by passing index number in [index]
 * 2. by using .at(index)
 */
console.log("Checking element at 2nd index using []--", weapons[2]);
console.log("Checking element at 3rd index using .at()--", weapons.at(3));

/**
 * @description concatenation of two arrays
 * 1. using concat
 * 2. using spread operator
 */

console.log("concat(join) two arrays using concat", weapons.concat(fruits));
console.log("concat(join) two arrays using concat-2-", fruits.concat(weapons));
console.log(
  "concat(join) two arrays using concat-3-",
  veges.concat(fruits.concat(weapons))
);

console.log("concat(join) two arrays using spread operator", [weapons, fruits]);
console.log("concat(join) two arrays using spread operator--2--", [
  ...weapons,
  fruits,
]);
console.log("concat(join) two arrays using spread operator--3--", [
  ...weapons,
  ...fruits,
]);
console.log("concat(join) two arrays using spread operator--4--", [
  ...fruits,
  ...weapons,
]);

console.log("concat(join) two arrays using spread operator--5--", [
  ...fruits,
  ...veges,
  ...weapons,
]);

const copyFruits = [...fruits];
fruits.push("plum");
console.log("fruits-0--", fruits, copyFruits);

const rupees = [100, 200, 50, 20, 10, 5, 2, 1];
const copyRs = [...rupees];
const newRs = rupees.map((r) => {
  return r * 2;
});

console.log("rupess-", newRs, copyRs);

/**
 * @description to add any value in array
 *  a. Add value at last
 *  b. Add value at first
 *  c. Add value at in between at specific index
 */
/**
 * @description to Add value at last of array
 * 1. .push()
 * 2.  ... spread operator
 */
const copiedVeges = [...veges];
veges.push("Garlic");
veges.push("Ginger");
console.log("add vege at last of veges--", veges);
// using spread operator
console.log("add veges at last using spread---", [
  ...copiedVeges,
  "Garlic",
  "Ginger",
  "jackguard",
]);

/**
 * @description to Add value at starting of array
 * 1. .unshift()
 * 2.  ... spread operator
 */
copiedVeges.unshift("Spinach");
copiedVeges.unshift("Pumpkin");

console.log("copiedVeges--", copiedVeges);
console.log("adding at first using spread--", ["Cucumber", ...copiedVeges]);
console.log("adding at first using spread 2--", [
  "Tomotoes",
  "lemon",
  ...copiedVeges,
  "mint",
]);

/**
 * @description Remove element from the end of array or last element
 * 1. .pop()
 * 2. copiedVeges.length = copiedVeges.length - 1
 *
 */
// copiedVeges.pop();
// copiedVeges.pop();
// copiedVeges.pop();
// copiedVeges.pop();
// copiedVeges.length = 2;
copiedVeges.length = copiedVeges.length - 1;
copiedVeges.length = copiedVeges.length - 1;
copiedVeges.length = copiedVeges.length - 1;

console.log("copiedVeges-2-", copiedVeges);

/**
 * @description Remove element from the start of array or first element
 * 1. .shift()
 *
 */
copiedVeges.shift();
copiedVeges.shift();

console.log("copiedVeges-3-", copiedVeges);

/**
 * @description to check if given value is existed in array of not
 * .includes()
 */
console.log("weapons-3-", weapons.includes("gun"));
console.log("weapons-4-", weapons.includes("Gun"));
console.log("weapons-5-", weapons.includes("Gun".toLowerCase()));
console.log("weapons-6-", weapons.includes("Powder"));

/**
 * @description to join all the values of array
 * .join()
 */
console.log("weapons- join -1-", weapons.join(""));
console.log("weapons- join -2-", weapons.join(" "));
console.log("weapons- join -3-", weapons.join("-"));
console.log("weapons- join -4-", weapons.join("_"));
console.log("weapons- join -5-", weapons.join("/"));

/**
 * @description to remove nested array and make it single array
 * .flat()
 */
const arr = [1, 2, 3, ["a", "b", "c"]];
const arr2 = [1, weapons, 2, 3, ["a", "b", "c"]];
const arr3 = [1, weapons, 2, 3, ["a", ["Ab", "BC", "CD"], "b", "c"]];

console.log(".flat() ---1---", arr.flat());
console.log(".flat() ---2---", arr2.flat());
console.log(".flat() ---3---", arr3.flat().flat());

/**
 * @description REverse the array
 * .reverse()
 */
console.log("weapons to reverse-0-0", weapons, weapons.reverse());

const arr4 = [1, 56, 2, 89, 54, 78, -1, 55, 10, 89, 3];

/**
 * @description sorting array
 *
 */
console.log("sorting--1-", arr4.sort());
console.log("sorting--2-", weapons.sort());

/**
 * @description loops
 * 0. .forEach()
 * 1. .map()
 * 2. .filter()
 * 3. .find()
 * 4. .findLast()
 * 5. .findIndex()
 * 6. .findLastIndex()
 * 7. .some()
 * 8. .every()
 * 9. .fill()
 *
 */
