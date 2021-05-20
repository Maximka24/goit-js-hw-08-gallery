import arrGalleryItems from './gallery-items.js'


const refs = {
	jsGallery: document.querySelector('.js-gallery'),
	jsLightbox: document.querySelector('.js-lightbox'),
	btnCloseModal: document.querySelector('.lightbox__button'),
	lightboxImage: document.querySelector('.lightbox__image'),
	lightboxOverlay: document.querySelector('.lightbox__overlay'),
}

const resultEditArrGallery = addNewItemsJsGallery(arrGalleryItems);
refs.jsGallery.insertAdjacentHTML('beforeend', resultEditArrGallery);

refs.jsGallery.addEventListener('click', onOpenModalClickItemGallery);
refs.btnCloseModal.addEventListener('click', onCloseModalClickItemGallery);
refs.lightboxOverlay.addEventListener('click', onCloseModalClickItemGallery);





function addNewItemsJsGallery(items) {
	return items
		.map(({ preview, original, description }) => {
			return `
			<li class="gallery__item">
				<a class="gallery__link" href="${original}">
					<img class="gallery__image" src="${preview}" data-source="${original}" alt="${description}" />
				</a>
			</li>`
		})
		.join('');
}

function onOpenModalClickItemGallery(evt) {
	evt.preventDefault();
	window.addEventListener('keydown', onCloseModalClickEs);
	

	if (evt.target !== evt.currentTarget) {
		refs.jsLightbox.classList.add('is-open');

		refs.lightboxImage.src = evt.target.dataset.source;
		refs.lightboxImage.alt = evt.target.alt;
	}	
}

function onCloseModalClickItemGallery() {
	refs.jsLightbox.classList.remove('is-open');
	refs.lightboxImage.src = '';

	window.removeEventListener('keydown', onCloseModalClickEs);
}

function onCloseModalClickEs(evt) {
	if(evt.code === 'Escape') {
		onCloseModalClickItemGallery();
	}
	
}






