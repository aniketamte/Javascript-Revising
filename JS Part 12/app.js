/*
   🔹 What is async/await?
    async and await are modern ways to handle promises in JavaScript.

    They make asynchronous code look like synchronous code, which is easier to read and understand.
*/

//const { response } = require("express");

//Async ===> Used before a function to make it return a Promise.

// async function greet(p) {
//   throw "404 page not found";
//   return "Hello";
// }
// greet()
//   .then((result) => {
//     console.log("Promise was resolved");
//     console.log("Result was : ", result);
//   })
//   .catch((err) => {
//     console.log("Promise was rejected", err);
//   });

// let demo = async() => {
//   return 5;
// };

//Await ==> Used inside async functions to wait for a Promise to resolve.

// function getNum() {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       let num = Math.floor(Math.random() * 10) + 1;
//       console.log(num);
//       resolve();
//     }, 1000);
//   });
// }

// async function demo() {
//   await getNum();
//   await getNum();
//   await getNum();
//   await getNum();
//   await getNum();
// }

// demo();

// h1 = document.querySelector("h1");

// function changeColor(color, delay) {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       h1.style.color = color;
//       console.log(`Color changed to ${color}`);
//       resolve("Color Changed");
//     }, delay);
//   });
// }

// async function demo() {
//   await changeColor("red", 1000);
//   await changeColor("orange", 1000);
//   await changeColor("blue", 1000);
//   await changeColor("yellow", 1000);
//   await changeColor("green", 1000);
//   await changeColor("white", 1000);
//   await changeColor("purple", 1000);
// }

// demo();

/*
   📘 What is AJAX?
    AJAX stands for Asynchronous JavaScript and XML.

    It allows web pages to communicate with servers in the background, without reloading the entire page.

    Commonly used for fetching data, sending form data, or updating parts of a webpage dynamically.
*/

/*
    📘 What are HTTP Verbs?
     HTTP Verbs define the type of action the client wants to perform on the server.

     They are used in RESTful APIs and web requests.

     Common verbs: GET, POST, PUT, PATCH, DELETE.
*/

/*
   📘 What are HTTP Status Codes?
    HTTP Status Codes are 3-digit numbers returned by a server in response to a client’s request.

    They tell you whether the request was successful, failed, or needs attention.
*/

/*
   📘 What Does “Adding Information in URLs” Mean?
    Adding information in URLs means passing data to the server or between web pages using the URL itself.

    This is useful for:

      Sending query parameters (like search filters, page numbers)

      Sending dynamic IDs (like user or product IDs)

      Navigating between routes in front-end frameworks (like React, Angular)
*/

//Our First Request using fetch

let url = "https://catfact.ninja/fact";
// fetch(url)
//   .then((response) => {
//     return response.json();
//   })
//   .then((data) => {
//     console.log("Data 1 = ", data.fact);
//     return fetch(url);
//   })
//   .then((response) => {
//     return response.json();
//   })
//   .then((data2) => {
//     console.log("Data 2 = ", data2.fact);
//   })
//   .catch((err) => {
//     console.log("ERROR - ", err);
//   });

async function getFacts() {
  let res = await fetch(url);
  let data = await res.json();
  console.log(data);
}