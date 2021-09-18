let inputRef = document.getElementById('name-input');
let outputRef = document.getElementById('name-output');
const updateName = (e) => outputRef.textContent = e.target.value;
const returnStranger = () => {
    if (inputRef.value === '') outputRef.textContent = 'незнакомец';
};
inputRef.addEventListener('input', updateName);
inputRef.addEventListener('input', returnStranger);