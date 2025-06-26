# ReactJS

## What is reactJS?

- ReactJS is a popular FE JavaScript library used for building user interfaces especially for single page web-application

## History of ReactJS?

- Developed by Facebook in 2011 by Jordan Walke to overcome complex facebook code by introducing concept of Virtual DOM
- It got open source in May 2013
- React become popular by 2014-2016
- in 2015 React-native launched in market

## Feature of ReactJS

1. **Component Based** :
   - UI is broken into reusable components (e.g., buttons, forms, navbars).
   - Each component manages its own state and logic.
2. **JSX (JavaScript XML):**
   - React uses JSX, a syntax extension that lets you write HTML-like code inside JavaScript

```js
const Greeting = () => <h1>Hello, React!</h1>;
```

3. **Virtual DOM** :

   - React creates a virtual version of the browser DOM.
   - When data changes, React updates only the parts of the DOM that changed—this makes it very fast.

4. **Unidirectional Data Flow** :

   - Data flows from parent to child components via props (properties).

   - Components can manage internal state using `useState` and similar hooks.

5. **Hooks** :

   - Hooks like useState and useEffect let you manage state and side effects in functional components.

```js
import React, { useState } from "react";

function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>Click me</button>
    </div>
  );
}
```

## Set up for ReactJS

### basic installation with CRA

1. node js
   - [Download NodeJS](https://nodejs.org/)
2. Check version
   - node -v
   - npm -v
3. Crate a new React APP using CRA
   - npx create-react-app project-name
   - CRA is going to be deprecated
4. Explain folder structure
5. Package.json

### basic installation with CRA

1. node js
   - [Download NodeJS](https://nodejs.org/)
2. Check version
   - node -v
   - npm -v
3. Create a folder
   - mkdir project-name or do it by file explorer
   - cd project-name or
4. npm init -y
   - create package.json
5. install dependencies

   - use npm i package-name or npm install package-name (to dependencies)
   - use npm i --save-dev package-name or npm install --save-dev package-name (to dev dependencies)
   -
