# JavaScript Data Type & Math Method Evaluations

---

## 🔹 Boolean Conversion

```js
console.log(Boolean("hello"));
console.log(Boolean(""));
console.log(Boolean(0));
console.log(Boolean(1));
console.log(Boolean([]));
console.log(Boolean({}));
console.log(Boolean(undefined));
console.log(Boolean(null));
console.log(Boolean("false"));
console.log(Boolean(NaN));
```

---

## 🔹 String Conversion

```js
console.log(String(123));
console.log(String(true));
console.log(String(null));
console.log(String(undefined));
console.log(String([]));
console.log(String({}));
console.log(String([1, 2, 3]));
console.log(String(false));
console.log(String(NaN));
console.log(String(Infinity));
```

---

## 🔹 Number Conversion

```js
console.log(Number("456"));
console.log(Number("45px"));
console.log(Number(true));
console.log(Number(false));
console.log(Number(undefined));
console.log(Number(null));
console.log(Number(""));
console.log(Number(" "));
console.log(Number([]));
console.log(Number([1, 2, 3]));
```

---

## 🔹 typeof and Number.isInteger()

```js
let num = 100;
console.log(typeof num);
console.log(Number.isInteger(num));

console.log(typeof "100");
console.log(Number.isInteger("100"));

console.log(typeof true);
console.log(Number.isInteger(true));

console.log(Number.isInteger(0.5));

let a = null;
console.log(typeof a);
console.log(Number.isInteger(a));

console.log(typeof []);
console.log(Number.isInteger([]));

console.log(typeof {});
console.log(Number.isInteger({}));

let n = NaN;
console.log(typeof n);
console.log(Number.isInteger(n));

let floatNum = 5.5;
console.log(Number.isInteger(floatNum));

console.log(Number.isInteger(parseInt("123abc")));
```

---

## 🔹 NaN and isNaN()

```js
console.log(isNaN("123"));
console.log(isNaN("123abc"));
console.log(isNaN(45));
console.log(isNaN(true));
console.log(isNaN(undefined));
console.log(isNaN(null));
console.log(isNaN(""));
console.log(isNaN(" "));
console.log(isNaN([]));
console.log(isNaN({}));
```

---

## 🔹 Math Method Practice Problems

### 🔸 Math.abs()

```js
console.log(Math.abs(-25));
console.log(Math.abs(0));
console.log(Math.abs(95));
console.log(Math.abs(-123.45));
console.log(Math.abs(1 - 100));
console.log(Math.abs(-0.5));
console.log(Math.abs(-99999));
console.log(Math.abs(3.14));
console.log(Math.abs(-3.14));
console.log(Math.abs(true));
```

### 🔸 Math.max()

```js
console.log(Math.max(12, 78, 34));
console.log(Math.max(-12, -78, -34));
console.log(Math.max(1, 100, 50, 0));
console.log(Math.max(0, 0, 0));
console.log(Math.max(1, -1, 2, -2));
console.log(Math.max(3.5, 2.9, 3.499));
console.log(Math.max(100, 1000));
console.log(Math.max(999, 999.99));
console.log(Math.max(-5, 5, -10));
console.log(Math.max(...[1, 2, 3, 4, 5]));
```

### 🔸 Math.min()

```js
console.log(Math.min(12, 78, 34));
console.log(Math.min(-12, -78, -34));
console.log(Math.min(1, 100, 50, 0));
console.log(Math.min(0, 0, 0));
console.log(Math.min(1, -1, 2, -2));
console.log(Math.min(3.5, 2.9, 3.499));
console.log(Math.min(100, 1000));
console.log(Math.min(999, 999.99));
console.log(Math.min(-5, 5, -10));
console.log(Math.min(...[1, 2, 3, 4, 5]));
```

### 🔸 Math.pow()

```js
console.log(Math.pow(2, 3));
console.log(Math.pow(5, 2));
console.log(Math.pow(10, 0));
console.log(Math.pow(3, 3));
console.log(Math.pow(7, 1));
console.log(Math.pow(9, 0.5));
console.log(Math.pow(-2, 3));
console.log(Math.pow(-2, 2));
console.log(Math.pow(4, -1));
console.log(Math.pow(100, 0.5));
```

### 🔸 Math.sqrt()

```js
console.log(Math.sqrt(25));
console.log(Math.sqrt(49));
console.log(Math.sqrt(144));
console.log(Math.sqrt(1));
console.log(Math.sqrt(0));
console.log(Math.sqrt(2));
console.log(Math.sqrt(3.24));
console.log(Math.sqrt(10000));
console.log(Math.sqrt(121));
console.log(Math.sqrt(50));
```

### 🔸 Math.random()

```js
console.log(Math.random());
console.log((Math.random() * 10).toFixed(2));
console.log((Math.random() * 100).toFixed(0));
console.log((Math.random() * 5).toFixed(3));
console.log((Math.random() * 1000).toFixed(1));
console.log((Math.random() * 99999).toFixed(0));
console.log(Math.floor(Math.random() * 6));
console.log(Math.ceil(Math.random() * 10));
console.log((Math.random() * 0.1).toFixed(4));
console.log((Math.random() + 1).toFixed(2));
```

### 🔸 Math.round()

```js
console.log(Math.round(3.5));
console.log(Math.round(3.49));
console.log(Math.round(4.01));
console.log(Math.round(9.99));
console.log(Math.round(-3.5));
console.log(Math.round(-3.51));
console.log(Math.round(0));
console.log(Math.round(0.499));
console.log(Math.round(0.5));
console.log(Math.round(99.999));
```

### 🔸 Math.ceil()

```js
console.log(Math.ceil(3.1));
console.log(Math.ceil(4.0001));
console.log(Math.ceil(0.0001));
console.log(Math.ceil(5));
console.log(Math.ceil(-1.1));
console.log(Math.ceil(-9.9));
console.log(Math.ceil(100.01));
console.log(Math.ceil(-0.00001));
console.log(Math.ceil(7.9));
console.log(Math.ceil(0));
```

### 🔸 Math.floor()

```js
console.log(Math.floor(3.9));
console.log(Math.floor(4.9999));
console.log(Math.floor(0.0001));
console.log(Math.floor(5));
console.log(Math.floor(-1.1));
console.log(Math.floor(-9.9));
console.log(Math.floor(100.01));
console.log(Math.floor(-0.00001));
console.log(Math.floor(7.1));
console.log(Math.floor(0));
```

### 🔸 Math.trunc()

```js
console.log(Math.trunc(4.99));
console.log(Math.trunc(4.01));
console.log(Math.trunc(-4.99));
console.log(Math.trunc(-4.01));
console.log(Math.trunc(100.9876));
console.log(Math.trunc(-100.9876));
console.log(Math.trunc(0.9999));
console.log(Math.trunc(-0.9999));
console.log(Math.trunc(0));
console.log(Math.trunc(12345.6789));
```

---
