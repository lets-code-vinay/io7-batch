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
const [bApple = "", cCherry = "", , d = "", ...rest] = fruitsArray; // empty array
console.log("a, b, c", bApple, cCherry, d);
console.log("rest of the fruits---", rest);

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

const age = 35;

const { age: neAge = "", qualification = "", adult = "" } = person; // empty object
console.log("age", person.age, neAge, qualification, adult);

const {
  address: { street = "", landmark: { name = "", distance = "" } = {} },
} = person; // empty object
console.log("street", street, name, distance);

//----------------------------------------------------------
/**
 * Deep copy vs Shallow copy
 */

// Shallow copy
// Shallow copy creates a new object,
// but it copies the references of the nested objects.
// If you modify a nested object in the copied object,
// it will also affect the original object.

const abc = { a: 1, b: 2, c: { ab: 2, bc: 3, cd: { x: 45, y: 50 } } };

// normal copy
const normalCopy = abc;

abc.c.cd.x = 100;
normalCopy.c.ab = 200;

console.log("abc", abc);

console.log("normalCopy", normalCopy);

// shallow copy using spread operator
const shallowCopyObject = { ...abc };

abc.a = 450;
shallowCopyObject.b = 6350;
abc.c.ab = 1000;
shallowCopyObject.c.bc = 1245;

console.log("abc", abc);
console.log("shallowCopyObject", shallowCopyObject);

// shallow copy using Object.assign
const shallowCopyObject2 = Object.assign({}, abc);
//---------------------------------
// 1. deep copy using JSON methods
const deepClone = JSON.parse(JSON.stringify(abc));
abc.b = "chandni";
deepClone.a = "karan";

abc.c.ab = "updated by chandni";
deepClone.c.bc = "updated by karan";
deepClone.c.ab = "updated by karan ab-";

abc.c.cd.x = "updated by chandni cd x";
deepClone.c.cd.x = "updated by vinay cd x";
deepClone.c.cd.y = "updated by vinay cd y";

console.log("abc---", abc);
console.log("deepClone", deepClone);

// 2. deep copy using structuredClone (available in modern browsers)
const sClone = structuredClone(abc);

abc.c.cd.x = "updated by chandni cd x";
sClone.c.cd.x = "updated by vinay cd x";
sClone.c.cd.y = "updated by vinay cd y";

console.log("abc--2222----", abc);
console.log("sClone", sClone);

// 3. using Lodash library

const lodashClone = _.cloneDeep(abc);

abc.c.cd.x = 7307805030;
lodashClone.c.cd.x = 4545454545454;
lodashClone.c.cd.y = "45red";

console.log("abc--2222----", abc);
console.log("lodashClone", lodashClone);

// Deep copy of array
const nestedArray = [56, "hello", [1, 2, 3], [4, 5, 6], [7, 8, 9]];

// const normalCopyArray = nestedArray;

// nestedArray[0] = 450;
// normalCopyArray[0] = 1450;
// normalCopyArray[1] = "Info";

// console.log("nestedArray", nestedArray);
// console.log("normalCopyArray", normalCopyArray);

// Shallow copy of array using spread operator
const shallowArrayCopy = [...nestedArray];

nestedArray[0] = 550;
nestedArray[1] = "Riddhi";
shallowArrayCopy[1] = "Siddhi";
nestedArray[2] = "array has been changed";
shallowArrayCopy[3][1] = 500;

console.log("nestedArray ====", nestedArray);
console.log("shallowArrayCopy", shallowArrayCopy);

// Deep copy of Array using JSON methods
const deepArrayClone = JSON.parse(JSON.stringify(nestedArray));
shallowArrayCopy[3][1] = 5000;
deepArrayClone[3][2] = 6000;

console.log("nestedArray ==2==", nestedArray);
console.log("deepArrayClone", deepArrayClone);
