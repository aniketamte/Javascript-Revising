console.log("Hello world...!");
console.log("IT Student here...!");
let a = 2;
let b = 5;
let sum = a + b;
console.log(sum);

//Template Literals  => They are use to add embedded expression in a string

let penPrice = 10;
let pencilPrice = 20;
console.log("The total Price is : ", penPrice + pencilPrice, "Rupees.");
let Output = "The total price is : " + (penPrice + pencilPrice) + "Rupees.";
console.log("Output : ", Output);

//using backtick -> template literal below line
let result = `The total priceis : ${penPrice + pencilPrice} Rupees.`;
console.log("Reult => ", result);

//Operator in JavaScript

//Arithmetic Operator

let X = 10;
let Y = 20;

console.log(a + b);
console.log(a - b);
console.log(a * b);
console.log(a / b);
console.log(a % b);
console.log(a ** b);

// Unary Operator
console.log("Unary operator");
console.log(X++);
console.log(Y++);
console.log(++X);
console.log(++Y);
console.log(X--);
console.log(Y--);
console.log(--X);
console.log(--Y);

//Assignment Operator
console.log("Assignment operator");
console.log((X = Y));
console.log((X += Y));
console.log((X -= Y));
console.log((X *= Y));
console.log((X /= Y));

//Comaparison Operator
console.log("Comparison operator");
let Age = 18;
console.log(Age > 18);
console.log(Age >= 18);
console.log(Age < 18);
console.log(Age <= 18);
console.log((Age = 18));

//Comparison For Non Number
console.log("Comparison for non Number");
console.log("a" > "A");
console.log("a" < "A");
console.log("b" < "B");
console.log("b" > "B");

//Conditional Statement
console.log("Conditional Statement");
console.log("if-else");

if (Age > 18) {
  console.log("Adult");
} else {
  console.log("Not Adult");
}

console.log("nested if-else");
if (Age > 18) {
  console.log("Adult");
} else if (Age < 18) {
  console.log("Not Adult");
} else {
  console.log("Try next time");
}

console.log("Switch");

let col = "red";
switch (col) {
  case "red":
    console.log("Stop");
    break;
  case "yellow":
    console.log("Slow down");
    break;
  case "green":
    console.log("Go");
    break;
  default:
    console.log("Broken light");
}

//Practicequestion

let colour = "red";

if (colour == "red") {
  console.log("Stop! Light colour is red");
} else if (colour == "yellow") {
  console.log("Slow down! Light colour is yellow");
} else {
  console.log("Go! Color is green");
}

//Logical Operator
console.log("Logical Operator : ");
console.log("Logical And ===> &&");
console.log(true && true);
console.log(true && false);
console.log(false && false);

//Truthy and Falsy
console.log("Truthy and Falsy");
if (true) {
  console.log("It has true value");
} else {
  console.log("It has False value");
}

if (false) {
  console.log("It has true value");
} else {
  console.log("It has False value");
}

if (0) {
  console.log("It has true value");
} else {
  console.log("It has False value");
}

//Alert Message
alert("Something went wrong...!");

//promt message
prompt("Enter your roll no : ");