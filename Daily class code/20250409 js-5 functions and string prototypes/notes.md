# JavaScript 20250409 js-5 functions and string prototypes

## 🔹 Functions

1. Predefined function
2. user defined function

### 1. Predefined function

- Functions defined by JavaScript are predefined function
  alert()
  prompt()
  console.log()

### 2. User defined function

- Functions defined by users are user defined function
  addTwoNumber()
  validateData()
  getProductData()

### USER DEFINED FUNCTIONS

    1. Function declaration
    2. Function expression
    3. Arrow Function

```js
/**
 * Function Declaration
 */
function functionName() {
  console.log("hello");
}
```

---

# Hoisting

### When javascript compiles code it reinitialized all the variables and function declarations on the top

### In hoisting it doesn't matter when you call variables and function first and then declare them

## How to avoid Hoisting

### use let and const for variable declaration

### use arrow functions or function expressions

---

## What is prototype?

- Prototypes are predefined methods or function provided by Javascript to reduce human effort
- Number prototype --> .isInteger(), isNaN()
- String prototype --> String.length, String.join(), String.reverse()
- Array prototype --> Array.length, Array.join(), Array.map()
- Object prototype --> Object.seal(), Object.keys(), Object.entries()

---

### String.length

- is used to find the length of any string or we can say that it will counts the characters of string

```js
const myString = `Strings are useful for holding data that can be represented in text form. Some of the most-used operations on strings are to check their length`;
console.log("myString---", myString.length);
```

### String.toUpperCase()

- is used to make string to UpperCase as it name's refer

```js
const myString = `Strings are useful for holding data that can be represented in text form. Some of the most-used operations on strings are to check their length`;
console.log("myString toUpperCase---", myString.toUpperCase());

// Example function
function getCapitalString(str) {
  return str.toUpperCase();
}

console.log(
  "myString toUpperCase 2---",
  getCapitalString("myString toUpperCase 2")
);
```

### String.toLowerCase()

- is used to make string to LowerCase as it name's refer

```js
const myString = `Strings are useful for holding data that can be represented in text form. Some of the most-used operations on strings are to check their length`;
console.log("myString toLowerCase---", myString.toLowerCase());

// Example function
function getLowerString(str) {
  return str.toLowerCase();
}

console.log(
  "myString toLowerCase 2---",
  getLowerString("myString toLowerCase 2")
);
```
