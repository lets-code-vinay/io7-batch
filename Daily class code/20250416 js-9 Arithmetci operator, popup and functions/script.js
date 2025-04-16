// Daily class code/20250414 js-8 string prototypes-3/script.js

/**
 * Types of operator
 * 1. Arithmetic operator
 *   Additional Operator is used to performed mathematical operations
 *   It has operand and operator
 *          operator +, -, *, /, %, **, ++, --
 *          operand 1,  2 ....
 * 
 *      1.1 Additional operator
 *                  It perform addition of two operands or more than two operands
 *                  It is used to add two numbers or more than two numbers
 *                      e.g. 10 +20 + 30 + 40 + 50 = 150
 *                  It is used to concatenate two strings or more than two strings
 *                      e.g. "Hello" + "World" = HelloWorld
 *      1.2 Subtraction operator
 *                  It perform subtraction of two operands or more than two operands
 *                  It is used to subtract two numbers or more than two numbers
 *                      e.g. 100 - 50 - 25 = 25
 *                  When It is used to subtract two strings or more than two strings it will return NaN
 *                      e.g. "Hello" - "World" = NaN
 *      1.3 Multiplication operator
 *                  It perform multiplication of two operands or more than two operands
 *                  It is used to multiply two numbers or more than two numbers
 *                      e.g. 10 * 20 * 30 = 6000
 *                  When It is used to multiply two strings or more than two strings it will return NaN
 *                      e.g. "Hello" * "World" = NaN
 *      1.4 Division operator
 *                  It perform division of two operands or more than two operands
 *                  It is used to divide two numbers or more than two numbers
 *                      e.g. 100 / 50 / 2 = 1
 *                  When It is used to divide two strings or more than two strings it will return NaN
 *                      e.g. "Hello" / "World" = NaN
 *      1.5 Modulus operator
 *                 It perform modulus of two operands or more than two operands
 *                 It is used to find the remainder of two numbers or more than two numbers
 *                      e.g. 10 % 3 = 1
 *                      e.g. 10 % 3 % 2 = 1
 *                    It is used to find the remainder of two strings or more than two strings
 *                     e.g. "Hello" % "World" = NaN
 *      1.6 Exponential operator
 *                 It perform exponential of two operands or more than two operands
 *                 It is used to find the power of two numbers or more than two numbers
 *                     e.g. 2 ** 3 = 8
 *                     e.g. 2 ** 3 ** 2 = 64
 * 
 *      1.7 Increment operator
 *                 It is used to increment the value of a variable by 1
 *                 It is used to increase the value of a variable by 1
 *                    e.g. let a = 10
 *                       a++ // 11
 *                      ++a // 12
 *        We have two types of increment operator
 *                 1. Pre increment operator
 *                     It is used to increment the value of a variable by 1 before using it
 *                 2. Post increment operator
 *                    It is used to increment the value of a variable by 1 after using it
 * 
 * 
 *      1.8 Decrement operator
 *                  It is used to decrement the value of a variable by 1
 *                 It is used to decrease the value of a variable by 1
 *                    e.g. let a = 10
 *                       a-- // 11
 *                      --a // 12
 * 
 * 2. Assignment operator
 * 3. Comparison operator
 * 4. Logical operator
 * 5. Bitwise operator
 * 6. Ternary operator
 * 7. Type operator
 * 8. Nullish operator
 * 9. Spread and rest operator
 * 10. Optional chaining operator

 */


// addition
 let a = 10;
 let b = 20;
 let c = 30;
 let ab = 60;


 const d = a + b + c; // 10 + 20 + 30 = 60
 const e = a -b - c; // 10 - 20 - 30 = -40
 const f = a * b * c; // 10 * 20 * 30 = 6000
 const g = a / b / c; // 10 / 20 / 30 = 0.016666666666666666
 const h = a % 2; // 10 % 2 = 0 remainder
 const i = b % 3; // 20 % 3 = 2 remainder
 const j = a ** 2; // 10 ** 2 = 10^2 = 10 * 10 ==  100
 const k = b ** 3; // 20 ** 3 = 20^3 = 20 * 20 * 20 == 8000

//  const l = ++a; // ++10  == 1 + 10 = 11
console.log('pre incrementing-- ', ++a) 
console.log('pre incrementing 2-- ', a)

console.log('post incrementing-- ', b++) // 20 + 1 = 21
console.log('post incrementing 2-- ', b)

console.log('pre decrement -- ', --c) // 30 - 1 = 29
console.log('pre decrement -- ', c) //  29


console.log('post decrement -- ', ab--) // 60 - 1 
console.log('post decrement -- ', ab) //  59


/**
 * types of functions
 *  1. Function declaration 
 *      not recommended to use in modern js
 *      It is hoisted and can be called before it is defined
 * 
 *  2. Function expression
 *     It is not hoisted and can be called after it is defined
 *    
 *  3. arrow function (also called fat arrow function or function expression)
 *  4. function with default parameter
 *  5. Strict function
 *  6. function with rest parameter
 *  
 */

// function declaration
console.log(add(10, 40)); // 50

function add(a, b) {
    return a + b;
}
console.log(add(10, 20)); // 30


// function expression
// console.log('addTwoNumber before function call--',addTwoNumber(10, 40)); // It will return error because it is not hoisted
// Uncaught ReferenceError: Cannot access 'addTwoNumber' before initialization

const addTwoNumber = function (a, b) {
    return a + b;
}
console.log('addTwoNumber--',addTwoNumber(10, 20)); // 30

// arrow function
// Arrow function is a shorter syntax for writing function expressions
// It is not hoisted and can be called after it is defined
// It is feature of ES6

// console.log('addTwoNumberArrow before function call--',addTwoNumberArrow(10, 40)); // It will return error because it is not hoisted
const addTwoNumberArrow = (a, b) => {
    console.log('addTwoNumberArrow- checking parameters-', a, b) // 10, 20
    // if any value is not passed it will treated as undefined
    return a + b;
}
console.log('addTwoNumberArrow--',addTwoNumberArrow(10, 20)); // 30
console.log('addTwoNumberArrow without value--',addTwoNumberArrow(10)); // If we don't pass the second value it will return NaN


// default parameter
// It is feature of ES6
// We can set default value for the parameter

const addTwoNumberArrowWithDefault = (a = 0, b = 0) => {
    // if any value is not passed it will pick default value
    console.log('addTwoNumberArrow- checking parameters-', a, b) // 10, 20
    return a + b;
}
console.log('addTwoNumberArrowWithDefault--',addTwoNumberArrowWithDefault(10)); 
console.log('addTwoNumberArrowWithDefault-2---',addTwoNumberArrowWithDefault(30)); 
console.log('addTwoNumberArrowWithDefault-3---',addTwoNumberArrowWithDefault()); 


// strict function
const calculateMarks = ({eng = 0, phy = 0, chem= 0}) => {
    // if any value is not passed it will pick default value
    
    console.log(`This student has marks in english ${eng}, physics ${phy}, chemistry ${chem}`)
    return eng + phy + chem;
}

const phy = 64;
const chem = 73;
const english = 89;

console.log('calculating marks of student Chandni--',calculateMarks({phy:phy, chem:chem, eng: english})); 
console.log('calculating marks of student vinay--',calculateMarks({eng:english, phy:phy, chem})); // shorthand property 


// ---------------- JS default popup ------------------
// 1. alert
    // It is used to display a message to the user

// 2. confirm

    // It is used to display a message to the user and ask for confirmation
    // It returns true or false based on user input

// 3. prompt
    // It is used to display a message to the user and ask for input
    // It is used to get input from the keyboard
    // It returns the input value as a string or null. we can store the value in a variable



    //  alert('You have few unsaved changes. Do you want to save them?') // It will display a message to the user

    //  confirm('You have few unsaved changes. Do you want to save them?') // It will display a message to the user and ask for confirmation
    // // It will return true or false based on user input

    //  const userConfirmation1 = confirm('Do you want to proceed?');
    //  console.log('User confirmation for proceed:', userConfirmation1);

    //  const userConfirmation2 = confirm('Are you sure you want to delete this item?');
    //  console.log('User confirmation for delete:', userConfirmation2);

    // const userConfirmation3 = confirm('Do you agree to the terms and conditions?');
    // console.log('User confirmation for terms and conditions:', userConfirmation3);

    // const userName = prompt('Please enter your name:'); // It will display a message to the user and ask for input
    // console.log('User name:', userName); // It will return the input value as a string or null. we can store the value in a variable

    // const physicsMarks = prompt('Please enter your physics marks:'); // It will display a message to the user and ask for input
    // console.log('Physics marks:', physicsMarks, Number(physicsMarks)); // It will return the input value as a string or null. we can store the value in a variable

    // -=------------------------------------------------
    /**
     * Create a function that takes input of student name his/her marks in english, physics and chemistry
     * and out put would be like this
     * OUTPUT:- This studentName has marks in english 89, physics 64, chemistry 73 and total marks 226
     */

    const studentName = prompt('Please Enter Student Name:'); // It will display a message to the user and ask for input
    const englishMarks = prompt('Please Enter English Marks:'); // It will display a message to the user and ask for input
    const physicsMarks = prompt('Please Enter Physics Marks:'); // It will display a message to the user and ask for input
    const chemistryMarks = prompt('Please Enter Chemistry Marks:'); // It will display a message to the user and ask for input
    
    // With help of basic function
    const getStudentMarks = (stName, eng, phy, chem) => {

        const sumOfMarks = eng + phy + chem; 
        return `${stName} has marks in english ${eng}, physics ${phy}, chemistry ${chem} and total marks ${sumOfMarks}`
    }

    // console.log('getStudentMarks-1--', getStudentMarks(studentName, Number(englishMarks), Number(physicsMarks), Number(chemistryMarks))); // It will display a message to the user and ask for input
    
    const getStudentMarksWithDef = (stName = '', eng = 0, phy = 0, chem = 0) => {

        const sumOfMarks = eng + phy + chem; 
        return `${stName} has marks in english ${eng}, physics ${phy}, chemistry ${chem} and total marks ${sumOfMarks}`
    }
    console.log('getStudentMarksWithDef-1--', getStudentMarksWithDef( studentName, Number(englishMarks), Number(physicsMarks))); // When all arguments are not passed

    console.log('getStudentMarksWithDef-2--', getStudentMarksWithDef(Number(englishMarks), Number(physicsMarks), studentName)); // When arguments are not relocated


    // Strict function with default parameter
    const getStudentMarksWithStrict = ({stName = '', eng = 0, phy = 0, chem = 0}) => {

        const sumOfMarks = eng + phy + chem; 
        return `${stName} has marks in english ${eng}, physics ${phy}, chemistry ${chem} and total marks ${sumOfMarks}`
    }
    console.log('getStudentMarksWithStrict-1--', getStudentMarksWithStrict({eng: Number(englishMarks), phy:Number(physicsMarks), stName:studentName, chem:Number(chemistryMarks)})); // When arguments are not relocated
    console.log('getStudentMarksWithStrict-1--', getStudentMarksWithStrict({eng: Number(englishMarks),  chem:Number(chemistryMarks)})); // When arguments are not relocated
