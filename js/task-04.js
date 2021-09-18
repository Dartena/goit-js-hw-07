const countValueRef = document.getElementById('value');
let counterValue = 0;
const decrementBtn = document.querySelector('[data-action="decrement"]');
const incrementBtn = document.querySelector('[data-action="increment"]');

const decrement = () => {
    counterValue--;
    countValueRef.textContent = counterValue;
};

const increment = () => {
    counterValue++;
    countValueRef.textContent = counterValue;
};

decrementBtn.addEventListener('click', decrement);
incrementBtn.addEventListener('click', increment);