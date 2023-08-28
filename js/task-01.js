const ulEL = document.getElementById('categories');

console.log(`Number o categories: ${ulEL.children.length}`);

[...ulEL.children].map(el => {
  const nameCategory = el.querySelector('h2');
  const elementsOfCategories = el.querySelectorAll('ul li');

  console.log(`Category: ${nameCategory.textContent}`);
  console.log(`Elements ${elementsOfCategories.length}`);
});