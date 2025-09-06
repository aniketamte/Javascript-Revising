document.getElementById("puppy-btn").addEventListener("click", function(){
      document.getElementById("animal-image").src = "puppy.jpg";
      document.getElementById("animal-fact").textContent = "Puppy is here!!";
})

document.getElementById("kitten-btn").addEventListener("click", function () {
  document.getElementById("animal-image").src = "kitten.jpg";
  document.getElementById("animal-fact").textContent = "Kitten is here!!";
});