# DOM topics

## inline events

## 1. ✅ Adding removing class

- Use classList to manipulate CSS classes on HTML elements

```js
<div id="box" class="red">Hello</div>
<button onclick="toggleClass()">Toggle Class</button>

<script>
  function toggleClass() {
    const box = document.getElementById("box");
    box.classList.toggle("blue"); // adds 'blue' if not present, removes it if present
  }
</script>

```

## 2. ✅ Creating a New Element, Adding Attributes

```js
const newDiv = document.createElement("div"); // Create a new <div>
newDiv.textContent = "I am a new div!"; // Add text
newDiv.setAttribute("id", "newDiv"); // Add id attribute
newDiv.classList.add("fancy", "highlight"); // Add multiple classes
document.body.appendChild(newDiv); // Add to document
```

## 3. ✅ Appending / Prepending Element

```js
<ul id="list">
  <li>First Item</li>
</ul>;

const newItem = document.createElement("li");
newItem.textContent = "Appended Item";

// Append to the end
document.getElementById("list").appendChild(newItem);

const anotherItem = document.createElement("li");
anotherItem.textContent = "Prepended Item";

// Prepend to the start
document.getElementById("list").prepend(anotherItem);
```

## 4. ✅ innerText vs innerHTML

```js
<div id="demo"></div>;

const div = document.getElementById("demo");

div.innerText = "<b>This is bold</b>"; // Shows: <b>This is bold</b>
div.innerHTML = "<em>This is italic</em>"; // Shows italic text
```

## 5. ✅ API Fetching (Using fetch)

```js
<div id="output">Loading...</div>;

fetch("https://jsonplaceholder.typicode.com/posts/1")
  .then((response) => response.json())
  .then((data) => {
    document.getElementById("output").innerText = data.title;
  })
  .catch((error) => {
    console.error("Error:", error);
    document.getElementById("output").innerText = "Failed to load data.";
  });
```

- -------Timing functions------
- As we know JS is a single threaded asynchronous programming language.
- It's execution won't stop for anything.
- To get some delay or pause we use timing function like setTimeout, setInterval
