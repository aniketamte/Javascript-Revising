Perfect! Let’s now go through the **first 3 interview questions** with:

* ✅ **Definition**
* 🧠 **Simple Explanation**
* 💻 **Example Code**
* 📤 **Expected Output**
* ✨ **Important Points Highlighted**

---

## ✅ **1. What are the different data types in JavaScript?**

### 🧾 **Definition:**

> Data types define the type of data a variable can hold, such as text, numbers, booleans, or objects.

### 🔹 JavaScript has 2 main categories:

---

### 📘 **Primitive Data Types** (Immutable)

> These hold **single values** and are **passed by value** (i.e., copy of value is passed).

| Type          | Definition                              | Example             | Output       |
| ------------- | --------------------------------------- | ------------------- | ------------ |
| **String**    | A sequence of characters (text)         | `"Hello"` or `'Hi'` | `"Hello"`    |
| **Number**    | Numeric value (int or float)            | `42`, `3.14`        | `42`         |
| **BigInt**    | Very large integers                     | `123456789n`        | `123456789n` |
| **Boolean**   | Logical true or false                   | `true`, `false`     | `true`       |
| **Undefined** | Variable declared but not assigned      | `let x;`            | `undefined`  |
| **Null**      | Empty or no value                       | `let a = null;`     | `null`       |
| **Symbol**    | Unique identifier (used as object keys) | `Symbol("id")`      | `Symbol(id)` |

#### 💻 Example:

```javascript
let name = "Aniket";      // String
let age = 21;             // Number
let isStudent = true;     // Boolean
let big = 123456789n;     // BigInt
let id = Symbol("id");    // Symbol
let x;                    // Undefined
let y = null;             // Null

console.log(typeof name);     // string
console.log(typeof age);      // number
console.log(typeof big);      // bigint
console.log(typeof id);       // symbol
console.log(typeof x);        // undefined
console.log(typeof y);        // object ❗ known JS bug
```

#### ✨ Important Points:

* All primitive types are **immutable**.
* `typeof null` returns `"object"` (legacy bug).
* `typeof Symbol("id")` returns `"symbol"`.

---

### 📘 **Non-Primitive Data Types** (Mutable)

> These can store **multiple values** and are **passed by reference**.

| Type       | Definition                      | Example                       |
| ---------- | ------------------------------- | ----------------------------- |
| **Object** | A collection of key-value pairs | `{ name: "Aniket", age: 21 }` |
| **Array**  | An ordered list of values       | `[1, 2, "hello", true]`       |

#### 💻 Example:

```javascript
let obj = {
  name: "Aniket",
  age: 21,
  greet: function () {
    return "Hello";
  }
};

let arr = [1, 2, "JS", true];

console.log(obj.name); // "Aniket"
console.log(arr[2]);   // "JS"
```

#### ✨ Important Points:

* Arrays are also objects in JS (`typeof arr === 'object'`).
* Functions are treated as objects with callable behavior.

---

## ✅ **2. What is Hoisting in JavaScript?**

### 🧾 **Definition:**

> Hoisting is JavaScript’s behavior of **moving declarations to the top** of their scope before code execution.

### 🧠 Explanation:

* Declarations (using `var`, `function`) are processed **before** any code is executed.
* Only **declarations** are hoisted, not the **initial values**.

---

### 💻 Example 1 (Variable hoisting):

```javascript
console.log(a);  // Output: undefined
var a = 5;
```

> ✅ `var a` is hoisted as `undefined`, but `5` is assigned later.

---

### 💻 Example 2 (Function hoisting):

```javascript
sayHello(); // Output: Hello!

function sayHello() {
  console.log("Hello!");
}
```

> ✅ Entire function declaration is hoisted.

---

### 💻 Example 3 (Inside local function scope):

```javascript
function test() {
  console.log(x); // undefined
  var x = 10;
}
test();
```

---

### ✨ Important Points:

* `let` and `const` are hoisted but not initialized (temporal dead zone).
* To **avoid issues**, use `let`/`const` and **declare variables at the top** of their block.
* `"use strict"` disables accidental hoisting behavior.

```javascript
"use strict";
x = 10;  // ❌ ReferenceError
let x;
```

---

## ✅ **3. Why do we use `debugger` in JavaScript?**

### 🧾 **Definition:**

> `debugger` is a keyword used to **pause code execution** at a certain line, allowing inspection of variable values.

---

### 🧠 Explanation:

* Works like a manual breakpoint.
* Requires browser DevTools to be open.
* Code pauses where `debugger` is placed.

---

### 💻 Example:

```javascript
let x = 10;
let y = 20;

debugger; // Pauses here

let sum = x + y;
console.log(sum); // 30
```

---

### ✨ Important Points:

* Doesn’t affect production if DevTools aren’t open.
* Useful for finding **logic errors** or checking **variable values**.

---

Great! Let's continue with JavaScript Interview Questions **4 to 10** in the same detailed, beginner-friendly format with:

* ✅ **Definition**
* 🧠 **Explanation**
* 💻 **Example code**
* 📤 **Expected output**
* ✨ **Important Points**

---

## ✅ **4. Difference between `==` and `===` Operators**

### 🧾 **Definition:**

> * `==` is a **loose equality** operator that compares **values only**.
> * `===` is a **strict equality** operator that compares **both values and data types**.

---

### 🧠 Explanation:

* `==` performs **type coercion** before comparing.
* `===` does **not convert types** — both must match exactly.

---

### 💻 Example:

```javascript
let x = 2;
let y = "2";

console.log(x == y);   // true  ✅ because '2' == 2 (after coercion)
console.log(x === y);  // false ❌ because types differ (number !== string)
```

---

### ✨ Important Points:

* Always prefer `===` for **safer comparisons**.
* `==` can cause unexpected behavior due to **implicit conversion**.

---

## ✅ **5. Difference between `var` and `let`**

### 🧾 **Definition:**

> `var` and `let` are used to declare variables, but they behave differently in terms of **scope**, **hoisting**, and **re-declaration**.

---

### 🧠 Differences:

| Feature            | `var`                    | `let`                                     |
| ------------------ | ------------------------ | ----------------------------------------- |
| Scope              | Function-scoped          | Block-scoped 🔒                           |
| Hoisting           | Hoisted with `undefined` | Hoisted but not initialized ❗             |
| Re-declaration     | Allowed                  | Not allowed in the same scope 🚫          |
| Temporal Dead Zone | No                       | Yes, error if accessed before declaration |

---

### 💻 Example:

```javascript
function example() {
  console.log(a); // undefined
  var a = 10;

  // console.log(b); // ReferenceError
  let b = 20;
}
example();
```

---

### ✨ Important Points:

* Use `let` or `const` instead of `var` to avoid bugs due to hoisting.
* `let` is introduced in ES6 for **block-level scoping**.

---

## ✅ **6. What is Implicit Type Coercion in JavaScript?**

### 🧾 **Definition:**

> Implicit Type Coercion is JavaScript’s behavior of **automatically converting** values from one type to another during operations.

---

### 🧠 Types of Coercion:

#### 🔹 1. **String Coercion with `+`**

```javascript
let a = 10;
let b = "5";

console.log(a + b); // "105" — number is converted to string
```

#### 🔹 2. **Number Coercion with `-`**

```javascript
let a = 10;
let b = "5";

console.log(a - b); // 5 — string is converted to number
```

#### 🔹 3. **Boolean Coercion**

Used in `if`, `while`, `||`, `&&` etc.

```javascript
if ("hello") {
  console.log("Truthy"); // ✅ Runs
}

if (0) {
  console.log("Falsy"); // ❌ Skipped
}
```

\| Falsy values | `false`, `0`, `""`, `null`, `undefined`, `NaN` |

---

### ✨ Important Points:

* Avoid relying too much on coercion — it can cause **confusing bugs**.
* Use `===` to avoid **unintentional conversions**.

---

## ✅ **7. Is JavaScript statically or dynamically typed?**

### 🧾 **Definition:**

> JavaScript is a **dynamically typed** language, meaning variable types are determined **at runtime**, not in advance.

---

### 🧠 Explanation:

* Variables can **change type** at any time.

---

### 💻 Example:

```javascript
let x = 42;           // Number
x = "Hello World!";   // Now it's a string
```

---

### ✨ Important Points:

* No need to define variable types explicitly.
* Great for flexibility, but **may cause type-related bugs**.

---

## ✅ **8. What is NaN in JavaScript?**

### 🧾 **Definition:**

> `NaN` stands for **Not-a-Number**, and it's a special value representing **invalid number operations**.

---

### 🧠 Explanation:

* Type of `NaN` is still `number`.
* Check it using `isNaN()`.

---

### 💻 Example:

```javascript
console.log(typeof NaN);         // "number"
console.log(isNaN("Hello"));     // true
console.log(isNaN(123));         // false
```

---

### ✨ Important Points:

* `isNaN()` tries to convert value to number first.
* Best to use `Number.isNaN()` for strict check.

---

## ✅ **9. Pass by Value vs Pass by Reference**

### 🧾 **Definition:**

> In JavaScript:

* **Primitive types** are passed by **value**
* **Objects/arrays** are passed by **reference**

---

### 🧠 Pass by Value (Primitive types):

```javascript
let a = 10;
let b = a;

a = 20;
console.log(b);  // 10
```

> ❗ `b` doesn't change because it stores a **copy** of `a`.

---

### 🧠 Pass by Reference (Objects/arrays):

```javascript
let obj1 = { name: "Aniket" };
let obj2 = obj1;

obj1.name = "Rahul";
console.log(obj2.name); // "Rahul"
```

> ✅ `obj2` reflects changes because it points to the **same memory**.

---

### ✨ Important Points:

* Primitive = independent copy
* Object = same reference in memory

---

## ✅ **10. What is an IIFE (Immediately Invoked Function Expression)?**

### 🧾 **Definition:**

> An IIFE is a function that **runs immediately** after it is defined.

---

### 🧠 Syntax:

```javascript
(function() {
  console.log("IIFE runs!");
})();
```

---

### 💻 Example:

```javascript
(function greet(name) {
  console.log("Hello, " + name);
})("Aniket");  // Output: Hello, Aniket
```

---

### ✨ Why use IIFE?

* To avoid **polluting global scope**
* Useful for **private variables** and **initialization code**

---

Perfect! Let's go through **JavaScript Interview Questions 11 to 22** in a clear and beginner-friendly format, just like the previous ones — with:

✅ **Definition**
🧠 **Explanation**
💻 **Example code**
📤 **Expected output**
✨ **Important Points**

---

## ✅ 11. What is Strict Mode in JavaScript?

### 🧾 **Definition:**

> Strict mode in JavaScript is a way to run code in a “restricted” version of JavaScript, introduced in **ES5**.

---

### 🧠 Explanation:

Strict mode catches **common coding mistakes**, prevents certain unsafe actions, and **makes debugging easier** by throwing errors.

---

### 💻 Example:

```javascript
"use strict";

x = 3.14; // ❌ Error: x is not declared
```

---

### ✨ Characteristics:

* Disallows **undeclared variables**
* Prevents using **reserved keywords** as names
* No duplicate parameters allowed
* Makes assignments to read-only properties throw errors
* Must be declared using `"use strict";` at the **top**

---

### 📤 Output:

```text
ReferenceError: x is not defined
```

---

## ✅ 12. What are Higher Order Functions?

### 🧾 **Definition:**

> Functions that either **accept another function as an argument** or **return a function** are called Higher Order Functions.

---

### 🧠 Explanation:

JavaScript treats functions as **first-class citizens**, so you can pass them around just like variables.

---

### 💻 Example:

```javascript
function greet(fn) {
  fn(); // Call the function passed as argument
}

greet(function() {
  console.log("Hello!");
});
```

---

### 📤 Output:

```text
Hello!
```

---

### ✨ Important Points:

* Used in methods like `map`, `filter`, `reduce`
* Enables functional programming in JavaScript

---

## ✅ 13. What is the `this` keyword?

### 🧾 **Definition:**

> `this` refers to the **object that calls the function**.

---

### 🧠 Explanation:

Its value depends on **how the function is called**, not where it’s defined.

---

### 💻 Example:

```javascript
let person = {
  name: "Aniket",
  greet: function() {
    console.log(this.name);
  }
};

person.greet(); // 'this' refers to 'person'
```

---

### 📤 Output:

```text
Aniket
```

---

### ✨ Key Rules:

* Global scope: `this` = `window`
* Object method: `this` = object
* Arrow functions: `this` = outer scope (no binding)

---

## ✅ 14. What are Self-Invoking Functions?

### 🧾 **Definition:**

> A function that executes **immediately after it's defined** is called a Self-Invoking Function (IIFE).

---

### 🧠 Explanation:

* Wrapped in `()` to treat it as an **expression**
* Followed by `()` to **execute** it immediately

---

### 💻 Example:

```javascript
(function() {
  console.log("Runs automatically");
})();
```

---

### 📤 Output:

```text
Runs automatically
```

---

### ✨ Uses:

* Avoid polluting global scope
* Create private variables

---

## ✅ 15. Explain `call()`, `apply()` and `bind()`

### 🧾 **Definition:**

> These are **function methods** to explicitly set the value of `this`.

---

### 🧠 Explanation + Examples:

#### 🔸 `call()`

```javascript
function sayHi() {
  console.log("Hi " + this.name);
}
let user = { name: "Aniket" };
sayHi.call(user);
```

📤 Output: `Hi Aniket`

---

#### 🔸 `apply()`

Like `call()`, but passes arguments as **array**.

```javascript
sayHi.apply(user); // same output
```

---

#### 🔸 `bind()`

Returns a **new function** with bound `this`.

```javascript
let boundFunc = sayHi.bind(user);
boundFunc();
```

---

### ✨ Summary Table:

| Method    | Invokes Immediately? | Passes Arguments | Returns Function? |
| --------- | -------------------- | ---------------- | ----------------- |
| `call()`  | Yes                  | Separately       | No                |
| `apply()` | Yes                  | As array         | No                |
| `bind()`  | No                   | Separately       | Yes               |

---

## ✅ 16. Difference Between `exec()` and `test()`

### 🧾 **Definition:**

> Both are **RegExp methods**.

| Method   | Purpose                             | Returns       |
| -------- | ----------------------------------- | ------------- |
| `exec()` | Search and **return match details** | Array or null |
| `test()` | Check if pattern **exists**         | true / false  |

---

### 💻 Example:

```javascript
let pattern = /world/;
let str = "Hello world";

console.log(pattern.test(str));  // true
console.log(pattern.exec(str));  // ["world"]
```

---

## ✅ 17. What is Currying?

### 🧾 **Definition:**

> Currying is transforming a function with multiple parameters into a **series of nested functions** that each take one parameter.

---

### 💻 Example:

```javascript
function add(a) {
  return function(b) {
    return a + b;
  }
}

console.log(add(2)(3)); // 5
```

---

### ✨ Benefits:

* Helps in creating **reusable** and **composable** functions
* Useful in **functional programming**

---

## ✅ 18. Advantages of External JavaScript

### 🧾 **Definition:**

> External JS means writing JavaScript code in a **.js file** and linking it with HTML.

---

### ✨ Benefits:

* Reusability across multiple pages
* Separation of concerns (HTML + JS separate)
* Cleaner and more maintainable code
* Browser caching for better performance

---

### 💻 Example:

```html
<script src="script.js"></script>
```

---

## ✅ 19. Explain Scope and Scope Chain

### 🧾 **Definition:**

> Scope defines **where a variable can be accessed** in your code.

---

### 🧠 Types of Scope:

* **Global** – accessible anywhere
* **Function (Local)** – inside function only
* **Block** – inside `{}` with `let`/`const`

---

### 💻 Example:

```javascript
let x = 10;

function show() {
  let y = 5;
  console.log(x); // 10
}

console.log(y); // ❌ Error
```

---

### 🧠 Scope Chain:

If JS doesn't find a variable in the current scope, it **looks up** the outer scopes.

---

## ✅ 20. What are Closures?

### 🧾 **Definition:**

> A Closure is a function that **remembers variables** from its **outer scope**, even after that scope is gone.

---

### 💻 Example:

```javascript
function outer() {
  let name = "Aniket";
  return function() {
    console.log(name);
  }
}

let inner = outer();
inner(); // Outputs: Aniket
```

---

### ✨ Uses:

* Data privacy (like private variables)
* Event handlers, timers
* Functional programming

---

## ✅ 21. Advantages of JavaScript

### ✨ Benefits:

* Client-side and server-side execution (with Node.js)
* Lightweight and beginner-friendly
* Rich set of frameworks (React, Angular, Vue)
* Makes web pages interactive
* Supported by all browsers

---

## ✅ 22. What are Object Prototypes?

### 🧾 **Definition:**

> Prototypes are objects that other objects **inherit from** in JavaScript.

---

### 🧠 Explanation:

If a property or method is not found in an object, JavaScript looks into its **prototype chain**.

---

### 💻 Example:

```javascript
let arr = [];
arr.push(1); // Works because push is in Array.prototype
```

---

### ✨ Prototype Chain:

`arr` → `Array.prototype` → `Object.prototype` → `null`

---

Great! Here's a **detailed, beginner-friendly explanation** for each of your next 9 JavaScript interview questions (Q23–Q31), covering:

* **Definitions**
* **Code examples**
* **Output**
* **Important points**

---

### **23. What are Callbacks?**

**Definition:**
A **callback** is a function passed into another function as an argument and is executed **after** the parent function completes.

**Example:**

```javascript
function greetUser(name, callback) {
  console.log("Hi " + name);
  callback();  // calling the callback function
}

function sayBye() {
  console.log("Bye!");
}

greetUser("Aniket", sayBye);
```

**Output:**

```
Hi Aniket
Bye!
```

**Important Points:**

* Used heavily in **asynchronous** programming (e.g., APIs, timers).
* Helps **modularize** and **reuse** code.
* Can be **anonymous** or **named** functions.

---

### **24. Types of Errors in JavaScript**

**Definition:**
JavaScript mainly has **2 types of errors**:

1. **Syntax Errors:** Mistakes in the code's structure (missing bracket, semicolon, etc.)
2. **Logical Errors:** Code runs but produces the wrong result due to incorrect logic.

**Examples:**

```javascript
// Syntax Error
console.log("Hello"  // missing closing bracket

// Logical Error
function add(x, y) {
  return x * y; // wrong logic, should be x + y
}
```

**Important Points:**

* Syntax errors **stop execution**.
* Logical errors are **harder to detect** since they don't throw exceptions.

---

### **25. What is Memoization?**

**Definition:**
Memoization is a **caching technique** that stores the results of expensive function calls and returns the cached result when the **same input** occurs again.

**Example:**

```javascript
function memoizeAdd() {
  const cache = {};
  return function(num) {
    if (cache[num]) {
      console.log("Fetching from cache");
      return cache[num];
    } else {
      console.log("Calculating result");
      const result = num + 10;
      cache[num] = result;
      return result;
    }
  };
}

const add = memoizeAdd();
console.log(add(5)); // Calculates
console.log(add(5)); // Fetches from cache
```

**Output:**

```
Calculating result
15
Fetching from cache
15
```

**Important Points:**

* **Improves performance** in heavy computations.
* Can increase **memory usage**.
* Used in **React**, **DP problems**, etc.

---

### **26. What is Recursion?**

**Definition:**
**Recursion** is a function that **calls itself** until a **base condition** is met.

**Example:**

```javascript
function factorial(n) {
  if (n === 1) return 1;
  return n * factorial(n - 1);
}
console.log(factorial(5));
```

**Output:**

```
120
```

**Important Points:**

* Must have a **base case** to avoid infinite calls.
* Used in tree, graph, and divide-and-conquer algorithms.

---

### **27. Use of Constructor Function**

**Definition:**
Constructor functions are **blueprints** for creating multiple objects with similar properties/methods.

**Syntax:**

```javascript
function Person(name, age) {
  this.name = name;
  this.age = age;
}

let p1 = new Person("Aniket", 22);
console.log(p1);
```

**Output:**

```javascript
Person { name: 'Aniket', age: 22 }
```

**Important Points:**

* Always use `new` keyword.
* Convention: Constructor name starts with **capital letter** (PascalCase).
* Each instance gets **its own copy** of properties.

---

### **28. What is DOM?**

**Definition:**
**DOM (Document Object Model)** is a tree-like structure created by the browser to represent the HTML elements of a webpage.

**Example:**

```html
<p id="demo">Hello</p>
<script>
  document.getElementById("demo").innerText = "Hi!";
</script>
```

**Output on Page:**

```
Hi!
```

**Important Points:**

* Allows JavaScript to **read/write** HTML content.
* Created automatically when a page loads.
* Core to **dynamic web development**.

---

### **29. Method to Retrieve Character from Index**

**Definition:**
Use `.charAt(index)` to get a character at a specific index of a string.

**Example:**

```javascript
let str = "Aniket";
console.log(str.charAt(2));
```

**Output:**

```
i
```

**Important Points:**

* Index starts from **0**.
* If index is out of range, returns **empty string**.

---

### **30. What is BOM?**

**Definition:**
**BOM (Browser Object Model)** allows interaction with the browser itself.

**Example:**

```javascript
console.log(window.innerHeight);
console.log(window.location.href);
```

**Output:**
Prints:

* Browser window height
* Current URL

**Important Points:**

* Main objects: `window`, `navigator`, `screen`, `history`, `location`.
* Used for redirection, alerts, timers, etc.

---

### **31. Difference between Client-side & Server-side JavaScript**

| Feature   | Client-side JavaScript     | Server-side JavaScript            |
| --------- | -------------------------- | --------------------------------- |
| Runs in   | Browser                    | Server (Node.js)                  |
| Access to | DOM, BOM                   | Files, Databases, APIs            |
| Use Case  | UI interaction, validation | Business logic, database handling |
| Speed     | Fast (no server request)   | Depends on server resources       |

**Example:**

* **Client-side:**

```javascript
alert("Hello user!");
```

* **Server-side (Node.js):**

```javascript
console.log("Server running...");
```

**Important Points:**

* Client-side JS improves **user experience**.
* Server-side JS (like **Node.js**) helps in **data processing** and APIs.

---

Great! Let's now rewrite your first **10 JavaScript interview questions** with a **clear, beginner-friendly structure**, including:

* ✅ **Definition**
* 💡 **Example**
* 🖨️ **Output**
* 🔍 **Explanation**

---

### ✅ 1. How to concatenate two strings in JavaScript?

**Definition:**
Concatenation means combining two or more strings into one. In JavaScript, this is done using the `+` operator or template literals.

**Example:**

```javascript
let str1 = "Hello";
let str2 = "World";
let result = str1 + " " + str2;
console.log(result);
```

**Output:**

```
Hello World
```

**Explanation:**
The `+` operator joins the strings together. A space is added manually to separate the words.

---

### ✅ 2. What would be the result of `3 + 2 + "7"`?

**Definition:**
When combining numbers and strings, JavaScript follows type coercion rules — converting numbers to strings if needed.

**Example:**

```javascript
let result = 3 + 2 + "7";
console.log(result);
```

**Output:**

```
57
```

**Explanation:**

* `3 + 2 = 5` (number addition)
* `5 + "7"` → `"5" + "7"` = `"57"` (string concatenation)

---

### ✅ 3. Are JavaScript and Java related?

**Definition:**
No, JavaScript and Java are not related. They serve different purposes and were developed independently.

| Java                   | JavaScript                           |
| ---------------------- | ------------------------------------ |
| Strongly typed         | Loosely typed                        |
| Compiled (to bytecode) | Interpreted or Just-In-Time compiled |
| Class-based            | Prototype-based                      |
| Runs on JVM            | Runs in browser / Node.js            |

**Explanation:**
The name "JavaScript" was chosen during marketing; technically, the languages are very different.

---

### ✅ 4. What is the difference between JavaScript and TypeScript?

**Definition:**
TypeScript is a superset of JavaScript that adds static typing and modern features to help developers catch errors early.

**JavaScript:**

* Dynamically typed
* More prone to runtime errors

**TypeScript:**

* Statically typed
* Catches many errors during development
* Must be compiled to JavaScript

**Example (TypeScript):**

```typescript
let name: string = "Aniket"; // Valid
name = 123; // ❌ Error: Type 'number' is not assignable to type 'string'
```

---

### ✅ 5. What is Variable Scope in JavaScript?

**Definition:**
Scope determines where a variable is accessible in the code.

**Types of scope:**

* **Global Scope** – accessible anywhere
* **Function Scope** – accessible only inside a function
* **Block Scope** – (for `let` & `const`) accessible inside `{}` blocks
* **Lexical Scope** – inner functions access variables from outer functions

**Example:**

```javascript
let x = "global";

function test() {
  let y = "local";
  console.log(x); // global
  console.log(y); // local
}

test();
```

---

### ✅ 6. What is the difference between Lexical and Dynamic Scoping?

**Definition:**

* **Lexical Scoping:** Variable scope is determined by where it is written (JavaScript uses this).
* **Dynamic Scoping:** Variable scope is based on the function call stack at runtime (not used in JS).

**Example of Lexical Scope:**

```javascript
function outer() {
  let name = "Aniket";
  function inner() {
    console.log(name);
  }
  inner();
}
outer();
```

**Output:**

```
Aniket
```

**Explanation:**
`inner()` can access `name` because it's defined within the lexical environment of `outer()`.

---

### ✅ 7. What is the use of the `isNaN()` function?

**Definition:**
`isNaN()` checks if a value is **Not-a-Number**. It returns `true` if the value is not a valid number.

**Example:**

```javascript
console.log(isNaN("abc"));     // true
console.log(isNaN(123));       // false
console.log(isNaN(NaN));       // true
```

**Explanation:**
Only values that can't be converted to numbers return `true`.

---

### ✅ 8. What does this code log?

```javascript
const arr = [1, 2, 3];
arr[10] = 99;
console.log(arr.length);
```

**Output:**

```
11
```

**Explanation:**
Setting `arr[10] = 99` creates empty slots between index 3 and 9. So the length becomes `10 + 1 = 11`.

---

### ✅ 9. What is `-Infinity` in JavaScript?

**Definition:**
`-Infinity` is a special value that represents a number smaller than all other numbers.

**Example:**

```javascript
console.log(-Infinity);       // -Infinity
console.log(Number.NEGATIVE_INFINITY < -100000); // true
```

**Explanation:**
You get `-Infinity` from operations like dividing a negative number by 0:

```javascript
console.log(-1 / 0); // -Infinity
```

---

### ✅ 10. Can JavaScript code be split into multiple lines?

**Definition:**
Yes, JavaScript allows breaking code across lines for readability — especially using operators or proper syntax.

**Example:**

```javascript
let msg = "Geeks" +
          "for" +
          "Geeks";
console.log(msg);
```

**Output:**

```
GeeksforGeeks
```

**Multiline String Example (using `\n`):**

```javascript
console.log("This is line 1\nThis is line 2");
```

**Output:**

```
This is line 1
This is line 2
```

---

Great! Here are questions **11–22**, each with a clear **definition**, a **code example**, the **output**, and a brief **explanation**:

---

### 11. What will be the result of this expression?

```javascript
console.log(null ?? 'default');
console.log(undefined ?? 'default');
console.log(false ?? 'default');
```

**Definition:**
The **nullish coalescing operator** `??` returns the right‐hand side if the left is **`null`** or **`undefined`**, otherwise it returns the left.

**Example & Output:**

```javascript
null ?? 'default';       // "default"
undefined ?? 'default';  // "default"
false ?? 'default';      // false
```

**Explanation:**

1. `null` is nullish → yields `"default"`.
2. `undefined` is nullish → yields `"default"`.
3. `false` is *not* nullish (it’s a valid boolean), so it yields `false`.

---

### 12. Write JavaScript code for adding new elements dynamically.

**Definition:**
You can create new DOM elements with `document.createElement()`, set their content/attributes, then insert them with methods like `appendChild()`.

**Example:**

```html
<button onclick="create()">Click Here!</button>

<script>
function create() {
  // Create a <div>, not an invalid <geeks> tag
  let div = document.createElement('div');
  div.textContent = "GeeksforGeeks";
  div.setAttribute('class', 'note');
  document.body.appendChild(div);
}
</script>
```

**Output (on click):**
A new `<div class="note">GeeksforGeeks</div>` appears at the end of the page.

**Explanation:**

* `createElement('div')` makes a new `<div>`.
* `.textContent` sets its text.
* `.appendChild()` attaches it to `<body>`.

---

### 13. What are global variables? How are they declared, and what problems can they cause?

**Definition:**
**Global variables** live in the global scope—they’re accessible from any function or block.

* **Declared** by placing them **outside any function** (e.g. `let petName = "Rocky";`)
* **Or accidentally** by omitting `let`/`const`/`var` in non‐strict mode.

**Example:**

```javascript
let petName = "Rocky"; // global

function show() {
  console.log(petName);
}
show(); // "Rocky"
```

**Problems:**

* **Name collisions** if two scripts use the same global name.
* **Hard to debug/test**, since any code can change them.
* **Memory** stays allocated for page lifetime.

---

### 14. What do you mean by `null` in JavaScript?

**Definition:**
`null` is a primitive value meaning “no value” or “empty.” It’s explicitly assigned to indicate “nothing here.”

**Example:**

```javascript
let user = null;
console.log(user);            // null
console.log(typeof user);     // "object" (a known quirk)
```

**Explanation:**

* Use `null` when you want to **clear** a variable.
* `typeof null` returns `"object"` due to legacy reasons.

---

### 15. How to delete a specific property from an object?

**Definition:**
The `delete` operator removes a property from an object.

**Example:**

```javascript
let gfg = { Course: "DSA", Duration: 30 };
delete gfg.Course;
console.log(gfg);  // { Duration: 30 }
```

**Explanation:**

* `delete gfg.Course` removes that key entirely.
* After deletion, accessing `gfg.Course` yields `undefined`.

---

### 16. What will be the output of this code?

```javascript
let x = 0;
console.log(x++);  // Line A
console.log(++x);  // Line B
```

**Definition:**

* **Post-increment** (`x++`): returns the value **before** incrementing.
* **Pre-increment** (`++x`): increments **first**, then returns the new value.

**Output:**

```
0
2
```

**Explanation:**

1. Line A: `x++` → returns `0`, then `x` becomes `1`.
2. Line B: `++x` → `x` becomes `2`, then returns `2`.

---

### 17. What is the difference between `null` and `undefined`?

|                 | `undefined`                                                 | `null`                                    |
| --------------- | ----------------------------------------------------------- | ----------------------------------------- |
| **Assigned by** | JavaScript (uninitialized variables, missing args or props) | Developer (explicit “no value”)           |
| **Type**        | `undefined`                                                 | `object` (quirk)                          |
| **Meaning**     | “Value not yet assigned”                                    | “Intentional absence of any object/value” |

**Example:**

```javascript
let a;
console.log(a);         // undefined

let b = null;
console.log(b);         // null
```

---

### 18. What is the output of this snippet?

```javascript
const a = [1, 2, 3];
const b = [1, 2, 3];
console.log(a == b, a === b);
```

**Definition:**
Arrays (like all objects) are compared by **reference**, not by content.

**Output:**

```
false false
```

**Explanation:**

* `a` and `b` point to **different** array objects, so even loose (`==`) and strict (`===`) comparisons are `false`.

---

### 19. What is a prompt box?

**Definition:**
A **prompt box** is a browser dialog that asks the user to input text, returning the entered string or `null` if canceled.

**Example:**

```javascript
let name = prompt("Enter your name:", "Guest");
console.log(name);
```

**Explanation:**

* `prompt()` pauses script until the user clicks **OK**/**Cancel**.
* Good for simple input, though modern UX often avoids it.

---

### 20. What is the `this` keyword in JavaScript?

**Definition:**
`this` refers to the **current execution context**—the object that “owns” the running code.

**Key Rules:**

* **Global function:** `this` → `window` (or `undefined` in strict mode)
* **Object method:** `this` → that object
* **Event handler:** `this` → the DOM element
* **Arrow function:** `this` is **lexically inherited** from the outer scope

**Example:**

```javascript
let user = {
  name: "Aniket",
  greet() {
    console.log(this.name);
  }
};
user.greet(); // "Aniket"
```

---

### 21. Explain the working of timers in JavaScript and any drawbacks.

**Definition:**

* **`setTimeout(fn, ms)`**: runs `fn` once after `ms` milliseconds.
* **`setInterval(fn, ms)`**: runs `fn` repeatedly every `ms` ms.
* **`clearTimeout`/`clearInterval`**: cancels them.

**Example:**

```javascript
let id = setTimeout(() => console.log("Time's up!"), 2000);
// To cancel before 2 s:
// clearTimeout(id);
```

**Drawbacks:**

* **Drift**: `setInterval` can drift if callback takes longer than the interval.
* **Callback Hell**: nested timers can become hard to read.
* **No guaranteed timing**: browser throttles inactive tabs.

---

### 22. What will be logged by this code?

```javascript
for (let i = 0; i < 3; i++) {
  setTimeout(() => console.log(i), i * 100);
}
```

**Definition:**
Using `let` in a `for` loop creates a **fresh binding** of `i` for each iteration.

**Output (approximately after 0 ms, 100 ms, 200 ms):**

```
0
1
2
```

**Explanation:**

* Each arrow callback closes over its own `i`.
* They fire in order, logging `0`, then `1`, then `2`.

---

