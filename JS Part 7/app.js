//this ketword ==> "This" keyword refers to an object that is executing the current piece of code

const student = {
  name: "aniket",
  age: 23,
  marks: 94.4,
  city: "Delhi",
  eng: 95,
  math: 93,
  phy: 97,
  getAvg() {
    let avg = (this.eng + this.math + this.phy) / 3;
    console.log(`${this.name} got avg marks = ${avg}`);
  },
};

console.log(student.name);
console.log(student.getAvg());

function getAvg() {
  console.log(this);
}

//Try ==> This statement allows you to define a block of code to be tested for errors while it is being executed

//Catch ==> This statement allows you to define a block of code to be executed, if an error occurs in try block

try {
  console.log(a);
} catch {
  console.log("Variable a does not exist");
}

//Miscellaneous Topics

//1) Arrow Functions

const sum = (a, b) => {
  console.log(a + b);
};
sum(2, 3);

const pow = (a, b) => {
  return a ** b;
};
console.log(pow(2, 3));

//2) Implicit Return in Arrow Function

const mul = (a, b) => a * b;
console.log(mul(2, 3));

//Set Timeout Function

console.log("Hi there!");

//setTimeout(function callback, timeout);

setTimeout(() => {
  console.log("Coding Session");
}, 2000);

console.log("Welcome to");

//Set Interval Function

// setInterval( () => {
//       console.log("Hackathon");
// }, 2000);

//this with Arrow Function
const students = {
  name: "Aniket",
  marks: 95,
  prop: this, //global scope
  getName: function () {
    console.log(this);
    return this.name;
  },
  getMarks: () => {
    console.log(this); //Parent scope
    return this.marks;
  },
};

console.log(students);
console.log(students.getName());
console.log(students.getMarks());
