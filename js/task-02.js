const ingredients = [
  'Картошка',
  'Грибы',
  'Чеснок',
  'Помидоры',
  'Зелень',
  'Приправы',
];

const ingredList = ingredients.map(ingredient => {
  const listItem = document.createElement('li');
    listItem.textContent = ingredient;
  return listItem;
})

document.getElementById('ingredients').append(...ingredList);
