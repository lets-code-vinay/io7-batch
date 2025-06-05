# what is destructuring?

## Object and array destructuring are powerful features in JavaScript that allow you to extract values from arrays or properties from objects and assign them to variables in a concise way.

## 1. Array Destructuring

### example

```js
const colors = ["red", "green", "blue"];
const [first, second, third] = colors;

console.log(first); // "red"
console.log(second); // "green"
console.log(third); // "blue"
```

### Skipping Elements:

- use empty space and comma to skip values

```js
const [first, , third] = colors;
console.log(third); // "blue"
```

### 🔸 Default Values:

- add default value to prevent any kinda breaking

```js
const [a = 1, b = 2] = [10];
console.log(a); // 10
console.log(b); // 2 (default)
```

### 🔸 rest operator:

```js
const [first, ...rest] = colors;
// rest will contains all remaining colors
```

### 🔸 Nested Array Destructuring:

```js
const numbers = [1, [2, 3]];
const [one, [two, three]] = numbers;

console.log(two); // 2
```

## 🔹 2. Object Destructuring

### example

```js
const person = {
  name: "Alice",
  age: 25,
  location: "New York",
};

const { name, age } = person;
console.log(name); // "Alice"
console.log(age); // 25
```

### 🔸 Renaming Variables:

```js
const { name: fullName, age: yearsOld } = person;
console.log(fullName); // "Alice"
console.log(yearsOld); // 25
```

### 🔸 Default Values:

```js
const { name, country = "USA" } = person;
console.log(country); // "USA"
```

### 🔸 Nested Object Destructuring:

```
const user = {
  id: 101,
  profile: {
    username: "johndoe",
    email: "john@example.com"
  }
};

const {
  profile: { username, email }
} = user;

console.log(username); // "johndoe"

```

## 🔹 3. Destructuring in Function Parameters or strict functions

- You can destructure directly in the function parameter.

### with object

```js
function greet({ name, age }) {
  console.log(`Hello ${name}, age ${age}`);
}

greet({ name: "Bob", age: 30 });
```

---

### with array

```js
function printColors([first, second]) {
  console.log(first, second);
}

printColors(["red", "green", "blue"]);
```

---

---

# What are shallow copy(clone) and deep copy(clone)

## 🔹 What is a Copy?

- When we copy an object or array in JavaScript, we want to create another variable that holds the same data. But this can happen in two ways:

| Type         | What gets copied?                                                          | Changes to copy affect original? |
| ------------ | -------------------------------------------------------------------------- | -------------------------------- |
| Shallow Copy | Only top-level properties are copied. Nested objects are still references. | ✅ Yes, for nested objects       |
| Deep Copy    | All levels of the object (including nested ones) are fully cloned.         | ❌ No                            |

## 🔹 Shallow Copy

```js
const original = {
  name: "Alice",
  address: {
    city: "New York",
  },
};

// Create shallow copy
const copy = { ...original };

copy.name = "Bob"; // Only top-level — doesn't affect original
copy.address.city = "San Francisco"; // Changes nested object

console.log(original.address.city); // ❗ "San Francisco"
```

### ✅ Methods that make shallow copies:

#### Object.assign({}, obj)

#### Spread operator: { ...obj }, [...array]

#### Array.prototype.slice()

## 🔹 Deep Copy

```js
const original = {
  name: "Alice",
  address: {
    city: "New York",
  },
};

// Deep copy using structuredClone
const deepCopy = structuredClone(original);

deepCopy.address.city = "Los Angeles";

console.log(original.address.city); // ✅ Still "New York"
```

### ✅ Ways to do Deep Copy:

| Method                                          | Notes                                                        |
| ----------------------------------------------- | ------------------------------------------------------------ |
| `structuredClone(obj)`                          | ✅ Recommended for most cases, supports Date, Map, Set, etc. |
| `JSON.parse(JSON.stringify(obj))`               | ⚠️ Simple but loses functions, Date, undefined               |
| Recursion or third-party libs (`_.cloneDeep()`) | ✅ For complex custom objects                                |

## 🔹 Interview-Focused Questions & Answers

### 1. ❓ What is the difference between shallow and deep copy in JavaScript?

**Answer:**  
A shallow copy duplicates only the top-level properties of an object; nested objects remain shared references between the original and the copy. A deep copy duplicates everything recursively, so there are no shared references at any level.

---

### 2. ❓ How do you implement a deep copy in JavaScript?

**Answer:**

- Use `structuredClone()` for modern browsers (recommended).
- For simple data, use `JSON.parse(JSON.stringify(obj))` (note: loses functions, Dates, etc.).
- For complex objects, use libraries like Lodash's `_.cloneDeep()` or write a custom recursive function.

---

### 3. ❓ Why can shallow copies cause bugs in large applications?

**Answer:**  
Because nested references are shared, modifying a nested property in the copied object can unintentionally affect the original object. This can lead to hard-to-track bugs, especially in large codebases.

---

### 4. ❓ How does React’s state management relate to shallow/deep copy?

**Answer:**  
React relies on immutability for state updates. If you mutate state directly (especially nested state), React may not detect changes, causing rendering issues. Creating a shallow or deep copy before updating ensures React recognizes the change and updates the UI correctly.
