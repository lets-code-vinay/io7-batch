// 20250427 js-15 js loops

/**
 * What is loop?
 * something is running again and again in repeat
 */

/**
 * Types of loops
 * 1. for
 *      In js we use for loop very less.
 *      Because we have some advance methods of loops
 *      .map(), .filter(), .find(), .some()
 * 2. while ❌❌❌❌❌❌❌❌
 * 3. do while ❌❌❌❌❌❌❌
 */

//  syntax
// for
// variable
// condition
// increment/decrement

// i want to print my name 10 time

// for(variable, condition, increment/decrement){
//   // action
// }

// ------- interview stuff -----------
// for (var i = 1; i <= 5; i++) {
//   setTimeout(() => {
//     console.log(`${i} - Vinay Maurya-- var`);
//   }, 1000);
// }

// for (let i = 1; i <= 5; i++) {
//   setTimeout(() => {
//     console.log(`${i} - Vinay Maurya -- let`);
//   }, 1000);
// }

//  2 x 1 = 2

for (let i = 1; i <= 100; i++) {
  if ((3 * i) % 2 !== 0) {
    console.log(`3 X ${i} = ${3 * i}`);
  }
}

//------------------------------------------------

// print even number till 100

for (let i = 1; i <= 100; i++) {
  if (i % 2 === 0) {
    console.log(`${i} is a even number`);
  }
}
// print odd number till 100
for (let i = 1; i <= 100; i++) {
  if (i % 2 !== 0) {
    console.log(`${i} is a ODD number`);
  }
}

/**
 *
 *  program to find palindrome
 *
 */
// RACECAR
// MADAM

// character in odd
// split from center
// reverse last or first
// compare last and first

let word = "MADAM";
word = "RACECAR";
word = "chari";
word = "Lonely ylenol";
// MadamImAdam
// word = prompt("Enter a palindrome");

const checkPalindrome = (stringToCheck = "") => {
  let str = stringToCheck.toLowerCase();

  if (str.length % 2 !== 0) {
    let center = str.length / 2; //--> 5 /2 --> 2.5
    center = Math.trunc(center); // Math.trunc(2.5) --> 2
    center += 1; // 2 += 1 --> 2 + 1

    let firstHalf = str.slice(0, center - 1);
    let lastHalf = str.slice(center);

    lastHalf = lastHalf.split("");
    lastHalf = lastHalf.reverse();
    lastHalf = lastHalf.join("");

    if (firstHalf === lastHalf) {
      console.log(`${stringToCheck} is a palindrome`);
    } else {
      console.log(`${stringToCheck} is NOT a palindrome`);
    }

    // console.log("center--", center, firstHalf, lastHalf, firstHalf == lastHalf);
  } else {
    console.warn("Please enter a valid string");
  }
};
checkPalindrome(word);

/**
 * Write a program to print out all Armstrong numbers between
 * 1 and 500 using only for loops. If sum of cubes of each digit
 * of the number is equal to the number itself, then the number
 * is called an Armstrong number. For example, 153 = ( 1 * 1 * 1 )
 * + ( 5 * 5 * 5 ) + ( 3 * 3 * 3 )
 */

// 23 == 2 * 2* 2 + 3 * 3 * 3
// 23 === 8 + 27
// 23 === 35 // Not armstrong

// 370 ==  3^3 + 7^3 + 0^3
// 370 ==  3*3*3 + 7*7*7 + 0*0*0
// 370 ==  27 + 343 + 0
// 370 === 370 --> Armstrong

let n = 154;
// break number  3,7,0
// Math.pow(n, 3) || n * n * n
// comparison

// Method 1 to break number
// num = n.toString().split("");
// let firstNum = num[0];
// let secondNum = num[1];
// let thirdNum = num[2];

// Method 2 to break number
const firstNum = n % 10;

let secondNum = Math.trunc(n / 10);
secondNum = secondNum % 10;

let thirdNum = Math.trunc(n / 100);
thirdNum = thirdNum % 10;

let armstrong =
  firstNum * firstNum * firstNum +
  Math.pow(secondNum, 3) +
  Math.pow(thirdNum, 3);

console.log(
  "num--",
  // num,
  firstNum,
  secondNum,
  thirdNum,
  armstrong,
  armstrong == n
);

const findArmstrong = (num) => {
  // validation
  if (isNaN(num)) return console.log("Please enter valid number");
  for (let i = 1; i <= num; i++) {
    // 1-9 ==> single digit
    if (i <= 9) {
      let firstNum = i % 10;

      let armstrong = firstNum * firstNum * firstNum;

      if (armstrong === i) {
        console.log(`${i} is a armstrong with ${armstrong}`);
      }
    } else if (i <= 99) {
      // 10-99 ==> double digits

      let firstDigit = i % 10;
      let secondDigit = Math.trunc(i / 10);
      secondDigit = secondDigit % 10;

      let armstrong = Math.pow(secondDigit, 3) + Math.pow(firstDigit, 3);
      // console.log(`first number`, secondDigit, firstDigit, armstrong);
      if (i == armstrong) {
        console.log(`${i} is a armstrong with ${armstrong}`);
      }
    } else if (i >= 100) {
      // 100-500 ===> three digits

      let firstDigit = i % 10;

      let secondDigit = Math.trunc(i / 10);
      secondDigit = secondDigit % 10;

      let thirdDigit = Math.trunc(i / 100);
      thirdDigit = thirdDigit % 10;

      let armstrong =
        Math.pow(thirdDigit, 3) +
        Math.pow(secondDigit, 3) +
        Math.pow(firstDigit, 3);

      // console.log(
      //   `first number`,
      //   i,
      //   thirdDigit,
      //   secondDigit,
      //   firstDigit,
      //   armstrong
      // );
      if (i == armstrong) {
        console.log(`${i} is a armstrong with ${armstrong}`);
      }
    }
  }
};

findArmstrong(500);

/**
 * nested loops
 * loop or loops inside loop known as nested loop
 */

for (let i = 1; i <= 10; i++) {
  for (let j = 1; j <= 10; j++) {
    console.log("i==", i, j);
  }
}

//
for (let i = 1; i <= 20; i++) {
  if (i % 2 === 0) {
    for (let j = 1; j <= 10; j++) {
      console.log(`even table ${i} X ${j}`, i * j);
    }
  } else {
    for (let j = 1; j <= 10; j++) {
      console.log(`Odd table ${i} X ${j}`, i * j);
    }
  }
}

// Program to find prime numbers till 100 using for loop (without Math.sqrt)

// Exercise
// print table from 20 to 30 using nested for loop
// for (let i = 1; i <= 20; i++) {
//   if (i % 2 == 0) {
//     for (let j = 1; j <= 10; j++) {
//       console.log(`even number ${i} X ${j}`, i * j);
//     }
//   } else {
//     for (let j = 1; j <= 10; j++) {
//       console.log(`odd number ${i} X ${j}`, i * j);
//     }
//   }
// }

// nested loop - print matrix
// 1  2  3  4  5
// 2  4  6  8 10
// 3  6  9 12 15
// 4  8 12 16 20
// 5 10 15 20 25
function printMultiplicationGrid() {
  for (let i = 1; i <= 5; i++) {
    let row = "";
    for (let j = 1; j <= 5; j++) {
      row += (i * j).toString().padStart(3, " ");
    }
    console.log(row);
  }
}

for (let i = 1; i <= 5; i++) {
  let row = "";
  for (let j = 1; j <= 5; j++) {
    row += (j * i).toString().padStart(3, " ");
  }
  console.log(row);
}
