/**
 * --------DOM--------
 * Document Object Model
 *
 * Get elements in DOM
 * 1. getElementsByTagName
 *    Array of elements will be returned on basis of matched tags
 * 2. getElementsByClassName
 *    Array of elements will be returned on basis of matched class
 * 3. getElementByID
 *      It will return single node
 * 4. document.querySelector('h1')  ===  return first matched element on basis of tag
 * 5. document.querySelector('.title')  ===  return first matched element on basis of class
 * 6. document.querySelector('#unique-id')  ===  getElementById
 * 7. document.querySelectorAll('h1')  ===  getElementsByTagName
 * 8. document.querySelectorAll('.title')  ===  getElementsByClassName
 *
 *
 */

/**
 * ----Events ------
 * 1. selectedElement.addEvenListener('click', function)
 * 2. inline event call -- <button onclick='handleClick()')>Click</button>
 *
 * a. click -- single mouse click
 * b. dblclick -- double mouse click
 * c. change -- to get values from input field --> it gives events from where we extract --> event.target.value
 * d. keydown -- it will return event with some data like keyCode, key, key value
 * e. keyup  --- It will fire event when pressed key goes up.
 * d. keypress -- It will fire event when keys got pressed.  This is similar to keydown
 * e. mouseover -- when mouse hovered to any element where we have provided this event/ it will fire the event and call the function
 * f. mouseleave -- When we go hover out from that element then it will fire the event and call the function
 * g. mousemove -- whenever we move mouse on the element it will call the function and fires the event
 *
 *
 * b. onhover
 * c. mouseEnter
 * d. mouseLever
 * e. keyDown
 * f. keyup
 * g. keypress
 * h. dblclick
 */

const mainBody = document.getElementById("main-body");

console.log("mainBody", mainBody);

const [h1Tag, h3Tag] = document.getElementsByClassName("abc");
console.log("h1Tag", h1Tag);

h1Tag.style.color = "blue";
h1Tag.style.border = "1px solid blue";

mainBody.style.backgroundColor = "lightblue";

const loginFormContainer = document.getElementById("login-form");
console.log("loginFormContainer", loginFormContainer);

const [userNameField, passwordField] =
  loginFormContainer.getElementsByTagName("input");
console.log("inputTags", userNameField, passwordField);

userNameField.style.border = "1px solid red";

const btns = document.querySelectorAll("button");
console.log("btns", btns);

const themeBtn = document.querySelector("#theme-btn");
console.log("themeBtn", themeBtn);
themeBtn.style.backgroundColor = "red";

const [, , , submitBtn] = document.querySelectorAll(".abc");
console.log("submitBtn", submitBtn);
submitBtn.style.backgroundColor = "black";
