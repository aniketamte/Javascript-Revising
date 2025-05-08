/*
   😵 What is Callback Hell?
When multiple asynchronous operations are nested inside each other, each depending on the previous one to complete, it creates a pyramid-like code structure.

This becomes hard to read, debug, or maintain, and is called callback hell.
*/

// h1 = document.querySelector("h1");

// function changeColor(color, delay, nextColorChange) {
//   setTimeout(() => {
//     h1.style.color = color;
//     if (nextColorChange) nextColorChange();
//   }, delay);
// }

// changeColor("Red", 1000, () => {
//   changeColor("Orange", 1000, () => {
//     changeColor("Blue", 1000, () => {
//       changeColor("Green", 1000, () => {
//         changeColor("Yellow", 1000);
//       });
//     });
//   });
// });

// changeColor("Orange", 3000);

/*  Callback Hell Ended Here */

/*
  ✅ What is a Promise in JavaScript?
A Promise is a JavaScript object that represents the eventual result (success or failure) of an asynchronous operation.

It is used to avoid callback hell and make async code cleaner and more readable.
*/

function savetoDb(data, success, failure) {
  let internetSpeed = Math.floor(Math.random() * 10) + 1;

  if (internetSpeed > 4) {
    success();
  } else {
    failure();
  }
}

savetoDb(
  "Apna College",
  () => {
    console.log("Your data was saved : ");
    savetoDb(
      "Hello World",
      () => {
        console.log("Success 2 : Data 2 saved");
        savetoDb(
          "Aniket",
          () => {
            console.log("Success 3 : Data 3 saved");
          },
          () => {
            console.log("Failure 3 : Weak Connection");
          }
        );
      },
      () => {
        console.log("Failure 2 : Weak Connection");
      }
    );
  },
  () => {
    console.log("Weak connection. Data not saved");
  }
);


//promises resolve ===> Success && Promises reject ===> Failure