const nameInput = document.getElementById("name-input");
const nameOutput = document.getElementById("name-output");
let anonymus = "Anonymous";

nameOutput.textContent = anonymus;

function onInput(event){
    nameOutput.textContent = event.target.value || anonymus;
}

nameInput.addEventListener("input", onInput);