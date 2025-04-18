# JavaScript Assignments

# This document contains various assignments related to JavaScript operators, including arithmetic, assignment, comparison, and logical operators.

## 1 Comparison Operators

1. Use `+=` to add 50 to a variable name with x.
2. Use `-=` to subtract 30 from a variable name with age.
3. Use `*=` to multiply a variable name price by 5.
4. Use `/=` to divide a variable with name salary by 2.
5. Use `%=` to find the remainder when dividing a variable with remainingAmount by 7.
6. Use `**=` to raise a variable with name poweringData to the power of 3.
7. Create a function with name of `findRemained` that takes two input from keyboard and return the remainder of the first number divided by the second number using `%` operator. Example: `findRemained(10, 3)` should return `1`.
8. Create a function with name of `getExponentialValue` that takes two input from keyboard and return the result of the first number raised to the power of the second number using `**` operator. Example: `getExponentialValue(2, 3)` should return `8`.

## 2 Comparison Operators

1. Create a function which compares two numbers using `==`. Output should be like `"10 == 10 is true"`.
2. Create a function which compares two strings using `===`. If they are equal, output should be like `"hello === hello is true"`.
3. Create a function to check if two values are not equal using `!=`.
4. Create a function to check if two values are strictly not equal using `!==`.
5. Compare if one number is greater than another using `>`.

---

## 3 Nested Logical Operators

```javascript
let result = (10 > 5 && 5 < 15) || !(20 === 20);
console.log("result:", result);

let example1 = (15 > 10 && 10 < 20) || !(5 === 5);
console.log("example1:", example1);

let example2 = (8 <= 8 && 12 > 10) || !(7 !== 7);
console.log("example2:", example2);

let example3 = (20 === 20 || 15 < 10) && !(30 > 25);
console.log("example3:", example3);

let example4 = (5 + 5 === 10 && 10 - 5 === 5) || !(15 % 3 === 0);
console.log("example4:", example4);

let example5 = (50 / 10 === 5 || 25 * 2 === 50) && !(100 < 50);
console.log("example5:", example5);

let example6 = (true && false) || !(false || true);
console.log("example6:", example6);

let example7 = (10 > 5 && 5 <= 5) || !(20 !== 20);
console.log("example7:", example7);

let example8 = (30 < 40 || 40 > 50) && !(60 === 60);
console.log("example8:", example8);

let example9 = (100 >= 100 && 200 <= 300) || !(400 !== 400);
console.log("example9:", example9);

let example10 = (7 * 7 === 49 && 8 / 2 === 4) || !(9 + 1 !== 10);
console.log("example10:", example10);
```

## 4 Combining Comparison and Logical Operators

```javascript
let isValid = 10 + 5 > 10 && 20 - 5 === 15;
console.log("isValid:", isValid);

let isEligible = 50 > 30 || (20 === 25 && 15 <= 15);
console.log("isEligible:", isEligible);

let isCorrect = !(10 * 2 < 25) && 30 / 3 === 10;
console.log("isCorrect:", isCorrect);

let isAvailable = 100 >= 50 && (25 + 25 === 50 || 10 - 5 > 0);
console.log("isAvailable:", isAvailable);

let isVerified = (5 * 5 === 25 || 10 / 2 === 5) && !(15 < 10);
console.log("isVerified:", isVerified);

let isComplete = !(20 !== 20) && (30 > 10 || 40 <= 40);
console.log("isComplete:", isComplete);
```

### 5 Chaining Assignment Operators

```javascript
let num = 10;
num += 5;
num *= 2;
console.log("num:", num);
```

---
