// let form = document.querySelector("form");

// form.addEventListener("submit", function (event) {
//       event.preventDefault();
      //console.log("Form Submitted");

      // let inp = document.querySelector("input");
      // console.log(inp);
      // console.dir(inp.value);
// });

// form.addEventListener("submit", function (event) {
//   event.preventDefault();
//   //console.log("Form Submitted");

//   let user = document.querySelector("#user");
//   let pass = document.querySelector("#pass");
//   console.dir(user.value);
//   console.dir(pass.value);

//   alert(`Hi ${user.value}, your password is set to ${pass.value}`)
// });

// form.addEventListener("submit", function (event) {
//   event.preventDefault();
//   //console.log("Form Submitted");

//   console.dir(form);

//   let user = this.elements[0];
//   let pass = this.elements[1];

//   console.log(user.value);
//   console.log(pass.value);
// });

/*
  ===> Change Events --> It occurs when the value of an element has been changed (only works on <input>, <textarea> and <select> elsements).

  ===> Input Events ---> The input event fires the value of an <input>, <textarea> or <select> elements has been changed.
*/

// let user = document.querySelector("#user");
// user.addEventListener("change", function(){
//       console.log("Change event");
//       console.log("Final value = ", this.value);
// })

// user.addEventListener("input", function () {
//   console.log("input event");
//   console.log("Final value = ", this.value);
// });

let inp = document.querySelector("#text");
let p =document.querySelector("p");
inp.addEventListener("input", function(){
      console.log(inp.value);
      p.innerText = inp.value;
})