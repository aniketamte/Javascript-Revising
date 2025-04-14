//Loop ===> To iterate piece of code
//For Loops
for (let i = 0; i <= 5; i++) {
  console.log(i);
}

//print all odd numbers from 1 to 15
console.log("Odd number");

// for (let i = 1; i <= 15; i++) {
//   if (i % 2 != 0) {
//     console.log(i);
//   }
// }
// console.log("Decreasing order :");
// for (let i = 15; i >= 1; i--) {
//   if (i % 2 != 0) {
//     console.log(i);
//   }
// }

for (let i = 1; i <= 15; i = i + 2) {
  console.log(i);
}

for (let i = 15; i >= 1; i = i - 2) {
  console.log(i);
}

console.log("Even number");

for (let i = 2; i <= 10; i = i + 2) {
  console.log(i);
}

console.log("Backward Even number");

for (let i = 10; i >= 2; i = i - 2) {
  console.log(i);
}

//Infinite loops  ==> Its very bad so dont use like this

//Print table 5

console.log("Multiplication Table of 5 : ");
for (let i = 5; i <= 50; i = i + 5) {
  console.log(i);
}

console.log("Multiplication Table of 3 : ");
for (let i = 3; i <= 30; i = i + 3) {
  console.log(i);
}

// let n = prompt("Write you number to print table");
// n=parseInt(n);
// for(let i=n; i<=n*10; i=i+n){
//       console.log(i);
// }

//Nested For Loops

console.log("Nested For Loops");
for (let i = 1; i <= 3; i++) {
  console.log(`Outer Loop ${i}`);
  for (let j = 1; j <= 3; j++) {
    console.log(j);
  }
}

//While Loop

console.log("While loop");
let i = 1;
while (i <= 5) {
  console.log(i);
  i++;
}

//Favorite Movie
console.log("Favourite Movie : ");

// const favMovie = "avator";
// let guess = prompt("Guess my favourite Movie");
// while((guess != favMovie) && (guess != "quit")){
//       guess = prompt("Wrong guess. Please try again");
// }
// if(guess == favMovie){
//       console.log("Congrats...!!");
// } else{
//       console.log("You quit the game");
// }

//Break Keyword
console.log("Break Keyword");
let a = 1;
while (a <= 5) {
  if (a == 3) {
    break; //break at 3
  }
  console.log(a);
  a++;
}

//Loop with Arrays
console.log("Loop with Arrays : ");
let fruits = ["mango", "apple", "banana", "litchi", "orange"];

for (let i = 0; i < fruits.length; i++) {
  console.log(i, fruits[i]);
}

//Nested loop with nested Array
console.log("Nested loop with nested Array");
let heroes = [
  ["ironman", "spiderman", "thor"],
  ["superman", "wonder women", "flash"],
];
for (let i = 0; i < heroes.length; i++) {
  console.log(`List #${i}`);
  for (let j = 0; j < heroes[i].length; j++) {
    console.log(heroes[i][j]);
  }
}

//for of loop
console.log("for of loop");
for (fruit of fruits) {
  console.log(fruit);
}

//Nested for of loop
console.log("Nested for of loop");

for (list of heroes) {
  for (hero of list) {
    console.log(hero);
  }
}

// To Do App (Only Js)

console.log("To Do App : ");

let todo = [];
let request = prompt("Please enter your request");

while (true) {
  if (request == "quit") {
    console.log("quitting app");
    break;
  }

  if (request == "list") {
    console.log("----------------");
    for (let i = 0; i < todo.length; i++) {
      console.log(i, todo[i]);
    }
    console.log("----------------");
  } else if (request == "add") {
    let task = prompt("Please enter the task you wan to add.");
    todo.push(task);
    console.log("Task added....!");
  } else if (request == "delete") {
    let idx = prompt("Please Enter the task Index");
    todo.splice(idx, 1);
    console.log("Task Deleted.....!");
  } else {
    console.log("Wrong Request..!");
  }
  request = prompt("Please enter your request");
}
