# What is an Array in JavaScript?

An **array** in JavaScript is a data structure used to store multiple values in a single variable. Arrays can hold values of different data types, including numbers, strings, objects, and even other arrays. They are zero-indexed, meaning the first element is at index `0`.

## Syntax

```javascript
// Creating an array
const arrayName = [element1, element2, element3, ...];

// Example
const fruits = ["Apple", "Banana", "Cherry"];
```

## Example

```javascript
const numbers = [10, 20, 30, 40];

// Accessing elements
console.log(numbers[0]); // Output: 10

// Adding an element
numbers.push(50);
console.log(numbers); // Output: [10, 20, 30, 40, 50]

// Removing an element
numbers.pop();
console.log(numbers); // Output: [10, 20, 30, 40]

// Iterating over an array
numbers.forEach((num) => console.log(num));
// Output:
// 10
// 20
// 30
// 40
```

Arrays are a fundamental part of JavaScript and are widely used for managing collections of data.

# Array Prototypes and Methods

## Array Prototypes

1. **`.length`**

   - Finds the length or count of elements in an array.

2. **`.forEach()`**

   - ES6 feature.
   - Callback function.
   - Can mutate the original array.
   - Does not return anything.

3. **`.map()`**

   - ES6 feature.
   - Callback function.
   - Returns a new array.
   - Does not mutate the original array.

4. **`.filter()`**

   - ES6 feature.
   - Callback function.
   - Returns a new array based on a condition.
   - Does not mutate the original array.

5. **`.at()`**

   - Returns the value at a given index.
   - Similar to `array[index]`.

6. **`.concat()`**

   - Merges two or more arrays.
   - Example: `arr1.concat(arr2).concat(arr3)` or `[...arr1, ...arr2, ...arr3]`.

7. **`.every()`**

   - Checks if all elements in the array fulfill a condition.
   - Returns `true` if all elements pass, otherwise `false`.

8. **`.some()`**

   - Checks if any element in the array fulfills a condition.
   - Returns `true` if any element passes, otherwise `false`.

9. **`.fill()`**

   - Updates values in an array.
   - Example:
     ```javascript
     arr.fill("value"); // Replaces all elements
     arr.fill("value", 3); // Replaces elements from index 3
     arr.fill("value", 3, 6); // Replaces elements from index 3 to 6
     ```

10. **`.push()`**

    - Adds a value to the end of the array.

11. **`.pop()`**

    - Removes the last value from the array.

12. **`.unshift()`**

    - Adds a value to the beginning of the array.

13. **`.shift()`**

    - Removes the first value from the array.

14. **Adding Values Using Spread Operator**

    - Example:
      ```javascript
      const arr = [1, 5, 4];
      const newArr = [...arr, 56]; // Adds value at the end
      const newArr2 = [99, ...arr]; // Adds value at the beginning
      ```

15. **`.from()`**

    - Converts a string to an array.
    - Example: `Array.from("Pooja") // ["P", "o", "o", "j", "a"]`.

16. **`Array.isArray()`**

    - Checks if the given data is an array.
    - Returns a boolean.

17. **`Array.of()`**

    - Creates an array from given arguments.
    - Example: `Array.of("Red", 45, true)`.

18. **`.flat()`**

    - Flattens nested arrays.
    - Example:
      ```javascript
      const data = [45, [78, 41], [2354, [1567]]];
      data.flat(); // Flattens one level
      data.flat(2); // Flattens two levels
      ```

19. **`.includes()`**

    - Checks if a value exists in the array.
    - Returns `true` or `false`.

20. **`.indexOf()`**

    - Returns the index of a given element.
    - Returns `-1` if the element is not found.

21. **`.lastIndexOf()`**

    - Returns the last index of a given element.
    - Returns `-1` if the element is not found.

22. **`.join()`**

    - Converts array elements into a string.
    - Example: `["Ravi", "Chander"].join("_") // "Ravi_Chander"`.

23. **`.reverse()`**

    - Reverses the order of elements in the array.

24. **`.slice()`**

    - Extracts a portion of the array.
    - Example:
      ```javascript
      const arr = ["Ravi", "Chander", "Chahat"];
      arr.slice(1); // ["Chander", "Chahat"]
      arr.slice(1, 2); // ["Chander"]
      ```

25. **`.sort()`**

    - Sorts the array alphabetically or numerically.
    - Example:
      ```javascript
      [1, 45, 78].sort(); // [1, 45, 78]
      ["Ravi", "Chander"].sort(); // ["Chander", "Ravi"]
      ```

26. **`.splice()`**
    - Adds or removes elements from an array.
    - Example:
      ```javascript
      const months = ["Jan", "March", "April"];
      months.splice(1, 0, "Feb"); // Adds "Feb" at index 1
      months.splice(2, 1, "May"); // Replaces "April" with "May"
      ```

---

## Code Examples

### `.length`

```javascript
const arr1 = [500, -200, 10];
console.log(arr1.length); // 3
```

### `.forEach()`

```javascript
arr1.forEach((element) => console.log(element * 2));
```

### `.map()`

```javascript
const doubled = arr1.map((element) => element * 2);
console.log(doubled);
```

### `.filter()`

```javascript
const positives = arr1.filter((element) => element > 0);
console.log(positives);
```

### `.at()`

```javascript
console.log(arr1.at(1)); // -200
```

### `.concat()`

```javascript
const arr2 = [1, 2];
console.log(arr1.concat(arr2));
```

### `.every()` and `.some()`

```javascript
console.log(arr1.every((ele) => ele > 0)); // false
console.log(arr1.some((ele) => ele > 0)); // true
```

### `.fill()`

```javascript
arr1.fill(0, 1, 2);
console.log(arr1);
```

### `.push()` and `.pop()`

```javascript
arr1.push(100);
console.log(arr1);
arr1.pop();
console.log(arr1);
```

### `.unshift()` and `.shift()`

```javascript
arr1.unshift(100);
console.log(arr1);
arr1.shift();
console.log(arr1);
```

### `.flat()`

```javascript
const nested = [1, [2, [3]]];
console.log(nested.flat(2));
```

### `.includes()`

```javascript
console.log(arr1.includes(10)); // true
```

### `.indexOf()` and `.lastIndexOf()`

```javascript
console.log(arr1.indexOf(10)); // 2
console.log(arr1.lastIndexOf(10)); // 2
```

### `.join()`

```javascript
console.log(arr1.join("-")); // "500--200-10"
```

### `.reverse()`

```javascript
console.log(arr1.reverse());
```

### `.slice()`

```javascript
console.log(arr1.slice(1, 2));
```

### `.sort()`

```javascript
console.log(arr1.sort());
```

### `.splice()`

```javascript
arr1.splice(1, 1, 999);
console.log(arr1);
```

---

This document provides a comprehensive overview of array methods and their usage in JavaScript.
