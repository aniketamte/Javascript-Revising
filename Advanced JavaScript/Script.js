/*
    Difference ==> var, let, const

    1) -> Var was in old js
    2) -> Var is function scoped -> var apne parent function me kahi  bhi use ho sakta hai
    3) -> var adds itself to the window object

    1) -> let, const is a new version of JavaScript
    2) -> let is a braces scoped
    3) -> let const does not adds
*/

function abcd() {
  for (var i = 1; i < 12; i++) {
    console.log(i);
  }
  console.log(i); //i already initialize
}
abcd();
/*
   ==> Execution context means jab hum function chalayenge function apna  ek khudka ek imaginary container bana lega jisme  uski teen cheeje hogi

   1) -> Variables
   2) -> Function inside that parent  function
   3) -> Lexical  environment of that function

   ye jo imaginary content hai ise hi hum execution context kahte hai

   ==> Execution Context -> It is a container where the function code is executed and its created whenever a function is called, it contains 3 things-> variables, functions and lexical environment.
*/

function abcde() {
  var a = 12;
  function def() {
    var b = 12;
  }
}
abcde();

/*
  ==> How to copy reference variable.
*/

var a = [1, 2, 3, 4, 5];
var b = [...a];
console.log(b);
b.pop();
console.log(b);
console.log(a);

/*
  ===> truthy and falsy --> JS mein kuch bhi likho wo mainly 2 types mein se ek type ki hoti hai ie. either truthy or falsy
   ----> falsy Values -> 0, false, undefined, null, NaN, document.all
*/

if (7) {
  console.log("Hey");
} else {
  console.log("Hello");
}

if (0) {
  console.log("Hey");
} else {
  console.log("Hello");
}

if (NaN) {
  console.log("Hey");
} else {
  console.log("Hello");
}

/*
  ===>  For each --> If you have array then you have to use forEach Loop.
*/

a.forEach(function (val) {
  console.log(val + 2);
});

/*
   ==> For in ---> Objects pr loop krne ke liye forin loop hota hai
*/

var obj = {
  name: "ABC",
  age: 24,
  city: "Pune",
};

for (var key in obj) {
  //console.log(key);
  console.log(key, obj[key]);
}

/*
  ===> Constructor --> jab aapke  pass aisa koi bhi mauka ho ke aapko ek jaisi property vale bahut sare elements banane hai us waqt aap constructor function use kr sakte ho.
*/

function circularBtn(color) {
  this.radius = 2;
  this.color = color;
  this.icon = false;
  this.pressable = true;
}
var redbtn = new circularBtn("red");
var greenbtn = new circularBtn("green");
console.log(redbtn);
console.log(greenbtn);

/*
    ===> First-Class Function
        A programming language is said to have First-class functions if functions in that language are treated like other variables. So the functions can be assigned to any other variable or passed as an argument or can be returned by another function. JavaScript treats function as a first-class citizen. This means that functions are simply a value and are just another type of object.
*/

const Arithmetics = {
  add: (a, b) => {
    return `${a} + ${b} = ${a + b}`;
  },
  subtract: (a, b) => {
    return `${a} - ${b} = ${a - b}`;
  },
  multiply: (a, b) => {
    return `${a} * ${b} = ${a * b}`;
  },
  division: (a, b) => {
    if (b != 0) return `${a} / ${b} = ${a / b}`;
    return `Cannot Divide by Zero!!!`;
  },
};

console.log(Arithmetics.add(100, 100));
console.log(Arithmetics.subtract(100, 7));
console.log(Arithmetics.multiply(5, 5));
console.log(Arithmetics.division(100, 0));

/*
   ====> Immediately Invoked Function Expressions (IIFE) 
         Immediately Invoked Function Expressions (IIFE) are JavaScript functions that are executed immediately after they are defined. They are typically used to create a local scope for variables to prevent them from polluting the global scope.
*/

var result = (function () {
  var x = 10;
  var y = 20;
  return x + y;
})();

console.log(result); // Output: 30

var ans = (function () {
  var privateVal = 12;

  return {
    getter: function () {
      console.log(privateVal);
    },
    setter: function (val) {
      privateVal = val;
    },
  };
})();

console.log(ans);

//Prototype Inheritance

var human = {
  canFly: false,
  canTalk: true,
  canWalk: true,
  haveEmotions: true,
};

var student = {
  canMakeWeb: true,
  canMakeAnimatio: true,
};

student.__proto__ = human;

console.log(student);

//jab koi bhi cheej {} brackets ke andar nhi hoti to hum use global scope kahte hai

console.log(this);

function abc() {
  console.log(this);
}
abc();
