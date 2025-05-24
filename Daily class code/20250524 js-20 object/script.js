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

// what is object?
/**
 * Object is a non primitive data-type
 * It consumes memory and can sub-divide memory to sub-memory
 * It works like a container and can contains any kind of data
 * like number, boolean, string, variable, undefined, object,  in set of key-value pair
 * It is a collection of properties, where each property is defined as a key-value pair.
 * {key: value}
 */

const car = {
  name: "Audi",
  model: "A4",
  year: 2023,
  color: "black",
  price: 5000000,
  isElectric: true,
  features: {
    sunroof: true,
    navigation: true,
    bluetooth: true,
    airbags: 6,
  },
  owners: ["John", "Maria", "Chandni"],
  // is_verified:true,
  "is verified": true,
  airbag6: true,
  $specification: {},
};

const person1 = {
  name: "John",
  complexion: "fair",
  age: 30,
  height: 5.8,
  weight: 70,
  isMarried: false,
  hobbies: ["reading", "travelling", "sports"],
  address: {
    // city: "New York",
    state: "NY",
    country: "USA",
  },
};

const person2 = {
  name: "Maria",
  complexion: "dark",
  age: 25,
  height: 5.5,
  weight: 60,
  isMarried: true,
  hobbies: ["cooking", "dancing", "music"],
  address: {
    city: "Los Angeles",
    state: "CA",
    country: "USA",
  },
};

const person3 = {
  name: "Chandni",
  gender: "Female",
  age: 26,
};
const person4 = {
  name: "Inder",
  gender: "male",
  age: 21,
};

/**
 * armstrong number
 * 123 == 1 ^ 3 + 2 ^ 3 + 3 ^ 3 == 1*1*1 + 2*2*2 +3*3*3 == 1 + 8 + 27 == 36
 *  123 !== 36  --> not an armstrong number
 *
 * logic
 *  -- expand or split 123 in to 1, 2, 3
 *      --- if using string prototype method to split the number
 *      --- convert number to string --> '123'.split('') --> ['1', '2', '3']
 *  -- raise each digit to the power of the number of digits --> 1*1*1, 2*2*2, 3*3*3
 *  -- calculate multiplication of each digit raised to the power of number of digits 1, 8, 27
 *  -- add all the results together --> 1 + 8 + 27 = 36
 *  -- compare the result with the original number 123 == 36 --> false
 *
 *
 * 153 == 1 ^ 3 + 5 ^ 3 + 3 ^ 3 == 1*1*1 + 5*5*5 +3*3*3 == 1 + 125 + 27 == 153
 * 153 === 153 --> armstrong number
 */

// Print your car name

console.log("---> printing my car", car.name);
console.log("---> printing my car--2-", car["name"]);
console.log("---> printing my car year--", car.year);
// console.log("---> printing my car year-2---", car[year]);

console.log("---> printing person --", person1.height);
console.log("---> printing person -2---", person1["height"]);
console.log("---> printing person -3-", person1.address.city);
console.log("---> printing person -4-", person1.hobbies[1]);

console.log("---> printing my car owner--", car.owners[1]);
console.log(
  "---> printing person -3-",
  person1?.address?.city?.office,
  person1?.address?.city?.office
);

/**
 * How to add any value to the object
 */
person1.qualification = "MCA";
person1.address.hoNo = 512;

console.log("---> printing person -5-", person1);

/**
 * How to update any value to the object
 */
person1.age = 29;
person1.address.city = "Texas";
console.log("---> printing person -6-", person1);

/**
 * How to delete any value from the object
 */
delete person1.isMarried;

console.log("---> printing person -7-", person1);

const copiedPerson = { ...person1 };

// const copiedPerson = { ...person1 };
delete copiedPerson.weight;

console.log("---> printing person -8-", person1, copiedPerson);
