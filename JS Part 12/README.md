Here are **detailed and simple notes on `async` and `await` in JavaScript**, with line-by-line explanation and examples:

---

## 🔹 What is `async/await`?

* `async` and `await` are **modern ways to handle promises** in JavaScript.
* They make asynchronous code **look like synchronous code**, which is easier to **read and understand**.

---

## 🧠 Basic Concepts

| Keyword | Meaning                                                             |
| ------- | ------------------------------------------------------------------- |
| `async` | Used before a function to make it return a **Promise**.             |
| `await` | Used inside `async` functions to **wait for a Promise to resolve**. |

---

## ✅ Basic Syntax

```javascript
async function myFunction() {
  let result = await somePromise;
  console.log(result);
}
```

---

## 🔍 Simple Example

```javascript
function fetchData() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("✅ Data fetched");
    }, 2000);
  });
}

async function getData() {
  console.log("Fetching data...");
  let result = await fetchData();  // waits until fetchData() is resolved
  console.log(result);
}

getData();
```

### 📝 Output:

```
Fetching data...
✅ Data fetched
```

---

## 🔄 Step-by-Step Explanation

1. `fetchData()` returns a promise that resolves in 2 seconds.
2. `getData()` is marked `async` so it can use `await`.
3. `await fetchData()` waits for the result before going to the next line.
4. The result is printed after the promise is resolved.

---

## 🚫 Error Handling with `try...catch`

```javascript
function fetchUser() {
  return new Promise((resolve, reject) => {
    let userExists = false;
    setTimeout(() => {
      if (userExists) {
        resolve("User found");
      } else {
        reject("User not found");
      }
    }, 1000);
  });
}

async function getUser() {
  try {
    let result = await fetchUser();  // wait for promise
    console.log("✅", result);
  } catch (error) {
    console.log("❌", error);  // handles rejection
  }
}

getUser();
```

### 📝 Output (if `userExists = false`):

```
❌ User not found
```

---

## ✅ Benefits of `async/await` over `.then()`

| Feature        | `.then()`/`.catch()`           | `async/await`               |
| -------------- | ------------------------------ | --------------------------- |
| Code Style     | Chain-based                    | Looks like normal code      |
| Readability    | Slightly harder in long chains | Very clean and easy to read |
| Error Handling | Uses `.catch()`                | Uses `try...catch`          |
| Learning Curve | Easier if you know promises    | Easier for beginners        |

---

## 🔁 Chaining Multiple Awaits

```javascript
function step1() {
  return new Promise(resolve => setTimeout(() => resolve("Step 1"), 1000));
}
function step2() {
  return new Promise(resolve => setTimeout(() => resolve("Step 2"), 1000));
}
function step3() {
  return new Promise(resolve => setTimeout(() => resolve("Step 3"), 1000));
}

async function runSteps() {
  let res1 = await step1();
  console.log(res1);

  let res2 = await step2();
  console.log(res2);

  let res3 = await step3();
  console.log(res3);
}

runSteps();
```

### 📝 Output (1 second between each step):

```
Step 1
Step 2
Step 3
```

---

## 🧾 Summary

* `async` makes a function return a promise.
* `await` pauses the execution until the promise is resolved.
* Easier to understand than `.then()` chaining.
* Use `try...catch` to handle errors in async functions.

---

Would you like a PDF version of all these Promise and async/await notes for revision?
