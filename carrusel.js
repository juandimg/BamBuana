let index = 0;
const carousel = document.getElementById("carousel");
const totalImages = carousel.children.length;

// Función para cambiar de imagen
function moveSlide(step) {
    index = (index + step + totalImages) % totalImages;
    carousel.style.transform = `translateX(${-index * 100}vw)`;
}

// Mueve el carrusel automáticamente cada 3 segundos
setInterval(() => moveSlide(1), 3000);
