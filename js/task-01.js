const categories = document.querySelectorAll('li.item');
let categCount = 0;
categories.forEach(() => { categCount++ });
console.log(`В списке ${categCount} категории.`);
categories.forEach((cat) => {
    const elemInCat = cat.querySelectorAll('li');
    let elemInCatCount = 0;
    elemInCat.forEach(() => { elemInCatCount++ });
    console.log(cat.querySelector('h2').textContent);
    console.log(`Количество элементов: ${elemInCatCount}`);
});