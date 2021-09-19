const images = [
  {
    url: 'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'White and Black Long Fur Cat',
  },
  {
    url: 'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
  },
  {
    url: 'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Group of Horses Running',
  },
];

const imgList = images.map(elem => {
 return `<li><img src="${elem.url}" alt="${elem.alt}" width="1260px" height="750px"></img></li>`
});

const gallery = document.getElementById('gallery');
gallery.insertAdjacentHTML("beforeend", imgList);
gallery.style.display = 'flex';
gallery.style.flexWrap = 'wrap';
console.log(imgList)











// images.forEach(image => {
//   const listItem = document.createElement('li');
//   listItem.classList.add('gallery__item');
//   const imgItem = document.createElement('img');
//   imgItem.classList.add('gallery__image');
//   imgItem.style.width = '1260px';
//   imgItem.style.height = '750px';
//   listItem.appendChild(imgItem);
//   imgItem.src = image.url;
//   imgItem.alt = image.alt;
//   imgList.push(listItem.outerHTML);
// });