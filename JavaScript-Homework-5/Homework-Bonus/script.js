// ova e novo na moj nacin
const recipe = document.getElementById('recipe');
const ingredients = document.getElementById('ingredients');
const nameOfIngredient = document.getElementById('nameOfIngredient');
const button = document.getElementById('button');
const listOfIngrediant = document.getElementById('listOfIngrediant');
button.addEventListener('click', () => {
  if (!recipe.value || !ingredients.value || !nameOfIngredient.value) return;
  listOfIngrediant.innerHTML += `<h1> ${recipe.value} </h1>`;
  listOfIngrediant.innerHTML += `<p>Number of ingrediants: ${ingredients.value} </p>`
  listOfIngrediant.innerHTML += `<ul>`
  listOfIngrediant.innerHTML += `<li>${nameOfIngredient.value}</li>`
  listOfIngrediant.innerHTML += `</ul>`
  
})






// ova e staro od chatGPT


// document.getElementById("button").addEventListener("click", function () {
//   let recipeName = document.getElementById("recipe").value;
//   let ingredients = document.getElementById("nameOfIngredient").value.split(',');

//   let headingElement = document.createElement("h2");
//   headingElement.textContent = recipeName;
//   document.body.appendChild(headingElement);

//   let ulElement = document.createElement("ul");
//   ingredients.forEach(function (ingredient) {
//     let liElement = document.createElement("li");
//     liElement.textContent = ingredient.trim();
//     ulElement.appendChild(liElement);
//   });
//   document.body.appendChild(ulElement);
// });
