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

## 4. Logical Operator

## 5. Bitwise Operator

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
