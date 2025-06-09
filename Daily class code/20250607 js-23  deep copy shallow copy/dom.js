console.log(window);

/**
 * * DOM Events
 * Document Object Model (DOM) is a programming interface for web documents.
 * DOM helps user to manipulate HTML elements and their attributes.
 *
 * Document Object Model (DOM) events are actions or occurrences
 * that happen in the browser, which the JavaScript code can respond to.
 * These events can be triggered by user interactions,
 * such as clicking a button, typing in an input field, or moving the mouse.
 *
 *
 * DOM order
 * Window
 *  - Document
 * -  HTML
 * -   Head
 * -   Body
 * -    Div
 * -     P
 */

console.log(window.document);

/**
 * Getting elements in DOM
 * 1. getElementsByTagName
 *   Returns a live HTMLCollection of elements with the specified tag name.
 *      in Array format
 * * 2. getElementsByClassName
 *   Returns a live HTMLCollection of elements with the specified class name.
 * *      in Array format
 * * 3. getElementById
 *   Returns a single element with the specified ID.
 */
// ---// Getting elements by tag name
const [h1Tag_1, h1Tag_2] = document.getElementsByTagName("h1");
console.log("h1Tags", h1Tag_1, h1Tag_2);

h1Tag_1.style.backgroundColor = "blue";
h1Tag_1.style.color = "white";
h1Tag_1.style.padding = "10px";

h1Tag_2.style.backgroundColor = "red";
h1Tag_2.style.color = "white";
h1Tag_2.style.padding = "5px";

const [ulTag] = document.getElementsByTagName("ul");
ulTag.style.listStyleType = "none";

// ---------- Getting elements by class name
const fruitNames = document.getElementsByClassName("fruits");
console.log("fruitNames", fruitNames);

fruitNames[0].style.border = "3px solid grey";
fruitNames[0].style.width = "60px";
fruitNames[0].style.padding = "6px";
fruitNames[0].style.borderRadius = "6px";
fruitNames[0].style.fontWeight = "900";
fruitNames[0].style.fontSize = "19px";
fruitNames[0].style.color = "grey";

// ---------- Getting element by ID
const pTagId = document.getElementById("learn");
console.log("pTagId", pTagId);

pTagId.style.border = "3px solid grey";
pTagId.style.width = "600px";
pTagId.style.padding = "6px";
pTagId.style.borderRadius = "6px";
pTagId.style.fontWeight = "900";
pTagId.style.fontSize = "19px";
pTagId.style.color = "grey";
