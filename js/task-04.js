const decrementEl =  document.querySelector('button[data-action="decrement"]');
const incrementEl = document.querySelector('button[data-action="increment"]');
const value = document.getElementById("value");
let counterValue = 0;

const handClickMinus = (event) =>{
    counterValue -=1;
    return value.textContent = counterValue;
}

const handClickPlus = (event) => {
    counterValue +=1
    return value.textContent = counterValue;
}

decrementEl.addEventListener("click", handClickMinus);
incrementEl.addEventListener("click", handClickPlus);