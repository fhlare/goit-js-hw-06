const itmeOfCategories = document.querySelectorAll('.item');

console.log(`Number o categories: ${itmeOfCategories.length}`);

itmeOfCategories.forEach(item => {
  console.log(`Category: ${item.firstElementChild.textContent}`);
  console.log(`Elements ${item.lastElementChild.children.length}`);
});