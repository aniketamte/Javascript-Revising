/*
Data Type :::==> 
      1) Primitive Data Type 
            ::=> a)String
                 b)Number
                 c)Boolean
                 d)undefined
                 e)Null
                 f)BigInt
                 g)Symbol

      2) Object Data Types
            ::=> a)An Object
                 b)An array
                 c)A Date
*/

//* ============================
//* Data Types Section
//* ============================

//* Data types define the type of values that a variable can hold.

//? Types of Primitive Data types

//? Number: Represents numeric values, including integers and floating-point numbers.
// Example:
var myFavNum = 5;
console.log(`My Favourite Number ${myFavNum}`);

//? String: Represents a sequence of characters enclosed in single or double quotes.
// Example:

var myName = "Aniket";
console.log(`My name is ${myName}`);

//? Boolean: Represents a logical entity with two values: true or false.
// Example:

var isRaining = false;
var isBoy = true;

console.log(isRaining);
console.log(isBoy);

//? undefined: Represents the absence of a value or an uninitialized variable.
// Example:

var vinod;
console.log(`Variable is ${vinod}`);

//? Null: Represents the absence of a value. It is often used to explicitly indicate that a variable or object property has no assigned value.
// Example:

var memories = null;
console.log(`Memories is => ${memories}`);

//? BigInt: Represents integers of arbitrary precision (available since ECMAScript 2020).
// Example:

const bigNumber = 1234567890123456789012345678901234567890n;
console.log(`bigNumber : ${bigNumber}`);

//? Symbol: Represents a unique and immutable data type, often used to create unique identifiers.
// Example:
// const mySymbol = Symbol("description");

//! ============================
//! Data Types Interview Questions
//! ============================

//? 1: What is the difference between null and undefined in JavaScript❓

//? 2: What is the purpose of typeof operator in JavaScript❓

//? 3: What is the result of `typeof null` in JavaScript❓

var memo = null;
console.log(`Memories is a type of ${typeof memo}`);

//? 4: What are primitive data types in JavaScript❓

var name = "Amte";
console.log(`Name : ${name}`);
console.log(`Name is type of ${typeof name}`);

//? 5: Convert a string to a number?
// We just need to add the '+' sign before the string
// Example:

myFavNum = "20";
console.log(`My Favourite Number is type of ${typeof myFavNum}`);
console.log(`My Favourite Number is another type of ${typeof +myFavNum}`);

//? 6: Convert a number to a string?
// We just need to add an empty string after the number
// Example:

let str = 5;
console.log(`Str is a type of ${typeof str}`);
console.log(`Str is a type of ${typeof (str + "")}`);
console.log(`Str is a type of ${typeof String(str)}`);

//? 7: Explain the concept of truthy and falsy values in JavaScript. Provide examples.❓

//? 8: To check if a non-empty string is truthy or falsy in JavaScript, we can directly use if statement.

var MyName = 0;
if(MyName){
      console.log(`${MyName} is truthy values`);
} else{
      console.log(`${MyName} is falsy values`);
}

//* ==========  Data Types End Section ==========

//todo ---------------- todo Bonus ----------------------

//* ========== parseInt & parseFloat Section ==========
//? parseInt and parseFloat are both functions in JavaScript used for converting strings to numbers, but they have different use cases.

//* parseInt: Definition: parseInt is used to parse a string and convert it to an integer (whole number).
const myString = "42";
const myNumber = parseInt(myString, 10);
console.log(`myNumber is ${myNumber}`); // Output: 42

// const myString = "42.5";
// const myNumber = parseInt(myString);
// console.log(myNumber); // Output: 42

//* parseFloat: Definition: parseFloat is used to parse a string and convert it to a floating-point number (decimal number).
const myString1 = "42.5";
const myNumber1 = parseFloat(myString1);
console.log(`myNumber1 is : ${myNumber1}`); // Output: 42.5

//TODO  Key Differences:
//? parseInt is used for converting to integers and ignores anything after the decimal point.
//? parseFloat is used for converting to floating-point numbers, preserving the decimal part.
//? Both functions will attempt to convert as much of the string as possible until an invalid character is encountered.

//! Here are more examples
console.log(`Number is : ${parseInt("123")}`);
// 123 (default base-10)
console.log(`Number is : ${parseInt("123", 10)}`);
// 123 (explicitly specify base-10)
console.log(`Number is : ${parseInt("   123 ")}`);
// 123 (whitespace is ignored)
console.log(`Number is : ${parseInt("077")}`);
// 77 (leading zeros are ignored)
console.log(`Number is : ${parseInt("1.9")}`);
// 1 (decimal part is truncated)

//! When we will not get an Output
console.log(`Output is : ${parseInt("&123")}`);
console.log(`Output is : ${parseInt("-123")}`);
console.log(`Output is : ${parseInt("xyz")}`);
// NaN (input can't be converted to an integer)

//? What is the purpose of the NaN value in JavaScript❓

//* ========== parseInt & parseFloat End Section ==========
