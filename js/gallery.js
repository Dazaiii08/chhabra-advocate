document.addEventListener('DOMContentLoaded', () => {
    const galleryItems = document.querySelectorAll('.gallery-item');
    const lightbox = document.getElementById('galleryLightbox');

    if (!galleryItems.length || !lightbox) return;

    const lightboxImage = lightbox.querySelector('.lightbox-image');
    const lightboxTitle = lightbox.querySelector('.lightbox-title');
    const lightboxDescription = lightbox.querySelector('.lightbox-description');
    const lightboxClose = lightbox.querySelector('.lightbox-close');
    let lastGalleryItem = null;

    function closeLightbox() {
        lightbox.hidden = true;
        document.body.style.overflow = '';

        if (lastGalleryItem) lastGalleryItem.focus();
    }

    function openLightbox(galleryItem) {
        const galleryImage = galleryItem.querySelector('.gallery-image');

        lastGalleryItem = galleryItem;
        lightboxImage.src = galleryItem.dataset.galleryImage;
        lightboxImage.alt = galleryImage.alt;
        lightboxTitle.textContent = galleryItem.dataset.galleryTitle;
        lightboxDescription.textContent = galleryItem.dataset.galleryDescription;
        lightbox.hidden = false;
        document.body.style.overflow = 'hidden';
        lightboxClose.focus();
    }

    galleryItems.forEach((galleryItem) => {
        galleryItem.addEventListener('click', () => openLightbox(galleryItem));
    });

    lightboxClose.addEventListener('click', closeLightbox);

    lightbox.addEventListener('click', (event) => {
        if (event.target === lightbox) closeLightbox();
    });

    document.addEventListener('keydown', (event) => {
        if (event.key === 'Escape' && !lightbox.hidden) closeLightbox();
    });
});
