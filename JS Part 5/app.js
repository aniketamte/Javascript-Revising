//JS Object Literals  ==> Used to stored keyed collections and complex entities
//Objects are collection of properties

const student = {
  name: "aniket",
  age: 23,
  marks: 94.4,
  city: "Delhi",
};

console.log(student);

//Twitter Post
console.log("Twitter Post");
const post = {
  username: "@aniket",
  content: "This is my #firstPost",
  likes: 150,
  reposts: 5,
  tags: ["@amte", "@pune"],
};

console.log(post);

//Get values ===> How to acess data from created object?

console.log("Username : ", post.username);
console.log("Content : ", post.content);
console.log("Tag", post.tags[0]);
console.log("Tag", post.tags[1]);

//Get values ==> JS automatically convert object keys to string
//           ==> Even if we made the number as a key, the will be converted to string

const obj = {
  1: "a",
  2: "b",
  true: "c",
  null: "d",
  undefined: "e",
};

console.log(obj);

//Add or update value
console.log(student.city);
student.city = "Mumbai";
console.log(student.city);
console.log(student);

console.log(student.gender);
student.gender = "Male";
console.log(student.gender);
console.log(student);

console.log(student.marks);
student.marks = "A";
console.log(student.marks);
console.log(student);

console.log(delete student.marks);
console.log(student);

//Object of object ==> Storing information of multiple student

console.log("Object of object");
const classInfo = {
  aman: {
    grade: "A++",
    city: "Delhi",
  },
  aniket: {
    grade: "B++",
    city: "Pune",
  },
  amte: {
    grade: "C++",
    city: "Mumbai",
  },
};

console.log(classInfo);
console.log(classInfo.aman);
console.log(classInfo.amte);
console.log(classInfo.aniket.city);

//Array of Object ===> Storing informstion of multiple student

console.log("Array of object");
const classInfos = [
  {
    name: "aman",
    grade: "A++",
    city: "Delhi",
  },
  {
    name: "aniket",
    grade: "B++",
    city: "Pune",
  },
  {
    name: "amte",
    grade: "C++",
    city: "Mumbai",
  },
];

console.log(classInfos);
console.log(classInfos[0]);
console.log(classInfos[1].name);

//Math Object
console.log("Math Object  ==> Properties");
console.log("Pi : ", Math.PI);
console.log("E : ", Math.E);

console.log("Math Object  ==> Method");
console.log(Math.abs(-12));
console.log(Math.pow(2, 3));
console.log(Math.floor(3.99999999)); //Nearest smallest Integervalue
console.log(Math.ceil(5.5)); //Round off
console.log(Math.random());

//Random integer
console.log("Random Integrer");
let num = Math.random();
console.log(num);
num = num * 10;
console.log(num);
num = Math.floor(num);
console.log(num);
num = num + 1;
console.log(num);

//Practice question
console.log("Practice question");
console.log(
  "Generate Random number from 1 to 100 : ",
  Math.floor(Math.random() * 100) + 1
);
console.log(
  "Generate Random number from 1 to 5 : ",
  Math.floor(Math.random() * 5) + 1
);
console.log(
  "Generate Random number from 20 to 25 : ",
  Math.floor(Math.random() * 5) + 20
);

//Guessing Game
//User enter a max number and then tries to guess a random generated number between 1 to max

const max = prompt("Enter the max number");
const random = Math.floor(Math.random() * max) + 1;
let guess = prompt("Guess the number");

while (true) {
  if (guess == "quit") {
    console.log("User Quit");
    break;
  }
  if (guess == random) {
    console.log("You are right! congrats!!");
    break;
  } else {
    guess = prompt("You guess the number wrong. Please try again");
  }
}
