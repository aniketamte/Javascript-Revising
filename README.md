Thanks for sharing the **JavaScript Notes PDF** by Thapa Technical. Based on your request, I'll now give you **detailed, easy-to-understand JavaScript notes** in simple language **with examples**, topic by topic, inspired by the structure in the PDF.

---

## 🧠 **1. What is JavaScript?**

* JavaScript is a **programming language** used to make websites **interactive**.
* It helps you build features like:

  * Click buttons
  * Show/hide elements
  * Create animations
  * Fetch data from APIs

### ✅ Example:

```html
<button onclick="alert('Hello!')">Click Me</button>
```

---

## 📦 **2. Variables and Values**

### ➤ Variables = Containers that store data.

### 🔹 Ways to declare variables:

```js
var name = "Aniket";   // Old way (use less)
let age = 21;          // Modern way (preferred)
const pi = 3.14;       // Constant value (can't change)
```

### 🔹 Rules for naming:

* Can’t start with a number.
* Can use `_` or `$`.
* Case sensitive.
* Use camelCase (like `userName`).

---

## 🔢 **3. Data Types**

### 🔹 Primitive Types:

| Type      | Example         |
| --------- | --------------- |
| String    | `"hello"`       |
| Number    | `10`, `3.14`    |
| Boolean   | `true`, `false` |
| Undefined | `let a;`        |
| Null      | `let a = null;` |
| Symbol    | `Symbol("id")`  |
| BigInt    | `123n`          |

### 🔹 Object Types:

* Array
* Object
* Date

---

## 🔁 **4. Operators**

### 🔹 Arithmetic:

```js
5 + 2   // 7
10 - 3  // 7
```

### 🔹 Comparison:

```js
5 > 3   // true
5 == '5' // true (loose comparison)
5 === '5' // false (strict)
```

### 🔹 Logical:

```js
true && false // false
true || false // true
```

---

## 📍 **5. Conditional Statements**

### ➤ if-else:

```js
let age = 18;
if (age >= 18) {
  console.log("Adult");
} else {
  console.log("Minor");
}
```

### ➤ switch:

```js
let day = "Monday";
switch(day) {
  case "Monday": console.log("Work day"); break;
  case "Sunday": console.log("Holiday"); break;
  default: console.log("Not valid");
}
```

---

## 🔄 **6. Loops**

### ➤ For Loop:

```js
for (let i = 1; i <= 5; i++) {
  console.log(i);
}
```

### ➤ While Loop:

```js
let i = 1;
while (i <= 5) {
  console.log(i);
  i++;
}
```

### ➤ Do-While Loop:

```js
let i = 1;
do {
  console.log(i);
  i++;
} while (i <= 5);
```

---

## 🔧 **7. Functions**

### ➤ Normal Function:

```js
function greet(name) {
  return "Hello " + name;
}
console.log(greet("Aniket"));  // Hello Aniket
```

### ➤ Arrow Function:

```js
const greet = (name) => "Hello " + name;
```

---

## 📚 **8. Arrays**

### ➤ Declaring an array:

```js
const fruits = ["Apple", "Banana", "Mango"];
```

### ➤ Useful Methods:

| Method       | Use                              | Example                             |
| ------------ | -------------------------------- | ----------------------------------- |
| `push()`     | Add at end                       | `fruits.push("Orange")`             |
| `pop()`      | Remove last                      | `fruits.pop()`                      |
| `indexOf()`  | Get index of element             | `fruits.indexOf("Banana")`          |
| `includes()` | Check if exists                  | `fruits.includes("Apple")`          |
| `forEach()`  | Loop through each element        | `fruits.forEach(f => ...)`          |
| `map()`      | Create new array                 | `fruits.map(f => f + "!")`          |
| `filter()`   | Filter values based on condition | `fruits.filter(f => f !== "Mango")` |

---

## 📅 **9. Date and Time**

```js
const now = new Date();
console.log(now.getFullYear()); // 2025
console.log(now.getMonth());    // 0-11
console.log(now.getDate());     // 1-31
```

---

## 📐 **10. Math Object**

| Method          | Description       | Example               |
| --------------- | ----------------- | --------------------- |
| `Math.round()`  | Nearest integer   | `Math.round(4.6)` → 5 |
| `Math.ceil()`   | Round UP          | `Math.ceil(4.2)`  → 5 |
| `Math.floor()`  | Round DOWN        | `Math.floor(4.9)` → 4 |
| `Math.random()` | Random number 0-1 | `Math.random()`       |

---

Great! Let's continue with the **advanced JavaScript topics** in **easy-to-understand language with examples**, just like before.

---

## 🌐 **11. DOM – Document Object Model**

> DOM allows JavaScript to interact with and change HTML & CSS of a webpage.

### 📌 Key DOM Methods:

| Method                     | Description                    | Example                                  |
| -------------------------- | ------------------------------ | ---------------------------------------- |
| `getElementById()`         | Get element by ID              | `document.getElementById("title")`       |
| `getElementsByClassName()` | Get elements by class          | `document.getElementsByClassName("box")` |
| `getElementsByTagName()`   | Get elements by tag name       | `document.getElementsByTagName("p")`     |
| `querySelector()`          | Get first match (CSS selector) | `document.querySelector(".btn")`         |
| `querySelectorAll()`       | Get all matches (CSS selector) | `document.querySelectorAll("li")`        |

### 📌 Modifying Content:

```js
let heading = document.getElementById("main");
heading.textContent = "New Title!";
heading.style.color = "blue";
```

---

## 🖱️ **12. Events in JavaScript**

> Events are actions like clicks, mouse movement, keypress, etc.

### 📌 Adding an Event Listener:

```js
document.querySelector("button").addEventListener("click", function() {
  alert("Button clicked!");
});
```

### 📌 Common Event Types:

| Event Type  | Description           |
| ----------- | --------------------- |
| `click`     | Mouse click           |
| `mouseover` | Mouse over an element |
| `keydown`   | Key pressed           |
| `submit`    | Form submitted        |

---

## 💾 **13. localStorage in JavaScript**

> localStorage allows you to **store data in the browser** (even after refresh).

### 📌 Usage:

```js
localStorage.setItem("name", "Aniket");     // Save data
let name = localStorage.getItem("name");    // Get data
localStorage.removeItem("name");            // Remove data
localStorage.clear();                       // Clear all
```

---

## ⏲️ **14. Timing Events**

| Method          | Description                          | Example                       |
| --------------- | ------------------------------------ | ----------------------------- |
| `setTimeout()`  | Runs code once after a delay         | `setTimeout(() => {}, 2000)`  |
| `setInterval()` | Runs code repeatedly after intervals | `setInterval(() => {}, 1000)` |

```js
setTimeout(() => {
  console.log("Runs after 2 seconds");
}, 2000);
```

---

## 🧱 **15. Objects in JavaScript**

### ➤ Declaring an Object:

```js
const person = {
  name: "Aniket",
  age: 21,
  greet: function () {
    return "Hello " + this.name;
  }
};

console.log(person.greet()); // Hello Aniket
```

---

## 🔄 **16. JSON (JavaScript Object Notation)**

> JSON is a **data format** to exchange data between server and browser.

### ➤ Convert JavaScript → JSON:

```js
const person = { name: "Aniket", age: 21 };
const jsonData = JSON.stringify(person);
```

### ➤ Convert JSON → JavaScript:

```js
const jsonStr = '{"name":"Aniket","age":21}';
const jsData = JSON.parse(jsonStr);
```

---

## 📡 **17. Fetch API (for HTTP Requests)**

> Used to **fetch data from server (APIs)**.

```js
fetch("https://jsonplaceholder.typicode.com/posts")
  .then(response => response.json())
  .then(data => console.log(data));
```

---

## ⏳ **18. Promises & Async/Await**

### ➤ Promise:

```js
let promise = new Promise((resolve, reject) => {
  setTimeout(() => resolve("Success!"), 2000);
});

promise.then(result => console.log(result));
```

### ➤ Async/Await:

```js
async function fetchData() {
  let res = await fetch("https://jsonplaceholder.typicode.com/posts");
  let data = await res.json();
  console.log(data);
}
fetchData();
```

---

## 🧬 **19. OOP (Object-Oriented Programming) in JS**

### ➤ Class:

```js
class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  greet() {
    console.log("Hello, " + this.name);
  }
}

const user1 = new Person("Aniket", 21);
user1.greet(); // Hello, Aniket
```

---

## 🔥 BONUS: Difference between `forEach` and `map`

| Feature        | forEach                         | map                              |
| -------------- | ------------------------------- | -------------------------------- |
| Purpose        | Loop through items              | Create a new array               |
| Returns Value? | ❌ No                            | ✅ Yes                            |
| Usability      | Perform side effects (like log) | Create modified version of array |

### Example:

```js
let nums = [1, 2, 3];

nums.forEach(n => console.log(n * 2)); // Just prints

let doubled = nums.map(n => n * 2);   // Returns [2, 4, 6]
```

---

