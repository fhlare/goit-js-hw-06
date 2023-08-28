const refs = {
  btnDecriment: document.querySelector('button[data-action="decrement"]'),
  btnIncrement: document.querySelector('button[data-action="increment"]'),
  valueEl: document.getElementById('value'),
};

let counterValue = 0;

refs.btnDecriment.addEventListener('click', onClickDecrementButton);

function onClickDecrementButton () {
  counterValue -= 1;
  return refs.valueEl.textContent = counterValue;
}

refs.btnIncrement.addEventListener('click', onClickIncrementButton);

function onClickIncrementButton() {
  counterValue += 1;
  return refs.valueEl.textContent = counterValue;
}