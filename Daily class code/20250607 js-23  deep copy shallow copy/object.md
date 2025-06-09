# What is deep copy and shallow copy in javascript?

## Shallow Copy

- A shallow copy copies an object or array, but only the first level of properties.

- If the object/array contains other objects (nested), the references to those inner objects are copied, not their actual values.

- So, changes to nested objects affect both the original and the copy.

## Deep Copy

- A deep copy copies everything recursively.

- The entire structure is copied: all nested objects/arrays are duplicated, not referenced.

- Changes to the copy do not affect the original, and vice versa.

# shallow copy of Array

```js
const arr = [1, 2, 3, [4, 5]];

// Method 1: Spread operator
const shallowCopy1 = [...arr];

// Method 2: slice()
const shallowCopy2 = arr.slice();

shallowCopy1[3][0] = 100;
console.log(arr); // Will reflect change because inner array is shared!
```

# Deep copy of Array

```js
const arr = [1, 2, 3, [4, 5]];

// Method: JSON serialization (works if array is serializable)
const deepCopy = JSON.parse(JSON.stringify(arr));

deepCopy[3][0] = 999;
console.log(arr); // Original array remains unchanged
```

# shallow copy of object

```js
const obj = { a: 1, b: { c: 2 } };

// Method 1: Object.assign()
const shallowCopy1 = Object.assign({}, obj);

// Method 2: Spread operator
const shallowCopy2 = { ...obj };

shallowCopy2.b.c = 999;
console.log(obj); // Will reflect change because `b` is shared!
```

# deep copy of object

```js
const obj = { a: 1, b: { c: 2 } };

// Method 1.: JSON serialization (simple objects only)
const deepCopy = JSON.parse(JSON.stringify(obj));

deepCopy.b.c = 888;
console.log(obj); // Original object remains unchanged

// Method 2.: structureClone()
const sClone = structuredClone(obj);

// Method 3.: .cloneDeep()
// <script src="https://cdn.jsdelivr.net/npm/lodash@4.17.21/lodash.min.js"></script>
const cloneDeepMethod = _.cloneDeep(obj);
```

---

# DOM

- Document object model
- Everything for JS is object
- html is in hierarchy format or in tree format
- html can be manipulated using DOM
- order

1. Window
2. document
3. html
4. body
5. div
6. ......

## Getting elements

1. getElementByTagName()

- Array of elements will be returned on basis of matched tags

2. getElementById()

- Array of elements will be returned on basis of matched class

3.  getElementsByClassName()

- It will return single node

4.  querySelector(#id, .class)

## getting events

- selectedBtn.addEventListener("click", handleChangeClrOfTitle);
- themeBtn.addEventListener("mouseout", handleTheme);
- themeBtn.addEventListener("mouseleave", handleTheme);

- a. click -- single mouse click
- b. dblclick -- double mouse click
- c. change -- to get values from input field -->
  it gives events from where we extract --> event.target.value
- d. keydown -- it will return event with some data like keyCode, key, key value
- e. keyup --- It will fire event when pressed key goes up.
- d. keypress -- It will fire event when keys got pressed. This is similar to keydown
- e. mouseover -- when mouse hovered to any element where we have provided this event/ it will fire the event and call the function
- f. mouseleave -- When we go hover out from that element then it will fire the event and call the function
- g. mousemove -- whenever we move mouse on the element it will call the function and fires the event
- h. onhover
- i. mouseEnter

## login form

```js
const loginData = { name: "", pw: "" };

const nameField = document.getElementById("first");
const pwField = document.getElementById("password");
const testBtn = document.getElementById("test-btn");

nameField.addEventListener("keypress", handleName);
pwField.addEventListener("change", handlePW);
testBtn.addEventListener("click", handleTest);

function handleName(e) {
  console.log("e.target.value", e);
  loginData.name = e.target.value;
}

function handlePW(event) {
  loginData.pw = event.target.value;
}

function handleTest() {
  console.log("loginData", loginData);
}
```
