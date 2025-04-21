// 20250421 js-11 condition operator

// ------------ Ternary Operator -------------
// return something on the basis of condition
// condition ? true/ value : false/value

console.log(
  "ternary 1-->",
  2 + 2 == 4 ? "Yes this is true" : "No this is false"
);

console.log(
  "ternary 2-->",
  2 + 2 === "4" ? "Yes this is true" : "No this is false"
);

// ------- Type of operator ----
// It will return datatype of any value
console.log("typeof--1--", typeof 10); // number
console.log("typeof--2--", typeof "10"); // string
console.log("typeof--3--", typeof "true"); // string
console.log("typeof--4--", typeof false); // boolean
console.log("typeof--5--", typeof {}); // Object
console.log("typeof--6--", typeof ""); //string
console.log("typeof--7--", typeof []); // object
console.log("typeof--8--", typeof null); // Object
console.log("typeof--9--", typeof undefined); // undefined
console.log("typeof--10--", typeof typeof null); // typeof object --- string
console.log("typeof--11--", typeof typeof 10); // typeof number --- string

const names = ["red", "blue"];
console.log("instanceOf--1--", names instanceof Number); // false
console.log("instanceOf--2--", names instanceof Array); // true
console.log("instanceOf--3--", names instanceof Object); // true

// ---- Nullish Coalescing -----
//   -- >     ??
// Introduced in ES11 (2020)
// It handles only null and undefined

const red = "red";
let blue;
let green = null;
let black = 0;
let yellow = false;

console.log("testing or 1--", red || "");
console.log("testing or 2--", blue || "");
console.log("testing or 3--", green || "default value to test");
console.log("testing or 4--", black || "");
console.log("testing or 5--", yellow, yellow || "-");

console.log("testing nullish 1--", red ?? "");
console.log("testing nullish 2--", blue, blue ?? "");
console.log("testing nullish 3--", green, green ?? "-");
console.log("testing nullish 4--", black, black ?? "-");
console.log("testing nullish 5--", yellow, yellow ?? "-");

// ---- optional chaining -----
//   -- >     ?.
// Introduced in ES11 (2020)
// It handles false values in objects

const class10 = {
  studentName: "Chandni",
  studentAge: "18",
  studentCont: "abcd",
  studentAd: "abcd",
};

console.log("--optional chaining---", class10?.studentAge);

// imaging this arrays elements going to be changed
const colors = ["red", "blue", "black", "yellow"];

// ---------- spread operator-----
const clonedColors = [...colors];

// console.log("colors-- original--", colors);
clonedColors.push("green");
console.log("colors-- original-2---", colors, clonedColors);

console.log("--original object-1--", class10);
const clonedObject = { ...class10 };
delete clonedObject.studentAge;
console.log("--modified object-1--", clonedObject);

// ---------- rest operator-----

// following destructuring
const [clr1, clr2, ...remClrs] = ["red", "blue", "black", "yellow"];

console.log("--destructure object-1--", remClrs);

const printColors = (clr1, ...clrs) => {
  console.log(" printing colors--", clrs);
};

printColors("red", "blue", "black", "yellow");

// -------------------- decision making -------------------

const condition = "it is raining outside";

// if - it is raining outside
//  i will not go to school
// else - I will go

if (!condition) {
  console.log(" i will not go to school");
} else {
  console.log(" i will go");
}

const isRaining = false;

if (isRaining) {
  console.log(" i will carry my umbrella");
} else {
  console.log(" i will not carry my umbrella");
}

/**
 * Write a function and enter total marks of ajay and Vijay
 * through keyboard and tells us who has maximum marks
 */

const getMarksOfTwoStudents = () => {
  const marksOfAjay = Number(prompt(`Please enter Ajay's mark`));
  const marksOfVijay = Number(prompt(`Please enter Vijay's mark`));

  console.log("marksOfAjay, marksOfVijay -->", marksOfAjay, marksOfVijay);

  // validating marks in number
  if (isNaN(marksOfAjay)) {
    console.error("Please enter valid Ajay's number");
    return;
  } else if (isNaN(marksOfVijay)) {
    console.error("Please enter valid Vijay's number");
    return;
  } else if (marksOfAjay > 600) {
    // validating marks under 600
    return console.warn(`The marks of Ajay must be under 600`);
  } else if (marksOfVijay > 600) {
    return console.warn(`The marks of Vijay must be under 600`);
  }

  // action performance
  if (marksOfAjay > marksOfVijay) {
    console.log(
      `Ajay (${marksOfAjay}) has higher marks as compare to vijay(${marksOfVijay}) and difference is ${
        marksOfAjay - marksOfVijay
      } `
    );
  } else {
    console.log(
      `Vijay (${marksOfVijay}) has higher marks as compare to Ajay(${marksOfAjay}) and difference is ${
        marksOfVijay - marksOfAjay
      } `
    );
  }
};

getMarksOfTwoStudents();
