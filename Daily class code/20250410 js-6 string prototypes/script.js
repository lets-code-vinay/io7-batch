// 20250410 js-6 string prototypes

// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String

/**
 * String Conversion
 * 1. String(10)
 * 2. value.toString()
 */

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

/**
 * value.includes()
 *  To check if given value existed in string
 */

const dummyString = `Strings are useful for holding data that can be represented in that text form`;

console.log("-- includes -1---", dummyString.includes("are"));
console.log("-- includes -2---", dummyString.includes("be"));
console.log("-- includes -3---", dummyString.includes("chandni"));
console.log("-- includes -4---", dummyString.includes(" "));
console.log("-- includes -5---", dummyString.includes("red"));

/**
 * value.replace()
 *  To replace character with given character in string
 */
console.log("-- replace -1---", dummyString.replace("are", "was"));
console.log("-- replace -2---", dummyString.replace("that", "this"));
console.log("-- replace -3---", dummyString.replace("red", "this"));

/**
 * value.replaceAll()
 *  To replace all matched character with given character in string
 */
console.log("-- replaceAll -1---", dummyString.replaceAll("are", "was"));
console.log("-- replaceAll -2---", dummyString.replaceAll("that", "this"));
console.log("-- replaceAll -3---", dummyString.replaceAll("red", "this"));
console.log("-- replaceAll -4---", dummyString.replaceAll("s", "f"));
console.log("-- replaceAll -5---", dummyString.replaceAll("s", " "));
console.log("-- replaceAll -6---", dummyString.replaceAll("s", ""));

/**
 * Create a function which update values in the string
 * 1. are --> was
 * 2. a --> i
 * 3. chandni --> Vinay
 * 4. Delhi --> Mumbai
 */

const delhi = `
Delhi is a city that never sleeps, and its heart beats strongest in places like Chandni Chowk. The streets of Chandni are packed with history, culture, and flavor. From dawn till night, the markets are alive with people who are shopping, eating, bargaining, and simply soaking in the experience. The aromas are rich, the colors are vibrant, and the stories are endless. Chandni is not just a market; it’s an emotion for the people of Delhi.

The shops in Chandni are filled with everything imaginable—spices, fabrics, electronics, and sweets. Generations of shopkeepers are continuing traditions that are older than independent India. They are not just selling goods; they are passing down legacies. Tourists who are visiting Delhi for the first time are often brought to Chandni as their introduction to the city's soul. And once they visit, they are rarely left unimpressed.

What makes Chandni special is not just the shopping—it’s the spirit of the place. The people of Delhi are known for their warmth and energy, and nowhere is this more visible than in Chandni. The vendors are enthusiastic, the customers are passionate, and the whole scene is buzzing with life. No matter how crowded or chaotic it seems, there’s a rhythm to it all. Delhi thrives in this balance of chaos and charm, especially in places like Chandni Chowk.

Food lovers are especially drawn to Chandni. The paratha galli, sweet shops, and kebab stalls are always surrounded by people who are eager for a bite of Delhi’s best street food. The flavors are rich, the portions are generous, and the memories are lasting. Some of Delhi’s most iconic dishes are born and served in Chandni, and they are loved by locals and tourists alike.`;

function stringOperation(str, wordToReplace, newWord) {
  console.log(`The length of paragraph is ${str.length}`);

  return str.replaceAll(wordToReplace, newWord);
}

// const updatedStringWithMum = stringOperation(delhi, "Delhi", "Mumbai");
// console.log("print mumbai--", updatedStringWithMum);

// const updatedStringWithWas = stringOperation(delhi, "are", "was");
// console.log("print updatedStringWithWas--", updatedStringWithWas);

// const updatedStringWithA = stringOperation(delhi, "a", "i");
// console.log("print updatedStringWithA--", updatedStringWithA);

// const updatedStringWithVinay = stringOperation(delhi, "Chandni", "Vinay");
// console.log("print updatedStringWithVinay--", updatedStringWithVinay);

/**
 * String .split()
 * use to split string into array with given data
 */

console.log("print split -1 --", dummyString.split(" "));
console.log("print split -2 --", dummyString.split(""));
console.log("print split -3 --", dummyString.split("that"));
console.log("print split -4 --", dummyString.split("are"));

/**
 * Array .reverse()
 * use to reverse Array
 */

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

/**
 * Array .join()
 * use to join Array
 */

console.log("print join() --1--", [1, 2, 3, 4, 5, 6].join("-")); // 1-2-3-4-5-6
console.log("print join() --2--", ["this", "is", "js"].join(""));

const splittedString = dummyString.split(" "); // 'this is a string' --> ['this', 'is', 'a', 'string']
console.log("splitted String--", splittedString);

const reversedString = splittedString.reverse(); // ['string', 'a', 'is', 'this']
console.log("reversedString--", reversedString);

const joinedString = reversedString.join(" "); // 'string a is this'
console.log("joinedString--", joinedString);

function getReversedString(str, splitBy) {
  const splittedString = str.split(splitBy); // 'this is a string' --> ['this', 'is', 'a', 'string']

  const reversedString = splittedString.reverse(); // ['string', 'a', 'is', 'this']

  const joinedString = reversedString.join(" "); // 'string a is this'

  return joinedString;
}

const reversedStr = getReversedString("this is just for testing", " ");
console.log("reversedStr--", reversedStr);

console.log("reversedStr 2--", getReversedString(delhi, " "));
