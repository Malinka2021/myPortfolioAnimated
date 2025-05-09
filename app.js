const btnHamburger = document.querySelector('.hamburger-menu');
const menuPanel = document.querySelector('.menu-panel');
const menuLinks = document.querySelectorAll('.menu-panel a');
const btnCloseWindow = document.querySelector('.menu-panel button')
const frameImage = document.querySelector('#frame');
const images = [
    'images/Gallery.jpg',
    'images/cacti.webp',
    'images/guitar.webp',
    'images/laptop.webp',
    'images/webdev.webp',
    'images/aloe.jpeg'];

let currentImageIndex = 0;
// Set the initial image

frameImage.addEventListener('click', () => {
    //const randomIndex = Math.floor(Math.random() * images.length);
    //frameImage.src = images[randomIndex];

    currentImageIndex++;  // +1 loop

    if (currentImageIndex >= images.length) {
        currentImageIndex = 0; // Reset to the first image
    }
        
    frameImage.src = images[currentImageIndex]; // Set the new image
}
);

btnHamburger.addEventListener('click', (event) => {
    menuPanel.classList.toggle('active');
 }
);

document.addEventListener('click', (event) => {
    if (!menuPanel.contains(event.target) && !btnHamburger.contains(event.target)) {
        menuPanel.classList.remove('active');
    }
}
);

menuLinks.forEach(link => {
    link.addEventListener('click', () => {
        menuPanel.classList.remove('active');
    });
}
);

btnCloseWindow.addEventListener('click', () => {
    menuPanel.classList.remove('active');
});