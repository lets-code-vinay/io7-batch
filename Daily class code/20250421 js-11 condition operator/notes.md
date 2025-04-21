# JavaScript Operators (Ternary, nullish coalescing, optional chaining, type operators, spread operator, rest operator)

## 1. Revision - Comparison Operators

- Equal (`==`)
- Strict Equal (`===`)
- Not Equal (`!=`)
- Strict Not Equal (`!==`)
- Greater Than (`>`)
- Less Than (`<`)
- Greater Than or Equal (`>=`)
- Less Than or Equal (`<=`)

## 2. Revision - Logical Operators

- AND (`&&`)
- OR (`||`)
- NOT (`!`) // !true , !false, !!false --!true-- false

## 5. NO NEED -- Bitwise Operators ❌❌❌❌

- AND (`&`)
- OR (`|`)
- XOR (`^`)
- NOT (`~`)
- Left Shift (`<<`)
- Right Shift (`>>`)
- Zero-fill Right Shift (`>>>`)

## 6. Ternary Operator

- Conditional (`condition ? expr1 : expr2`)

## 7. Type Operators

- `typeof`
- `instanceof`

## 8. Nullish Coalescing Operator

- (`??`)
- Use ?? when you want to handle only null or undefined.
- Do not confuse ?? with ||. The || operator considers all falsy values (0, false, "", null, undefined, etc.), while ?? only - considers null and undefined.

## 9. Optional Chaining Operator

- (`?.`)

## 10. Spread operator and rest operator

---

### functions

- function declaration
- function expression
- arrow functions
- strict function
- function with default

---

### dialog boxes or popups in JS

- alert `To show some warning or output`
- confirm `To get confirmation- returns --> true/false`
- prompt `To enter any value from keyboard`

---

### arithmetic operator examples with function

```js

// Addition (+)
let a = 10;
let b = 5;
console.log(a + b); // Output: 15

// Subtraction (-)
console.log(a - b); // Output: 5

// Multiplication (*)
console.log(a * b); // Output: 50

// Division (/)
console.log(a / b); // Output: 2

// Modulus (%)
console.log(a % b); // Output: 0

// Exponentiation (**)
console.log(a ** 2); // Output: 100

// Post Increment (++)
let c = 5;
c++;
console.log(c); // Output: 6

Post Increment (c++):

// The value of c is used first, then it is incremented.
// Example:
let c = 5;
console.log(c++); // Output: 5 (value used first)
console.log(c);   // Output: 6 (value incremented after use)

// Pre Increment (++)
let c = 5;
++c;
console.log(c); // Output: 6

// The value of c is incremented first, then it is used.
// Example:
let c = 5;
console.log(++c); // Output: 6 (value incremented first)
console.log(c);   // Output: 6 (value remains incremented)


// Post Decrement (--)
c--;
console.log(c); // Output: 5

// The value of c is used first, then it is decremented.
// Example:
let c = 5;
console.log(c--); // Output: 5 (value used first)
console.log(c);   // Output: 4 (value decremented after use)



// Pre Decrement (--)
--c;
console.log(c); // Output: 5

// The value of c is decremented first, then it is used.
// Example:
let c = 5;
console.log(--c); // Output: 4 (value decremented first)
console.log(c);   // Output: 4 (value remains decremented)



/**
 * Create a program to calculate number and average of 5 subjects
 */

let studentName = "Ankit";
let phy = 80;
let chem = 90;
let math = 70;
let comp = 80;
let eng = 65;



function calculateMarks(
  studentName = "",
  physics = 0,
  chemistry = 0,
  maths = 0,
  comp = 0,
  english = 0
) {
  console.log(`Hi ${studentName} !`);

  const sumOfMarks = physics + chemistry + maths + comp + english;

  console.log(`You got ${sumOfMarks} / 100,
  Your marks are in
  Physics: ${physics},
  English: ${english},
  Chemistry: ${chemistry},
  Computer: ${comp},
  Maths: ${maths}

  `);

  const average = sumOfMarks / 5;

  console.log(`Your average score is ${average}`);
  document.write(
    `<h1>${studentName}: Your average score is ${average}</h1></br>`
  );
}
/**
 * DRY
 * Do-not Repeat yourself
 */

calculateMarks(studentName, phy, chem, math, comp, eng);
calculateMarks("Chahat", 87, 81, 98, 67, 75);
calculateMarks("Pooja", 74, 81, 89, 76, 97);
calculateMarks("Taran", 34, 34, 34, 34);
calculateMarks();
calculateMarks(75, "Chahat", 87, 81, 98, 67);

function calculateStrictMarks({
  studentName = "",
  physics = 0,
  chemistry = 0,
  maths = 0,
  comp = 0,
  english = 0,
}) {
  console.log(`Hi ${studentName} !`);
  console.log("type of input", typeof physics, physics);
  const sumOfMarks =
    Number(physics) +
    Number(chemistry) +
    Number(maths) +
    Number(comp) +
    Number(english);

  console.log(`You got ${sumOfMarks} / 100,
  Your marks are in
  Physics: ${physics},
  English: ${english},
  Chemistry: ${chemistry},
  Computer: ${comp},
  Maths: ${maths}

  `);

  const average = sumOfMarks / 5;

  console.log(`Your average score is ${average}`);
  document.write(
    `<h1>${studentName}: Your average score is ${average}</h1></br>`
  );
}

calculateStrictMarks({
  comp: 75,
  studentName: "Chahat",
  maths: 87,
  english: 81,
  physics: 98,
  chemistry: 67,
});

/**
 * Write a program to fins the area of square
 */

function areaOfSquare({ side = 0 }) {
  console.log(`Side of Square: ${side}`);
  const area = side * side;
  // const area = Math.pow(side, 2);
  console.log(`The Area of square is: ${area}`);
}

areaOfSquare({ side: 10 });
areaOfSquare({ side: 547 });
areaOfSquare(547);

// const sideFromKeyBoard = prompt("Enter Side of Square");

// areaOfSquare({ side: sideFromKeyBoard });

studentName = prompt("Enter name of Student");
phy = prompt("Enter physics marks");
chem = prompt("Enter Chemistry Marks");
math = prompt("Enter Math Marks");
comp = prompt("Enter Computer Marks");
eng = prompt("Enter English Marks");

calculateStrictMarks({
  comp: comp,
  studentName: studentName,
  maths: math,
  english: eng,
  physics: phy,
  chemistry: chem,
});

```

### 2.2 Assignment Operators

```js
// Basic Assignment (=)
let x = 10; // Assigns the value 10 to x
console.log(x); // Output: 10

// Add and Assign (+=)
x += 5; // Equivalent to x = x + 5
console.log(x); // Output: 15

// Subtract and Assign (-=)
x -= 3; // Equivalent to x = x - 3
console.log(x); // Output: 12

// Multiply and Assign (*=)
x *= 2; // Equivalent to x = x * 2
console.log(x); // Output: 24

// Divide and Assign (/=)
x /= 4; // Equivalent to x = x / 4
console.log(x); // Output: 6

// Modulus and Assign (%=)
x %= 5; // Equivalent to x = x % 5
console.log(x); // Output: 1
```
