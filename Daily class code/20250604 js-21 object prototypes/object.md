## What is an Object?

An **object** in JavaScript is a collection of key-value pairs, where keys are strings (or Symbols) and values can be any data type. Objects are used to store and organize data.

---

## Methods to Create Objects

### 1. Object Literal

```js
const person = {
  name: "Alice",
  age: 25,
};
```

---

### 2. Using `new Object()`

```js
const person = new Object();
person.name = "Bob";
person.age = 30;
```

---

### 3. Constructor Function

```js
function Person(name, age) {
  this.name = name;
  this.age = age;
}
const person = new Person("Charlie", 28);
```

---

### 4. Object.create()

```js
const proto = {
  greet() {
    console.log("Hello!");
  },
};
const person = Object.create(proto);
person.name = "David";
```

---

### 5. ES6 Class

```js
class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
}
const person = new Person("Eve", 22);
```

---

## Merging Objects

You can combine properties from multiple objects into one using methods like `Object.assign()` and the spread operator.

### 1. Using `Object.assign()`

`Object.assign()` copies properties from one or more source objects to a target object.

```js
const obj1 = { a: 1 };
const obj2 = { b: 2 };
const obj3 = { c: 3 };

const merged = Object.assign({}, obj1, obj2, obj3);
// merged: { a: 1, b: 2, c: 3 }
```

---

### 2. Using the Spread Operator (`...`)

The spread operator allows you to merge objects in a concise way.

```js
const obj1 = { x: 10 };
const obj2 = { y: 20 };
const obj3 = { z: 30 };

const merged = { ...obj1, ...obj2, ...obj3 };
// merged: { x: 10, y: 20, z: 30 }
```

## Object.entries

`Object.entries()` is a built-in JavaScript method that returns an array of a given object's own enumerable string-keyed property
`[key, value]` pairs.

### Syntax

```js
Object.entries(obj);
```

- `obj`: The object whose enumerable property `[key, value]` pairs are to be returned.

### Example 1: Basic Usage

```js
const user = { name: "Alice", age: 25 };
console.log(Object.entries(user));
// Output: [ ["name", "Alice"], ["age", 25] ]
```

### Example 2: Iterating Over Entries

You can use `Object.entries()` with a `for...of` loop to iterate over key-value pairs:

```js
const settings = { theme: "dark", layout: "grid" };

for (const [key, value] of Object.entries(settings)) {
  console.log(`${key}: ${value}`);
}
// Output:
// theme: dark
// layout: grid
```

### Example 3: Converting Entries Back to Object

You can convert an array of entries back to an object using `Object.fromEntries()`:

```js
const entries = [
  ["brand", "Toyota"],
  ["year", 2020],
];
const car = Object.fromEntries(entries);
console.log(car);
// Output: { brand: "Toyota", year: 2020 }
```

## Object.keys()

`Object.keys()` is a built-in JavaScript method that returns an array of a given object's own enumerable property names (keys).

### Syntax

```js
Object.keys(obj);
```

- `obj`: The object whose enumerable property names are to be returned.

### Example: Basic Usage

```js
const user = { name: "Alice", age: 25 };
console.log(Object.keys(user));
// Output: [ "name", "age" ]
```

## Object.values()

`Object.values()` is a built-in JavaScript method that returns an array of a given object's own enumerable property names (values).

### Syntax

```js
Object.values(obj);
```

- `obj`: The object whose enumerable property names are to be returned.

### Example: Basic Usage

```js
const user = { name: "Alice", age: 25 };
console.log(Object.values(user));
// Output: [ "Alice", "25" ]
```

## Object.freeze() and Object.seal()

Both `Object.freeze()` and `Object.seal()` are used to control modifications to objects, but they differ in what changes they allow.

| Feature                | `Object.freeze()` | `Object.seal()` |
| ---------------------- | ----------------- | --------------- |
| Add properties         | ❌ Not allowed    | ❌ Not allowed  |
| Remove properties      | ❌ Not allowed    | ❌ Not allowed  |
| Modify existing values | ❌ Not allowed    | ✅ Allowed      |

### Object.freeze()

- Prevents adding, removing, or changing properties.
- The object becomes completely immutable.

**Example:**

```js
const obj = { a: 1 };
Object.freeze(obj);

obj.a = 2; // No effect
obj.b = 3; // No effect
delete obj.a; // No effect

console.log(obj); // { a: 1 }
```

### Object.seal()

- Prevents adding or removing properties.
- Allows modifying the values of existing properties.

**Example:**

```js
const obj = { a: 1 };
Object.seal(obj);

obj.a = 2; // Allowed
obj.b = 3; // Not allowed
delete obj.a; // Not allowed

console.log(obj); // { a: 2 }
```

## Object.groupBy()

`Object.groupBy()` is a built-in JavaScript method (introduced in ES2023) that groups the properties of an object or elements of an array based on a grouping function you provide. It returns a new object where each key is a group name and each value is an array of items belonging to that group.

### Syntax

```js
Object.groupBy(items, callback);
```

- `items`: An array or object to group.
- `callback`: A function that returns the group key for each item.

### Example 1: Grouping Array of Objects by Property

```js
const people = [
  { name: "Alice", age: 25 },
  { name: "Bob", age: 30 },
  { name: "Charlie", age: 25 },
];

const groupedByAge = Object.groupBy(people, (person) => person.age);
console.log(groupedByAge);
// Output:
// {
//   25: [ { name: "Alice", age: 25 }, { name: "Charlie", age: 25 } ],
//   30: [ { name: "Bob", age: 30 } ]
// }
```

### Example 2: Grouping Strings by First Letter

```js
const fruits = ["apple", "banana", "apricot", "blueberry"];

const grouped = Object.groupBy(fruits, (fruit) => fruit[0]);
console.log(grouped);
// Output:
// {
//   a: [ "apple", "apricot" ],
//   b: [ "banana", "blueberry" ]
// }
```

### Notes

- `Object.groupBy()` is available in modern JavaScript environments (ES2023+).
- The callback function should return a string or symbol to be used as the group key.

# Object.hasOwn() vs ObjectName.hasOwnProperty()

## Object.hasOwn()

- `Object.hasOwn(obj, prop)` is a static method introduced in ES2022.
- It checks if the object `obj` has the property `prop` as its own property (not inherited).
- Returns `true` or `false`.

**Example:**

```js
const user = { name: "Alice" };
console.log(Object.hasOwn(user, "name")); // true
console.log(Object.hasOwn(user, "age")); // false
```

### ObjectName.hasOwnProperty()

- `obj.hasOwnProperty(prop)` is an instance method available on all objects.
- It checks if the object has the property as its own (not inherited).
- Returns `true` or `false`.

**Example:**

```js
const user = { name: "Alice" };
console.log(user.hasOwnProperty("name")); // true
console.log(user.hasOwnProperty("age")); // false
```

### Which One to Use?

- **Recommended:** Use `Object.hasOwn()` because it is safer.
- `hasOwnProperty` can be shadowed (overwritten) by a property in the object, which may cause errors.
- `Object.hasOwn()` is always reliable and does not depend on the object's prototype.

**Summary:**  
Use `Object.hasOwn()` for checking own properties in modern JavaScript.

# Object.isSealed() and Object.isFrozen()

## Object.isSealed()

- `Object.isSealed(obj)` checks if an object is **sealed**.
- A sealed object:
  - Cannot have new properties added.
  - Cannot have existing properties removed.
  - Existing property values can still be changed (unless they are individually non-writable).

**When to use:**  
Use `Object.isSealed()` to check if an object is protected from adding or removing properties, but still allows value changes.

### Object.isFrozen()

- `Object.isFrozen(obj)` checks if an object is **frozen**.
- A frozen object:
  - Cannot have new properties added or existing properties removed.
  - Cannot have existing property values changed (all properties are non-writable).

**When to use:**  
Use `Object.isFrozen()` to check if an object is completely immutable.

### Why does a frozen object return `true` for `Object.isSealed()`?

- Freezing an object also seals it.
- A frozen object is a sealed object with the additional restriction that property values cannot be changed.
- Therefore, `Object.isSealed(obj)` returns `true` for a frozen object.

**Example:**

```js
const obj = { a: 1 };
Object.freeze(obj);

console.log(Object.isFrozen(obj)); // true
console.log(Object.isSealed(obj)); // true
```

##

1. Object and array destructuring
2. deep copy and shallow copy
