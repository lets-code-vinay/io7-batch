# JavaScript 20250414 js-8 string prototypes-3

---

## .substr()

- It has been deprecated and not suggested to use
- It returns a new sub-string after slicing

```js
const dummyString = `This is the complete series for the English dub of  Ultimate Muscle These episodes where cut and remux from Discotek Media SD on Blu-ray release this isn't perfect but it is the highest quality we got hopefully everyone enjoys`;
console.log("--substr -1 -->", dummyString.substr(5, 10));
console.log("--substr -2 -->", dummyString.substr(15, 100));
console.log("--substr -3 -->", dummyString.substr(5));
```

---

## .subString()

- It has been deprecated and not suggested to use
- It returns a new sub-string after slicing

```js
const dummyString = `This is the complete series for the English dub of  Ultimate Muscle These episodes where cut and remux from Discotek Media SD on Blu-ray release this isn't perfect but it is the highest quality we got hopefully everyone enjoys`;
console.log("--substring -1 -->", dummyString.substring(5, 10));
console.log("--substring -2 -->", dummyString.substring(15, 100));
console.log("--substring -3 -->", dummyString.substring(5));

function getSubString(str, index1, index2) {
  const newString = str.substring(index1, index2);

  return newString;
}

const newString = getSubString(schoolName, 10, 20);
console.log("newString--of school name --1--", newString);

console.log("newString--of school name --2--", getSubString(schoolName, 1, 10));

// Create a function with slice to make a substring by index value .slice()

function getSlicedString(str, index1, index2) {
  const newString = str.slice(index1, index2);

  return newString;
}

const newString2 = getSlicedString(schoolName, 10, 20);
console.log("newString2--of school name --1--", newString2);

console.log(
  "newString2--of school name --2--",
  getSlicedString(schoolName, 1, 10)
);

// Assignment: What is difference between .slice() and .substring()
```

---

## .trim()

- .trim() It removes blank spaces at starts and ends of string
- .trimStart() It removes blank spaces at start of string
- .trimEnd() It removes blank spaces at ends of string

```js
const string2 = "     hello Chandni   ";

console.log("trimming---1--->", string2, string2.trim());

console.log("trimming--start-2--->", string2, string2.trimStart());

console.log("trimming-end--3--->", string2, string2.trimEnd());

/**
 * Create a function which removes starting and ending blank space
 */

function trimSpaceFromString(str) {
  const trimmedString = str.trim();
  return trimmedString;
}

const thisIsTrimmedString = trimSpaceFromString(string2);
console.log("trimming-thisIsTrimmedString--->", thisIsTrimmedString);
```

---

## .pasStart(), .padEnd()

- .padStart() It will add characters at starting of string. if length of string is greater
- .padEnd() It will add characters at end of string. if length of string is greater

```js
const str2 = "Pikachu";

console.log("-->", str2.padStart(9, "$"));
console.log("--2-->", str2.padStart(str2.length + 5, "$"));

/**
 * .padEnd()
 */
console.log("-->", str2.padEnd(9, "$"));
console.log("--2-->", str2.padEnd(str2.length + 5, "$"));
```

---
