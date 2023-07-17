const ulEl = document.getElementById('categories');

console.log(`Number of categories: ${ulEl.children.length}`);

[...ulEl.children].forEach((li)=>{
    const nameEl = li.querySelector("h2");
    const itemsEl = li.querySelectorAll('ul li');

    console.log(`Category: ${nameEl.textContent}`);
    console.log(`Elements: ${itemsEl.length}`);
});