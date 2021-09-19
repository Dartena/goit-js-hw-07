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

// const ingredList = [];
// ingredients.forEach(ingredient => {
//   const listItem = document.createElement('li');
//   listItem.textContent = ingredient;
//   ingredList.push(listItem)
// });
document.getElementById('ingredients').append(...ingredList);
