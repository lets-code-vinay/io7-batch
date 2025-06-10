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

const themeBtn = mainBody.querySelector("#theme-btn");
const mainContainer = mainBody.querySelector("#main-container");
const subTitle = mainBody.querySelector("#sub-title");

const handleThemeChange = (event) => {
  console.log("Theme button clicked");

  const mainBodyColor = window.getComputedStyle(mainBody).backgroundColor;

  const [userInput, pwInput] = mainBody.querySelectorAll("input");
  console.log("mainBodyColor", mainBodyColor);

  if (mainBodyColor == "#f3f3f3" || mainBodyColor == "rgb(243, 243, 243)") {
    mainBody.style.backgroundColor = "rgb(43 44 48)";
    mainContainer.style.backgroundColor = `black`;
    mainContainer.style.color = `white`;
    userInput.style.backgroundColor = "#2a2424";
    userInput.style.color = "white";
    userInput.style.border = "2px solid white";
    pwInput.style.backgroundColor = "#2a2424";
    pwInput.style.color = "white";
    pwInput.style.border = "2px solid white";
  } else {
    mainBody.style.backgroundColor = "#f3f3f3";
    mainContainer.style.backgroundColor = `#fff `;
    mainContainer.style.color = `black`;
    userInput.style.backgroundColor = "white";
    userInput.style.color = "black";
    userInput.style.border = "2px solid black";
    pwInput.style.backgroundColor = "white";
    pwInput.style.color = "black";
    pwInput.style.border = "2px solid black";
  }
};
/**
 * @description Changing theme on button click
 */
themeBtn.addEventListener("click", handleThemeChange);

/**
 * Form submission
 * 1. Get values of username and password
 * 2. Validate the values
 * 3. If valid then show success message (Green color)
 * 4. If invalid then show error message (Red color)
 * 5. Types of validation
 *    a. Required field
 *    b. Length of the field
 *    c. Pattern matching
 *    d. username should not be same as password
 *    e. username and password must be greater than 6 and less than 20 characters
 * 6. Show/Hide Password
 * 7.
 *
 */

const userNameField = mainBody.querySelector("#username");
const pwField = mainBody.querySelector("#password");
const submitBtn = mainBody.querySelector("#submit-btn");
const userError = mainBody.querySelector("#username-error");
const pwError = mainBody.querySelector("#pw-error");

const userData = { userName: "", password: "" };

function handleUserName(event) {
  console.log("printing event", event.target.value);
  userData.userName = event.target.value;
}

const handlePassword = (event) => {
  userData.password = event.target.value;
};

const handleSubmit = () => {
  console.log("userData", userData);
  userError.style.display = "none";
  pwError.style.display = "none";

  if (!userData.userName) {
    userError.style.display = "block";
    userError.innerText = "Username required.";
    return;
  } else if (!userData.password) {
    pwError.style.display = "block";
    pwError.innerText = "Password required.";
    return;
  } else if (userData.userName.length < 6) {
    userError.style.display = "block";
    userError.innerText = "Username must be at least 6 characters long.";
    return;
  } else if (userData.userName.length > 20) {
    userError.style.display = "block";
    userError.innerText = "Username must be less than 20 characters long.";
    return;
  } else if (userData.password.length < 6) {
    pwError.style.display = "block";
    pwError.innerText = "Password must be at least 6 characters long.";
    return;
  } else if (userData.password.length > 20) {
    pwError.style.display = "block";
    pwError.innerText = "Password must be less than 20 characters long.";
    return;
  } else if (userData.userName == userData.password) {
    userError.style.display = "block";
    userError.innerText = "Username and password cannot be the same.";
    return;
  } else if (
    userData.userName.includes(" ") ||
    userData.password.includes(" ")
  ) {
    userError.style.display = "block";
    userError.innerText = "Username and password cannot contain spaces.";
    return;
  }

  handleThemeChange();
  alert("Form submitted successfully!");
};

userNameField.addEventListener("change", handleUserName);
pwField.addEventListener("change", handlePassword);
submitBtn.addEventListener("click", handleSubmit);
