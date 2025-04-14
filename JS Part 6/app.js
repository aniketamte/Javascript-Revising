//Functions in JS
function hello() {
  console.log("Hello JavaScript....!");
}
hello();

function print1to5() {
  for (let i = 1; i <= 5; i++) {
    console.log(i);
  }
}

print1to5();

//practice Question
function printPoem() {
  console.log("Poem started");
  console.log("Poem Ended");
}
printPoem();

//practice Question

function rollDicefrom1to6() {
  console.log(Math.floor(Math.random() * 6) + 1);
}
rollDicefrom1to6();
rollDicefrom1to6();
rollDicefrom1to6();
rollDicefrom1to6();
rollDicefrom1to6();
rollDicefrom1to6();

//Functions with Arguments ===> values we pass to the function

function printName(name, age) {
  console.log(`${name}'s age is ${age}`);
}

printName("aniket", 20);

//Practice question

function avgNumber(a, b, c) {
  let avg = (a + b + c) / 3;
  console.log(avg);
}
avgNumber(2, 3, 4);

//Practivce Question
function printTable(n) {
  for (let i = n; i <= n * 10; i += n) {
    console.log(i);
  }
}
printTable(2);
printTable(10);
printTable(73);

//Return Keyword
// ===> return keyword is used to return some value from the function

function sum(a, b) {
  return a + b;
}

let s = sum(3, 5);
console.log(s);

//Practice Question ===> return sum of number from 1 to n

function sums(n) {
  let sum = 0;
  for (let i = 1; i <= n; i++) {
    sum += i;
  }
  return sum;
}

console.log(sums(5));

//Practice Question ===> return the concatenation of all string in an array

let str = ["Hi", "Hello", "Bye", "!"];
function concat(str) {
  let result;
  for (let i = 0; i < str.length; i++) {
    result += str[i];
  }
  return result;
}
console.log(concat(str));

//Scope ==> Itdetermines the accessibility of variables, objects and functions from different part of the code (1)Function (2)Block (3)Lexical

//1) Function Scope ==> Variable defined inside a function are not accessible(visible) from outside the function

//2) Block Scope ==> Varible declared inside a () blocked can not be accessed from outside the block

//3)Lexical Scope ==>  A variable defined outside a function can be accessible inside another function defined after the variahble declaration. The opposite is NOT true.

//Practice Question

let greet = "hello";
function changeGreet() {
  let greet = "namaste";
  console.log(greet);
  function innerGreet() {
    console.log(greet);
  }
}
console.log(greet);
changeGreet();

//Functional Expression

const add = function (a, b) {
  return a + b;
};
console.log(add(2, 3));

/*
Higher Order Function :=>
      ==> A function that does one or both
          --> Take one or multiple functions as arguments
          --> returns a function
*/

function multipleGreet(func, count) {
  for (let i = 1; i <= count; i++) {
    func();
  }
}
let greets = function () {
  console.log("Hello Everyone .....!");
};

multipleGreet(greets, 4);

function oddEvenTest(request) {
  if (request == "Odd") {
    return function (n) {
      console.log(!(n % 2 == 0));
    };
  } else if (request == "Even") {
    return function (n) {
      console.log(n % 2 == 0);
    };
  } else {
    console.log("Wrong Request");
  }
}

//Method

const calculator = {
  num: 55,
  add: function (a, b) {
    return a + b;
  },
  sub: function (a, b) {
    return a - b;
  },
  mul: function (a, b) {
    return a * b;
  },
};

console.log(calculator);
console.log(calculator.add(1, 2));
console.log(calculator.sub(1, 2));
console.log(calculator.mul(1, 2));
