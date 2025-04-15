/*
Array methods : 
1) forEach
2) map
3) filter
4) some
5) every
6) reduce
*/

/*
1) forEach --> arr.forEach(some function defrinition or name) 
*/

let arr = [1, 2, 3, 4, 5];
function print(el) {
  console.log(el);
}
arr.forEach(print);

console.log("Using for each function");
arr.forEach(function (el) {
  console.log(el);
});

console.log("Using arrow function");
arr.forEach((el) => {
  console.log(el);
});

let array = [
  {
    name: "aniket",
    marks: 95,
  },
  {
    name: "rajat",
    marks: 96,
  },
];

array.forEach((student) => {
  console.log(student);
});
array.forEach((student) => {
  console.log(student.marks);
});

/*
2) Map ==> 
      
      --> let newArr = arr.map(some sunction def or name)
*/

let double = arr.map(function (el) {
  return el * 2;
});

console.log(double);

let gpa = array.map((student) => {
  return student.marks / 10;
});
console.log(gpa);

/*
3) Filter ===>
        
      ==> --> let newArr = arr.filter(some sunction def or name)
*/

let nums = [2, 4, 1, 5, 6, 2, 7, 8, 9];
let even = nums.filter((num) => num % 2 == 0);
console.log("Even number", even);

let evenNo = nums.filter((el) => {
  return el % 2 == 0;
});

console.log(evenNo);

/*
4) Every ===> return true if every element of array gives true for some function. Else return false.

   ==> let newArr = arr.every(some sunction def or name)
*/
let check = nums.every((el) => el % 2 == 0);

console.log(check);

/*
5) Reduce ===> Reduce the array to a single value

let newArr = arr.reduce(reducer function with 2 variables for(accumulator, element));

*/

let red = nums.reduce((res, el) => res + el);
console.log(red);

//Find maximum ihn an array

let result = nums.reduce((max, el) => {
  if (el > max) {
    return el;
  } else {
    return max;
  }
});
console.log(result);

//Practice Question ======> check all numbers in array is multiple of 10 or not

let ans = nums.every((el) => el % 10 == 0);
console.log(ans);

//Practice Question ======> Create a function to find the minimum number in an array

let minimum = nums.reduce((max, el) => {
  if (el < max) {
    return el;
  } else {
    return max;
  }
});
console.log(minimum);

//Default Parameter ===> Giving a default value to the argument

function sum(a, b = 3) {
  return a + b;
}
//sum(2);
console.log(sum(2));

//Spread ==> Expands an iterable into multiple values
console.log(..."aniketamte");

console.log(Math.min(...nums));
console.log(Math.max(...nums));

//Spread with arrays

let char = [..."Hello"];
console.log(char);

let newNums = [...nums];
console.log(newNums);

//Spread with object literals
let arraysCopy = { ...array };
console.log(arraysCopy);

//Rest ==> Allows a functiojn to take an indefinite number of arguments and bundle them in an array

function sum(...args) {
  for (let i = 0; i < args.length; i++) {
    console.log("You gave us : ", args[i]);
  }
}
console.log(sum(1));

//Destructuring ==> Storing values of array into multiple variables

let names = ["tony", "bruce", "steve", "peter"];
let [winner, runnerup] = names;
console.log(winner, runnerup);

//Destructuring in object

const { name: amte } = array;
console.log(amte);
