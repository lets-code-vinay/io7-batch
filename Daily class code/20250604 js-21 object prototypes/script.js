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

const student = {
  name: "Ayush",
  age: `21`,
  qualification: "BCA",
  weight: 70,
  isStudent: true,
  height: 5.8,
  interests: ["coding", "reading", "gaming"],
  address: {
    city: "Delhi",
    state: "Delhi",
    country: "India",
  },
};

console.log("name--", student["name"]);
console.log("name-2-", student.name);
console.log("height--", student["height"], student.height);
console.log("interests--", student["interests"], student.interests);
console.log(
  "interests reading--",
  student["interests"][1],
  student.interests[1]
);
console.log("address--", student["address"], student.address);
console.log(
  "address delhi--",
  student["address"]["state"],
  student.address.state
);

//----------------------------------

/**
 * @question how to create an object?
 * 1. using empty object
 * 3. using object constructor (new keyword)
 * 4. using Object.create() method
 */

const car = {};
console.log("car--empty--", car);

car.brand = "Toyota";
car.model = "Corolla";
car.year = 2020;
car.color = "Red";

console.log("car--", car);

// using object constructor
const person = new Object();

console.log("person--empty--", person);
person.name = "John";
person.age = 30;
person.isEmployed = true;
console.log("person--", person);

// using Object.create() method

const animal = Object.create(null);
console.log("animal--empty--", animal);

animal.type = "Dog";
animal.breed = "Labrador";
animal.age = 5;
animal.isFriendly = true;
console.log("animal--", animal);

delete animal.age;
console.log("animal with del--", animal);

// merging objects
// 1 object. assign() method
// 2. spread operator
//

/**
 * object.assign()
 * The Object.assign() method is used to copy the values of all enumerable own properties from one or more source objects to a target object.
 */

const dog1 = {
  name: "Buddy",
  age: 3,
  breed: "Golden Retriever",
};

const dog2 = {
  color: "Golden",
  isFriendly: true,
  breed: "Beagle",
};

//

const dog3 = {
  name: "Max",
  age: 2,
  color: "Brown",
  owner: "John Doe",
};

const mergedDog = Object.assign(dog3, dog1, dog2);
console.log("mergedDog--", mergedDog);

// using spread operator
const merged2Dogs = { ...dog2, ...dog1, ...dog3 };
console.log("merged2Dogs--", merged2Dogs);

const dog4 = {
  name: "Tommy",
  age: 4,
  color: "white",
  owner: "Chandu",
  isFriendly: false,
};

/**
 * Object.entries()
 * The Object.entries() method returns an array of a given object's own enumerable string-keyed property [key, value] pairs.
 */
const dogEntries = Object.entries(dog4);
console.log("dogEntries--", dogEntries, dogEntries.flat());

// entries example of dog4 object
const arrayDog3 = [
  ["name", "Tommy"],
  ["age", 4],
  ["color", "white"],
  ["owner", "Chandu"],
  ["isFriendly", false],
];

/**
 * Object.keys()
 * The Object.keys() method returns an array of a given object's own enumerable string-keyed property names.
 */
const dogKeys = Object.keys(dog4);
// output should be an array of keys
/**
 * ['name', 'age', 'color', 'owner', 'isFriendly']
 */
console.log("dogKeys--", dogKeys);

/**
 * Object.values()
 * The Object.values() method returns an array of a given object's own enumerable string-keyed property values.
 */
// output should be an array of values
// ['tommy', 4, 'white', 'chandu', false]
const dogValues = Object.values(dog4);
console.log("dogValues--", dogValues);

/**
 * Object.freeze()
 * The Object.freeze() method freezes an object.
 * A frozen object can no longer be changed: new properties cannot be added,
 * existing properties cannot be removed, and existing properties cannot be changed.
 */
Object.freeze(dog4);

dog4.name = "dhruv";
dog4.hasCollar = true;
delete dog4.owner;

console.log("updating dog4--", dog4);
const french = "French";

const languages = {
  english: "English",
  hindi: "Hindi",
  spanish: "Spanish",
  french: french,
};
console.log("languages--", languages);

/**
 * Object.seal()
 * The Object.seal() method seals an object, preventing properties from being added/deleted to it,
 * but allowing existing properties to be modified.
 */
Object.seal(languages);
languages.english = "English (Updated)";
languages.italian = "Italian"; // This will not be added
delete languages.hindi; // This will not delete the property

console.log("languages after seal--", languages);

/**
 * converting array to object
 * 1. using Object.fromEntries()
 */

const arrayToObject = [
  ["mic", 45],
  ["laptop", "45,000"],
  ["web-cam", 1500],
];

console.log("arrayToObject--", arrayToObject);
const objectFromArray = Object.fromEntries(arrayToObject);
console.log("objectFromArray--", objectFromArray);

/**
 * Object.groupBy()
 * The Object.groupBy() method creates an object composed of keys generated from the results of running each element
 * of a collection through a given function.
 */

const inventory = [
  { name: "asparagus", type: "vegetables", quantity: 9 },
  { name: "bananas", type: "fruit", quantity: 5 },
  { name: "goat", type: "meat", quantity: 23 },
  { name: "cherries", type: "fruit", quantity: 12 },
  { name: "fish", type: "meat", quantity: 22 },
];

const groupedInventory = Object.groupBy(inventory, ({ quantity }) =>
  quantity > 20 ? "yes" : "no"
);
console.log("groupedInventory--", groupedInventory.yes);
console.log("groupedInventory no----", groupedInventory.no);

/**
 * Object.hasOwn()
 * The Object.hasOwn() method returns a boolean indicating whether an object has a property with the specified name.
 */
const languages2 = {
  english: "English",
  hindi: "Hindi",
  spanish: "Spanish",
  french: french,
  dutch: false,
  somalian: undefined,
};

console.log("checking hindi--", Object.hasOwn(languages2, "hindi"));
console.log("checking russian--", Object.hasOwn(languages2, "russian"));
console.log("checking dutch--", Object.hasOwn(languages2, "dutch"));
console.log("checking somalian--", Object.hasOwn(languages2, "somalian"));

/**
 * ObjectName.hasownProperty('propertyName')
 * The hasOwnProperty() method returns a boolean indicating whether the object has the specified property as its own property (as opposed to inheriting it).`
 */
console.log("checking hindi 2--", languages2.hasOwnProperty("Hindi"));

/**
 * isFrozen()
 * The Object.isFrozen() method determines if an object is frozen.
 */

console.log("is dog4 frozen--", Object.isFrozen(dog4));
console.log("is languages2 frozen--", Object.isFrozen(languages2));

/**
 * object.isSealed()
 * The Object.isSealed() method determines if an object is sealed.
 */

console.log("is dog4 sealed--", Object.isSealed(dog4));
console.log("is languages sealed--", Object.isSealed(languages));
console.log("is languages2 sealed--", Object.isSealed(languages2));
