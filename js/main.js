// Variable global para almacenar las imágenes de la galería actual
let currentGalleryImages = [];
let currentImageIndex = 0;

// Función para abrir una galería de imágenes
function openGallery(imagesArray) {
    currentGalleryImages = imagesArray; // Guardamos las imágenes
    currentImageIndex = 0; // Empezamos con la primera imagen
    showCurrentImage(); // Mostramos la primera imagen
    document.getElementById('lightbox').style.display = 'flex'; // Mostramos el lightbox
}

// Función para mostrar la imagen actual
function showCurrentImage() {
    const imgElement = document.getElementById('lightbox-img');
    imgElement.src = currentGalleryImages[currentImageIndex];
    // Actualizamos el contador de imágenes
    document.getElementById('image-counter').textContent = `${currentImageIndex + 1} / ${currentGalleryImages.length}`;
}

// Función para cerrar el lightbox
function closeLightbox() {
    document.getElementById('lightbox').style.display = 'none';
}

// Función para ir a la siguiente imagen
function nextImage() {
    if (currentImageIndex < currentGalleryImages.length - 1) {
        currentImageIndex++;
        showCurrentImage();
    }
}

// Función para ir a la imagen anterior
function prevImage() {
    if (currentImageIndex > 0) {
        currentImageIndex--;
        showCurrentImage();
    }
}

// Función para abrir una sola imagen (para otras obras)
function openLightbox(src) {
    // Creamos un array con una sola imagen
    currentGalleryImages = [src];
    currentImageIndex = 0;
    showCurrentImage();
    document.getElementById('lightbox').style.display = 'flex';
}

// Event Listener para el DOM
document.addEventListener('DOMContentLoaded', function() {
    const langToggle = document.getElementById('langToggle');
    const body = document.body;
    langToggle.addEventListener('click', () => {
        if (body.classList.contains('es')) {
            body.classList.replace('es', 'en');
            langToggle.textContent = 'ES';
            document.title = "Jesnagar | Pintor Andaluz & Authentic Spanish Oil Painting";
            document.querySelector('meta[name="description"]').setAttribute('content',
                "Authentic Spanish Oil Painting from Andalusia. Ideal for Mediterranean, Rustic & Hacienda interiors. Available on Saatchi Art.");
        } else {
            body.classList.replace('en', 'es');
            langToggle.textContent = 'EN';
            document.title = "Jesnagar | Pintor Andaluz & Authentic Spanish Oil Painting";
        }
    });

    const popup = document.getElementById('newsletter-popup');
    const closeBtn = document.getElementById('close-popup');
    const closePopup = () => {
        popup.style.display = 'none';
        localStorage.setItem('popupShown', 'true');
    };
    if (!localStorage.getItem('popupShown')) {
        setTimeout(() => { popup.style.display = 'flex'; }, 15000);
    }
    if (closeBtn) closeBtn.addEventListener('click', closePopup);
    popup.addEventListener('click', (e) => { if (e.target === popup) closePopup(); });
});