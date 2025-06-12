const accUsers = [
  { userName: "Vinay", accNo: "454545", pin: 4545, balance: 45743 },
  { userName: "Chandni", accNo: "787878", pin: 7878, balance: 145147 },
  { userName: "Ajay", accNo: "989898", pin: 9898, balance: 55412 },
  { userName: "David", accNo: "123123", pin: 1231, balance: 235 },
];

const enteredDetails = { enteredAcc: "", enteredPin: "" };

// get user inputs from main screen
const mainBody = document.getElementById("main");
const accField = mainBody.querySelector("#main-screen-acc-no");
const pinField = mainBody.querySelector("#main-screen-pin");
const errMsg = mainBody.querySelector(".error-message");
const welcomeScreen = mainBody.querySelector(".welcome-screen");
const servicesScreen = mainBody.querySelector(".services-screen");

const servicesScreenWCMsg = mainBody.querySelector(".welcome-msg");
const serviceResponse = mainBody.querySelector(".service-response");

console.log("accField-", accField);
accField.addEventListener("change", handleAcc);
pinField.addEventListener("change", handlePin);

function handleAcc(event) {
  enteredDetails.enteredAcc = event.target.value;
}

function handlePin(event) {
  enteredDetails.enteredPin = event.target.value;
}
console.log("welcomeScreen-", welcomeScreen);
const goToMainScreen = () => {
  console.log("enteredDetails--", enteredDetails, accUsers);
  errMsg.classList.remove("display-none");

  const { enteredAcc, enteredPin } = enteredDetails;
  const isUserExist = accUsers.find((user) => user.accNo == enteredAcc);
  console.log("isUserExist--", isUserExist);

  if (!enteredAcc) {
    errMsg.classList.add("display-block");
    errMsg.innerText = "Please enter Account no.";
    return;
  } else if (!enteredPin) {
    errMsg.classList.add("display-block");
    errMsg.innerText = "Please enter Pin no.";
    return;
  } else if (String(enteredAcc).length !== 6) {
    errMsg.classList.add("display-block");
    errMsg.innerText = "Please enter valid Account no.";
    return;
  } else if (String(enteredPin).length !== 4) {
    errMsg.classList.add("display-block");
    errMsg.innerText = "Please enter valid Pin";
    return;
  } else if (!isUserExist) {
    errMsg.classList.add("display-block");
    errMsg.innerText =
      "This user is not registered with us. Please contact to  nearest branch";
    return;
  } else if (
    Boolean(isUserExist) &&
    Number(enteredPin) !== Number(isUserExist.pin)
  ) {
    errMsg.classList.add("display-block");
    errMsg.innerText = "Pin is incorrect";
    return;
  } else {
    errMsg.classList.remove("display-block");
    errMsg.classList.add("display-none");
    errMsg.innerText = "";

    welcomeScreen.classList.remove("display-block");
    welcomeScreen.classList.add("display-none");

    servicesScreen.classList.remove("display-none");
    servicesScreen.classList.add("display-block");

    servicesScreenWCMsg.innerText = `Hi ${isUserExist.userName} !! Have a good day`;
    console.log("--go to main services screen");
  }
};

const handleBalEnq = () => {
  const { enteredAcc, enteredPin } = enteredDetails;
  const isUserExist = accUsers.find((user) => user.accNo == enteredAcc);
  console.log("isUserExist--", isUserExist);

  console.log("checking balance", isUserExist?.balance);
  serviceResponse.innerText = `You current balance is: ${isUserExist?.balance} `;
};
