## What is callBack function?

- A function calling another function after it's execution
- simple example

```js
function greet(name, callback) {
  console.log("Hello, " + name);
  callback();
}

function sayBye() {
  console.log("Goodbye!");
}

greet("Vinay", sayBye);
```

```js
function greet(name, callback) {
  console.log("Hello, " + name);
  callback(meToo);
}

function sayBye(callBack) {
  console.log("Goodbye!");
  callBack();
}

function meToo() {
  console.log("Goodbye!22");
}

greet("Vinay", sayBye);
```

- callback hell

```js
function greet(name, callback) {
  setTimeout(() => {
    console.log("Hello, " + name);
    callback(function () {
      setTimeout(() => {
        console.log("Goodbye!");
        (function () {
          setTimeout(() => {
            console.log("Goodbye!22");
          }, 1000);
        })();
      }, 1000);
    });
  }, 1000);
}

greet("Vinay", function (next) {
  setTimeout(() => {
    next();
  }, 1000);
});
```

- using promises

```js
function greet(name) {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log("Hello, " + name);
      resolve();
    }, 1000);
  });
}

function sayBye() {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log("Goodbye!");
      resolve();
    }, 1000);
  });
}

function meToo() {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log("Goodbye!22");
      resolve();
    }, 1000);
  });
}

// Chain them using .then()
greet("Vinay")
  .then(() => sayBye())
  .then(() => meToo());
```

- cleaner code with async/await

```js
async function run() {
  await greet("Vinay");
  await sayBye();
  await meToo();
}

run();
```

- with try catch block

```js
async function runSequence() {
  try {
    await greet("Vinay");
    await sayBye();
    await meToo();
  } catch (error) {
    console.error("Caught error:", error);
  }
}

runSequence();
```

## what is Promises is JS?

- JS is a single threaded asynchronous programming language
- It doesn't stop for no one
- A Promise is a built-in JavaScript object that represents the result of an asynchronous operation, which may succeed (resolve) or fail (reject) in the future.
- It allows you to:

  - Write cleaner, more manageable async code
  - Avoid callback hell
  - Chain multiple asynchronous tasks in order

- A Promise is like ordering food:

  - You place the order → (pending)
  - It gets delivered → (fulfilled/resolved)
  - The restaurant cancels → (rejected)

- Promise state

  - Pending
  - fulfilled/Resolved
  - rejected

- example

```js
let promiseFunction = new Promise(function (resolve, reject) {
  // Do something async
  let success = true;

  if (success) {
    resolve("Task completed!");
  } else {
    reject("Task failed.");
  }
});

// consuming promise
promiseFunction
  .then((result) => {
    console.log("Success:", result);
  })
  .catch((error) => {
    console.error("Error:", error);
  });
```

- another example with setTimeout

```js
function wait(seconds) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(`Waited ${seconds} seconds`);
    }, seconds * 1000);
  });
}

wait(2)
  .then((msg) => console.log(msg))
  .catch((err) => console.error(err));

wait(1)
  .then(() => wait(1))
  .then(() => wait(1))
  .then(() => console.log("3 seconds passed!"));
```

- Using Promises with async/await (modern approach)

```js
async function run() {
  try {
    const msg = await wait(2);
    console.log(msg);
  } catch (error) {
    console.log("Error:", error);
  }
}

run();
```

## What is an API?

-

```js
function getPost(id) {
  return new Promise((resolve, reject) => {
    fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
      .then((response) => {
        if (!response.ok) reject("HTTP error " + response.status);
        else resolve(response.json());
      })
      .catch((err) => reject(err));
  });
}

getPost(1)
  .then((post) => console.log(post))
  .catch((error) => console.error(error));
```

- with async/await

```js
async function getPost(id) {
  try {
    const response = await fetch(
      `https://jsonplaceholder.typicode.com/posts/${id}`
    );

    if (!response.ok) {
      throw new Error("HTTP error! status: " + response.status);
    }

    const data = await response.json();
    console.log("Post data:", data);
  } catch (error) {
    console.error("Fetch error:", error);
  }
}

getPost(1);
```

## Conclusion

### Promises Recap

- Promises help manage asynchronous operations in JavaScript.
- Promises have three states:
  - **Pending**
  - **Fulfilled**
  - **Rejected**
- Common methods:
  - `new Promise(resolve, reject)`
  - `.then()`
  - `async/await`

---

### 1. Using `new Promise()`

```js
const fetchData = () => {
  const dataFromPromise = new Promise((resolve, reject) => {
    const api = fetch("https://dummyjson.com/products");
    console.log("api", api);
    if (Boolean(api)) {
      resolve(api);
    } else {
      reject("failed-----");
    }
  });

  console.log("dataFromPromise", dataFromPromise);
  let data = null;
  dataFromPromise
    .then((res) => res.json())
    .then((response) => {
      data = response;
    });

  setTimeout(() => {
    console.log("data--", data);
  }, 5000);
};

fetchData();
```

---

### 2. Using `.then()`

```js
const fetchDataFromApi = () => {
  let apiData = {};
  fetch("https://dummyjson.com/products")
    .then((res) => res.json())
    .then((data) => (apiData = data));

  setTimeout(() => {
    console.log("apiData--2", apiData);
  }, 1000);
};
```

---

### 3. Using `async/await`

```js
const thirdMethod = async () => {
  const api = "https://dummyjson.com/products";
  const data = await fetch(api);
  const response = await data.json();
  console.log("response--3--", response);
};
```

## dummy api for testing and development

`https://dummyjson.com/docs`
