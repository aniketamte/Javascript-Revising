Here's a detailed and simple notes version of your **"Expressions and Operators in JavaScript"** code with line-by-line explanation, bullet points, and examples — perfect for revision and interview prep:

---

## 📌 What is an Expression, Operand, and Operator?

* **Expression**: A combination of values, variables, and operators that results in a value.
  ➤ Example: `2 + 3` is an expression which evaluates to `5`.

* **Operand**: The values or variables used in expressions.
  ➤ In `a + b`, both `a` and `b` are operands.

* **Operator**: The symbol that performs the operation.
  ➤ In `a + b`, `+` is the operator.

---

## 1️⃣ Assignment Operators

* Used to assign values to variables.
* Syntax: `variable = value`
* Compound assignment: `+=`, `-=`, `*=`, `/=`, `%=`

```js
let x = 10; // '=' assigns 10 to x
console.log(`X = ${x}`); // Output: X = 10

let y = 5;
y += 3; // Same as y = y + 3 → y becomes 8
console.log(`Y = ${y}`); // Output: Y = 8

y *= 2; // Same as y = y * 2 → y becomes 16
console.log(`Y = ${y}`); // Output: Y = 16
```

---

## 2️⃣ Arithmetic Operators

* Used to perform mathematical calculations:

  * ➕ Addition (`+`)
  * ➖ Subtraction (`-`)
  * ✖️ Multiplication (`*`)
  * ➗ Division (`/`)
  * 🧮 Modulus (`%`): Remainder

```js
let x1 = 5, y1 = 10;
console.log(`Sum = ${x1 + y1}`); // 15

let a = 10, b = 7;
console.log(`Difference = ${a - b}`); // 3

let p = 4, q = 6;
console.log(`Multiplication = ${p * q}`); // 24

let m = 15, n = 3;
console.log(`Division = ${m / n}`); // 5

let c = 17, d = 5;
console.log(`Modulus = ${c % d}`); // 2
```

### 🔍 Challenge:

```js
let result = "hello" / 2;
console.log(result); // Output: NaN (Not a Number)
```

* Reason: JS tries to divide a string that’s not a number → NaN.

---

## 3️⃣ String Operators

* `+` operator also works for **string concatenation**.
* Joins two strings into one.

```js
var str1 = "Hello";
var str2 = "World";
var str3 = str1 + str2;
console.log(`String = ${str3}`); // Output: HelloWorld
```

### ⚠️ Interview Trick:

```js
console.log("5" + 3); // Output: "53"
```

* JS converts `3` to a string and **concatenates**, not adds.

---

## 4️⃣ Comparison Operators

* Used to compare two values, returns `true` or `false`.

| Operator | Meaning                           | Example     | Result |
| -------- | --------------------------------- | ----------- | ------ |
| `==`     | Equal (with type conversion)      | `5 == "5"`  | true   |
| `===`    | Strict Equal (no type conversion) | `5 === "5"` | false  |
| `!=`     | Not Equal (with type conversion)  | `5 != "5"`  | false  |
| `!==`    | Strict Not Equal                  | `5 !== "5"` | true   |
| `>`      | Greater than                      | `5 > 2`     | true   |
| `<`      | Less than                         | `5 < 10`    | true   |
| `>=`     | Greater or equal                  | `10 >= 10`  | true   |
| `<=`     | Less or equal                     | `5 <= 10`   | true   |

```js
console.log(5 == 5);     // true
console.log(5 === "5");  // false
console.log(5 != "5");   // false
console.log(5 > 2);      // true
console.log(5 < 10);     // true
console.log(10 <= 10);   // true
console.log(5 >= 10);    // false
```

---

## 5️⃣ Logical Operators

* Combine multiple conditions:

  * `&&` (AND)
  * `||` (OR)
  * `!` (NOT)

```js
var x2 = 5, y2 = 10;
console.log(x2 > 0 && y2 > 0); // true (both true)

var a2 = 15, b2 = 0;
console.log(a2 > 10 || b2 > 10); // true (one is true)

var isOpen = false;
console.log(!isOpen); // true (NOT false)
```

### 🎯 Interview Program:

```js
var age = 19;
var hadDrivingLicense = true;
console.log(age >= 18 && hadDrivingLicense); // true
```

* If `hadDrivingLicense = false`, result is `false`.

---

## 6️⃣ Conditional (Ternary) Operator

* Syntax: `condition ? trueValue : falseValue`
* Short form of if-else

```js
var age = 18;
var res = age >= 18 ? "Yes" : "No";
console.log(`Eligible to Drive ? => ${res}`); // Yes
```

### 🧪 Example:

```js
var scores = 88;
var Result = scores >= 60 ? "Pass" : "Fail";
console.log(`Result = ${Result}`); // Pass
```

---

## 🧠 Combined Interview Questions

```js
console.log("5" - 3); // Output: 2
// JS converts "5" to 5 and subtracts.

console.log(2 < 12 < 5); // Output: true
// Step 1: 2 < 12 → true (which is 1 in number)
// Step 2: 1 < 5 → true

console.log("20" + 10 + 10); // Output: "201010"
// "20" + 10 → "2010", then "2010" + 10 → "201010"
```

---

Here are detailed and easy-to-understand JavaScript notes based on your request. The topics include **Conditional Statements** (if, if-else, switch) and **Loops** (while, do-while, for) explained in simple bullet points, with line-by-line code examples and explanations:

---

## ✅ Conditional Statements

### 🔹 `if` and `if...else` Statements

* Used to make decisions based on a condition.
* The `if` block runs when the condition is `true`.
* The `else` block runs when the condition is `false`.

#### 🔸 Syntax

```javascript
if (condition) {
  // Executes if condition is true
} else {
  // Executes if condition is false
}
```

#### 🔸 Example

```javascript
let age = 20;

if (age >= 18) {
  console.log("You are an adult.");
} else {
  console.log("You are not an adult.");
}
```

🧠 **Explanation Line-by-Line:**

* `let age = 20;` → declares a variable named `age` with value 20.
* `if (age >= 18)` → checks if age is 18 or more.
* `console.log("You are an adult.");` → prints this if condition is true.
* `else` → used when the condition is false.
* `console.log("You are not an adult.");` → prints if under 18.

---

### 🔹 Voting Eligibility Checker (Interview Example)

```javascript
let userAge = 22;
let isCitizen = true;
let isRegistered = false;

if (userAge >= 18 && isCitizen && isRegistered) {
  console.log("You are eligible to vote.");
} else if (userAge >= 18 && !isCitizen) {
  console.log("You are not eligible due to citizenship status.");
} else if (userAge >= 18 && isCitizen && !isRegistered) {
  console.log("You are not eligible due to registration status.");
} else {
  console.log("You are not eligible to vote.");
}
```

---

### 🔹 Common Interview Programs

#### ✅ 1. Even or Odd

```javascript
let num = 7;

if (num % 2 === 0) {
  console.log("Even number");
} else {
  console.log("Odd number");
}
```

#### ✅ 2. Check Prime Number

```javascript
let num = 7;
let isPrime = true;

if (num <= 1) {
  isPrime = false;
} else {
  for (let i = 2; i < num; i++) {
    if (num % i === 0) {
      isPrime = false;
      break;
    }
  }
}

if (isPrime) {
  console.log(num + " is a prime number");
} else {
  console.log(num + " is not a prime number");
}
```

#### ✅ 3. Positive, Negative, or Zero

```javascript
let num = -5;

if (num > 0) {
  console.log("Positive");
} else if (num < 0) {
  console.log("Negative");
} else {
  console.log("Zero");
}
```

---

## 🔁 Switch Statement

* Used when you have many conditions based on one value.

#### 🔸 Syntax

```javascript
switch (expression) {
  case value1:
    // Code
    break;
  case value2:
    // Code
    break;
  default:
    // Default code
}
```

---

### 🔸 Shape Area Calculator – Switch Example

```javascript
let areaOfShapes = "Square";
let a = 5, b = 10, r = 7;

switch (areaOfShapes) {
  case "Rectangle":
    console.log("Area of Rectangle: " + (a * b));
    break;
  case "Circle":
    console.log("Area of Circle: " + (3.14 * r * r));
    break;
  case "Square":
    console.log("Area of Square: " + (a * a));
    break;
  default:
    console.log("Sorry the shape is not available.");
}
```

---

## 🔄 Loops in JavaScript

### 🔹 While Loop

* Repeats code **while** a condition is true.

```javascript
let i = 1;

while (i <= 10) {
  console.log(i);
  i++;
}
```

✅ **Explanation:**

* Start with `i = 1`.
* While `i <= 10`, print it and increase by 1.
* Stops when `i` becomes 11.

👉 **Practice:** Table of 5

```javascript
let i = 1;
while (i <= 10) {
  console.log("5 x " + i + " = " + (5 * i));
  i++;
}
```

---

### 🔹 Do...While Loop

* Executes at least **once**, then checks the condition.

```javascript
let i = 1;

do {
  console.log(i);
  i++;
} while (i <= 10);
```

✅ **Example Use Case: Input Validation**

```javascript
let userInput;

do {
  userInput = prompt("Enter a number greater than 10:");
} while (userInput <= 10);
```

---

### 🔹 For Loop

* Best when you know how many times to run.

```javascript
for (let i = 1; i <= 10; i++) {
  console.log(i);
}
```

✅ **Parts:**

* `let i = 1` → start from 1
* `i <= 10` → condition
* `i++` → increment

---

#### 🔸 Sum from 1 to 10

```javascript
let sum = 0;
for (let i = 1; i <= 10; i++) {
  sum += i;
}
console.log("Sum:", sum); // Output: 55
```

---

#### 🔸 Times Table of 5

```javascript
for (let i = 1; i <= 10; i++) {
  console.log("5 x " + i + " = " + (5 * i));
}
```

---

#### 🔸 Homework Table for 8, 9, 12, 15

```javascript
let numbers = [8, 9, 12, 15];

for (let j = 0; j < numbers.length; j++) {
  let n = numbers[j];
  console.log(`\nTable of ${n}`);
  for (let i = 1; i <= 10; i++) {
    console.log(`${n} x ${i} = ${n * i}`);
  }
}
```

---

### 🔹 Check Leap Year

```javascript
let year = 2024;

if ((year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0)) {
  console.log(year + " is a Leap Year");
} else {
  console.log(year + " is not a Leap Year");
}
```

---

Here’s a **detailed and simple explanation** (with bullet points, examples, and line-by-line breakdown) of the **JavaScript function concepts** from your code. This guide will help you **understand each topic clearly** and is perfect for revision or beginners.

---

## 🟩 JavaScript Functions – Notes with Examples & Explanation

---

### ✅ What is a Function in JavaScript?

* A **function** is a **block of code** that performs a specific task.
* It is **reusable**—you can call the function as many times as needed.
* Helps in **modularizing code** and making it **easier to read and manage**.

```javascript
function sum(a, b) {
  return a + b;
}
console.log(`Sum = ${sum(2, 3)}`);
```

🔹 **Explanation**:

* `function sum(a, b)` – Declares a function named `sum` with two parameters `a` and `b`.
* `return a + b;` – Returns the sum of `a` and `b`.
* `sum(2, 3)` – Function is called with `2` and `3` as arguments → returns `5`.

---

### ✅ Function Declaration

```javascript
function greet() {
  console.log("Hello Guys, Welcome to Thapa Technical JS Course ");
}
```

🔹 **Explanation**:

* `function greet()` – Declares a function named `greet` with no parameters.
* `console.log(...)` – Outputs a welcome message.

✅ **Calling the Function**:

```javascript
greet();
```

---

### ✅ Function Parameters vs Arguments

| Term       | Meaning                                   | Example              |
| ---------- | ----------------------------------------- | -------------------- |
| Parameters | Placeholders in function definition       | `function add(a, b)` |
| Arguments  | Actual values passed during function call | `add(5, 3)`          |

```javascript
function greetStudent(name) {
  console.log(`Hello ${name}, Welcome to Thapa Technical JS Course`);
}

greetStudent("Vinod");
greetStudent("Ram");
```

🔹 **Explanation**:

* `name` is the parameter.
* `"Vinod"` and `"Ram"` are arguments passed to the function.

---

### ✅ Practice: Sum of Two Numbers Using Function

```javascript
function sums(a, b) {
  console.log(a + b);
}
sums(5, 6); // Output: 11
```

---

### ✅ Function Expression

* You can also define a function **inside a variable**.

```javascript
var res1 = function add(a, b) {
  console.log(a + b);
};
res1(5, 6); // Output: 11
```

🔹 **Explanation**:

* `function add(a, b)` is assigned to `res1`.
* `res1(5, 6)` calls the function.

---

### ✅ Anonymous Function

* A function **without a name** is called **anonymous**.

```javascript
var res1 = function (a, b) {
  console.log(a + b);
};
res1(5, 6); // Output: 11
```

🔹 Used when:

* You don’t need to reuse the function elsewhere.
* You want to pass the function as a parameter.

---

### ✅ Return Keyword

```javascript
function Sum(a, b){
  return a + b;
}
var final = Sum(5, 3);
console.log(final); // Output: 8
```

🔹 **Explanation**:

* `return` sends a value back to the caller.
* `Sum(5, 3)` returns 8 → stored in `final`.

---

### ✅ IIFE (Immediately Invoked Function Expression)

* Function that runs **immediately** after being defined.

```javascript
(function () {
  console.log("This is IIFE");
})();
```

🔹 **Use Case**: Avoids polluting the global scope.

---

## 🧠 Practice Problems (with Explanation)

---

### ✅ 1. Calculator Function (with switch case)

```javascript
function calc(a, b, operator){
  let RESULT;
  switch (operator) {
    case "+":
      RESULT = a + b;
      break;
    case "-":
      RESULT = a - b;
      break;
    case "*":
      RESULT = a * b;
      break;
    case "/":
      RESULT = a / b;
      break;
    default:
      return "No operator found";
  }
  return RESULT;
}
console.log(calc(5, 2, "+")); // Output: 7
```

🔹 **Explanation**:

* Takes 3 parameters: `a`, `b`, and `operator`.
* Uses `switch` to check which operation to perform.
* Returns the result of the operation.

---

### ✅ 2. Reverse a String (without built-in reverse method)

```javascript
function reverseString(str) {
  let reversed = "";
  for (let i = str.length - 1; i >= 0; i--) {
    reversed += str[i];
  }
  return reversed;
}
console.log(reverseString("hello")); // Output: "olleh"
```

🔹 **Explanation**:

* Start from the last character and add it to `reversed`.
* Continue till the first character.

---

### ✅ 3. Palindrome Check

```javascript
function isPalindrome(str) {
  let reversed = "";
  for (let i = str.length - 1; i >= 0; i--) {
    reversed += str[i];
  }
  return str === reversed;
}
console.log(isPalindrome("madam")); // Output: true
console.log(isPalindrome("hello")); // Output: false
```

🔹 **Explanation**:

* Reverse the string manually.
* Compare original and reversed → return true if equal.

---

## ✅ Summary Table

| Concept                 | Description                             | Example                 |
| ----------------------- | --------------------------------------- | ----------------------- |
| Function Declaration    | Named function using `function`         | `function greet() {}`   |
| Function Expression     | Function stored in a variable           | `var x = function() {}` |
| Anonymous Function      | Function without a name                 | `function () {}`        |
| Parameters              | Variables in function definition        | `function add(a, b)`    |
| Arguments               | Values passed during function call      | `add(3, 4)`             |
| Return Statement        | Sends value back to the caller          | `return a + b;`         |
| IIFE                    | Immediately Invoked Function Expression | `(function() {})();`    |
| Switch-Case in Function | Used for multiple condition branching   | Calculator example      |

---

Here are **detailed, simple notes** on **JavaScript Arrays**, with **bullet points**, **examples**, and **line-by-line explanations** to help you understand and remember easily:

---

## 🧠 **What is an Array in JavaScript?**

* An **Array** is a special type of object in JavaScript used to store **multiple values** in a single variable.
* Arrays are **zero-indexed**, which means the first element is at index `0`.

```js
let fruits = ["apple", "banana", "mango"];
```

* `fruits[0]` → `"apple"`
* `fruits[1]` → `"banana"`

---

## 📚 **Important Terminology**

* ✅ **Iterable**: An object (like an array or string) over which you can use a `for...of` loop.
* ✅ **Array-like Object**: Any object that has a `length` property and can be accessed using indexes (e.g., `arguments` object).
* ✅ **Arrays are Objects**: Arrays are actually objects with numeric keys.
* ✅ **typeof Operator**: Returns `"object"` even for arrays.

```js
typeof fruits; // "object"
Array.isArray(fruits); // true ✅ use this to check if it's really an array
```

---

## ✨ **Creating Arrays**

### 🔹 Using Array Literals (Most common)

```js
let numbers = [1, 2, 3, 4, 5];
```

### 🔹 Using Array Constructor

```js
let fruits = new Array("apple", "banana", "mango");
```

### 🔹 Empty Array

```js
let emptyArray = [];
```

---

## 🎯 **Accessing & Modifying Elements**

### ✅ Access

```js
let arr = ["a", "b", "c"];
console.log(arr[1]); // "b"
```

### ✅ Modify

```js
arr[1] = "B";
console.log(arr); // ["a", "B", "c"]
```

---

## 🔁 **Traversing Arrays**

### 1️⃣ **for...of loop**

```js
for (let fruit of fruits) {
  console.log(fruit); // Prints each fruit
}
```

### 2️⃣ **for...in loop**

```js
for (let index in fruits) {
  console.log(index, fruits[index]);
}
```

### 3️⃣ **forEach method**

```js
fruits.forEach((item, index) => {
  console.log(index, item);
});
```

### 4️⃣ **map method** – returns a new array

```js
const doubled = numbers.map(num => num * 2);
console.log(doubled); // [2, 4, 6, 8, 10]
```

---

## 🔧 **Array CRUD Operations**

### ➕ Insert/Add

* `push()` – Adds to end
* `unshift()` – Adds to start

```js
numbers.push(6);     // [1, 2, 3, 4, 5, 6]
numbers.unshift(0);  // [0, 1, 2, 3, 4, 5, 6]
```

### ➖ Delete

* `pop()` – Removes from end
* `shift()` – Removes from start

```js
numbers.pop();    // [0, 1, 2, 3, 4, 5]
numbers.shift();  // [1, 2, 3, 4, 5]
```

---

## ✂️ **splice() Method** – Add/Delete/Update at any position

```js
let fruits = ["apple", "banana", "mango"];
fruits.splice(1, 1, "orange"); // replaces "banana" with "orange"
console.log(fruits); // ["apple", "orange", "mango"]
```

### 🔍 **Challenge Time**

```js
const months = ["Jan", "march", "April", "June", "July"];

// Add "Dec"
months.splice(5, 0, "Dec");

// Update "march" to "March"
const index = months.indexOf("march");
if (index !== -1) {
  months.splice(index, 1, "March");
}

// Delete "June"
const juneIndex = months.indexOf("June");
if (juneIndex !== -1) {
  months.splice(juneIndex, 1);
}
```

---

## 🔍 **Searching in Arrays**

### 1️⃣ **indexOf()**

```js
numbers.indexOf(4); // returns 3
```

### 2️⃣ **lastIndexOf()**

```js
[1, 2, 3, 2].lastIndexOf(2); // 3
```

### 3️⃣ **includes()**

```js
numbers.includes(5); // true
```

---

## 🧪 **Filter & Search**

### 🔹 **find()** – Returns the first matching element

```js
const result = numbers.find(num => num > 3); // 4
```

### 🔹 **findIndex()**

```js
numbers.findIndex(num => num > 3); // returns index of 4
```

### 🔹 **filter()** – Returns a new array with all matching

```js
const even = numbers.filter(num => num % 2 === 0);
```

### 🧑‍💻 **E-commerce Use Case**

```js
let cart = [1, 2, 6, 3];
let newCart = cart.filter(item => item !== 6); // removes 6
```

---

## 🎯 **Practical Filter Example**

```js
const products = [
  { name: "Laptop", price: 1200 },
  { name: "Phone", price: 800 },
  { name: "Tablet", price: 300 },
  { name: "Smartwatch", price: 150 }
];

const cheapProducts = products.filter(product => product.price <= 500);
```

---

## 🔤 **Sorting Arrays**

```js
const fruits = ["Banana", "Apple", "Orange"];
fruits.sort(); // ["Apple", "Banana", "Orange"]

const nums = [10, 1, 5];
nums.sort(); // [1, 10, 5] ❌ wrong

nums.sort((a, b) => a - b); // [1, 5, 10] ✅ numeric sort
```

---

## 🚀 **Important Array Methods**

### 1️⃣ **map()**

```js
const nums = [1, 2, 3];
const squared = nums.map(n => n * n);
```

### 2️⃣ **filter()**

```js
const evens = nums.filter(n => n % 2 === 0);
```

### 3️⃣ **reduce()**

```js
const sum = nums.reduce((acc, curr) => acc + curr, 0); // 6
```

### 📌 Explanation:

* `acc`: Accumulator, starts with `0`
* `curr`: Current value in each loop
* Adds up all values step-by-step

---

Here’s a **detailed and simple note on Date & Time Objects in JavaScript**, written in bullet points with clear explanations and examples line by line:

---

## 🕒 JavaScript Date & Time Objects

### 📌 1. What is a Date Object?

* In JavaScript, the `Date` object is used to work with **dates and times**.
* It lets you **create**, **get**, and **set** dates and times.

---

### 📌 2. How to Create a Date Object?

#### ✅ Syntax:

```js
new Date();
```

#### 🔟 There are 10 ways to create a Date object:

---

#### ➤ `new Date()`

* Creates a Date object for the **current date and time**.

```js
const currentDate = new Date();
console.log(currentDate);
```

🧠 Output example: `2025-05-08T10:30:00.000Z`

* `"T"` separates date and time. `"Z"` means UTC timezone.

---

#### ➤ `new Date(dateString)`

* Creates a date object from a string.

```js
const date = new Date("2024-02-19T10:44:09.274Z");
console.log(date);
```

📌 If you pass a properly formatted string, it will convert it to a date.

---

#### ➤ `new Date(year, month)`

```js
const date = new Date(2025, 12);
console.log(date);
```

* ⚠️ Months are **0-based** in JavaScript.
* 12 means January of the next year (2026).

---

#### ➤ `new Date(year, month, day)`

```js
const date = new Date(2024, 1, 19); 
console.log(date);
```

🧠 1 = February (Month starts from 0)

---

#### ➤ `new Date(year, month, day, hours)`

```js
const date = new Date(2024, 1, 19, 10);
console.log(date);
```

---

#### ➤ `new Date(year, month, day, hours, minutes)`

```js
const date = new Date(2024, 1, 19, 10, 44);
console.log(date);
```

---

#### ➤ `new Date(year, month, day, hours, minutes, seconds)`

```js
const date = new Date(2024, 1, 19, 10, 44, 9);
console.log(date);
```

---

#### ➤ `new Date(year, month, day, hours, minutes, seconds, milliseconds)`

```js
const date = new Date(2024, 1, 19, 10, 44, 9, 274);
console.log(date);
```

---

#### ➤ `new Date(milliseconds)`

* Milliseconds since **Jan 1, 1970 (Unix Epoch)**

```js
const ms = Date.now(); // Current timestamp in ms
const date = new Date(ms);
console.log(date);
```

---

### 📌 3. Date String Formats

```js
const d1 = new Date("2024-01-05");         // YYYY-MM-DD
const d2 = new Date("January 5, 2024");    // Month Day, Year
console.log(d1, d2);
```

---

### 📌 4. Getting Date Components

```js
const date = new Date();
console.log(date.getFullYear()); // Year
console.log(date.getMonth());    // Month (0-11)
console.log(date.getDate());     // Day of month (1-31)
console.log(date.getDay());      // Day of week (0=Sunday, 6=Saturday)
```

---

### 📌 5. Setting Date Components

```js
const date = new Date();

date.setFullYear(2025); // Set year to 2025
date.setMonth(5);       // Set month to June (0-indexed)
date.setDate(15);       // Set day to 15th
console.log(date);
```

---

### 📌 6. Getting Time Components

```js
const date = new Date();

console.log(date.getHours());      // Current hour
console.log(date.getMinutes());    // Current minutes
console.log(date.getSeconds());    // Current seconds
console.log(date.getTime());       // Milliseconds since Jan 1, 1970
```

---

### 📌 7. Setting Time Components

```js
const date = new Date();

date.setHours(10);         // Set hours to 10
date.setMinutes(30);       // Set minutes to 30
date.setSeconds(45);       // Set seconds to 45
date.setMilliseconds(500); // Set milliseconds to 500
console.log(date);
```

---

### 📌 8. `setTime()` Method

```js
const date = new Date();
date.setTime(1832090690883); // Set time using milliseconds
console.log(date);
```

---

### 📌 9. Useful Date Methods

| Method                 | Description                               | Example Output          |
| ---------------------- | ----------------------------------------- | ----------------------- |
| `toLocaleString()`     | Returns date & time as per local settings | "5/8/2025, 10:35:00 AM" |
| `toLocaleDateString()` | Returns only date part                    | "5/8/2025"              |
| `toLocaleTimeString()` | Returns only time part                    | "10:35:00 AM"           |
| `Date.parse()`         | Parses a string into milliseconds         | 1703254200000           |

```js
const d = new Date();
console.log(d.toLocaleString());
console.log(d.toLocaleDateString());
console.log(d.toLocaleTimeString());

const ms = Date.parse("2024-02-19T16:30:00Z");
console.log(ms);
```

---

### 📌 10. Bonus: `Date.now()` vs `new Date().getTime()`

```js
console.log(Date.now());            // Current timestamp
console.log(new Date().getTime());  // Same result
```

✅ Use `Date.now()` if you just want the current timestamp.
✅ Use `getTime()` if you already have a date object.

---

## 🎯 Interview Questions

### ❓ Add Days to Date

```js
function addDaysToDate(date, days) {
  const result = new Date(date);
  result.setDate(result.getDate() + days);
  return result;
}

// Example
const date = new Date("2024-02-29");
const newDate = addDaysToDate(date, 7);
console.log(newDate.toLocaleDateString()); // 3/7/2024
```

---

### ❓ Difference in Days Between Two Dates

```js
function getDaysDifference(date1, date2) {
  const diffInMs = date2 - date1;
  return diffInMs / (1000 * 60 * 60 * 24);
}

// Example
const d1 = new Date("2024-02-19");
const d2 = new Date("2024-03-01");
console.log(getDaysDifference(d1, d2)); // 11
```

---

Here are **detailed and simple notes** on the above code with **bullet points, examples, and line-by-line explanations**, suitable for beginners and interview preparation.

---

## 🧠 **JavaScript Data Types – Notes with Examples**

---

### 🔹 **1. Concatenation in JavaScript (`+` operator)**

* In JavaScript, the `+` sign is **used in two ways**:

  * For **addition** (when both operands are numbers)
  * For **concatenation** (when at least one operand is a string)

#### ✅ Example:

```js
const str = "Hello " + "World";
console.log(`Concated String is => ${str}`);
```

* `"Hello " + "World"`
  🔹 Both are strings → So they get **joined (concatenated)**.
  🔹 Output: `"Hello World"`

* `console.log(...)` prints:
  🔸 `Concated String is => Hello World`

---

### 🔹 **2. Type Coercion in JavaScript**

* **Type Coercion** means **JavaScript automatically converts** one data type into another.
* 🔸 There are **two types**:

  * **Implicit Coercion** → Done **automatically**
  * **Explicit Coercion** → Done **manually by programmer**

#### ✅ Example:

```js
let sum = "5" - 5;
console.log(`Sum is => ${sum}`);
```

* `"5"` is a **string**, `5` is a **number**.
* `-` operator forces **string to be converted into a number** → `"5"` becomes `5`
* So: `5 - 5 = 0`
* 🔸 Output: `Sum is => 0`

> ⚠️ If you had used `"5" + 5`, it would have been `"55"` (because `+` becomes string concatenation when one side is string).

---

## ⚠️ **3. Tricky Interview Questions – Line-by-Line Explanation**

Let's understand these one-by-one:

---

### ▶️ `console.log(10 + "20");`

* One side is **number (10)**, the other is **string ("20")**
* `+` operator sees a string → Converts **10 to "10"**
* Joins them: `"10" + "20"` → `"1020"`

✅ Output: `"1020"`

---

### ▶️ `console.log(9 - "5");`

* `9` is number, `"5"` is string.
* `-` operator expects numbers → `"5"` is converted to `5`
* `9 - 5 = 4`

✅ Output: `4`

---

### ▶️ `console.log("Java" + "Script");`

* Both operands are strings.
* So they're concatenated: `"JavaScript"`

✅ Output: `"JavaScript"`

---

### ▶️ `console.log(" " + " ");`

* Two spaces as strings → concatenated
* `" " + " "` → `"  "` (string with two spaces)

✅ Output: `"  "` (a string with 2 blank spaces)

---

### ▶️ `console.log(" " + 0);`

* `" "` is a string (space), `0` is number.
* Since one is string → `0` becomes `"0"`
* `" " + "0"` → `" 0"`

✅ Output: `" 0"`

---

### ▶️ `console.log("vinod" - "thapa");`

* Both are strings.
* `-` operator expects numbers.
* `"vinod"` and `"thapa"` can't be converted to numbers → result is **NaN** (Not a Number)

✅ Output: `NaN`

---

### ▶️ `console.log(true + true);`

* `true` becomes `1`
* `1 + 1 = 2`

✅ Output: `2`

---

### ▶️ `console.log(true + false);`

* `true` → `1`, `false` → `0`
* `1 + 0 = 1`

✅ Output: `1`

---

### ▶️ `console.log(false + true);`

* `false` → `0`, `true` → `1`
* `0 + 1 = 1`

✅ Output: `1`

---

### ▶️ `console.log(false - true);`

* `false` → `0`, `true` → `1`
* `0 - 1 = -1`

✅ Output: `-1`

---

## 📌 Summary Table:

| Expression          | Explanation                        | Output         |
| ------------------- | ---------------------------------- | -------------- |
| `10 + "20"`         | Number + String → String concat    | `"1020"`       |
| `9 - "5"`           | String "5" → number 5 → 9 - 5      | `4`            |
| `"Java" + "Script"` | Both strings → Concatenated        | `"JavaScript"` |
| `" " + " "`         | Space + space → Concatenated       | `"  "`         |
| `" " + 0`           | Space + number → " 0"              | `" 0"`         |
| `"vinod" - "thapa"` | Both are strings → Cannot subtract | `NaN`          |
| `true + true`       | 1 + 1 →                            | `2`            |
| `true + false`      | 1 + 0 →                            | `1`            |
| `false + true`      | 0 + 1 →                            | `1`            |
| `false - true`      | 0 - 1 →                            | `-1`           |

---

Here's a **detailed and simple bullet-point-style notes** with **line-by-line explanation** of your JavaScript code covering **Data Types**, **`typeof` operator**, **truthy/falsy**, and **`parseInt`/`parseFloat`**:

---

## ✅ **JavaScript Data Types Notes (Detailed & Simple)**

---

### 📌 **What are Data Types?**

* Data Types define **what kind of value** a variable can store.
* JavaScript has **two main categories**:

  1. **Primitive Data Types** (basic types)
  2. **Object (Non-Primitive) Data Types**

---

### 🟠 **Primitive Data Types in JavaScript**

#### 1. **Number**

* Used to store **numeric values** (integers or decimals).

```js
var myFavNum = 5;
console.log(`My Favourite Number ${myFavNum}`);
```

* `myFavNum` holds a number `5`.
* Output: `My Favourite Number 5`

---

#### 2. **String**

* Used to store **text** (sequence of characters inside quotes).

```js
var myName = "Aniket";
console.log(`My name is ${myName}`);
```

* `myName` holds string `"Aniket"`.
* Output: `My name is Aniket`

---

#### 3. **Boolean**

* Represents only **two values**: `true` or `false`

```js
var isRaining = false;
var isBoy = true;

console.log(isRaining); // false
console.log(isBoy);     // true
```

---

#### 4. **undefined**

* A variable declared **but not assigned any value** is `undefined`.

```js
var vinod;
console.log(`Variable is ${vinod}`); // Variable is undefined
```

---

#### 5. **null**

* Represents **no value** (manually set by the programmer).

```js
var memories = null;
console.log(`Memories is => ${memories}`); // Memories is => null
```

---

#### 6. **BigInt**

* Used for **very large numbers** beyond the safe integer limit.

```js
const bigNumber = 1234567890123456789012345678901234567890n;
console.log(`bigNumber : ${bigNumber}`);
```

* Notice the `n` at the end.

---

#### 7. **Symbol**

* Used to create **unique identifiers**.

```js
const mySymbol = Symbol("description");
```

* Every symbol is **unique**, even if the description is the same.

---

### 🟢 **Non-Primitive (Object) Data Types**

1. **Object** – Key-value pairs
2. **Array** – List of values
3. **Date** – Date/time values

(You can learn more when you dive into Objects and Arrays.)

---

## ❓ **Interview Questions with Explanation**

---

### 🔸 1. Difference between `null` and `undefined`

| Feature      | `undefined`                        | `null`                      |
| ------------ | ---------------------------------- | --------------------------- |
| Type         | `undefined`                        | `object` (JavaScript quirk) |
| Meaning      | Variable declared but not assigned | Explicitly no value         |
| Who sets it? | JavaScript engine                  | You (developer)             |

---

### 🔸 2. What is `typeof` operator?

* Used to **check the data type** of a value.

```js
console.log(typeof "Hello"); // string
console.log(typeof 10);      // number
```

---

### 🔸 3. What is the result of `typeof null`?

```js
var memo = null;
console.log(`Memories is a type of ${typeof memo}`); 
```

* Output: `object` (This is a known **JavaScript bug** — technically null is **not** an object, but `typeof` says it is.)

---

### 🔸 4. What are Primitive Data Types?

* Already explained above: String, Number, Boolean, undefined, null, BigInt, Symbol.

---

### 🔸 5. Convert a String to a Number

```js
var myFavNum = "20";
console.log(typeof myFavNum);       // string
console.log(typeof +myFavNum);      // number
```

* `+` before a string will **convert it into a number**.

---

### 🔸 6. Convert a Number to a String

```js
let str = 5;
console.log(typeof (str + ""));     // string
console.log(typeof String(str));    // string
```

* Add `""` or use `String()` function to convert to a string.

---

### 🔸 7. Truthy and Falsy Values

✅ **Truthy** = values that evaluate to `true` in `if` condition
❌ **Falsy** = values that evaluate to `false`

**Falsy Examples**:

* `false`, `0`, `""`, `null`, `undefined`, `NaN`

```js
var MyName = 0;
if(MyName){
    console.log(`${MyName} is truthy`);
} else {
    console.log(`${MyName} is falsy`);
}
```

* Output: `0 is falsy`

---

## 🔍 `parseInt()` & `parseFloat()` Explained

---

### 🔹 `parseInt()`

* Converts a string to an **integer**.
* Stops parsing at the first **non-digit** character.

```js
const myNumber = parseInt("42");
console.log(myNumber); // 42
```

```js
parseInt("42.5"); // 42 (decimal part removed)
parseInt("   123 "); // 123 (ignores spaces)
parseInt("1.9"); // 1
parseInt("xyz"); // NaN
```

---

### 🔹 `parseFloat()`

* Converts a string to a **floating point (decimal)** number.

```js
const myNumber1 = parseFloat("42.5");
console.log(myNumber1); // 42.5
```

---

### 🔸 Difference Between `parseInt()` and `parseFloat()`

| Feature          | `parseInt()`         | `parseFloat()`           |
| ---------------- | -------------------- | ------------------------ |
| Output Type      | Integer              | Floating Point (Decimal) |
| Decimal Handling | Removes decimal part | Keeps decimal part       |
| Input: `"42.5"`  | `42`                 | `42.5`                   |

---

### 🔸 Invalid Conversions using `parseInt()`

```js
console.log(parseInt("&123"));  // NaN (invalid character)
console.log(parseInt("-123"));  // -123 (valid negative)
console.log(parseInt("xyz"));   // NaN
```

---

### 🔹 What is NaN?

* **NaN** stands for "Not a Number".
* It’s returned when JavaScript **fails to convert** a string to a number.

```js
console.log(parseInt("abc")); // NaN
```

---

Do you want these notes in a downloadable **PDF format** or continued for Object, Array, and Date types?
