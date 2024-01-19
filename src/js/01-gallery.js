import { galleryItems } from './gallery-items';
import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

const galleryContainer = document.querySelector('.gallery');
const createGalleryItems = galleryItems
  .map(
    ({ original, preview, description }) =>
      `<li class="gallery__item">
        <a class="gallery__link" href="${original}">
        <img class="gallery__image" 
        src="${preview}" 
        src="${original}" 
        alt="${description}" />
    </a>
    </li>`
  )
  .join('');

galleryContainer.insertAdjacentHTML('beforeend', createGalleryItems);
new SimpleLightbox('ul.gallery a', { captionsData: 'alt', captionDelay: 250 });

// const gallery = document.querySelector('.gallery');
// const mark = galleryItems
//   .map(
//     item =>
//       `<li class="gallery__item">
//      <a class="gallery__link" href="${item.original}">
//      <img class="gallery__image" src="${item.preview}"
//      src="${item.original}"
//      alt="${item.description}" />
//      </a>
//      </li>`
//   )
//   .join('');
// gallery.insertAdjacentHTML('beforeend', mark);
