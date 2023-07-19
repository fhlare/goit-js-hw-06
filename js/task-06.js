const checkInput = document.getElementById("validation-input");
const inputLength = Number(checkInput.dataset.length);

console.log(inputLength);

checkInput.addEventListener('blur', validateInput);

function validateInput(event){
    if(Number(event.currentTarget.value.length) === Number(inputLength)){
        console.log(Number(event.currentTarget.value.length) === inputLength);


        checkInput.classList.remove("invalid");
        checkInput.classList.add("valid");

    }else{
        checkInput.classList.remove("valid");
        checkInput.classList.add("invalid");
    }
}