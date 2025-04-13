//Trim method ====> remove spacefrom both side of the string
// let message = "       Hello     ";
// console.log(message.trim());

// let password = prompt("Set your password");
// let newPass = password.trim();
// console.log(newPass);

let name = " AniketAmte ";
console.log(name.toLowerCase());
console.log(name.toUpperCase());

//Argument ===> some value that we pass to the method

//Method chaining ===> Using one method after another. Order of execution will be left to right
console.log(name.toLowerCase().trim());

//Slice ===> return a part of the original string as a new string

let str = "ILoveCoding";
console.log(str.slice(5));
console.log(str.slice(1, 5));

//Replace method  ====> Search a value in string andreturn a new string with value replaced

console.log(str.replace("Love", "do"));
console.log(str.replace("I", "My"));

//Repeat method ===> It repeat the original name
console.log(str.repeat(5));

//Practice question
let msz = "help!";
console.log(msz.toUpperCase().trim());

let Name = "ApnaCollege";
console.log(Name.slice(4, 9));
console.log(Name.indexOf("na"));
console.log(Name.replace("Apna", "Our"));

//Array Data Structure
//Array --> Linear Collection Of things

let students = ["ABC", "XYZ", "RST"];
console.log(students);
console.log(students[0]);
console.log(students[1]);
console.log(students[2]);
console.log(students[3]);
console.log(students.length);
console.log(typeof students);

//mixed array
let info = ["PQR", 25, 0.75];
console.log(info);

//Arrays are mutable because we change value

let test = ["ram", "rom"];
console.log(test);
test[1] = "com";
console.log(test);

//Array method
// 1) Push => Add to end
// 2) Pop => delete from end and return it
// 3) Unshift => Add to start
// 4) Shift => delete from start and ereturn it

let cars = ["Audi", "BMW", "XUV", "Maruti"];
console.log(cars);
cars.push("toyota"); //Push
console.log(cars);
cars.push("Ferrari"); //Push
console.log(cars);

cars.pop(); //pop
console.log(cars);

cars.unshift("Ferrari"); //unshift
console.log(cars);

cars.shift(); //Shift
console.log(cars);

//Practice Question
let start = ["Jan", "July", "March", "Aug"];
console.log(start);

start.shift();
console.log(start);
start.shift();
console.log(start);
start.unshift("June");
console.log(start);
start.unshift("July");
console.log(start);

//Array Method ==> 1) indexOf : return index of something

let primary = ["red", "yellow", "blue"];
console.log(primary.indexOf("yellow"));
console.log(primary.indexOf("green"));
console.log(primary.indexOf("Yellow"));

//Array Method ==> 2) includes : search for values
console.log(primary.includes("red"));
console.log(primary.includes("green"));

//Array method ==> 3) Concat : Merger2 Arrays
let secondary = ["orange", "green", "violet"];
console.log(primary.concat(secondary));
console.log(secondary.concat(primary));

//Array Method ==> 4) Reverse : reverse an array
console.log(primary.reverse());
console.log(secondary.reverse());

//Array Method ==> slice : Copies a portion of an array
let colors = ["red", "yellow", "blue", "orange", "pink", "white"];
console.log(colors.slice());
console.log(colors.slice(2));
console.log(colors.slice(2, 3));
console.log(colors.slice(-2));

//Array method ==> Splice : removes / replaces / add elements in place

console.log(colors.splice(4)); //return element expect first 4
console.log(colors);
console.log(colors.splice(0, 1));
console.log(colors);
console.log(colors.splice(0, 1, "black", "grey"));

//sort method array
console.log(colors.sort());

//Array references ===> Address in memory

//Nested arrays
let nums = [
  [2, 4],
  [3, 6],
  [4, 8],
];
console.log(nums);

//Practice question
let game = [
  ["X", null, "O"],
  [null, "X", null],
  ["O", null, "X"],
];
console.log(game);
game[0][1] = "P";
console.log(game);
