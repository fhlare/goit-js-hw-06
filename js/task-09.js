function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}


const buttonEl = document.querySelector('.change-color');
const bgTextColor = document.querySelector('.color');
const bodyEl = document.querySelector('body');


buttonEl.addEventListener('click', onChangeColorButtonClick);
function onChangeColorButtonClick() {
  bgTextColor.textContent = getRandomHexColor();
  bodyEl.style.backgroundColor = getRandomHexColor();
}