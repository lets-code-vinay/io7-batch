/**
 * How to get values from an array
 */

const fruitsArray = [
  "apple",
  "banana",
  "cherry",
  "date",
  "elderberry",
  "fig",
  "grape",
  "honeydew",
  "kiwi",
  "lemon",
  "mango",
  "nectarine",
  "orange",
  "papaya",
  "quince",
  "raspberry",
  "strawberry",
  "tangerine",
  "ugli fruit",
  "vanilla",
  "watermelon",
  "xigua",
  "yellow passion fruit",
  "zucchini",
];
console.log("printing apple---", fruitsArray[0], fruitsArray[1]);

console.log("printing apple---", fruitsArray[0], fruitsArray[2]);

/**
 * Array destructuring
 * simple destructuring
 */
const [apple, banana, c1, dates, chandni] = [
  "apple",
  "banana",
  "cherry",
  "date",
  "elderberry",
  "fig",
  "grape",
  "honeydew",
  "kiwi",
  "lemon",
  "mango",
  "nectarine",
  "orange",
  "papaya",
  "quince",
  "raspberry",
  "strawberry",
  "tangerine",
  "ugli fruit",
  "vanilla",
  "watermelon",
  "xigua",
  "yellow passion fruit",
  "zucchini",
];

console.log("apple printing---", apple);

console.log("banana printing---", banana);
console.log("cherry 1 printing---", c1);
console.log("dates 1 printing---", dates);
console.log("chandni 1 printing---", chandni);

const [a, b, c, d, e] = fruitsArray;

console.log("a printing---", a);
console.log("b printing---", b);

console.log(`I went to the market and bought ${a} and ${b}`);

/**
 * 2. skipping values in array destructuring
 */

const [apples, bananas, , , , , , , date] = fruitsArray;
console.log("apples printing---", apples);
console.log("bananas printing---", bananas);
console.log("date printing---", date);

console.log(
  `When i was a kid i love to eat ${apples} and ${bananas} but now i love to eat ${date}`
);

/**
 * 3. rest operator
 */

const [f1, f2, f3, f4, ...restFruits] = fruitsArray;

console.log("f1 printing---", restFruits);

/**
 * 4. nested array destructuring
 */

const nestedArray = [
  "Guava",
  "Papaya",
  ["apple", "banana", "cherry"],
  ["date", "elderberry", "fig"],
  ["grape", "honeydew", "kiwi"],
  "lemon",
];

const [nf1, nf2, [nf3, nf4], [, e1]] = nestedArray;
console.log("nf1 printing---", nf1, nf2, nf3, nf4);
console.log(
  `I love to eat ${nf1} and ${nf2} but my favorite is ${nf3} and ${nf4} not ${e1}`
);

/**
 * 5. Default values in array destructuring
 * If the value is not present in the array, it will take the default value
 */
const [
  n0 = "no fruit",
  n1 = "no fruit",
  n2 = "no fruit",
  n3 = "no fruit",
  n4 = "no fruit",
  n5 = "no fruit",
  n6 = "no fruit",
  n7,
] = nestedArray;
console.log("n5 printing---", n0, n5, n6, n7);

// ----------------------------------------------

/**
 * Object destructuring
 * How to get values from an object
 *
 */

const person = {
  name: "David Smith",
  age: 30,
  occupation: "Software Engineer",
  qualification: "BCA",
  hobbies: ["reading", "traveling", "coding"],
  isEmployed: true,
  address: {
    street: "123 Main St",
    city: "Anytown",
    state: "CA",
    zip: "12345",
    landmark: {
      name: "Near Park",
      distance: "500m",
    },
  },
};

console.log("name printing---", person.name, person["name"], person.age);

/**
 * 1. Simple object destructuring
 */
// const { age, occupation, name } = {
//   name: "John Doe",
//   age: 30,
//   occupation: "Software Engineer",
//   address: {
//     street: "123 Main St",
//     city: "Anytown",
//     state: "CA",
//     zip: "12345",
//   },
// };
const { age, occupation, name } = person;

console.log(
  `My name is ${name} and I am ${age} years old and I work as a ${occupation}`
);

/**
 * 2. renaming variables in object destructuring
 */
const { name: name1, age: age1 } = person;
console.log("renamed variables---", name1, age1);

/**
 * 3. Object destructuring with nested objects
 */
const {
  name: newName,
  address: {
    state,
    zip,
    landmark: { distance },
  },
} = person;
console.log("newName printing---", newName);
console.log("address printing---", state, zip);
console.log("landmark printing---", distance, person.address.landmark.distance);

/**
 * 4. default values in object destructuring
 */
console.log(
  "default values in object destructuring---",
  person.qualification || ""
); // undefined

const { name: personName = "no name", qualification = "no qualification" } =
  person;
console.log("qualification printing---", qualification, personName);

const {
  name: rename = "",
  isEmployed = false,
  address = {},
  hobbies = [],
  age: newAge = 0,
} = person;

/**
 * rest operator in object destructuring
 */
const {
  name: restName,
  age: removedAge,
  hobbies: newHobbies,
  ...restOfPerson
} = person;
console.log("rest of person---", restName, restOfPerson);
