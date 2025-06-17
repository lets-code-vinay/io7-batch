/**
 * @description dummy account holders
 */
let accUsers = [
  { userName: "Vinay", accNo: "454545", pin: 4545, balance: 45743 },
  { userName: "Chandni", accNo: "787878", pin: 7878, balance: 145147 },
  { userName: "Ajay", accNo: "989898", pin: 9898, balance: 55412 },
  { userName: "David", accNo: "123123", pin: 1231, balance: 235 },
];

// entered details of user from main screen
const enteredDetails = { enteredAcc: "", enteredPin: "" };

//entered details of user from deposit, withdrawal and transfer screen
const enteredAmt = { deposit: 0, withdrawal: 0, transfer: 0 };

//changing pin data on change pin screen

const pinChangeData = { oldPin: 0, newPin: 0 };
// transfer data for transfer screen
const transferData = { payAcc: "000000", payAmt: "000" };

/**
 * @description get all elements
 */
const mainBody = document.getElementById("main");

const accField = mainBody.querySelector("#main-screen-acc-no");
const pinField = mainBody.querySelector("#main-screen-pin");

const errMsg = mainBody.querySelector(".error-message");
const successMsg = mainBody.querySelector(".success-message");

const welcomeScreen = mainBody.querySelector(".welcome-screen");
const servicesScreen = mainBody.querySelector(".services-screen");
const depositScreen = mainBody.querySelector(".deposit-section");
const withdrawalScreen = mainBody.querySelector(".withdraw-section");
const pinChangeScreen = mainBody.querySelector(".pin-section");
const transferScreen = mainBody.querySelector(".transfer-section");
const balEnqScn = mainBody.querySelector(".balance-enq-screen");

const servicesScreenWCMsg = mainBody.querySelector(".welcome-msg");

const balEnq = mainBody.querySelector(".balance-enq");
const depositAmtField = mainBody.querySelector("#deposit-amount");
const wdField = mainBody.querySelector("#wd-amount");
const oldPinField = mainBody.querySelector("#old-pin");
const newPinField = mainBody.querySelector("#new-pin");

const payeeAcc = mainBody.querySelector("#payee-account");
const transferAmt = mainBody.querySelector("#transfer-amount");

/**
 * @description Calling change event to get values
 */
accField.addEventListener("change", handleAcc);
pinField.addEventListener("change", handlePin);

/**
 * @description getting input account number from main screen
 */
function handleAcc(event) {
  enteredDetails.enteredAcc = event.target.value;
}

/**
 * @description getting input pin  from main screen
 */
function handlePin(event) {
  enteredDetails.enteredPin = event.target.value;
}

/**
 * @description operations and validation to go services screen from welcome screen
 * @returns
 */
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
  }
};

/**
 * @description Checking balance
 */
const handleBalEnq = () => {
  const { enteredAcc } = enteredDetails;
  const isUserExist = accUsers.find((user) => user.accNo == enteredAcc);
  console.log("isUserExist--", isUserExist);

  servicesScreen.classList.remove("display-block");
  servicesScreen.classList.add("display-none");

  balEnqScn.classList.remove("display-none");
  balEnqScn.classList.add("display-block");

  balEnq.innerText = `You current balance is: ${isUserExist?.balance} `;
};

/**
 * @description exit from balance enq screen
 */
const handleExitBalEnq = () => {
  balEnqScn.classList.remove("display-block");
  balEnqScn.classList.add("display-none");

  servicesScreen.classList.remove("display-none");
  servicesScreen.classList.add("display-block");
};

/**
 * @description open deposit screen
 */
const handleDeposit = () => {
  servicesScreen.classList.remove("display-block");
  servicesScreen.classList.add("display-none");

  depositScreen.classList.remove("display-none");
  depositScreen.classList.add("display-block");
};

/**
 * @description Go to services page when clicks on Back btn
 */
const goToServicesScreen = () => {
  servicesScreen.classList.remove("display-none");
  servicesScreen.classList.add("display-block");

  depositScreen.classList.remove("display-block");
  depositScreen.classList.add("display-none");

  withdrawalScreen.classList.remove("display-block");
  withdrawalScreen.classList.add("display-none");

  pinChangeScreen.classList.remove("display-block");
  pinChangeScreen.classList.add("display-none");

  transferScreen.classList.add("display-none");
  transferScreen.classList.remove("display-block");
};

/**
 * @description Go to welcome when clicks on Exit btn
 */
const handleExitBtn = () => {
  welcomeScreen.classList.remove("display-none");
  welcomeScreen.classList.add("display-block");

  servicesScreen.classList.remove("display-block");
  servicesScreen.classList.add("display-none");

  depositScreen.classList.remove("display-block");
  depositScreen.classList.add("display-none");

  withdrawalScreen.classList.remove("display-block");
  withdrawalScreen.classList.add("display-none");

  pinChangeScreen.classList.remove("display-block");
  pinChangeScreen.classList.add("display-none");

  transferScreen.classList.add("display-none");
  transferScreen.classList.remove("display-block");
  hideAllMsg();
};

/**
 * @description global function to hide all error and success msg
 */
const hideAllMsg = () => {
  successMsg.classList.add("display-none");
  successMsg.classList.remove("display-block");
  successMsg.innerText = ``;

  errMsg.classList.add("display-none");
  errMsg.classList.remove("display-block");
  errMsg.innerText = ``;
};

/**
 * @description Getting amount from deposit input field
 * @param {Object} event
 */
const handleAmountDeposit = (event) => {
  enteredAmt.deposit = event.target.value;
};
/**
 * @description calling event of onchange to get values
 */
depositAmtField.addEventListener("change", handleAmountDeposit);

/**
 * @description clicking on deposit button
 */
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

  goToServicesScreen();
};

/**
 * @description handle Withdrawal to open withdrawal screen
 */
const handleWithdraw = () => {
  hideAllMsg();

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
/**
 * @description calling event to get values
 */
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

/**
 * @description open change pin screen
 */
const handleChangePin = () => {
  hideAllMsg();

  servicesScreen.classList.remove("display-block");
  servicesScreen.classList.add("display-none");

  pinChangeScreen.classList.remove("display-none");
  pinChangeScreen.classList.add("display-block");
};

/**
 * @description getting value for old pin from event
 * @param {Object} event
 */
const handleOldPin = (event) => {
  errMsg.classList.add("display-none");
  errMsg.classList.remove("display-block");

  pinChangeData.oldPin = event.target.value;
};

/**
 * @description calling event to get value
 */
oldPinField.addEventListener("change", handleOldPin);

/**
 * @description Matching entered pin with old pin
 */
const matchPins = () => {
  if (Number(pinChangeData?.oldPin) === Number(enteredDetails?.enteredPin)) {
    newPinField.classList.remove("display-none");
    newPinField.classList.add("display-block");
  } else {
    errMsg.classList.remove("display-none");
    errMsg.classList.add("display-block");
    errMsg.innerText = "Pin has not matched";
    newPinField.classList.add("display-none");
    newPinField.classList.remove("display-block");
  }
};

/**
 * @description getting value for old pin from event
 * @param {Object} event
 */
const handleNewPin = (event) => {
  pinChangeData.newPin = event.target.value;
};

/**
 * @description calling event to get value
 */
newPinField.addEventListener("change", handleNewPin);

/**
 * @description update new pin for the user
 */
const changePins = () => {
  accUsers = accUsers.map((user) => {
    if (Number(user.accNo) == Number(enteredDetails.enteredAcc)) {
      return { ...user, pin: pinChangeData?.newPin };
    } else {
      return user;
    }
  });
  goToServicesScreen();
};

/**
 * @description open transfer screen
 */
const handleTransfer = () => {
  hideAllMsg();

  transferScreen.classList.remove("display-none");
  transferScreen.classList.add("display-block");

  servicesScreen.classList.add("display-none");
  servicesScreen.classList.remove("display-block");
};

/**
 * @description Entering payee account number
 * @param {Object} event
 */
const handlePayeeAccNum = (event) => {
  transferData.payAcc = Number(event.target.value);
};

/**
 * @description getting values of transfer amount
 * @param {Object} event
 */
const handleTransferAmt = (event) => {
  transferData.payAmt = Number(event.target.value);
};

/**
 * @description Getting change event of payee account number
 */
payeeAcc.addEventListener("change", handlePayeeAccNum);

/**
 * @description Getting change event of Amount to transfer
 */
transferAmt.addEventListener("change", handleTransferAmt);

const transfer = () => {
  const { payAcc, payAmt } = transferData;

  errMsg.classList.add("display-none");
  errMsg.classList.remove("display-block");
  errMsg.innerText = "";

  const findAccount = accUsers.find((user) => user?.accNo == payAcc);
  const findSenderData = accUsers.find(
    (user) => user?.accNo == enteredDetails?.enteredAcc
  );
  console.log("findAco", findAccount);
  console.log("findSenderData", findSenderData);
  console.log("payAcc--", payAcc, String(payAcc).length);
  if (!Number(payAcc)) {
    errMsg.classList.add("display-block");
    errMsg.classList.remove("display-none");
    errMsg.innerText = "Please Enter valid Account number";
    return;
  } else if (String(payAcc).length !== 6) {
    errMsg.classList.add("display-block");
    errMsg.classList.remove("display-none");
    errMsg.innerText = "Please Enter valid 6 digit Account number";
    return;
  } else if (!Number(payAmt)) {
    errMsg.classList.add("display-block");
    errMsg.classList.remove("display-none");
    errMsg.innerText = "Please Enter valid Amount";
    return;
  } else if (Number(payAmt) < 100 || Number(payAmt) > 100000) {
    errMsg.classList.add("display-block");
    errMsg.classList.remove("display-none");
    errMsg.innerText = "Amount to transfer must be 100-100000";
    return;
  } else if (!findAccount) {
    errMsg.classList.add("display-block");
    errMsg.classList.remove("display-none");
    errMsg.innerText =
      "Seems you have entered a wrong account number, please verify";
    return;
  } else if (Number(payAmt) >= findSenderData?.balance) {
    errMsg.classList.add("display-block");
    errMsg.classList.remove("display-none");
    errMsg.innerText = "Seems you have un sufficient balance to transfer";
    return;
  } else {
    accUsers = accUsers.map((user) => {
      // to whom transfer amount
      if (user?.accNo == findAccount?.accNo) {
        return { ...user, balance: Number(user?.balance) + Number(payAmt) };
      }

      // from whom deduct amount
      if (user?.accNo == findSenderData?.accNo) {
        return { ...user, balance: Number(user?.balance) - Number(payAmt) };
      }

      return user;
    });
    console.log("accUsers-- transfer--", accUsers);
    errMsg.classList.add("display-none");
    errMsg.classList.remove("display-block");
    errMsg.innerText = "";

    successMsg.classList.add("display-block");
    successMsg.classList.remove("display-none");
    successMsg.innerText = `Amount has been transferred to ${findAccount?.userName} successfully!! `;
    goToServicesScreen();
  }
};
