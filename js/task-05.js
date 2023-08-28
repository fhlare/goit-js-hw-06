const nameInput = document.getElementById('name-input');
const nameOutput = document.getElementById('name-output');
nameOutput.textContent = "Ananymous";

nameInput.addEventListener("input", onInputValue);

function onInputValue(event) {
  nameOutput.textContent = event.target.value || "Anonymous";
};