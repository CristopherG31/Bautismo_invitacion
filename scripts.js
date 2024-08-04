document.addEventListener('DOMContentLoaded', function() {
    const carousel = document.querySelector('.carousel-images');
    let index = 0;

    function showNextImage() {
        index = (index + 1) % 7; // 7 es el número de imágenes
        carousel.style.transform = `translateX(-${index * 100}%)`;
    }

    setInterval(showNextImage, 3000); // Cambia la imagen cada 3 segundos
});
