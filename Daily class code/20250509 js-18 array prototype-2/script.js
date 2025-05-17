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

/**
 * @description .forEach()
 * It iterates the array.
 * We can perform any actions inside the array.
 * It doesn't return any array or value.
 * It doesn't alter or modify original array
 * This is callBack function
 * chaining is not possible
 * syntax : arr4.forEach(() => {})
 */
const fruitsOfSat = [
  "apple",
  "banana",
  "cherry",
  "MaNgo",
  "plum",
  "Litchi",
  "Guava",
  "Oranges",
  "Grapes",
  "fig",
  "plum",
  "pineapple",
  "pomegranate",
];

const fruitsReturn = fruitsOfSat.forEach((element, index) => {
  // action area
  // console.log(`Printing fruit ${element}, index--> ${index}`);
  // 1. apple
  // 2. banana

  // console.log(`${index + 1}. ${element}`);
  // console.log(`${index + 1}. ${element.toUpperCase()}`);
  // console.log(`${index + 1}. ${element.toLowerCase()}`);

  if (element.length < 5) {
    console.log(`${index + 1}. ${element.toLowerCase()}`);
  }

  if (element.toLowerCase() == "mango") {
    console.log(`checking Mango ---> ${index + 1}. ${element}`);
  }
  return `${element} fruits`;
  // mango fruits
});
console.log("fruitsReturn--", fruitsReturn, fruitsOfSat);

/**
 * @description .map()
 *
 * This is a callback function similar to forEach
 * It iterates the array
 * We can perform any kinda actions inside map
 * It doesn't mutate original array
 * It creates a new array.
 * Chaining is possible
 * syntax: fruits.map((element, index) => {action})
 *
 */

const fruitsOfMap = fruitsOfSat.map((fruit, index) => {
  // action area
  // console.log(`Printing fruits in map-- ${fruit}, index--> ${index}`);

  console.log(`${index + 1}. ${fruit}`);

  // return `${index + 1}. ${fruit}`;
  return fruit.toLowerCase();
});
console.log("fruitsOfMap--", fruitsOfMap, fruitsOfSat);

const arr4OfMap = arr4.map((num, i) => {
  console.log("num--", num);
  // return Math.abs(num);
  // return Number((Math.random() * num * 1000).toFixed(0));
  // return i + 1;

  // const fruits = fruitsOfSat.map((fruit, index) => {
  //   // console.log("----><---", );
  //   return `i have bought ${fruit} at price of ${num}`;
  // });

  // console.log("----><---", fruits);
  // return num * 10;

  if (num % 2 == 0) {
    return num;
  } else {
    return "This is odd number";
  }
});
console.log("----arr4OfMap = arr4", arr4OfMap, arr4);

/**
 * @description .filter()
 * It iterates array
 * It iterates array on basis of some condition
 * It return new array
 * It doesn't mutate original array
 * Chaining is possible
 * syntax: arr4.filter((element, index) => condition})
 *
 */

const arr4OfFilter = arr4.filter((num, i) => num % 2 === 0);
const arr4OfFilterGreater = arr4
  .filter((num, i) => num > 5)
  .map((num, index) => {
    return Math.trunc(num / 2);
  })
  .filter((ele, i) => ele % 2 == 0);
const arr4OfFilterNonPos = arr4.filter((num, i) => num < 0);
const arr4OfFilterGreater100 = arr4.filter((num, i) => num > 100);

console.log("----arr4OfFilter = arr4", arr4OfFilter, arr4);
console.log("----arr4OfFilterGreater = arr4", arr4OfFilterGreater, arr4);
console.log("----arr4OfFilterNonPos = arr4", arr4OfFilterNonPos, arr4);
console.log("----arr4OfFilterGreater100 = arr4", arr4OfFilterGreater100, arr4);

const arr4OfFilterGreater2 = arr4.filter((num, i) => num > 5);

const arr4Trunc = arr4OfFilterGreater2.map((num, index) => {
  return Math.trunc(num / 2);
});

const arr4Modal = arr4Trunc.filter((ele, i) => ele % 2 == 0);

console.log("----arr4Modal = arr4", arr4OfFilterGreater, arr4Modal, arr4);

const arrWithDupes = [1, 56, 2, 89, 54, 78, 55, 10, 3, 89, 2];

/**
 * @description .find()
 * It iterates array on basis on condition
 * It return element (without array)
 * When it finds its first element it will terminate the loop and return the found value
 * It doesn't mutate original array
 *
 */

const checkWithFilter = arrWithDupes.filter((ele, i) => ele === 89);

console.log("checkWithFilter--", checkWithFilter);
const checkWithFind = arrWithDupes.find((ele, i) => ele === 89);
console.log("checkWithFind--", checkWithFind);

/**
 * @description .findIndex()
 * It iterates array on basis on condition
 * It return index of element (without array)
 * When it finds its first element it will terminate the loop and return the index
 * It doesn't mutate original array
 *
 */

const checkWithFindIndex = arrWithDupes.findIndex((ele, i) => ele === 89);

console.log("checkWithFindIndex--", checkWithFindIndex, arrWithDupes);

/**
 * @description .findLast()
 * It iterates array on basis on condition
 * It return element (without array)
 * When it finds its last matched element it will terminate the loop and return the found value
 * It doesn't mutate original array
 *
 */

const checkWithFindLast = arrWithDupes.findLast((ele, i) => ele === 89);
console.log("checkWithFindLast--", checkWithFindLast);

/**
 * @description .findIndex()
 * It iterates array on basis on condition
 * It return index of element (without array)
 * When it finds its last element it will terminate the loop and return the index
 * It doesn't mutate original array
 *
 */
const checkWithFindLastIndex = arrWithDupes.findLastIndex(
  (ele, i) => ele === 89
);
console.log("checkWithFindLastIndex--", checkWithFindLastIndex);

/**
 * @description .some()
 * It iterate the array and check if any value matched with condition
 * It returns true/false
 *
 */

const arrWithDupesSome = arrWithDupes.some((ele, index) => ele > 0);
/**
 * @description .every()
 * It iterate the array and check if all value matched with condition it return true
 * It returns true/false
 *
 */
const arrWithDupesEvery = arrWithDupes.every((ele, index) => ele > 0);

console.log(
  "check all positive numbers inside array using some-every--",
  arrWithDupesSome,
  arrWithDupesEvery
);

const fruitsOfSatSome = fruitsOfSat.some((fruit, index) => fruit.length > 4);
const fruitsOfSatEvery = fruitsOfSat.every((fruit, index) => fruit.length > 4);

console.log(
  "check all fruitsOfSat using some-every--",
  fruitsOfSatSome,
  fruitsOfSatEvery
);

/**
 * @description indexOf
 * It find the index element of given value
 * It returns index of first found element
 * It does'nt mutate original array
 * If not value found it returns -1
 */

const indexOfPlum = fruitsOfSat.indexOf("plum");
console.log("indexOfPlum-", indexOfPlum);
const indexOfBerry = fruitsOfSat.indexOf("Berry");
console.log("indexOfBerry-", indexOfBerry);

/**
 * @description lastIndexOf
 * It find the last index element of given value
 * It returns index of last found element
 * It does'nt mutate original array
 * If not value found it returns -1
 */

const lastIndexOfPlum = fruitsOfSat.lastIndexOf("plum");
console.log("lastIndexOfPlum-", lastIndexOfPlum);

const lastIndexOfBerry = fruitsOfSat.lastIndexOf("Berry");
console.log("lastIndexOfBerry-", lastIndexOfBerry);

/**
 * @description .fill()
 * It iterates the array
 * it fills value inside array
 * it mutates original array
 * It returns new array
 */

// it will updates all the elements with Banana
// to prevent mutation in original array make a clone
// to make clone use spread operator  [...arrayName]
const newFruits = [...fruitsOfSat].fill("Banana");
console.log("newFruits- .fill()--", newFruits, fruitsOfSat);

// it will updates all the elements with Banana from 2nd index to all
const newFruits1 = [...fruitsOfSat].fill("Coconut", 2);
console.log("newFruits1- .fill()--", newFruits1, fruitsOfSat);

// it will updates all the elements with Banana from 2nd index to 10th index
const newFruits2 = [...fruitsOfSat].fill("MullBerry", 2, 10);
console.log("newFruits2- .fill()--", newFruits2, fruitsOfSat);

/**
 * @description slice
 * To cut any array
 * creates a new array
 * mutates original array
 */

// it will create a new array from the 2nd index
const newFruitsSlice = [...fruitsOfSat].slice(2);
console.log("newFruitsSlice- .slice()--", newFruitsSlice, fruitsOfSat);

// it will create a new array from the 2nd index
const newFruitsSlice2 = [...fruitsOfSat].slice(3, 8);
console.log("newFruitsSlice2- .slice()--", newFruitsSlice2, fruitsOfSat);

console.log("org arr", fruitsOfSat);
/**
 * @description .splice()
 * it iterate array
 * it adds/removes values from array
 */
// it will create new array from 3rd index of original array
const newFruitsSplice = [...fruitsOfSat].splice(3);
console.log("newFruitsSplice- .splice()--", newFruitsSplice, fruitsOfSat);

// it will create new array from 5th index of original array to next 3 elements
const newFruitsSplice2 = [...fruitsOfSat].splice(5, 3);
console.log("newFruitsSplice2- .splice()--", newFruitsSplice2, fruitsOfSat);

// it will create new array from 5th index of original array and add strawberry at 5th indx without removing any element
const newFruitsSplice3 = [...fruitsOfSat];
newFruitsSplice3.splice(5, 0, "Strawberry");
console.log("newFruitsSplice3- .splice()--", newFruitsSplice3, fruitsOfSat);

// it will create new array from 5th index of original array and add strawberry at 5th index with removing 3 elements
const newFruitsSplice4 = [...fruitsOfSat];
newFruitsSplice4.splice(5, 3, "Strawberry");
console.log("newFruitsSplice4- .splice()--", newFruitsSplice4, fruitsOfSat);
