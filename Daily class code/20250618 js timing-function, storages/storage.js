/**
 * Storage
 *
 */

// const user = {
//   userName: "Bottle Singh",
//   pw: "main nhi dasna",
//   address: "tu puchh k amb lene",
// };

// how to store
// how to get data from local storage
// how to clear local storage data

// localStorage.setItem("user_data", JSON.stringify(user));

// const userFromLS = JSON.parse(localStorage.getItem("user_data"));
// console.log("userFromLS--", userFromLS, userFromLS?.userName);

const userData = { userName: "", pw: "", date: "" };

const userNameField = document.querySelector("#username");
const userNamePW = document.querySelector("#password");

const handleInput = (type) => (event) => {
  console.log("type-- ", type);
  console.log("event.target.value-- ", event.target.value);

  if (type == "user_name") {
    userData.userName = event.target.value;
  } else if (type == "password") {
    userData.pw = event.target.value;
  }
};

const header = document.querySelector(".header-class");

const mainContainer = document.querySelector("#main-container");
const userName = document.querySelector("#user-name");
const loginTime = document.querySelector("#login-time");

window.onload = () => {
  //   const userDataFromStorage = JSON.parse(localStorage.getItem("user_data"));
  const userDataFromStorage = JSON.parse(sessionStorage.getItem("user_data"));

  console.log("userDataFromStorage-", userDataFromStorage);
  if (userDataFromStorage?.userName) {
    // show header
    header.classList.remove("d-none");
    header.classList.add("d-block");

    mainContainer.classList.remove("d-block");
    mainContainer.classList.add("d-none");
  } else {
    // show login
    header.classList.remove("d-block");
    header.classList.add("d-none");

    mainContainer.classList.remove("d-none");
    mainContainer.classList.add("d-block");
  }
};

const handleSubmit = () => {
  console.log("userData-- ", userData);
  userData.date = new Date().toLocaleString();
  // setting data to localstorage
  //   localStorage.setItem("user_data", JSON.stringify(userData));

  // setting data to sessionStorage
  sessionStorage.setItem("user_data", JSON.stringify(userData));

  header.classList.remove("d-none");
  header.classList.add("d-block");

  mainContainer.classList.remove("d-block");
  mainContainer.classList.add("d-none");

  // getting data from local storage
  //   const userFromLocalStorage = JSON.parse(localStorage.getItem("user_data"));

  // getting data from session storage
  const userFromLocalStorage = JSON.parse(sessionStorage.getItem("user_data"));
  userName.innerText = userFromLocalStorage?.userName;
  userName.style.color = "red";

  loginTime.innerText = userFromLocalStorage.date;
};

const handleClear = () => {
  header.classList.remove("d-block");
  header.classList.add("d-none");

  mainContainer.classList.remove("d-none");
  mainContainer.classList.add("d-block");
  // remove data from localstorage
  //   localStorage.clear();

  // remove data from sessionStorage
  sessionStorage.clear();
};

userNameField.addEventListener("change", handleInput("user_name"));
userNamePW.addEventListener("change", handleInput("password"));
