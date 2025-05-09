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

for (let i = 0; i <= 2; i++) {
  console.log(`Fruit at ${i + 1} is ${fruits[i]}`);
}

const weapons = ["Iron", "sword", "Shield", "knife", "gun", "warship"];

for (let i = 0; i < weapons.length; i++) {
  if (i % 2 == 0) {
    console.log(`-${i + 1}- Weapons is ${weapons[i]}`);
  }
}
