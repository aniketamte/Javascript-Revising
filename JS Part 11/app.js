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

// function savetoDb(data, success, failure) {
//   let internetSpeed = Math.floor(Math.random() * 10) + 1;

//   if (internetSpeed > 4) {
//     success();
//   } else {
//     failure();
//   }
// }

// savetoDb(
//   "Apna College",
//   () => {
//     console.log("Your data was saved : ");
//     savetoDb(
//       "Hello World",
//       () => {
//         console.log("Success 2 : Data 2 saved");
//         savetoDb(
//           "Aniket",
//           () => {
//             console.log("Success 3 : Data 3 saved");
//           },
//           () => {
//             console.log("Failure 3 : Weak Connection");
//           }
//         );
//       },
//       () => {
//         console.log("Failure 2 : Weak Connection");
//       }
//     );
//   },
//   () => {
//     console.log("Weak connection. Data not saved");
//   }
// );

//promises resolve ===> Success && Promises reject ===> Failure

// function savetoDb(data) {
//   return new Promise((resolve, reject) => {
//     let internetSpeed = Math.floor(Math.random() * 10) + 1;
//       if (internetSpeed > 4) {
//         resolve("Success : Data was saved.");
//       } else {
//         reject("Failure : Weak connection.");
//       }
//   });
// }

// let request = savetoDb("Aniket Amte");
// console.log(request);

// request
//   .then(() => {
//     console.log("Promise Resolved.");
//     console.log(request);
//   })
//   .catch(() => {
//     console.log("Promise Rejected.");
//     console.log(request);
//   });

/*
   🔹 What is .then()?
The .then() method is used to handle the success (fulfilled) result of a Promise.

It takes a callback function that runs when the promise is resolved.

🔹 What is .catch()?
The .catch() method is used to handle errors or rejected promises.

It runs only when the promise is rejected (failed).

*/

// let request = saveToDBPromise("India");
// request
//   .then(() => {
//     console.log("Promise Resolved.");
//   })
//   .catch(() => {
//     console.log("Promise Rejected.");
//   });


/*
   🔗 What is Promise Chaining?
Promise chaining means using multiple .then() methods one after another.

Each .then() receives the result from the previous one, and you can transform or return new data.

This is useful for performing multiple asynchronous tasks in sequence.

*/

h1 = document.querySelector("h1");

function changeColor(color, delay) {
      return new Promise((resolve, reject) => {
            setTimeout(() => {
              h1.style.color = color;
              resolve("Color Changed");
            }, delay);
      })
}

changeColor("red", 1000)
  .then(() => {
    console.log("Red color was completed");
    return changeColor("Orange", 1000);
  })
  .then(() => {
    console.log("Orange color was completed");
    return changeColor("green", 1000);
  })
  .then(() => {
    console.log("Green color was completed");
    return changeColor("blue", 1000);
  })
  .then(() => {
    console.log("Blue color was completed");
  });
