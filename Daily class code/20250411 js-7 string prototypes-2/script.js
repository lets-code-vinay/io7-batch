// 20250411 js-7 string prototypes-2

// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String

/**
 * To find any place value of any character
 * - 1.  using String[index] schoolName[5]
 * - 2.  using .at(5)
 */

const dummyString = `This is the complete series for the English dub of  Ultimate Muscle These episodes where cut and remux from Discotek Media SD on Blu-ray release this isn't perfect but it is the highest quality we got hopefully everyone enjoys`;

console.log(
  "printing location or index value of character at 4-->",
  dummyString[4]
);
console.log(
  "printing location or index value of character at 55 -->",
  dummyString[55]
);
console.log(
  "printing location or index value of character at 15 -->",
  dummyString[15]
);
console.log(
  "printing location or index value of character at 5525 -->",
  dummyString[5525]
);

console.log(
  "printing location or index value of character using .at() 8 -->",
  dummyString.at(8)
);

console.log(
  "printing location or index value of character using .at() 80 -->",
  dummyString.at(80)
);

/**
 * fromCharCode()
 * used to find the ASCII code of given character
 *  ASCII code starts from 0-255 (as per https://www.ascii-code.com/)
 *  65-90 --> A-Z
 *  91-122 --> a-z
 *  48-57 --> 0-9
 */

console.log("findCharCode -1-->", String.fromCharCode(65));
console.log("findCharCode -2-->", String.fromCharCode(99));
console.log("findCharCode -3-->", String.fromCharCode(999));
console.log("findCharCode -3-->", String.fromCharCode(9990));
console.log("findCharCode -3-->", String.fromCharCode(99909));
console.log("findCharCode -3-->", String.fromCharCode(999099));
console.log("findCharCode -3-->", String.fromCharCode(999099998));
console.log("findCharCode -3-->", String.fromCharCode(9990999989));

/**
 * Find multiple ASCII character code
 * String.fromCodePoint()
 */

console.log("fromCodePoint-=-", String.fromCodePoint(86, 73, 78, 65, 89));
console.log(
  "Print Vinay in capitalization-=-",
  String.fromCodePoint(86, 105, 110, 97, 121)
);

// Assignment --> Print your name using ASCII code
// Assignment --> Print 'Delhi is Capital of India' using ASCII code
// Assignment --> Print 'India got independence on 15th Aug 1947' using ASCII code

/**
 * Concatenation of string
 * Join two or more string together
 *
 * 1. using "" and +
 * 2. using "" and ,
 * 3. using template literals `` and ${}
 */

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

/**
 * search
 */

console.log("search --1-", dummyString.search("h"));
console.log("search --2-", dummyString.search("l"));
console.log("search --3-", dummyString.search("e"));
console.log("search --4-", dummyString.search("E"));

const var1 = "hello ";
/**
 * value.repeat()
 * is used to repeat any string multiple times. just give number of repetition
 */
console.log("repeat --1-", `i'm saying ${var1.repeat(20)} to you`);

// character find based on index number
console.log("-- find index--", dummyString[2]);

// find index number based on character
console.log("-- find index--", dummyString.search("i"));

// find character exist in string
console.log("-- find index--", dummyString.includes("i"));

/**
 * .indexOf()
 * It will return the first index number of result or finding
 * It works similar to .search()
 * It must be preferred to .search()
 */
console.log("-- find indexOf--", dummyString.indexOf("i"));

/**
 * .lastIndexOf()
 * It will return the last index number of result or finding
 */
console.log("-- find lastIndexOf--", dummyString.lastIndexOf("i"));
console.log("-- find lastIndexOf-2-", dummyString.lastIndexOf("v"));

// const dummyString = `This is the complete series for the English dub of
// Ultimate Muscle These episodes where cut and remux from Discotek Media SD on
// Blu-ray release this isn't perfect but it is the highest quality
// we got hopefully everyone enjoys`;

/**
 * .startsWith()
 * It will check the initial characters is matching with string or not
 * It will return true/false
 */
console.log("-- startsWith()--", dummyString.startsWith("T"));
console.log("-- startsWith()-2-", dummyString.startsWith("This"));

console.log("-- startsWith()-3-", dummyString.startsWith("Hhis"));
console.log("-- startsWith()-4-", dummyString.startsWith("H"));

/**
 * .endsWith()
 * It will check the initial characters is matching with string or not
 * It will return true/false
 */
console.log("-- endsWith()--", dummyString.endsWith("s"));
console.log("-- endsWith()-2-", dummyString.endsWith("ys"));
console.log("-- endsWith()-3-", dummyString.endsWith("enjoys"));
console.log("-- endsWith()-4-", dummyString.endsWith("H"));
console.log("-- endsWith()-2-", dummyString.endsWith("yS"));

function matchStartingOfString(str, valueToCheck) {
  const isMatched = str.startsWith(valueToCheck);
  return isMatched;
}

const isStrMatching = matchStartingOfString(dummyString, "T");
console.log("matching string with starting", isStrMatching);
console.log(
  "matching string with starting --2--",
  matchStartingOfString("this sis a sitring", "T")
);

console.log(
  "matching string with starting --3--",
  matchStartingOfString("This sis a sitring", "T")
);

/**
 * .slice()
 * is used to cut or slice any string
 */

console.log("slicing--1", dummyString.slice(10));
console.log("slicing--2", dummyString.slice(10, 20));
console.log("slicing--3", dummyString.slice(-10));
