import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';
// Add imports above this line
import { galleryItems } from './gallery-items';
// Change code below this line

const galleryContainerEl = document.querySelector('.gallery');

function createGalleryItemMarkup({ preview, original, description }) {
  return `<li class="gallery__item">
                    <a class="gallery__link" href="${original}">
                        <img
                        class="gallery__image"
                        src="${preview}"
                        data-source="${original}"
                        alt="${description}"
                        />
                    </a>
                </li>`;
}

function createGalleryMarkup(galleryItems) {
  return galleryItems.map(createGalleryItemMarkup).join('');
}
galleryContainerEl.insertAdjacentHTML(
  'beforeend',
  createGalleryMarkup(galleryItems)
);

const lightbox = new SimpleLightbox('.gallery a', {
  captionsData: 'alt',
  captionDelay: 250,
});
