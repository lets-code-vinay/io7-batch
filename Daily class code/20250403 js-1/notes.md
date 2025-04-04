#### Welcome to JAVASCRIPT

1.  What is programming?

## Set of instructions

## In computer science we give some instructions to achieve specific result

## . In Computer science. Computer can perform any kind of tasks. These tasks are set of instruction, Which needs to be followed to achieve that task

2. What is programming Language?
   to achieve that program we provide some set of instructions. these instructions are written in a specific language which is readable by user. But computer can not understand these programming language.
   So Programming language compile the instructions to make it readable for computer

Computer can understand only 0 and 1

human language == programming language
computer language == 0 , 1

3. Different kinds of p.language?
   C
   C++
   C#
   Java
   JavaScript
   Python
   PHP
   GoLang
   Kotlin
   Scala
   Swift
   Rust
   Ruby
   Perl

4. Technologies
   a. Frontend

   Javascript
   ES6
   TypeScript
   React, Angular, Vue
   Redux
   Material UI

   b. Backend
   NodeJS
   ExpressJS
   GraphQL
   NextJS, NuxtJS

   c. DataBase
   MongoDB
   MariaDB
   CouchDB

   d. Mobile
   ReactNative
   Flutter
   Iconic
   Lynx

5. What is difference b/w library and Framework
   Library is set of instructions to perform any particular task
   Math
   Date
   Lodash
   React

   Framework is used to perform multiple tasks as per requirement
   It can use multiple libraries

6. IDE
   -Integrated Development Environment
   -- VS code
   -- Sublime
   -- Eclipse
   -- Atom
   -- Bracket
   -- Notepad++
   -- Cursor

7. What is JavaScript?
   JS is not a programming language. It is a scripting language. which is widely used to build
   web apps, mob app and others.
   JS is single threaded, asynchronous programming language.

8. History of JavaScript?
   JS was developed by Brendad Eich in 1995 when he was working in NetScape

   1995- Brenderd Eich- NetScape
   1st Name - Mocha
   2nd Name - LiveScript
   3rd Name - ECMA Script (European Computer Manufacturing association)
   ----ES6

9. Versions
   -4th Edition
   -5th Edition ES 2009
   -6th Edition -- ES2015 == ES6
   -7th Edition -- ES2016 == ES7
   -8th Edition -- ES2017 == ES8
   -9th Edition -- ES2018 == ES9
   -10th Edi -- ES2019 == ES10
   -11th Edi -- ES2020 == ES11
   -12th Edi -- ES2021 == ES12
   -13th Edi -- ES2022 == ES13

   Most popular ES version ---> ES6

10. JS Engine
    JS can not run itself. It runs over browser with help of browser's Engine
    ----- code --> Browser --> Engine --> compile --> output

    --Browsers -
    Google Chrome --> V8
    Mozilla Firefox --> Spider Monkey
    Safari --> JS-Core
    IE --> Chakra
    Opera --> Cracan

11. JS Extension
    -- .js
    -- .jsx (ReactJS)

12. Programming Cases
    a. snake case --> this_is_snake_case / THIS_IS_SNAKE_CASE
    b. Kebab case --> this-is-kebab-case / THIS-IS-KEBAB-CASE
    c. Camel Case --> thisIsCamelCase
    d. Pascal Case --> ThisIsCamelCase

13. How to write JS?

    - IDE
      -Integrated Development Environment (VS Code)
    - online -
      ----reptIt
      ----jsbin
      ----jsfiddle
      ----codesandbox
      ----codepen
    - Chrome console

14. comment

- // Single line comment
  /\* \*

* This is for multiline comment
* \*/

15. JS output

- a. By console
  console.log("Hello Ankit");

- b. By Alert Box
  alert("Hi Team");
  alert("How are you?");
- c. Document.write
  document.write("<h1>Hello wonderfull people </h1>");

16. Data-type use in JS

# Primitive Data-type

- a. number
  0,1,2,3,4,5,6,7,8,9, 888, 758, -78,-8951

- b. String ('Anything written in quotes')
  anything written in quotes
  Single quotes ' '
  double quotes " "
  template literal `  `
  /I love javascript/g

- c. Boolean (true/false)
  true 1
  false 0
  d. null (it occupy memory location, but it has no value)
  e. undefined (it occupy memory location, but needs value to be assigned)
  or no values assigned yet

# Non-Primitive data-type

- a. Array
  it is like container of multiple value in a sequence
  [345, 'hello', false, 'apple', apple, undefined]

- b. Object
  it is like container of multiple value in key value pair
  {
  age:50,
  education:'b.a'
  }

17. # Assign operator

    let abc = '500';

18. Variables
    Which stores some values and can be changed
    let i;
    let x = 10;
    x = 20;
    console.log("x", x); // 20
    let y = 30;
    y = x;
    console.log("y--->", y); // x, 20, 30, undefined
    let z = 30;
    z = "x";
    z = i;
    console.log("z--->", z); //

# ✅ var

- Scope: Function-scoped
  Re-declaration: Allowed
  Hoisting: Yes (but initialized as undefined)
  Use case: Old JavaScript code (Not recommended for modern use)

- function test() {
  var a = 10;
  if (true) {
  var a = 20; // same variable (overwrites)
  console.log(a); // 20
  }
  console.log(a); // 20
  }

# ✅ let

- Scope: Block-scoped
  Re-declaration: ❌ Not allowed in same scope
  Hoisting: Yes (but not initialized — Temporal Dead Zone)
  Use case: Variables that will change

- function test() {
  let a = 10;
  if (true) {
  let a = 20; // new block-scoped variable
  console.log(a); // 20
  }
  console.log(a); // 10
  }

# ✅ const

- Scope: Block-scoped
  Re-declaration: ❌ Not allowed
  Re-assignment: ❌ Not allowed (but object properties can be changed)
  Use case: Constants / values that shouldn't be reassigned

- const x = 10;
  // x = 20; ❌ Error

- const obj = { name: "John" };
  obj.name = "Doe"; // ✅ Allowed (changing property)

  🔥 Summary Table
  | Keyword | Scope | Re-declare | Re-assign | Hoisting | Use For |
  |---------|--------------|------------|-----------|----------|---------------------|
  | `var` | Function | ✅ Yes | ✅ Yes | ✅ Yes | Old JS code |
  | `let` | Block | ❌ No | ✅ Yes | ✅ Yes* | Changing values |
  | `const` | Block | ❌ No | ❌ No | ✅ Yes* | Constant references |

- let and const are hoisted but not initialized, so you can't use them before declaration.

* const fruits = ["Banana", "kiwi", "cherry"];

  const student = {
  name: "Pooja",
  age: 30,
  sub: "Physics",
  };

- let -- ES6 --
-          local scope variable
-          Value can be updated
- const -- ES6
-          local scope variable
-          Value can not be updated with const
- var --
-          Global scope variable
-          Value can be updated

var apple = "red";
apple = "yellow";
apple = null;

console.log("apple--", apple);

19. Rule to declare variable

- 1.  never declare variable with same names
- 2.  Never use reserved keywords
-      this, if, for, return, break, switch, let, const, var, function, class
- 3.  Never initialize any variable with number or spcl character
-      But we can use $ and _ at starting
- 4.  Never assign any value from reserved keyword
- 5.  Never use any space in variable
- 6.  Never use - (hyphen) in variable
- 7.  Never use any special character in Variable
- 8.  If you are using any multi word variable name, must use that in camelCase
- 9.  JS is case-sensitive language

const fortKnight = "class is going on";

console.log("fort---", fortKnight);

const COLOR_RED = "#f00";
const color_red_light = "f01";
const COLOR_BLACK = "#000";

const age = 50;
const age2 = "50";

console.log("age--->", age, typeof age);
console.log("age2--->", age2, typeof age2);

const fees = 25000;
const fees2 = "30red";

21. Method to check if datatype is number
    console.log("using typeof-->", typeof fees == "number"); // 'number' == 'number'
    console.log("using typeof fees2-->", typeof fees2 == "number"); // 'string' == 'number'

22. Method to check if datatype is number using isNaN()

    console.log("using isNaN- fees---> ", isNaN(fees));
    console.log("using isNaN- fees2---> ", isNaN(fees2));
    console.log("using isNaN- fees2---> ", isNaN("D10"));

23. Method to check if datatype is number using Number.isInteger()
    console.log("using Number.isInteger- fees---> ", Number.isInteger(fees));
    console.log("using Number.isInteger- fees2---> ", Number.isInteger(fees2));

24. Math Library

    const num1 = 121;

- // To find any square root
  console.log("math square root-->", Math.sqrt(num1));
  console.log("math square root2-->", Math.sqrt(196));
  console.log("math square root3-->", Math.sqrt(225));

- // To get value of power of
  console.log("power of 10, 3--> ", Math.pow(10, 3));
  console.log("power of 19, 9-->", Math.pow(19, 9));
  console.log("power of 1, 15 -->", Math.pow(1, 15));

- // To get any random value
  console.log("random 1 -->", Math.random() \* 100);

- let number1 = 64.5434512001;
  console.log("math.ceil", Math.ceil(number1));
  console.log("math.floor", Math.floor(number1));
  console.log("math.round", Math.round(number1));

- console.log("math.max", Math.max(10, 20, 25, 5, 3, -5, 1));
  console.log("math.min", Math.min(10, 20, 25, 5, 3, -5, 1));

- console.log("Math.trunc-->", Math.trunc(number1));

- console.log("toFixed()-->", number1.toFixed(2));

- let num2 = 121;
  let num3 = "121";

- console.log("num2", num2);
  console.log(
  "num3",
  num3,
  Number(num3),
  Number("151"),
  Number("151REd"),
  Number("987"),
  Number("987.5"),
  Number("987.5a")
  );

- console.log("calculation1", 100 + 251);
  console.log("calculation2", "100" + 251);
  console.log("calculation3", 251 - 100);
  console.log("calculation4", "251" - 100);
  console.log("calculation5", 251 - "100");
  console.log("calculation6", 251 \* "10");
  console.log("calculation7", 251 / "10");

25. String Datatype

- What is string?
  a. String is primitive data-type
  b. Whatever written inside quotes (double, single quote), template literals(`` ) and /this is string/i

- let city = "Ludhiana";
  city = `Amritsar`;
  city = /Moga/g;
  city = /Malrekotla/i;

26. ES6 features list

- 1.  Template Literals
- 2.  Promises
- 3.  Array prototypes
- 4.  default

- Template literals
- 1.  ES6 feature
- 2.  It uses backticks(` `) to wrap string
- 3.  We can write multiline string by using TL.

- let oldPara = `If you're looking for random paragraphs, 
you've come to the right place. When a random word 
or a random sentence isn't quite enough, 
the next logical step is to find a random paragraph. 
We created the Random Paragraph Generator with you in mind. 
The process is quite simple. 
Choose the number of random paragraphs you'd
like to see and click the button. 
Your chosen number of paragraphs will instantly appear.`;

- let para = "I'm engineer.";
- para = 'He said, "He is lawyer"';

- What are prototypes in JS?
  Prototypes are kind of helping function to reduce effort and increase the productivity
- String prototype
  string.length
  string.replace()
- Array Prototype
  .map()
  .find()
  .filter()
