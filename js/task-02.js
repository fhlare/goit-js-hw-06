const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

// const ingredient = ingredients.reduce((acc, item) => acc + `<li>${item}</li>`, "");
// console.log(ingredient)
// const ulEl = document.getElementById("ingredients");
// // ulEl.append(`${ingredient}`);
// ulEl.insertAdjacentHTML("beforeend", `${ingredient}`);

const ulEl = document.getElementById("ingredients");

const ingredientList = ingredients.map(ingredient => {
  const list = document.createElement("li");
  list.textContent = ingredient;
  list.classList.add("item");
  return list;
});
console.log(ingredientList);

ulEl.append(...ingredientList);
