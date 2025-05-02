// 20250501 js-17 js atm problem

/**
 * Create an ATM machine
 * which asks user to select option
 * 1. balance check
 * 2. pin change
 * 3. cash withdrawal
 * 4. Cash deposit
 *
 *
 * a. when program starts validate pin.
 * b. when pin got validated then show options
 */

function atmMachine() {
  let name = "Jonita";
  let pin = 9898;
  let balance = 45000;
  const pinCodeToVerify = Number(prompt("Please enter your 4 digit pin"));

  if (isNaN(pinCodeToVerify)) {
    console.warn(
      "%cPlease enter valid pin code in number",
      "color:white; background-color:red; font-weight:900; font-size:20px"
    );
    return;
  } else if (String(pinCodeToVerify).length !== 4) {
    console.warn(
      "%cPlease enter valid 4 digit pin code",
      "color:white; background-color:red; font-weight:900; font-size:20px"
    );
    return;
  } else if (pin !== Number(pinCodeToVerify)) {
    console.warn(
      "%cPIN does't match please try again",
      "color:white; background-color:red; font-weight:900; font-size:20px"
    );
    return;
  } else {
    // atm operations execute here
    console.log(
      `%cHi ${name}!! Good morning--`,
      "color: green; font-size: 16px; font-weight: bold"
    );
    console.log(
      "%cWelcome to the ATM Machine!",
      "color: blue; font-size: 14px; font-style: italic;"
    );
    console.log(
      "%cPlease follow the instructions carefully.",
      "color: red; font-size: 12px; text-decoration: underline;"
    );
    console.log(
      "%cBalance check----------- enter 1 ----",
      "color: white; background-color:black; padding:5px"
    );
    console.log(
      "%cPin Change-------------- enter 2 ----",
      "color: white; background-color:red; padding:5px"
    );
    console.log(
      "%cCash Withdrawal--------- enter 3 ----",
      "color: white; background-color:blue; padding:5px"
    );
    console.log(
      "%cAmount Deposit--------- enter 4 ----",
      "color: white; background-color:brown; padding:5px"
    );

    console.log(
      "%cPlease wait for 2s... we are processing...",
      "color: black; background-color:yellow; padding:5px"
    );

    const changePinCode = (oldPin) => {
      const newPin = Number(prompt("Please enter new 4 digit pin"));

      if (isNaN(newPin)) {
        console.warn(
          "%cPlease enter valid pin code in number",
          "color:white; background-color:red; font-weight:900; font-size:20px"
        );
        return;
      } else if (String(newPin).length !== 4) {
        console.warn(
          "%cPlease enter valid 4 digit pin code",
          "color:white; background-color:red; font-weight:900; font-size:20px"
        );
        return;
      } else if (Number(oldPin) === Number(newPin)) {
        console.warn(
          "%cNew Pin shouldn't be similar to old pin ",
          "color:white; background-color:red; font-weight:900; font-size:20px"
        );
        return;
      } else {
        pin = newPin;
        console.log(
          "%cPin has been updated successfully ",
          "color:black; background-color:yellow; font-weight:900; font-size:20px"
        );
      }
    };

    const checkBalance = () => {
      console.log(
        `%cYou current balance is %c${balance} `,
        "color:black; background-color:yellow; font-weight:600; font-size:15px",
        "color:black; background-color:yellow; font-weight:900; font-size:20px"
      );
    };

    const withdrawalAmt = () => {
      const amtToWithdraw = Number(prompt("Please enter amount to withdraw"));

      if (isNaN(amtToWithdraw)) {
        console.warn(
          "%c Please enter a valid amount ",
          "color:white; background-color:red; font-weight:900; font-size:20px"
        );
        return;
      } else if (amtToWithdraw > 10000 || amtToWithdraw < 0) {
        console.warn(
          "%c Entered amount must be in between 0-10000 ",
          "color:white; background-color:red; font-weight:900; font-size:20px"
        );
        return;
      } else if (amtToWithdraw > balance) {
        console.warn(
          "%c insufficient amount ",
          "color:white; background-color:red; font-weight:900; font-size:20px"
        );
        return;
      } else {
        balance = balance - amtToWithdraw;
        console.log(
          `%cYou current balance is %c${balance} `,
          "color:black; background-color:yellow; font-weight:600; font-size:15px",
          "color:black; background-color:yellow; font-weight:900; font-size:20px"
        );
      }
    };

    const depositAmt = () => {
      const amtToDeposit = Number(prompt("Please enter amount to deposit"));

      if (isNaN(amtToDeposit)) {
        console.warn(
          "%c Please enter a valid amount ",
          "color:white; background-color:red; font-weight:900; font-size:20px"
        );
        return;
      } else if (amtToDeposit > 100000 || amtToDeposit < 0) {
        console.warn(
          "%c Entered amount must be in between 0-100000 ",
          "color:white; background-color:red; font-weight:900; font-size:20px"
        );
        return;
      } else {
        balance = balance + amtToDeposit;
        console.log(
          `%cYou current balance is %c${balance} `,
          "color:black; background-color:yellow; font-weight:600; font-size:15px",
          "color:black; background-color:yellow; font-weight:900; font-size:20px"
        );
      }
    };

    setTimeout(() => {
      let option = Number(prompt("Enter your option"));

      if (isNaN(option)) {
        console.warn(
          "%c Please enter a valid option ",
          "color:white; background-color:red; font-weight:900; font-size:20px"
        );
        return;
      } else if (option < 1 && option > 4) {
        console.warn(
          "%c Entered option must be in between 1-4 ",
          "color:white; background-color:red; font-weight:900; font-size:20px"
        );
        return;
      } else {
        switch (option) {
          case 1:
            checkBalance();
            return;
          case 2:
            changePinCode(pin);
            return;
          case 3:
            withdrawalAmt();
            return;
          case 4:
            console.log("Depositing cash----");
            depositAmt();
            return;
          default:
            console.warn(
              "%cPlease enter valid option----",
              "color:white; background-color:red; font-weight:900; font-size:20px"
            );
            return;
        }
      }
    }, 2000);
  }
}

atmMachine();
