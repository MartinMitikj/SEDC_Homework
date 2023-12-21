document.getElementById("button").addEventListener("click", function () {
  let recipeName = document.getElementById("recipe").value;
  let ingredients = document.getElementById("nameOfIngredient").value.split(',');

  let headingElement = document.createElement("h2");
  headingElement.textContent = recipeName;
  document.body.appendChild(headingElement);

  let ulElement = document.createElement("ul");
  ingredients.forEach(function (ingredient) {
    let liElement = document.createElement("li");
    liElement.textContent = ingredient.trim();
    ulElement.appendChild(liElement);
  });
  document.body.appendChild(ulElement);
});


// gledav na internet i nekako go resiv ne znam dali treba vak da bide
// ne mi bese jasno kako treba da ja napravam zatoa na internet barav