/*
 DOM ===> Document Object Model
    --> The DOM represents a document with a logical tree

    --> It allows us to manipulate webpage content(HTML elements)

*/

//selecting Elements

// 1) getElementById ::=> Returns the element as an object or null(if not found)

const img = document.getElementById("mainImg");
console.log(img);
console.dir(img);
console.log(img.tagName);
console.log(img.id);

const desc = document.getElementById("description");
console.log(desc);


// 2) getElementByClassName ::=> Returns the element as an HTML collection or empty coillection(if not found)

let classs = document.getElementsByClassName("oldImg");

console.log(classs);
console.log(document.getElementsByClassName("oldImg")[0]);
console.log(document.getElementsByClassName("oldImg")[1]);
console.log(document.getElementsByClassName("oldImg")[2]);
console.log(document.getElementsByClassName("oldImg")[3]);

for(let i=0; i<classs.length; i++){
      console.dir(classs[i]);
}

// 3) getElementByTagName ::=> Returns the element as an HTML collection or empty coillection(if not found)

let checkTag = document.getElementsByTagName("p");
console.log(checkTag);


//Query Selectors ====> Allows us to use any CSS selector

console.log(document.querySelector('p'));  //Select first p elements

console.log(document.querySelector('#myId')); //select first element with id = myId

console.log(document.querySelector('.myClass'));  //select first element with class = muClass

console.log(document.querySelectorAll("p"));  //select all p elements

console.dir(document.querySelector('p'));  //Select first p elements

console.dir(document.querySelector("#myId")); //select first element with id = myId

console.dir(document.querySelector(".myClass"));  //select first element with class = muClass

console.dir(document.querySelectorAll("p"));  //select all p elements

console.dir(document.querySelector("div a"));
console.dir(document.querySelectorAll("div a"));


//Setting content in objects

//Using Properties and Methods

// 1) InnerText ==> Shows the visible text contained in a node
// 2) textContent ==> Shows all the full text
// 3) innerHtml ===> Shows the full markup

let para = document.querySelector('p');
console.dir(para);
console.dir(para);
console.dir(para.innerText);
console.dir(para.innerHTML);
console.dir(para.textContent);

//Manipulating Attributes  ==> work like getters and setters

let image = document.querySelector('img');
console.log(image);
console.log(image.getAttribute('id'));
console.log(image.setAttribute('id', 'spidermanImg'));