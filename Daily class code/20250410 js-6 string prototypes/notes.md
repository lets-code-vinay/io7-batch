# JavaScript 20250409 js-5 functions and string prototypes

---

## String Conversion

1. String(10)
2. value.toString()

```js
const isRaining = true;

console.log(
  "is it raining--1--",
  isRaining,
  String(isRaining),
  typeof String(isRaining)
);

console.log(
  "is it raining--2--",
  isRaining,
  isRaining.toString(),
  typeof isRaining.toString()
);

console.log("String conversion--", String(false));
```

---

## String includes

- To find any value existed in the string. if existed, it will return true else false

```js
const dummyString = `Strings are useful for holding data that can be represented in text form`;
console.log("-- includes -1---", dummyString.includes("are"));
console.log("-- includes -2---", dummyString.includes("be"));
console.log("-- includes -3---", dummyString.includes("chandni"));
console.log("-- includes -4---", dummyString.includes(" "));
console.log("-- includes -5---", dummyString.includes("red"));
```

---

## String .replace()

- It finds and replace the value with given value in the string. It will return string

```js
const dummyString = `Strings are useful for holding data that can be represented in text form`;
console.log("-- replace -1---", dummyString.replace("are", "was"));
console.log("-- replace -2---", dummyString.replace("that", "this"));
console.log("-- replace -3---", dummyString.replace("red", "this"));
```

---

## String .replaceAll()

- It finds and replace all the matched values with given value in the string. It will return updated string

```js
const dummyString = `Strings are useful for holding data that can be represented in that text form`;
console.log("-- replaceAll -1---", dummyString.replaceAll("are", "was"));
console.log("-- replaceAll -2---", dummyString.replaceAll("that", "this"));
console.log("-- replaceAll -3---", dummyString.replaceAll("red", "this"));
console.log("-- replaceAll -4---", dummyString.replaceAll("s", "f"));
console.log("-- replaceAll -5---", dummyString.replaceAll("s", " "));
console.log("-- replaceAll -6---", dummyString.replaceAll("s", ""));

function stringOperation(str, wordToReplace, newWord) {
  console.log(`The length of paragraph is ${str.length}`);

  return str.replaceAll(wordToReplace, newWord);
}

const updatedStringWithMum = stringOperation(delhi, "Delhi", "Mumbai");
console.log("print mumbai--", updatedStringWithMum);

const updatedStringWithWas = stringOperation(delhi, "are", "was");
console.log("print updatedStringWithWas--", updatedStringWithWas);

const updatedStringWithA = stringOperation(delhi, "a", "i");
console.log("print updatedStringWithA--", updatedStringWithA);

const updatedStringWithVinay = stringOperation(delhi, "Chandni", "Vinay");
console.log("print updatedStringWithVinay--", updatedStringWithVinay);
```

---

## String .split()

- It will break string into array with given data

```js
const dummyString = `Strings are useful for holding data that can be represented in that text form`;
console.log("-- replaceAll -1---", dummyString.replaceAll("are", "was"));
console.log("-- replaceAll -2---", dummyString.replaceAll("that", "this"));
console.log("-- replaceAll -3---", dummyString.replaceAll("red", "this"));
console.log("-- replaceAll -4---", dummyString.replaceAll("s", "f"));
console.log("-- replaceAll -5---", dummyString.replaceAll("s", " "));
console.log("-- replaceAll -6---", dummyString.replaceAll("s", ""));
```

---

## Array .reverse()

- It will reverse array elements

```js
console.log(
  "print reverse -0 --",
  [1, 2, 3, 4, 5].reverse() // [5,4,3,2,1]
);

console.log(
  "print reverse -1 --",
  dummyString.split(" "),
  "/n",
  dummyString.split(" ").reverse()
);

console.log(
  "print reverse -2 --",
  dummyString.split(""),
  "/n",
  dummyString.split("").reverse()
);

console.log(
  "print reverse -3 --",
  dummyString.split("that"),
  "/n",
  dummyString.split("that").reverse()
);
```

---

## Array .join()

- It will join array elements

```js
console.log(
  "print join -0 --",
  [1, 2, 3, 4, 5].join("") // 12345
);

console.log(
  "print join -1 --",
  dummyString.split(" "),
  "/n",
  dummyString.split(" ").reverse().join(" ")
);

console.log(
  "print join -2 --",
  dummyString.split(""),
  "/n",
  dummyString.split("").reverse().join("")
);

console.log(
  "print join -3 --",
  dummyString.split("that"),
  "/n",
  dummyString.split("that").reverse().join("")
);
```

---

## How to reverse any string in JavaScript

```js
function getReversedString(str, splitBy) {
  const splittedString = str.split(splitBy); // 'this is a string' --> ['this', 'is', 'a', 'string']

  const reversedString = splittedString.reverse(); // ['string', 'a', 'is', 'this']

  const joinedString = reversedString.join(" "); // 'string a is this'

  return joinedString;
}

const reversedStr = getReversedString("this is just for testing", " ");
console.log("reversedStr--", reversedStr);

console.log("reversedStr 2--", getReversedString(delhi, " "));
```

---
