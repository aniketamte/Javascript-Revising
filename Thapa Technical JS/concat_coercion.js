//* ============================
//* Data Types Section
//* ============================

//* Concatenation in JavaScript
//? In JavaScript, the + sign is not only used for arithmetic addition but also for string concatenation. When the + operator is used with strings, it concatenates the strings together.
//? It's important to note that if any operand of the + operator is a string, JavaScript will treat the other operands as strings as well, resulting in string concatenation. If both operands are numbers, the + operator performs numeric addition.

const str = "Hello " + "World";
console.log(`Concated String is => ${str}`);

//* Type coercion is the automatic conversion of "values" from one data type to another.
//? It is a fundamental part of JavaScript and can be used to make code more readable and efficient.
//? There are two types of coercion in JavaScript: implicit and explicit. Implicit coercion happens automatically, while explicit coercion is done manually by the programmer.
//! It's worth noting that type coercion can lead to unexpected results, so it's essential to be aware of how JavaScript handles these situations.

let sum = "5" - 5;
console.log(`Sum is => ${sum}`);

//* ============================
//* Tricky Interview Questions
//* ============================
console.log(10 + "20"); //1020
console.log(9 - "5"); //4
console.log("Java" + "Script"); //JavaScript
console.log(" " + " "); //empty space
console.log(" " + 0); // 0
console.log("vinod" - "thapa"); //NAN
console.log(true + true); //2
console.log(true + false); //1
console.log(false + true); //1
console.log(false - true); //-1
