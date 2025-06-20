/**
 * normal function calling another function
 */
const callingMason = () => {
  console.log("Calling Mason");
};

const callingPlumber = () => {
  console.log("Calling plumber");
  callingMason();
};

callingPlumber();

/**
 * @description CallBack function
 * @explanation
 *  calling second function after execution of fist function
 */

const functionA = (callBack) => {
  console.log("printing fn A");
  // call back-- calling function in reverse order
  callBack(functionC);

  // direct call
  //   callingPlumber();
};

const functionB = (callBack) => {
  console.log("printing fn B");
  callBack();
};

const functionC = () => {
  console.log("calling fn C");
};

functionA(functionB);

// ---------second example --------------

const greet = (name = "", callingGoodByeAsCB) => {
  console.log(`hello ${name}`);
  callingGoodByeAsCB(name, acceptMyGreetings);
};

const sayGoodBye = (name, callBackOfGreetings) => {
  console.log(`GoodBye ${name}`);
  callBackOfGreetings("Bottle Singh");
};

const acceptMyGreetings = (name2 = "Vinay") => {
  console.log(`This greetings are from ${name2}`);
};

greet("Chandni", sayGoodBye);

// ----------- using setTimeout to make it callback Hell--------

const greet2 = (name = "", callingGoodByeAsCB) => {
  setTimeout(() => {
    console.log(`hello ${name}`);
    callingGoodByeAsCB(function () {
      setTimeout(() => {
        console.log(`GoodBye ${name}`);

        (function () {
          setTimeout(() => {
            console.log(`This greetings are from ${name}`);
          }, 2000);
        })();
      }, 2000);
    });
  }, 5000);
};

greet2("Jaguar", function (next) {
  setTimeout(() => {
    next();
  }, 1000);
});

// --------- example with Promise --------------

const greet3 = (name = "") => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log(`--> 1 hello ${name}`);
      resolve();
    }, 5000);
  });
};

const sayGoodBye3 = (name) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log(`-->2 GoodBye ${name}`);
      resolve();
    }, 3000);
  });
};

const acceptMyGreetings3 = (name2) => {
  return new Promise((resolve, reject) => {
    if (!name2) reject("name is not defined");
    setTimeout(() => {
      console.log(`-->3 This greetings are from ${name2}`);
      resolve();
    }, 2000);
  });
};

const userName = '"Chandni Grewal Sister of Gippy Grewal"';

// ----- 1. calling using .then() ------------
// greet3(userName)
//   .then(() => sayGoodBye3("Vinay"))
//   .then(() => acceptMyGreetings3("Arun"));

// ----- 2. calling using async/await ------------
async function dealWithPromise() {
  await greet3(userName);
  await sayGoodBye3("Vinay");
  await acceptMyGreetings3();
}

// dealWithPromise();

// ----- 3. calling using async/await with try catch block ------------

const asyncFnWithTryCatch = async () => {
  try {
    await greet3(userName);
    await sayGoodBye3("Vinay");
    await acceptMyGreetings3();
  } catch (err) {
    console.error("printing error", err);
  }
};
asyncFnWithTryCatch();

/**
 * @description
 * JS is single threaded asynchronous programming language
 * It doesn't stop for anything
 * To hold or make a pause to accomplish any task we use concept of promise
 * Promise is being used with constructor new and Promise keyword with resolve, reject state, as follows
 * new Promise((resolve, reject) => some action to be performed )
 * Promise has 3 states
 * 1. pending
 * 2. fulfilled/resolved
 * 3. rejected
 */

// ----- Simple promise example ------------

const createdPromise = new Promise((resolve, reject) => {
  let count = 0;
  setTimeout(() => {
    count += 1;
    if (count >= 1) {
      resolve("Fulfilled by Chandni");
    } else {
      reject("rejected by Chandni");
    }
  }, 3000);
});

createdPromise
  .then((result) => console.log("---> resolve result", result))
  .catch((result) => console.log("---> rejected result", result));

/**
 * API
 * Application programming interface
 */

const fetchingAPI = () => {
  const api = `https://dummyjson.com/products`;
  fetch(api)
    .then((data) => data.json())
    .then((data) => console.log("data---", data));
};

const fetchingAPI2 = async () => {
  const api = `https://dummyjson.com/products/2`;
  const response = await fetch(api);
  const data = await response.json();

  console.log("data- from asycn/await--", data);
};

fetchingAPI();
fetchingAPI2();
