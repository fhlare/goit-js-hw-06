const fontSize = document.getElementById('font-size-control');
const textEl = document.getElementById('text');

fontSize.addEventListener('input', onInputMove);

function onInputMove(event) {
  textEl.style.fontSize = `${event.target.value}px`;
}