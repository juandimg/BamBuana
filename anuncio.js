const ads = document.querySelectorAll('.ad-anuncio .ad');
let currentAdindex = 0; //Esto lo utilizamos Para selecionar los anuncios

function showNextAd() {

    ads[currentAdindex].classList.remove('active'); //Este lo que hace es ocultar el anuncio actual
    currentAdindex = (currentAdindex + 1) % ads.length; 
    ads[currentAdindex].classList.add('active'); //Este lo que hace es mostrar el siguiente anuncio
}

setInterval(showNextAd, 5000); //Este lo que hace es que cada 5 segundos cambie de anuncio