const inputRef = document.getElementById('validation-input');
function textValidation(event) {
    //Если строгое равенство - не работает.-._.- 
    if (event.target.value.length === event.target.dataset.length) {
        event.target.classList.add('valid');
        event.target.classList.remove('invalid');
    } else {
        event.target.classList.remove('valid');
        event.target.classList.add('invalid');
    }
}
inputRef.addEventListener('blur', textValidation);
