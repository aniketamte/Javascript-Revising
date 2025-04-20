// let p = document.querySelector("p");

// p.addEventListener("click", function () {
//       console.log("Parah was clicked");
// });

// let box = document.querySelector(".box");
// box.addEventListener("mouseenter", function () {
//       console.log("Mouse inside box.");
// });


//this in Event Listeners ==> When this is used in a callback of event handler of something, it refers to that something.

// let btn = document.querySelector("button");
// let p = document.querySelector("p");
// let h1 = document.querySelector("h1");
// let h3 = document.querySelector("h3");

// function changeColor() {
//       console.log(this);
//       console.dir(this.innerText);
//       this.style.backgroundColor = "blue";
// }
// btn.addEventListener("click", changeColor);

// p.addEventListener("click", changeColor);

// h1.addEventListener("click", changeColor);

// h3.addEventListener("click", changeColor);

// let btn = document.querySelector("button");

// btn.addEventListener("click", function (event) {
//       console.log(event);
//       console.log("Button clicked!");
// });

// btn.addEventListener("dblclick", function (event) {
//   console.log(event);
//   console.log("Button double clicked!");
// });

/* Keyboard Events */

let inp = document.querySelector("input");

inp.addEventListener("keydown", function(event) {
      console.log("Key : ", event.key);
      console.log("Code : ", event.code);
      console.log("Key was pressed.");
});

// inp.addEventListener("keyup", function () {
//   console.log("Key was released.");
// });