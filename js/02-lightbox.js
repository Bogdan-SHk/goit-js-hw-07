import { galleryItems } from "./gallery-items.js";
// Change code below this line


// Створення і рендер розмітки

const createGalleryMarkup = galleryItems => {
  return galleryItems
    .map(({ preview, original, description }) => {
      return `<a class="gallery__item" href="${original}">
                    <img class="gallery__image" src="${preview}" alt="${description}" />
                </a>`;
    })
    .join("");
};

const galleryContainer = document.querySelector(".gallery");

const cardMarkup = createGalleryMarkup(galleryItems);

galleryContainer.insertAdjacentHTML("beforeend", cardMarkup);


// Ініціалізація бібліотеки SimpleLightbox

var lightbox = new SimpleLightbox(".gallery a", {
  captionsData: 'alt',
  captionDelay: 250
});