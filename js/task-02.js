const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const ulEl = document.getElementById('ingredients');

const liElementsOfIngridients = ingredients.map(ingridient => {
  const liEL = document.createElement('li');
  liEL.textContent = ingridient;
  liEL.classList.add('item');
  return liEL;
});
ulEl.append(...liElementsOfIngridients);
