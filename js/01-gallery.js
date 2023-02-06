import { galleryItems } from "./gallery-items.js";
// Change code below this line


// Створення і рендер розмітки

const createGalleryMarkup = galleryItems => {
  return galleryItems.map(({ preview, original, description }) => {
    return `<div class="gallery__item">
            <a class="gallery__link" href="${original}">
                <img
                class="gallery__image"
                src="${preview}"
                data-source="${original}"
                alt="${description}"
                />
            </a>
        </div>`;
  }).join('');
};

const galleryContainer = document.querySelector(".gallery");

const cardMarkup = createGalleryMarkup(galleryItems);

galleryContainer.insertAdjacentHTML("beforeend", cardMarkup);


// Реалізація делегування на div.gallery, відкриття та закриття модалки

const onGalleryContainerClick = evt => {
  evt.preventDefault();
  if (!evt.target.classList.contains("gallery__image")) {
    return;
  }

  const instance = basicLightbox.create(
    `<img src="${evt.target.dataset.source}">`,
    {
      onShow: (instance) => window.addEventListener("keydown", onEscKeydown),
      onClose: (instance) =>
        window.removeEventListener("keydown", onEscKeydown),
    }
  );
  instance.show();

  function onEscKeydown(evt) {
    if (evt.code === "Escape") {
      instance.close();
    }
  }
}

galleryContainer.addEventListener("click", onGalleryContainerClick);





