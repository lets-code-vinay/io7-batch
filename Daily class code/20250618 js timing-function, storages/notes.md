# Timing functions and storages

## What are timing functions?

- As we know JS is single threaded asynchronous programming language
- During execution JS it doesn't stop for anything.
- To add some delay or pause we have to use some timing functions or promises
- for the timing function we have
  - setTimeout
  - setInterval
- To clear timing function
  - clearTimeout
  - clearInterval

## What are Storages?

- To store some values on browser so it can be used anytime

## Types of Storages

### Local Storage

- Used to store data in the browser that persists even after the browser is closed.
- Data remains until it is explicitly deleted.
- Typical storage capacity is around 10MB (may vary by browser/version).
- Data is stored as strings. Example:
  ```js
  localStorage.setItem("name", JSON.stringify(data));
  ```
- To retrieve data, parse it using `JSON.parse`:
  ```js
  const data = JSON.parse(localStorage.getItem("name"));
  ```
- To clear all data:
  ```js
  localStorage.clear();
  ```

### Session Storage

- Used to store data for the duration of a page session (data is lost when the tab or browser is closed).
- Typical storage capacity is around 5MB (may vary by browser/version).
- Commonly used for sensitive data, such as in banking or finance websites.
- Data is stored as strings. Example:
  ```js
  sessionStorage.setItem("name", JSON.stringify(data));
  ```
- To retrieve data, parse it using `JSON.parse`:
  ```js
  const data = JSON.parse(sessionStorage.getItem("name"));
  ```
- To clear all data:
  ```js
  sessionStorage.clear();
  ```

## promises

## API calling
