# JavaScript 20250409 js-5 functions and string prototypes

---

## To find any place value of any character

1. string[index] e.g. 'school'[2] --> h
2. string.at() e.g. 'school'.at(2) --> h

```js
const dummyString = `This is the complete series for the English dub of  Ultimate Muscle These episodes where cut and remux from Discotek Media SD on Blu-ray release this isn't perfect but it is the highest quality we got hopefully everyone enjoys`;

console.log("location or index value of character at 4-->", dummyString[4]);
console.log("location or index value of character at 55 -->", dummyString[55]);
console.log("location or index value of character at 15 -->", dummyString[15]);
console.log("location/index value of character at 5525->", dummyString[5525]);
console.log(
  "location/index value of character using .at() 8->",
  dummyString.at(8)
);

console.log(
  "location/index value of character using .at() 80->",
  dummyString.at(80)
);
```

---

## To find ASCII code of any character (String.fromCharCode())

- American Standard Code for Information Interchange

* ASCII code starts from 0-255 (as per https://www.ascii-code.com/)
* 65-90 --> A-Z
* 91-122 --> a-z
* 48-57 --> 0-9

```js
console.log("findCharCode -1-->", String.fromCharCode(65));
console.log("findCharCode -2-->", String.fromCharCode(99));
console.log("findCharCode -3-->", String.fromCharCode(999));
console.log("findCharCode -3-->", String.fromCharCode(9990));
console.log("findCharCode -3-->", String.fromCharCode(99909));
console.log("findCharCode -3-->", String.fromCharCode(999099));
console.log("findCharCode -3-->", String.fromCharCode(999099998));
console.log("findCharCode -3-->", String.fromCharCode(9990999989));
```

---

## Find multiple ASCII character code

- String.fromCodePoint()

```js
console.log("fromCodePoint-=-", String.fromCodePoint(86, 73, 78, 65, 89));
console.log(
  "Print Vinay in capitalization-=-",
  String.fromCodePoint(86, 105, 110, 97, 121)
);
```

---

## Concatenation of string

- Join two or more string together

* 1.  using "" and +
* 2.  using "" and ,
* 3.  using template literals `` and ${}

```js
const name1 = "Chandni";
const name2 = "Grewal";

// concat means Chandni Grewal
// print "The age of Chandni Grewal is 26"
console.log("concatenating name1 and name2-->1-->", name1 + name2);
console.log(
  "PRINTING -The age of Chandni Grewal is 26-->2-->",
  "The age of " + name1 + " " + name2 + " is 26"
);

console.log(
  "PRINTING -The age of Chandni Grewal is 26-->3-->",
  "The age of",
  name1,
  name2,
  "is 26"
);

console.log(
  "PRINTING -The age of Chandni Grewal is 26-->3-->",
  `The age of ${name1} ${name2} is 26`
);
```

---

## value.search('g')

- Here we pass character inside the search() method to know about its index
- It will return output of only first found result

```js
console.log("search --1-", dummyString.search("h"));
console.log("search --2-", dummyString.search("l"));
console.log("search --3-", dummyString.search("e"));
console.log("search --4-", dummyString.search("E"));
```

---

## value.repeat()

- is used to repeat any string multiple times. just give number of repetition

```js
const var1 = "hello ";
console.log("repeat --1-", `i'm saying ${var1.repeat(20)} to you`);
```

---

## .indexOf()

- It will return the first index number of result or finding
- It works similar to .search()
- It must be preferred to .search()

```js
console.log("-- find indexOf--", dummyString.indexOf("i"));
```

---

## .lastIndexOf()

- It will return the last index number of result or finding

```js
console.log("-- find lastIndexOf--", dummyString.lastIndexOf("i"));
console.log("-- find lastIndexOf-2-", dummyString.lastIndexOf("v"));
```

---

## .startsWith()

- It will check the initial characters is matching with string or not
- It will return true/false

```js
console.log("-- startsWith()--", dummyString.startsWith("T"));
console.log("-- startsWith()-2-", dummyString.startsWith("This"));

console.log("-- startsWith()-3-", dummyString.startsWith("Hhis"));
console.log("-- startsWith()-4-", dummyString.startsWith("H"));
```

---

## .endsWith()

- It will check the initial characters is matching with string or not
- It will return true/false

```js
console.log("-- endsWith()--", dummyString.endsWith("s"));
console.log("-- endsWith()-2-", dummyString.endsWith("ys"));
console.log("-- endsWith()-3-", dummyString.endsWith("enjoys"));
console.log("-- endsWith()-4-", dummyString.endsWith("H"));
console.log("-- endsWith()-2-", dummyString.endsWith("yS"));
```

---

## .slice()

- is used to cut or slice any string

```js
console.log("slicing--1", dummyString.slice(10));
console.log("slicing--2", dummyString.slice(10, 20));
console.log("slicing--3", dummyString.slice(-10));
```

---
