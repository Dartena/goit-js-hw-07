const inputRef = document.getElementById('font-size-control');
const spanRef = document.getElementById('text');

inputRef.min = 5;
inputRef.max = 45;
inputRef.value = 25
inputRef.step = 1;
inputRef.addEventListener('input', e => spanRef.style.fontSize = `${e.target.value}px`);