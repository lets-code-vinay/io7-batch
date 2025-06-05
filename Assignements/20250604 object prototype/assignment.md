# Object Prototype Assignments

Below are 50 assignments covering object prototypes, chaining, and related methods in JavaScript. Each assignment requires a single-line statement demonstrating the concept.

---

### 1. Object Literal

#### What is the outout of following

```js
const car = {
  brand: "Honda",
  year: 2022,
  name: "David Smith",
  age: 30,
  occupation: "Software Engineer",
  qualification: "BCA",
  hobbies: ["reading", "traveling", "coding"],
  isEmployed: true,
  address: {
    street: "123 Main St",
    city: "Anytown",
    state: "CA",
    zip: "12345",
    landmark: {
      name: "Near Park",
      distance: "500m",
    },
  },
};
// 1. console.log(car.brand);
// print traveling, Near Park, 2022, BCA, 12345
```

### 2. Object Literal Chaining

```js
const user = {
  name: "Sam",
  greet() {
    return "Hi " + this.name;
  },
};
console.log(user.greet());
```

### 3. Using `new Object()`

```js
const obj = new Object();
obj.x = 5;
// 1. console.log(obj.x);
// 2. Add a new key (y) and value (100)
```

### 4. Object.create()

- Create a new object using Object.create and insert properties with values
- color = 'red', isAttacked = true, quantity= 540

### 5. Object.create() with Property

```js
const proto = { type: "fruit" };
const apple = Object.create(proto);
apple.name = "Apple";
// console.log(apple.type);
```

### 6. Object Merge

- Merge following object using .assign()

```js
const a = { x: 1 },
  b = { y: 2 };
```

### 7. Spread Operator Merge

- Merge following object using spread(...) operator

```js
const a = { foo: "bar" },
  b = { baz: 42 };
c = { color: "red", foo: "89" };
```

### 8. Object.entries()

- create an entries of object

```js
const obj = { a: 1, b: 2 };
```

### 9. convert following array to object by using function

```js
const arr = [
  ["a", 1],
  ["b", 2],
];
```

### 10. Create array of all keys from object

```js
const person = {
  name: "David Smith",
  age: 30,
  occupation: "Software Engineer",
  qualification: "BCA",
  hobbies: ["reading", "traveling", "coding"],
  isEmployed: true,
  address: {
    street: "123 Main St",
    city: "Anytown",
    state: "CA",
    zip: "12345",
    landmark: {
      name: "Near Park",
      distance: "500m",
    },
  },
};
// example ['name', 'age', 'occupation', 'qualification',.......]
```

### 11. - Create array of all values from object

```js
const person = {
  name: "David Smith",
  age: 30,
  occupation: "Software Engineer",
  qualification: "BCA",
  hobbies: ["reading", "traveling", "coding"],
  isEmployed: true,
  address: {
    street: "123 Main St",
    city: "Anytown",
    state: "CA",
    zip: "12345",
    landmark: {
      name: "Near Park",
      distance: "500m",
    },
  },
};
// example ['David Smith',30, 'software Engineer', 'BCA' ........ ]
```

### 12. Protect person object so no can not add, edit, or delete any property from object

### 13. Protect person object so no can not add or delete any property from object, but modification should be allowed

### 14. group Array of Objects with age > 20 and age < 20

```js
const arr = [
  { age: 20 },
  { age: 21 },
  { age: 1 },
  { age: 31 },
  { age: 12 },
  { age: 20 },
];
```

### 15. Check if person object has following properties.

- age
- qualification
- fruit
- 'red-color'
- distance
- landmark

### 16. Create a function which check if object is sealed or not

### 17. Create a function which check if object is frozen or not

### 19. create a function which checks the length of character of the keys from the object

```js
const address = {
  street: "123 Main St",
  city: "Anytown",
  state: "CA",
  zip: "12345",
  landmark: {
    name: "Near Park",
    distance: "500m",
  },
};
```

- use above object
- create a function and pass object as parameter
- convert all keys to array from object
- use .map() loop which returns a new array with length of keys
- example -
- array of keys ==> ['street', 'city', 'state', 'zip', landmark']
- output with length => [6,4,5,3,8]

### 20. create a function which checks the length of character of the values from the object

```js
const address = {
  street: "123 Main St",
  city: "Anytown",
  state: "CA",
  zip: "12345",
  landmark: {
    name: "Near Park",
    distance: "500m",
  },
};
```

- use above object
- create a function and pass object as parameter
- convert all values to array from object
- use .map() loop which returns a new array with length of value
- example -
- array of keys ==> ['123 Main St', 'Anytown', 'CA', '12345', { name: "Near Park", distance: "500m" }]
- output with length => [11,7,2,5,1]
