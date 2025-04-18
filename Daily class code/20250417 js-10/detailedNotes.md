# Types of Operators

## 1. Arithmetic Operators

Arithmetic operators are used to perform mathematical operations. They consist of operands and operators.

### Operators:

- `+`, `-`, `*`, `/`, `%`, `**`, `++`, `--`

### Operands:

- Numbers like `1`, `2`, etc.

### 1.1 Addition Operator

- Performs addition of two or more operands.
- Used to add numbers:
  - Example: `10 + 20 + 30 + 40 + 50 = 150`
- Used to concatenate strings:
  - Example: `"Hello" + "World" = HelloWorld`

### 1.2 Subtraction Operator

- Performs subtraction of two or more operands.
- Used to subtract numbers:
  - Example: `100 - 50 - 25 = 25`
- Subtracting strings returns `NaN`:
  - Example: `"Hello" - "World" = NaN`

### 1.3 Multiplication Operator

- Performs multiplication of two or more operands.
- Used to multiply numbers:
  - Example: `10 * 20 * 30 = 6000`
- Multiplying strings returns `NaN`:
  - Example: `"Hello" * "World" = NaN`

### 1.4 Division Operator

- Performs division of two or more operands.
- Used to divide numbers:
  - Example: `100 / 50 / 2 = 1`
- Dividing strings returns `NaN`:
  - Example: `"Hello" / "World" = NaN`

### 1.5 Modulus Operator

- Finds the remainder of two or more operands.
- Used with numbers:
  - Example: `10 % 3 = 1`
  - Example: `10 % 3 % 2 = 1`
- Modulus with strings returns `NaN`:
  - Example: `"Hello" % "World" = NaN`

### 1.6 Exponential Operator

- Finds the power of two or more operands.
- Example: `2 ** 3 = 8`
- Example: `2 ** 3 ** 2 = 64`

### 1.7 Increment Operator

- Increments the value of a variable by `1`.
- Example:
  ```javascript
  let a = 10;
  a++; // 11
  ++a; // 12
  ```
- Types:
  1. **Pre-Increment Operator**: Increments the value before using it.
  2. **Post-Increment Operator**: Increments the value after using it.

### 1.8 Decrement Operator

- Decrements the value of a variable by `1`.
- Example:
  ```javascript
  let a = 10;
  a--; // 9
  --a; // 8
  ```

---

## 2. Assignment Operator

Assignment operators are used to assign values to variables.

### 2.1 Basic Assignment (`=`)

- Assigns a value to a variable.
- Example:
  ```javascript
  let b = 20; // Assigns 20 to b
  ```
  Note: The following assignment operators are used only with `let`. They are used to reassign a value to the same variable.

### 2.2 Add and Assign (`+=`)

- Adds a value to the variable and assigns the result to the same variable.
- Example:
  ```javascript
  let b = 20;
  b += 10; // Equivalent to b = b + 10
  console.log("b---->", b); // Output: 30
  ```

### 2.3 Subtract and Assign (`-=`)

- Subtracts a value from the variable and assigns the result to the same variable.
- Example:
  ```javascript
  let c = 15;
  c -= 10; // Equivalent to c = c - 10
  console.log("c---->", c); // Output: 5
  ```

### 2.4 Multiply and Assign (`*=`)

- Multiplies the variable by a value and assigns the result to the same variable.
- Example:
  ```javascript
  let d = 5;
  d *= 3; // Equivalent to d = d * 3
  console.log("d---->", d); // Output: 15
  ```

### 2.5 Divide and Assign (`/=`)

- Divides the variable by a value and assigns the result to the same variable.
- Example:
  ```javascript
  let e = 20;
  e /= 4; // Equivalent to e = e / 4
  console.log("e---->", e); // Output: 5
  ```

### 2.6 Modulus and Assign (`%=`)

- Finds the remainder when the variable is divided by a value and assigns the result to the same variable.
- Example:
  ```javascript
  let f = 10;
  f %= 3; // Equivalent to f = f % 3
  console.log("f---->", f); // Output: 1
  ```

## 3. Comparison Operator

Comparison operators are used to compare two values on the left-hand side and right-hand side.

### 3.1 Equal (`==`)

- Also known as double equal.
- It checks only the value, not the data type.
- If the values are the same but the data types are different, it will return `true`.
- Example:
  ```javascript
  console.log(20 == "20"); // true
  ```

### 3.2 Strict Equal (`===`)

- Also known as triple equal.
- It checks both the value and the data type.
- If the values are the same but the data types are different, it will return `false`.
- Example:
  ```javascript
  console.log(20 === "20"); // false
  ```

### Examples:

```javascript
console.log("--comparison two values--1--", 10 == 10); // true
console.log("--comparison two values--2--", 10 == "10"); // true
console.log("--comparison two values--3--", 4 == "10"); // false
console.log("--comparison two values--4--", "4" == "10"); // false
console.log("--comparison two values--5--", "Vinay" == "Vinay"); // true
console.log("--comparison two values--6--", "Vinay" == "vinay"); // false
console.log("--comparison two values--7--", "Vinay" === "vinay"); // false
console.log("--comparison two values--8--", "50" === "50"); // true
console.log("--comparison two values--9--", "501" === "50"); // false
console.log("--comparison two values--10--", true === 1); // false
console.log("--comparison two values--11--", true == 1); // true
console.log("--comparison two values--12--", null == 1); // false
console.log("--comparison two values--13--", null == false); // false
console.log("--comparison two values--14--", null == undefined); // true
console.log("--comparison two values--15--", false == false); // true
console.log("--comparison two values--16--", false == ""); // true

console.log("--comparison two values--17--", null === 1); // false
console.log("--comparison two values--18--", null === false); // false
console.log("--comparison two values--19--", null === undefined); // false
console.log("--comparison two values--20--", false === false); // true
console.log("--comparison two values--21--", false === ""); // false
```

### 3.3 Not Equal (`!=`) and Strict Not Equal (`!==`)

#### 3.3.1 Not Equal (`!=`)

- Compares two values for inequality, ignoring data type.
- Returns `true` if the values are not equal, otherwise `false`.

#### 3.3.2 Strict Not Equal (`!==`)

- Compares two values for inequality, considering data type.
- Returns `true` if the values or data types are not equal, otherwise `false`.

#### Examples:

```javascript
console.log("--comparison not equal two values--1--", 50 != 51); // true
console.log("--comparison not equal two values--2--", 50 != 50); // false
console.log("--comparison not equal two values--3--", 50 != "50"); // false
console.log("--comparison not equal two values--4--", "vinay" != "50"); // true
console.log("--comparison not equal two values--5--", "vinay" != "vinay"); // false
console.log("--comparison not equal two values--6--", "vinay" != "vInay"); // true
console.log("--comparison not equal two values--7--", 152 != "152"); // false
console.log("--comparison not equal two values--8--", "152" != "152"); // false
console.log("--comparison not equal two values--9--", 152 !== "152"); // true
console.log("--comparison not equal two values--10--", true != 1); // false
console.log("--comparison not equal two values--11--", true !== 1); // true
console.log("--comparison not equal two values--12--", true !== false); // true
console.log("--comparison not equal two values--13--", 10 + 20 == "10" + "20"); // false
console.log("--comparison not equal two values--14--", 10 + 20 == "10+20"); // false
console.log("--comparison not equal two values--15--", 10 + 20 !== "10+20"); // true
```

---

### 3.4 Greater Than (`>`) and Greater Than or Equal To (`>=`)

#### 3.4.1 Greater Than (`>`)

- Compares two values to check if the left-hand side is greater than the right-hand side.
- Returns `true` if the left-hand side is greater, otherwise `false`.

#### 3.4.2 Greater Than or Equal To (`>=`)

- Compares two values to check if the left-hand side is greater than or equal to the right-hand side.
- Returns `true` if the left-hand side is greater or equal, otherwise `false`.

#### Examples:

```javascript
// Greater Than
console.log("--comparison greater than --1--", 20 > 21); // false
console.log("--comparison greater than --2--", 20 > 20); // false
console.log("--comparison greater than --3--", 20 > "20"); // false
console.log("--comparison greater than --4--", 21 > "20"); // true
console.log("--comparison greater than --5--", 21 > "20Street"); // false
console.log("--comparison greater than --6--", "a" > "b"); // false
console.log("--comparison greater than --7--", "b" > "a"); // true
console.log("--comparison greater than --8--", "chandni" > "vinay"); // false
console.log("--comparison greater than --9--", "vinay" > "chandni"); // true
console.log("--comparison greater than --10--", "vinay" > "vijay"); // true
console.log("--comparison greater than --11--", 10 + 20 > 31); // false
console.log("--comparison greater than --12--", 10 + 20 > 31 - 10); // true
console.log("--comparison greater than --13--", 100 > 12 > 5); // false

// Greater Than or Equal To
console.log("--comparison greater than equal to--1--", 10 >= 9); // true
console.log("--comparison greater than equal to--2--", 10 >= 10); // true
console.log("--comparison greater than equal to--3--", "vinay" >= "vinay"); // true
console.log("--comparison greater than equal to--4--", "vinay" >= "vijay"); // true
console.log("--comparison greater than equal to--5--", "vijay" >= "vinay"); // false
console.log("--comparison greater than equal to--6--", true >= true); // true
console.log("--comparison greater than equal to--7--", 1 >= true); // true
console.log("--comparison greater than equal to--8--", 1 >= "1"); // true
console.log("--comparison greater than equal to--9--", false >= 0); // true
console.log("--comparison greater than equal to--10--", 10 + 20 >= 10 + 19); // true
console.log(
  "--comparison greater than equal to--11--",
  10 + 20 >= 10 + 19 > 10 + 21
); // false
console.log(
  "--comparison greater than equal to--12--",
  10 + 20 >= 10 + 19 == 60 - 1 > 10
); // true
```

---

### 3.5 Less Than (`<`) and Less Than or Equal To (`<=`)

#### 3.5.1 Less Than (`<`)

- Compares two values to check if the left-hand side is less than the right-hand side.
- Returns `true` if the left-hand side is less, otherwise `false`.

#### 3.5.2 Less Than or Equal To (`<=`)

- Compares two values to check if the left-hand side is less than or equal to the right-hand side.
- Returns `true` if the left-hand side is less or equal, otherwise `false`.

#### Examples:

```javascript
// Less Than
console.log("--comparison less than --1--", 10 < 9); // false
console.log("--comparison less than --2--", 10 < 10); // false
console.log("--comparison less than --3--", "vinay" < "vinay"); // false
console.log("--comparison less than --4--", "vinay" < "vijay"); // false
console.log("--comparison less than --5--", "vijay" < "vinay"); // true
console.log("--comparison less than --6--", true < true); // false
console.log("--comparison less than --7--", 1 < true); // false
console.log("--comparison less than --8--", 1 < "1"); // false
console.log("--comparison less than --9--", false < 0); // false

// Less Than or Equal To
console.log("--comparison less than equal to--1--", 10 <= 9); // false
console.log("--comparison less than equal to--2--", 10 <= 10); // true
console.log("--comparison less than equal to--3--", "vinay" <= "vinay"); // true
console.log("--comparison less than equal to--4--", "vinay" <= "vijay"); // false
console.log("--comparison less than equal to--5--", "vijay" <= "vinay"); // true
console.log("--comparison less than equal to--6--", true <= true); // true
console.log("--comparison less than equal to--7--", 1 <= true); // true
console.log("--comparison less than equal to--8--", 1 <= "1"); // true
console.log("--comparison less than equal to--9--", false <= 0); // true
```

## 4. Logical Operator

Logical operators are used to combine or invert boolean expressions. Below are examples and explanations of the three main logical operators: `&&` (AND), `||` (OR), and `!` (NOT).

### 4.1 Truth Table for Logical Operators

Logical operators are used to combine two or more conditions. Below is a truth table for the common logical operators.

#### 4.1.1 Logical AND (`&&`)

| Operand 1 | Operand 2 | Result (`Operand 1 && Operand 2`) |
| --------- | --------- | --------------------------------- |
| `true`    | `true`    | `true`                            |
| `true`    | `false`   | `false`                           |
| `false`   | `true`    | `false`                           |
| `false`   | `false`   | `false`                           |

#### 4.1.2 Logical OR (`||`)

| Operand 1 | Operand 2 | Result (`Operand 1 |     | Operand 2`) |
| --------- | --------- | ------------------ | --- | ----------- |
| `true`    | `true`    | `true`             |
| `true`    | `false`   | `true`             |
| `false`   | `true`    | `true`             |
| `false`   | `false`   | `false`            |

#### 4.1.3 Logical NOT (`!`)

| Operand | Result (`!Operand`) |
| ------- | ------------------- |
| `true`  | `false`             |
| `false` | `true`              |

---

### 4.2 Logical NOT (`!`)

The `!` operator inverts the boolean value of its operand. If the operand is `true`, it returns `false`, and vice versa.

```javascript
console.log("logical not--1--", !true); // false
console.log("logical not--2--", !false); // true
console.log("logical not--3--", !"chandni"); // false (non-empty strings are truthy)
console.log("logical not--4--", !Boolean("chandni")); // !true --> false
console.log("logical not--5--", !Boolean("null")); // !true --> false (non-empty strings are truthy)
console.log("logical not--6--", !Boolean(null)); // !false --> true (null is falsy)
console.log("logical not--7--", !0); // true (0 is falsy)
```

---

#### 4.3. Logical AND (`&&`)

The `&&` operator returns `true` if **both** operands are `true`. Otherwise, it returns `false`. If the first operand is falsy, it short-circuits and returns the first operand.

```javascript
console.log("logical AND--1--", true && true); // true
console.log("logical AND--2--", true && false); // false
console.log("logical AND--3--", false && false); // false
console.log("logical AND--4--", false && true); // false
console.log("logical AND--5--", !false && true); // true && true -> true
console.log("logical AND--6--", null && true); // null (short-circuits at null)
console.log("logical AND--7--", Boolean(null) && true); // false
console.log("logical AND--8--", undefined && true); // undefined (short-circuits at undefined)
console.log("logical AND--9--", !Boolean(undefined) && true); // !false && true ==> true && true --> true
```

---

#### 4.4 Logical OR (`||`)

The `||` operator returns `true` if **at least one** operand is `true`. If the first operand is truthy, it short-circuits and returns the first operand.

```javascript
console.log("logical OR--1--", true || true); // true
console.log("logical OR--2--", true || false); // true
console.log("logical OR--3--", false || false); // false
console.log("logical OR--4--", false || true); // true
console.log("logical OR--5--", !false || true); // true
console.log("logical OR--6--", null || true); // true (short-circuits at true)
console.log("logical OR--7--", Boolean(null) || true); // true
console.log("logical OR--8--", undefined || true); // true (short-circuits at true)
console.log("logical OR--9--", !Boolean(undefined) || true); // true
```

---

### 4.5 Key Points:

1. **Logical NOT (`!`)**: Inverts the boolean value of its operand.
2. **Logical AND (`&&`)**: Returns `true` only if both operands are `true`. Short-circuits if the first operand is falsy.
3. **Logical OR (`||`)**: Returns `true` if at least one operand is `true`. Short-circuits if the first operand is truthy.

---

## 5. Bitwise Operator

### No need to learn this operator in detail. Just know that it is used to perform bitwise operations on binary numbers.

- Bitwise operators are used to perform operations on binary representations of numbers.
- They operate on the binary digits (bits) of numbers and return a new number based on the operation performed.
- Bitwise operators are not commonly used in modern JavaScript programming, but they can be useful in certain scenarios, such as low-level programming or performance optimization.
- The following are the most commonly used bitwise operators:
  1. **Bitwise AND (`&`)**: Compares each bit of two numbers and returns a new number with bits set to `1` where both bits are `1`.
  2. **Bitwise OR (`|`)**: Compares each bit of two numbers and returns a new number with bits set to `1` where at least one bit is `1`.
  3. **Bitwise XOR (`^`)**: Compares each bit of two numbers and returns a new number with bits set to `1` where the bits are different.
  4. **Bitwise NOT (`~`)**: Inverts the bits of a number, changing `0`s to `1`s and `1`s to `0`s.
  5. **Left Shift (`<<`)**: Shifts the bits of a number to the left by a specified number of positions, filling the rightmost bits with `0`s.
  6. **Right Shift (`>>`)**: Shifts the bits of a number to the right by a specified number of positions, preserving the sign bit (the leftmost bit).
  7. **Zero-fill Right Shift (`>>>`)**: Shifts the bits of a number to the right by a specified number of positions, filling the leftmost bits with `0`s.

## 6. Ternary Operator

## 7. Type Operator

## 8. Nullish Operator

## 9. Spread and Rest Operator

## 10. Optional Chaining Operator

## Types of Functions

1. **Function Declaration**

   - Not recommended to use in modern JavaScript.
   - It is hoisted and can be called before it is defined.

2. **Function Expression**

   - It is not hoisted and can only be called after it is defined.

3. **Arrow Function**

   - Also called fat arrow function or function expression.

4. **Function with Default Parameter**

   - Allows setting default values for function parameters.

5. **Strict Function**

   - Functions that operate in strict mode.

6. **Function with Rest Parameter**
   - Allows handling an indefinite number of arguments as an array.

### Examples of Functions in JavaScript

#### 1. Function Declaration

Function declarations are hoisted, meaning they can be called before they are defined.

```javascript
console.log(add(10, 40)); // 50

function add(a, b) {
  return a + b;
}
console.log(add(10, 20)); // 30
```

#### 2. Function Expression

Function expressions are not hoisted and can only be called after they are defined.

```javascript
// console.log('addTwoNumber before function call--', addTwoNumber(10, 40));
// Uncaught ReferenceError: Cannot access 'addTwoNumber' before initialization

const addTwoNumber = function (a, b) {
  return a + b;
};
console.log("addTwoNumber--", addTwoNumber(10, 20)); // 30
```

#### 3. Arrow Function

Arrow functions are a shorter syntax for writing function expressions. They are not hoisted and are a feature of ES6.

```javascript
// console.log('addTwoNumberArrow before function call--', addTwoNumberArrow(10, 40));
// Uncaught ReferenceError: Cannot access 'addTwoNumberArrow' before initialization

const addTwoNumberArrow = (a, b) => {
  console.log("addTwoNumberArrow- checking parameters-", a, b); // 10, 20
  return a + b;
};
console.log("addTwoNumberArrow--", addTwoNumberArrow(10, 20)); // 30
console.log("addTwoNumberArrow without value--", addTwoNumberArrow(10)); // NaN
```

#### 4. Arrow Function with Default Parameters

Default parameters allow setting default values for function arguments. This is a feature of ES6.

```javascript
const addTwoNumberArrowWithDefault = (a = 0, b = 0) => {
  console.log("addTwoNumberArrow- checking parameters-", a, b); // 10, 20
  return a + b;
};
console.log("addTwoNumberArrowWithDefault--", addTwoNumberArrowWithDefault(10)); // 10
console.log(
  "addTwoNumberArrowWithDefault-2---",
  addTwoNumberArrowWithDefault(30)
); // 30
console.log(
  "addTwoNumberArrowWithDefault-3---",
  addTwoNumberArrowWithDefault()
); // 0
```

#### 5. Strict Function

Strict functions enforce stricter parsing and error handling in JavaScript. Below is an example of a function using default parameters and strict mode.

```javascript
const calculateMarks = ({ eng = 0, phy = 0, chem = 0 }) => {
  console.log(
    `This student has marks in English: ${eng}, Physics: ${phy}, Chemistry: ${chem}`
  );
  return eng + phy + chem;
};

const phy = 64;
const chem = 73;
const english = 89;

console.log(
  "Calculating marks of student Chandni--",
  calculateMarks({ phy: phy, chem: chem, eng: english })
);
console.log(
  "Calculating marks of student Vinay--",
  calculateMarks({ eng: english, phy: phy, chem })
); // shorthand property
```

## JavaScript Default Popups

JavaScript provides built-in popup methods to interact with users. These include `alert`, `confirm`, and `prompt`.

### 1. Alert

- Used to display a message to the user.
- Example:
  ```javascript
  alert("You have a few unsaved changes. Do you want to save them?");
  ```

### 2. Confirm

- Used to display a message to the user and ask for confirmation.
- Returns `true` or `false` based on user input.
- Examples:

  ```javascript
  confirm("You have a few unsaved changes. Do you want to save them?");
  ```

  ```javascript
  const userConfirmation1 = confirm("Do you want to proceed?");
  console.log("User confirmation for proceed:", userConfirmation1);

  const userConfirmation2 = confirm(
    "Are you sure you want to delete this item?"
  );
  console.log("User confirmation for delete:", userConfirmation2);

  const userConfirmation3 = confirm(
    "Do you agree to the terms and conditions?"
  );
  console.log("User confirmation for terms and conditions:", userConfirmation3);
  ```

### 3. Prompt

- Used to display a message to the user and ask for input.
- Returns the input value as a string or `null` if canceled.
- Example:

  ```javascript
  const userName = prompt("Please enter your name:"); // It will display a message to the user and ask for input
  console.log("User name:", userName); // It will return the input value as a string or null. we can store the value in a variable

  const physicsMarks = prompt("Please enter your physics marks:"); // It will display a message to the user and ask for input
  console.log("Physics marks:", physicsMarks, Number(physicsMarks)); // It will return the input value as a string or null. we can store the value in a variable
  ```

- Note: The value returned by `prompt` can be stored in a variable for further use.

### Example: Function to Calculate Student Marks

The following code demonstrates how to create a function that takes a student's name and their marks in English, Physics, and Chemistry, and outputs a formatted string with their total marks.

#### Code:

```javascript
/**
 * Create a function that takes input of student name and their marks in English, Physics, and Chemistry.
 * The output would be like this:
 * OUTPUT: This studentName has marks in English 89, Physics 64, Chemistry 73, and total marks 226.
 */

const studentName = prompt("Please Enter Student Name:"); // Prompt user for student name
const englishMarks = prompt("Please Enter English Marks:"); // Prompt user for English marks
const physicsMarks = prompt("Please Enter Physics Marks:"); // Prompt user for Physics marks
const chemistryMarks = prompt("Please Enter Chemistry Marks:"); // Prompt user for Chemistry marks

// Function using basic parameters
const getStudentMarks = (stName, eng, phy, chem) => {
  const sumOfMarks = eng + phy + chem;
  return `${stName} has marks in English ${eng}, Physics ${phy}, Chemistry ${chem}, and total marks ${sumOfMarks}`;
};

// Example usage:
// console.log(getStudentMarks(studentName, Number(englishMarks), Number(physicsMarks), Number(chemistryMarks)));

// Function with default parameters
const getStudentMarksWithDef = (stName = "", eng = 0, phy = 0, chem = 0) => {
  const sumOfMarks = eng + phy + chem;
  return `${stName} has marks in English ${eng}, Physics ${phy}, Chemistry ${chem}, and total marks ${sumOfMarks}`;
};

console.log(
  "getStudentMarksWithDef-1:",
  getStudentMarksWithDef(
    studentName,
    Number(englishMarks),
    Number(physicsMarks)
  )
); // When all arguments are not passed
console.log(
  "getStudentMarksWithDef-2:",
  getStudentMarksWithDef(
    Number(englishMarks),
    Number(physicsMarks),
    studentName
  )
); // When arguments are not relocated

// Strict function with default parameters
const getStudentMarksWithStrict = ({
  stName = "",
  eng = 0,
  phy = 0,
  chem = 0,
}) => {
  const sumOfMarks = eng + phy + chem;
  return `${stName} has marks in English ${eng}, Physics ${phy}, Chemistry ${chem}, and total marks ${sumOfMarks}`;
};

console.log(
  "getStudentMarksWithStrict-1:",
  getStudentMarksWithStrict({
    eng: Number(englishMarks),
    phy: Number(physicsMarks),
    stName: studentName,
    chem: Number(chemistryMarks),
  })
); // When arguments are passed in any order

console.log(
  "getStudentMarksWithStrict-2:",
  getStudentMarksWithStrict({
    eng: Number(englishMarks),
    chem: Number(chemistryMarks),
  })
); // When some arguments are missing
```

#### Explanation:

1. **Basic Function**: `getStudentMarks` takes four arguments (name, English marks, Physics marks, Chemistry marks) and calculates the total.
2. **Function with Default Parameters**: `getStudentMarksWithDef` provides default values for missing arguments.
3. **Strict Function**: `getStudentMarksWithStrict` uses an object as a parameter, allowing arguments to be passed in any order.

#### Example Output:

- Input:
  - Student Name: `John`
  - English Marks: `89`
  - Physics Marks: `64`
  - Chemistry Marks: `73`
- Output:  
  `John has marks in English 89, Physics 64, Chemistry 73, and total marks 226.`

---
