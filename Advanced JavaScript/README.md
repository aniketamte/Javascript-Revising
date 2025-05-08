Here’s a **detailed and simple bullet-point note** based on the JavaScript concepts you've provided. Each section explains the topic with **line-by-line breakdowns, examples, and usage**.

---

### 🟢 **1. `var`, `let`, `const` - Difference**

* **`var`**:

  * Introduced in old versions of JavaScript (ES5 and before).
  * **Function Scoped**: It can be accessed anywhere within the function it was defined in.
  * Adds itself to the **global window object** when used outside a function.

  ```js
  function abcd() {
    for (var i = 1; i < 12; i++) {
      console.log(i); // Prints 1 to 11
    }
    console.log(i); // Still accessible: prints 12
  }
  abcd();
  ```

* **`let` and `const`**:

  * Introduced in **ES6** (modern JavaScript).
  * **Block Scoped**: Can only be accessed within the block `{}` they are defined in.
  * **Do NOT attach** to the global `window` object.

---

### 🟢 **2. Execution Context**

* When a function runs, an **Execution Context** is created.
* It's like an **imaginary box** which contains:

  1. All **variables** inside the function.
  2. All **inner functions**.
  3. The **lexical environment** (reference to outer scope).

  ```js
  function abcde() {
    var a = 12;
    function def() {
      var b = 12;
    }
  }
  abcde();
  ```

  ✅ Here:

  * `abcde()` creates its own execution context.
  * It holds `a`, and the function `def()`.

---

### 🟢 **3. Copying Reference Variables**

* Arrays and objects are **reference types**.
* To **copy** them without linking both, use the **spread operator** `...`.

  ```js
  var a = [1, 2, 3, 4, 5];
  var b = [...a]; // Creates a new copy
  b.pop(); // Removes last element from b
  console.log(b); // [1, 2, 3, 4]
  console.log(a); // [1, 2, 3, 4, 5]
  ```

---

### 🟢 **4. Truthy and Falsy Values**

* JavaScript treats all values as **truthy** or **falsy** when used in conditionals.

🔴 **Falsy Values**:

* `0`, `false`, `undefined`, `null`, `NaN`, `""` (empty string)

✅ **Example**:

```js
if (7) { console.log("Hey"); } // 7 is truthy
if (0) { console.log("Hey"); } else { console.log("Hello"); } // 0 is falsy
if (NaN) { console.log("Hey"); } else { console.log("Hello"); } // NaN is falsy
```

---

### 🟢 **5. forEach Loop**

* Used for iterating **arrays**.

```js
var a = [1, 2, 3, 4];
a.forEach(function(val) {
  console.log(val + 2); // Prints: 3, 4, 5, 6
});
```

---

### 🟢 **6. for...in Loop**

* Used for **looping over objects** (key-value pairs).

```js
var obj = { name: "ABC", age: 24, city: "Pune" };

for (var key in obj) {
  console.log(key, obj[key]);
}
// Output:
// name ABC
// age 24
// city Pune
```

---

### 🟢 **7. Constructor Function**

* Used to create **multiple similar objects**.

```js
function circularBtn(color) {
  this.radius = 2;
  this.color = color;
  this.icon = false;
  this.pressable = true;
}

var redbtn = new circularBtn("red");
var greenbtn = new circularBtn("green");

console.log(redbtn); // Object with red color
console.log(greenbtn); // Object with green color
```

---

### 🟢 **8. First-Class Functions**

* In JavaScript, functions are **treated like variables**:

  * Can be stored in variables
  * Can be passed as arguments
  * Can be returned from other functions

```js
const Arithmetics = {
  add: (a, b) => `${a} + ${b} = ${a + b}`,
  subtract: (a, b) => `${a} - ${b} = ${a - b}`,
  multiply: (a, b) => `${a} * ${b} = ${a * b}`,
  division: (a, b) => {
    if (b !== 0) return `${a} / ${b} = ${a / b}`;
    return "Cannot Divide by Zero!!!";
  }
};

console.log(Arithmetics.add(100, 100));         // 100 + 100 = 200
console.log(Arithmetics.subtract(100, 7));      // 100 - 7 = 93
console.log(Arithmetics.multiply(5, 5));        // 5 * 5 = 25
console.log(Arithmetics.division(100, 0));      // Cannot Divide by Zero!!!
```

---

### 🟢 **9. Immediately Invoked Function Expression (IIFE)**

* A function that is executed **immediately** after it is defined.

```js
var result = (function() {
  var x = 10;
  var y = 20;
  return x + y;
})();
console.log(result); // 30
```

✅ Another example with private variable using closures:

```js
var ans = (function () {
  var privateVal = 12;
  return {
    getter: function () { console.log(privateVal); },
    setter: function (val) { privateVal = val; },
  };
})();
ans.getter(); // 12
ans.setter(50);
ans.getter(); // 50
```

---

### 🟢 **10. Prototype Inheritance**

* Objects can inherit properties from another object using `__proto__` or `Object.setPrototypeOf`.

```js
var human = {
  canFly: false,
  canTalk: true,
  canWalk: true,
  haveEmotions: true,
};

var student = {
  canMakeWeb: true,
  canMakeAnimation: true,
};

student.__proto__ = human;

console.log(student.canWalk); // true (inherited from human)
```

---

### 🟢 **11. Global Scope and `this` Keyword**

* **Global Scope**: Any variable/function not inside a function or block.
* **`this`**:

  * In **global scope**, refers to `window` (browser).
  * In a **function**, refers to:

    * `undefined` in strict mode
    * `window` in non-strict mode (regular functions)

```js
console.log(this); // Window object (in browser)

function abc() {
  console.log(this); // In non-strict mode: window
}
abc();
```

---

Would you like this compiled into a clean PDF or formatted for a blog/article page?
