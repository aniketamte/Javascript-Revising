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
  // console.log("Generate random color");

  let h3 = document.querySelector("h3");
  let randomColor = getRandomColor();
  h3.innerText = randomColor;

  let div = document.querySelector("div");
  div.style.backgroundColor = randomColor;

  console.log("Color Updated!");
});

function getRandomColor() {
  let red = Math.floor(Math.random() * 255);
  let green = Math.floor(Math.random() * 255);
  let blue = Math.floor(Math.random() * 255);

  let color = `rgb(${red}, ${green}, ${blue})`;
  return color;
}