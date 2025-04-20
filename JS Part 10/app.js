// /*
// DOM Events  :::==> Events are signals that something has occured. (user inputs / actions)
//  */

// /*
// onClick ===> When an element is clicked
// onmouseenter ===> when mouse enters an element
//  */

// let btns = document.querySelectorAll("button");
// console.dir(btns);

// // btn.onclick = function () {
// //       alert("Button was clicked");
// // };

// for (btn of btns) {
//   //btn.onclick = sayHello;
//   //btn.onclick = sayName;
//   // btn.onmouseenter = function () {
//   //     console.log("You entered a button");
//   // }
//   // console.dir(btn);

//   // btn.addEventListener("click", sayHello);
//   // btn.addEventListener("click", sayName);


//   btn.addEventListener("dbclick", function () {
//     console.log("You double clicked me.");
//   });
// }
// function sayHello() {
//   alert("Hello Bro...!");
// }


// //Event Listener

// //addEventListner

// function sayName() {
//       alert("Apna College");
// }

// // btn.addEventListener("click", function () {
// //       console.log("Button Clicled.");
// // });

let btn = document.querySelector("button");

btn.addEventListener("click", function() {
  console.log("Generate random color");
});