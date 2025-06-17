let accUsers = [
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
const depositScreen = mainBody.querySelector(".deposit-section");
const withdrawalScreen = mainBody.querySelector(".withdraw-section");

const servicesScreenWCMsg = mainBody.querySelector(".welcome-msg");
const balEnqScn = mainBody.querySelector(".balance-enq-screen");
const balEnq = mainBody.querySelector(".balance-enq");

const depositAmtField = mainBody.querySelector("#deposit-amount");
const wdField = mainBody.querySelector("#wd-amount");

const enteredAmt = { deposit: 0, withdrawal: 0, transfer: 0 };

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

  servicesScreen.classList.remove("display-block");
  servicesScreen.classList.add("display-none");

  balEnqScn.classList.remove("display-none");
  balEnqScn.classList.add("display-block");

  console.log("checking balance", isUserExist?.balance);
  balEnq.innerText = `You current balance is: ${isUserExist?.balance} `;
};

const handleExitBalEnq = () => {
  balEnqScn.classList.remove("display-block");
  balEnqScn.classList.add("display-none");

  servicesScreen.classList.remove("display-none");
  servicesScreen.classList.add("display-block");
};

const handleDeposit = () => {
  servicesScreen.classList.remove("display-block");
  servicesScreen.classList.add("display-none");

  depositScreen.classList.remove("display-none");
  depositScreen.classList.add("display-block");
};

const goToServicesScreen = () => {
  servicesScreen.classList.remove("display-none");
  servicesScreen.classList.add("display-block");

  depositScreen.classList.remove("display-block");
  depositScreen.classList.add("display-none");

  withdrawalScreen.classList.remove("display-block");
  withdrawalScreen.classList.add("display-none");
};

const handleExitBtn = () => {
  welcomeScreen.classList.remove("display-none");
  welcomeScreen.classList.add("display-block");

  servicesScreen.classList.remove("display-block");
  servicesScreen.classList.add("display-none");

  depositScreen.classList.remove("display-block");
  depositScreen.classList.add("display-none");

  withdrawalScreen.classList.remove("display-block");
  withdrawalScreen.classList.add("display-none");
};

const handleAmountDeposit = (event) => {
  enteredAmt.deposit = event.target.value;
};
depositAmtField.addEventListener("change", handleAmountDeposit);

const deposit = () => {
  const { enteredAcc, enteredPin } = enteredDetails;
  const foundUserIndex = accUsers.findIndex((user) => user.accNo == enteredAcc);

  accUsers = accUsers.map((user, index) => {
    if (index == foundUserIndex) {
      return {
        ...user,
        balance: Number(user.balance) + Number(enteredAmt.deposit),
      };
    } else {
      return user;
    }
  });

  console.log("accUsers--", accUsers);
  goToServicesScreen();
};

/**
 * @description handle Withdrawal to open withdrawal screen
 */
const handleWithdraw = () => {
  servicesScreen.classList.remove("display-block");
  servicesScreen.classList.add("display-none");

  withdrawalScreen.classList.remove("display-none");
  withdrawalScreen.classList.add("display-block");
};

/**
 * @description Getting withdrawal amt
 * @param {Object} event
 */
const handleWithdrawalAmt = (event) => {
  enteredAmt.withdrawal = event.target.value;
};

wdField.addEventListener("change", handleWithdrawalAmt);

/**
 * @description Withdrawal of amount on click on withdrawal button
 */
const withdraw = () => {
  const foundUserIndex = accUsers.findIndex(
    (user) => Number(enteredDetails?.enteredAcc) == Number(user?.accNo)
  );
  console.log("--", enteredDetails, accUsers);

  accUsers = accUsers.map((user) => {
    if (Number(enteredDetails?.enteredAcc) == Number(user?.accNo)) {
      if (enteredAmt?.withdrawal > user?.balance) {
        errMsg.classList.remove("display-none");
        errMsg.classList.add("display-block");
        errMsg.innerText = "You have insufficient balance";
        return user;
      } else {
        return { ...user, balance: user?.balance - enteredAmt?.withdrawal };
      }
    } else {
      return user;
    }
  });

  console.log(enteredAmt);
  goToServicesScreen();
};
