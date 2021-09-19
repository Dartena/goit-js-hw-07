const categories = document.querySelectorAll('.item');
console.log(`В списке ${categories.length} категории.`);
categories.forEach(cat => 
    console.log(
        `${ cat.firstElementChild.textContent },
        Количество элементов: ${cat.lastElementChild.children.length}`
    )
);